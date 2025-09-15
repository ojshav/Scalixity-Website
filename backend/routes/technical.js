const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const { Prisma } = require('@prisma/client');

// POST route to store performance metrics
router.post('/track-metrics', async (req, res) => {
  console.log('Received metrics:', req.body);
  try {
    const { visitorId, page, FCP, LCP, TTI, loadTime, deviceType, country } = req.body;

    if (!visitorId) {
      return res.status(400).json({ error: 'visitorId is required' });
    }

    const result = await prisma.performanceMetric.create({
      data: {
        visitorId,
        page: page || null,
        fcp: FCP || null,
        lcp: LCP || null,
        tti: TTI || null,
        loadTime: loadTime || null,
        timestamp: new Date(),
        deviceType: deviceType || null,
        country: country || null
      }
    });

    res.json({ message: 'Performance metrics recorded successfully', id: result.id });
  } catch (error) {
    console.error('Error saving performance metrics:', error);
    res.status(500).json({ error: 'Failed to save performance metrics' });
  }
});

// Function to convert ISO 8601 datetime string to MySQL compatible format (YYYY-MM-DD HH:MM:SS)
const convertToMySQLDate = (isoDate) => {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  return date.toISOString().slice(0, 19).replace('T', ' ');  // Converts to 'YYYY-MM-DD HH:MM:SS'
};

router.post('/track-error-logs', async (req, res) => {
  try {
    const { recentErrorLogs, visitorId, page, timestamp, deviceType, browser, country } = req.body;

    if (!visitorId || !recentErrorLogs) {
      return res.status(400).json({ error: 'visitorId and recentErrorLogs are required' });
    }

    try {
      for (const log of recentErrorLogs) {
        const { path, errorCode, count, lastOccurrence, errorMessage, source } = log;
        
        const formattedFirstOccurrence = convertToMySQLDate(lastOccurrence || timestamp);
        const formattedLastOccurrence = convertToMySQLDate(lastOccurrence || timestamp);
        const formattedTimestamp = convertToMySQLDate(timestamp);

        // Try to find existing error log first
        const existing = await prisma.errorLog.findFirst({
          where: {
            visitorId,
            page: path || page,
            errorCode
          }
        });
        
        if (existing) {
          await prisma.errorLog.update({
            where: { id: existing.id },
            data: {
              count: count || 1,
              lastOccurrence: formattedLastOccurrence,
              errorMessage: errorMessage || null,
              source: source || null
            }
          });
        } else {
          await prisma.errorLog.create({
            data: {
              visitorId,
              page: path || page,
              errorCode,
              errorMessage: errorMessage || null,
              source: source || null,
              count: count || 1,
              firstOccurrence: formattedFirstOccurrence,
              lastOccurrence: formattedLastOccurrence,
              timestamp: formattedTimestamp,
              deviceType: deviceType || null,
              browser: browser || null,
              country: country || null
            }
          });
        }
      }

      res.json({ message: 'Error logs recorded successfully' });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error saving error logs:', error);
    res.status(500).json({ error: 'Failed to save error logs' });
  }
});

// GET route to retrieve performance metrics with grouping options
router.get('/technical-metrics', async (req, res) => {
  try {
    const { visitorId, page, startDate, endDate, groupBy } = req.query;

    if (groupBy === 'deviceType') {
      const rows = await prisma.$queryRaw`
        SELECT 
          CASE 
            WHEN deviceType LIKE '{%' THEN 
              JSON_UNQUOTE(JSON_EXTRACT(deviceType, '$.deviceType'))
            ELSE deviceType
          END as deviceType,
          COUNT(*) as count 
         FROM performance_metrics 
         WHERE 1=1 
         ${visitorId ? Prisma.sql`AND visitorId = ${visitorId}` : Prisma.empty}
         ${startDate ? Prisma.sql`AND timestamp >= ${startDate}` : Prisma.empty}
         ${endDate ? Prisma.sql`AND timestamp <= ${endDate}` : Prisma.empty}
         GROUP BY deviceType
         ORDER BY count DESC
      `;
      return res.json({ message: 'Device breakdown retrieved', data: rows });
    }

    if (groupBy === 'hour') {
      const rows = await prisma.$queryRaw`
        SELECT 
           DATE_FORMAT(timestamp, '%H:00') as hour, 
           AVG(loadTime) as avg_loadTime, 
           COUNT(DISTINCT visitorId) as userCount 
         FROM performance_metrics 
         WHERE 1=1 
         ${startDate ? Prisma.sql`AND timestamp >= ${startDate}` : Prisma.empty}
         ${endDate ? Prisma.sql`AND timestamp <= ${endDate}` : Prisma.empty}
         GROUP BY DATE_FORMAT(timestamp, '%H:00') 
         ORDER BY hour
      `;
      return res.json({ message: 'Hourly performance retrieved', data: rows });
    }

    const whereConditions = {};
    if (visitorId) whereConditions.visitorId = visitorId;
    if (page) whereConditions.page = page;
    if (startDate) whereConditions.timestamp = { gte: new Date(startDate) };
    if (endDate) {
      if (whereConditions.timestamp) {
        whereConditions.timestamp.lte = new Date(endDate);
      } else {
        whereConditions.timestamp = { lte: new Date(endDate) };
      }
    }

    const rows = await prisma.performanceMetric.findMany({
      where: whereConditions,
      orderBy: { timestamp: 'desc' }
    });

    res.json({ message: 'Performance metrics retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving performance metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve performance metrics' });
  }
});

// GET route to retrieve error types
router.get('/error-types', async (req, res) => {
  try {
    const { startDate, endDate, page } = req.query;

    const whereConditions = {};
    if (startDate) whereConditions.timestamp = { gte: new Date(startDate) };
    if (endDate) {
      if (whereConditions.timestamp) {
        whereConditions.timestamp.lte = new Date(endDate);
      } else {
        whereConditions.timestamp = { lte: new Date(endDate) };
      }
    }
    if (page) whereConditions.page = page;

    const rows = await prisma.errorLog.groupBy({
      by: ['errorCode'],
      where: whereConditions,
      _sum: {
        count: true
      },
      orderBy: {
        _sum: {
          count: 'desc'
        }
      }
    });

    const result = rows.map(row => ({
      name: row.errorCode,
      value: row._sum.count
    }));

    res.json({ message: 'Error types retrieved successfully', data: result });
  } catch (error) {
    console.error('Error retrieving error types:', error);
    res.status(500).json({ error: 'Failed to retrieve error types' });
  }
});

// GET route to retrieve errors over time
router.get('/errors-over-time', async (req, res) => {
  try {
    const { startDate, endDate, page } = req.query;

    let sql = Prisma.sql`
      SELECT 
        DATE_FORMAT(timestamp, '%a') AS date,
        SUM(CASE WHEN errorCode = '404' THEN count ELSE 0 END) AS \`404\`,
        SUM(CASE WHEN errorCode = '500' THEN count ELSE 0 END) AS \`500\`,
        SUM(CASE WHEN errorCode = '403' THEN count ELSE 0 END) AS \`403\`,
        SUM(CASE WHEN errorCode = '400' THEN count ELSE 0 END) AS \`400\`,
        SUM(CASE WHEN errorCode NOT IN ('404', '500', '403', '400') THEN count ELSE 0 END) AS \`Other\`
      FROM error_logs
      WHERE 1=1
    `;

    if (startDate) {
      sql = Prisma.sql`${sql} AND timestamp >= ${startDate}`;
    }
    if (endDate) {
      sql = Prisma.sql`${sql} AND timestamp <= ${endDate}`;
    }
    if (page) {
      sql = Prisma.sql`${sql} AND page = ${page}`;
    }

    sql = Prisma.sql`${sql} GROUP BY DATE_FORMAT(timestamp, '%a') ORDER BY DATE_FORMAT(timestamp, '%a')`;

    const rows = await prisma.$queryRaw(sql);
    res.json({ message: 'Errors over time retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving errors over time:', error);
    res.status(500).json({ error: 'Failed to retrieve errors over time' });
  }
});


// GET route to retrieve recent error logs
router.get('/recent-error-logs', async (req, res) => {
  try {
    const { startDate, endDate, page, limit = 10 } = req.query;

    const whereConditions = {};
    if (startDate) whereConditions.timestamp = { gte: new Date(startDate) };
    if (endDate) {
      if (whereConditions.timestamp) {
        whereConditions.timestamp.lte = new Date(endDate);
      } else {
        whereConditions.timestamp = { lte: new Date(endDate) };
      }
    }
    if (page) whereConditions.page = page;

    const rows = await prisma.errorLog.groupBy({
      by: ['page', 'errorCode'],
      where: whereConditions,
      _sum: {
        count: true
      },
      _max: {
        lastOccurrence: true
      },
      orderBy: {
        _max: {
          lastOccurrence: 'desc'
        }
      },
      take: parseInt(limit, 10)
    });

    const result = rows.map(row => ({
      path: row.page,
      errorCode: row.errorCode,
      count: row._sum.count,
      lastOccurrence: row._max.lastOccurrence
    }));

    res.json({ message: 'Recent error logs retrieved successfully', data: result });
  } catch (error) {
    console.error('Error retrieving recent error logs:', error);
    res.status(500).json({ error: 'Failed to retrieve recent error logs' });
  }
});


// GET route for device performance
router.get('/device-performance', async (req, res) => {
  try {
    const rows = await prisma.$queryRaw`
      SELECT 
         CASE 
           WHEN deviceType LIKE '{%' THEN 
             JSON_UNQUOTE(JSON_EXTRACT(deviceType, '$.deviceType'))
           ELSE deviceType
         END as deviceType,
         COUNT(*) as count,
         AVG(fcp) as avg_fcp,
         AVG(lcp) as avg_lcp,
         AVG(tti) as avg_tti,
         AVG(loadTime) as avg_loadTime
       FROM performance_metrics
       GROUP BY deviceType
       ORDER BY avg_loadTime DESC
    `;

    res.json({ message: 'Device performance metrics retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving device performance metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve device performance metrics' });
  }
});

// GET route for aggregated metrics
router.get('/technical-metrics/aggregate', async (req, res) => {
  try {
    const { page } = req.query;

    const whereConditions = page ? { page } : {};

    const rows = await prisma.performanceMetric.groupBy({
      by: ['page'],
      where: whereConditions,
      _avg: {
        fcp: true,
        lcp: true,
        tti: true,
        loadTime: true
      },
      _count: true
    });

    const result = rows.map(row => ({
      page: row.page,
      avg_fcp: row._avg.fcp,
      avg_lcp: row._avg.lcp,
      avg_tti: row._avg.tti,
      avg_loadTime: row._avg.loadTime,
      total_records: row._count
    }));

    res.json({ message: 'Aggregated performance metrics retrieved successfully', data: result });
  } catch (error) {
    console.error('Error retrieving aggregated metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve aggregated metrics' });
  }
});

// GET route to retrieve browser usage statistics from user_activity table
router.get('/browser-stats', async (req, res) => {
  try {
    const rows = await prisma.userActivity.groupBy({
      by: ['browser'],
      _count: true,
      orderBy: {
        _count: {
          browser: 'desc'
        }
      }
    });

    const result = rows.map(row => ({
      browser: row.browser,
      count: row._count
    }));

    res.json({ message: 'Browser usage statistics retrieved successfully', data: result });
  } catch (error) {
    console.error('Error retrieving browser usage statistics:', error);
    res.status(500).json({ error: 'Failed to retrieve browser usage statistics' });
  }
});

module.exports = router;