const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const { Prisma } = require('@prisma/client');

/**
 * @swagger
 * tags:
 *   name: Technical
 *   description: Performance metrics and error logging
 */

/**
 * @swagger
 * /api/track-metrics:
 *   post:
 *     summary: Store performance metrics
 *     tags: [Technical]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - visitorId
 *             properties:
 *               visitorId:
 *                 type: string
 *                 example: visitor_123456
 *               page:
 *                 type: string
 *                 example: /home
 *               FCP:
 *                 type: number
 *                 description: First Contentful Paint (ms)
 *                 example: 1200.5
 *               LCP:
 *                 type: number
 *                 description: Largest Contentful Paint (ms)
 *                 example: 2500.0
 *               TTI:
 *                 type: number
 *                 description: Time to Interactive (ms)
 *                 example: 3000.0
 *               loadTime:
 *                 type: number
 *                 description: Page load time (ms)
 *                 example: 1500.0
 *               deviceType:
 *                 type: string
 *                 example: Desktop
 *               country:
 *                 type: string
 *                 example: United States
 *     responses:
 *       200:
 *         description: Performance metrics recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Performance metrics recorded successfully
 *                 id:
 *                   type: integer
 *                   example: 1
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
// POST route to store performance metrics
router.post('/track-metrics', async (req, res) => {
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

// Function to convert to ISO-8601 datetime string (Prisma compatible format)
const convertToMySQLDate = (isoDate) => {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  return date.toISOString();  // Returns ISO-8601 format for Prisma DateTime fields
};

/**
 * @swagger
 * /api/track-error-logs:
 *   post:
 *     summary: Track error logs and events
 *     tags: [Technical]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - recentErrorLogs
 *               - visitorId
 *             properties:
 *               recentErrorLogs:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "TypeError: Cannot read property 'length' of undefined"
 *                     stack:
 *                       type: string
 *                       example: "at Component.render (bundle.js:1234:56)"
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *               visitorId:
 *                 type: string
 *                 example: visitor_123456
 *               page:
 *                 type: string
 *                 example: /dashboard
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *               deviceType:
 *                 type: string
 *                 example: Desktop
 *               browser:
 *                 type: string
 *                 example: Chrome
 *               country:
 *                 type: string
 *                 example: United States
 *     responses:
 *       200:
 *         description: Error logs tracked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error logs recorded successfully
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
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
      // Build query conditions dynamically
      let whereConditions = ['1=1'];
      let queryParams = [];
      
      if (visitorId) {
        whereConditions.push('visitorId = ?');
        queryParams.push(visitorId);
      }
      if (startDate) {
        whereConditions.push('timestamp >= ?');
        queryParams.push(startDate);
      }
      if (endDate) {
        whereConditions.push('timestamp <= ?');
        queryParams.push(endDate);
      }
      
      const whereClause = whereConditions.join(' AND ');
      
      const rows = await prisma.$queryRawUnsafe(`
        SELECT 
          CASE 
            WHEN deviceType LIKE '{%' THEN 
              JSON_UNQUOTE(JSON_EXTRACT(deviceType, '$.deviceType'))
            ELSE deviceType
          END as deviceType,
          COUNT(*) as count 
         FROM performance_metrics 
         WHERE ${whereClause}
         GROUP BY deviceType
         ORDER BY count DESC
      `, ...queryParams);
      
      // Convert BigInt to Number for JSON serialization
      const convertedRows = rows.map(row => ({
        ...row,
        count: Number(row.count)
      }));
      
      return res.json({ message: 'Device breakdown retrieved', data: convertedRows });
    }

    if (groupBy === 'hour') {
      // Build query conditions dynamically
      let whereConditions = ['1=1'];
      let queryParams = [];
      
      if (startDate) {
        whereConditions.push('timestamp >= ?');
        queryParams.push(startDate);
      }
      if (endDate) {
        whereConditions.push('timestamp <= ?');
        queryParams.push(endDate);
      }
      
      const whereClause = whereConditions.join(' AND ');
      
      const rows = await prisma.$queryRawUnsafe(`
        SELECT 
           DATE_FORMAT(timestamp, '%H:00') as hour, 
           AVG(loadTime) as avg_loadTime, 
           COUNT(DISTINCT visitorId) as userCount 
         FROM performance_metrics 
         WHERE ${whereClause}
         GROUP BY DATE_FORMAT(timestamp, '%H:00') 
         ORDER BY hour
      `, ...queryParams);
      
      // Convert BigInt to Number for JSON serialization
      const convertedRows = rows.map(row => ({
        ...row,
        avg_loadTime: Number(row.avg_loadTime),
        userCount: Number(row.userCount)
      }));
      
      return res.json({ message: 'Hourly performance retrieved', data: convertedRows });
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

    // Build query conditions dynamically
    let whereConditions = ['1=1'];
    let queryParams = [];
    
    if (startDate) {
      whereConditions.push('timestamp >= ?');
      queryParams.push(startDate);
    }
    if (endDate) {
      whereConditions.push('timestamp <= ?');
      queryParams.push(endDate);
    }
    if (page) {
      whereConditions.push('page = ?');
      queryParams.push(page);
    }
    
    const whereClause = whereConditions.join(' AND ');

    const rows = await prisma.$queryRawUnsafe(`
      SELECT 
        DATE_FORMAT(timestamp, '%a') AS date,
        SUM(CASE WHEN errorCode = '404' THEN count ELSE 0 END) AS \`404\`,
        SUM(CASE WHEN errorCode = '500' THEN count ELSE 0 END) AS \`500\`,
        SUM(CASE WHEN errorCode = '403' THEN count ELSE 0 END) AS \`403\`,
        SUM(CASE WHEN errorCode = '400' THEN count ELSE 0 END) AS \`400\`,
        SUM(CASE WHEN errorCode NOT IN ('404', '500', '403', '400') THEN count ELSE 0 END) AS \`Other\`
      FROM error_logs
      WHERE ${whereClause}
      GROUP BY DATE_FORMAT(timestamp, '%a') 
      ORDER BY DATE_FORMAT(timestamp, '%a')
    `, ...queryParams);
    
    // Convert BigInt to Number for JSON serialization
    const convertedRows = rows.map(row => ({
      ...row,
      '404': Number(row['404']),
      '500': Number(row['500']),
      '403': Number(row['403']),
      '400': Number(row['400']),
      'Other': Number(row['Other'])
    }));
    
    res.json({ message: 'Errors over time retrieved successfully', data: convertedRows });
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

    // Convert BigInt to Number for JSON serialization
    const convertedRows = rows.map(row => ({
      ...row,
      count: Number(row.count),
      avg_fcp: row.avg_fcp ? Number(row.avg_fcp) : null,
      avg_lcp: row.avg_lcp ? Number(row.avg_lcp) : null,
      avg_tti: row.avg_tti ? Number(row.avg_tti) : null,
      avg_loadTime: row.avg_loadTime ? Number(row.avg_loadTime) : null
    }));

    res.json({ message: 'Device performance metrics retrieved successfully', data: convertedRows });
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