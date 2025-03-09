const express = require('express');
const router = express.Router();

// Middleware to access the database pool from app.locals
const getPool = (req) => req.app.locals.pool;

// POST route to store performance metrics
router.post('/track-metrics', async (req, res) => {
  console.log('Received metrics:', req.body);
  try {
    const pool = getPool(req);
    const { visitorId, page, FCP, LCP, TTI, loadTime, deviceType, country } = req.body;

    if (!visitorId) {
      return res.status(400).json({ error: 'visitorId is required' });
    }

    const [result] = await pool.execute(
      `INSERT INTO performance_metrics 
       (visitorId, page, fcp, lcp, tti, loadTime, timestamp, deviceType, country)
       VALUES (?, ?, ?, ?, ?, ?, NOW(), ?, ?)`,
      [visitorId, page || null, FCP || null, LCP || null, TTI || null, loadTime || null, deviceType || null, country || null]
    );

    res.json({ message: 'Performance metrics recorded successfully', id: result.insertId });
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
    const pool = getPool(req);
    const { recentErrorLogs, visitorId, page, timestamp, deviceType, browser, country } = req.body;

    if (!visitorId || !recentErrorLogs) {
      return res.status(400).json({ error: 'visitorId and recentErrorLogs are required' });
    }

    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
      for (const log of recentErrorLogs) {
        const { path, errorCode, count, lastOccurrence, errorMessage, source } = log;
        
        const formattedFirstOccurrence = convertToMySQLDate(lastOccurrence || timestamp);
        const formattedLastOccurrence = convertToMySQLDate(lastOccurrence || timestamp);
        const formattedTimestamp = convertToMySQLDate(timestamp);

        await connection.execute(`
          INSERT INTO error_logs 
          (visitorId, page, errorCode, errorMessage, source, count, firstOccurrence, lastOccurrence, timestamp, deviceType, browser, country)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE 
            count = VALUES(count), 
            lastOccurrence = VALUES(lastOccurrence),
            errorMessage = VALUES(errorMessage),
            source = VALUES(source);
        `, [
          visitorId, 
          path || page, 
          errorCode, 
          errorMessage || null, 
          source || null, 
          count || 1, 
          formattedFirstOccurrence,  
          formattedLastOccurrence,   
          formattedTimestamp,        
          deviceType || null, 
          browser || null, 
          country || null
        ]);
      }

      await connection.commit();
      connection.release();
      res.json({ message: 'Error logs recorded successfully' });
    } catch (error) {
      await connection.rollback();
      connection.release();
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
    const pool = getPool(req);
    const { visitorId, page, startDate, endDate, groupBy } = req.query;

    if (groupBy === 'deviceType') {
      const [rows] = await pool.execute(
        `SELECT 
          CASE 
            WHEN deviceType LIKE '{%' THEN 
              JSON_UNQUOTE(JSON_EXTRACT(deviceType, '$.deviceType'))
            ELSE deviceType
          END as deviceType,
          COUNT(*) as count 
         FROM performance_metrics 
         WHERE 1=1 
         ${visitorId ? 'AND visitorId = ?' : ''} 
         ${startDate ? 'AND timestamp >= ?' : ''} 
         ${endDate ? 'AND timestamp <= ?' : ''} 
         GROUP BY deviceType
         ORDER BY count DESC`,
        [visitorId, startDate, endDate].filter(Boolean)
      );
      return res.json({ message: 'Device breakdown retrieved', data: rows });
    }

    if (groupBy === 'hour') {
      const [rows] = await pool.execute(
        `SELECT 
           DATE_FORMAT(timestamp, '%H:00') as hour, 
           AVG(loadTime) as avg_loadTime, 
           COUNT(DISTINCT visitorId) as userCount 
         FROM performance_metrics 
         WHERE 1=1 
         ${startDate ? 'AND timestamp >= ?' : ''} 
         ${endDate ? 'AND timestamp <= ?' : ''} 
         GROUP BY DATE_FORMAT(timestamp, '%H:00') 
         ORDER BY hour`,
        [startDate, endDate].filter(Boolean)
      );
      return res.json({ message: 'Hourly performance retrieved', data: rows });
    }

    let query = `
      SELECT 
        id, visitorId, page, fcp, lcp, tti, loadTime, timestamp, deviceType, country 
      FROM performance_metrics 
      WHERE 1=1
    `;
    const queryParams = [];

    if (visitorId) { query += ' AND visitorId = ?'; queryParams.push(visitorId); }
    if (page) { query += ' AND page = ?'; queryParams.push(page); }
    if (startDate) { query += ' AND timestamp >= ?'; queryParams.push(startDate); }
    if (endDate) { query += ' AND timestamp <= ?'; queryParams.push(endDate); }

    query += ' ORDER BY timestamp DESC';

    const [rows] = await pool.execute(query, queryParams);
    res.json({ message: 'Performance metrics retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving performance metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve performance metrics' });
  }
});

// GET route to retrieve error types
router.get('/error-types', async (req, res) => {
  try {
    const pool = getPool(req);
    const { startDate, endDate, page } = req.query;

    let query = `
      SELECT 
        errorCode as name, 
        SUM(count) as value 
      FROM error_logs 
      WHERE 1=1
    `;
    const queryParams = [];

    if (startDate) { query += ' AND timestamp >= ?'; queryParams.push(startDate); }
    if (endDate) { query += ' AND timestamp <= ?'; queryParams.push(endDate); }
    if (page) { query += ' AND page = ?'; queryParams.push(page); }

    query += ' GROUP BY errorCode ORDER BY value DESC';

    const [rows] = await pool.execute(query, queryParams);
    res.json({ message: 'Error types retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving error types:', error);
    res.status(500).json({ error: 'Failed to retrieve error types' });
  }
});

// GET route to retrieve errors over time
router.get('/errors-over-time', async (req, res) => {
  try {
    const pool = getPool(req);
    const { startDate, endDate, page } = req.query;

    let query = `
      SELECT 
        DATE_FORMAT(timestamp, '%a') AS date,
        SUM(CASE WHEN errorCode = '404' THEN count ELSE 0 END) AS '404',
        SUM(CASE WHEN errorCode = '500' THEN count ELSE 0 END) AS '500',
        SUM(CASE WHEN errorCode = '403' THEN count ELSE 0 END) AS '403',
        SUM(CASE WHEN errorCode = '400' THEN count ELSE 0 END) AS '400',
        SUM(CASE WHEN errorCode NOT IN ('404', '500', '403', '400') THEN count ELSE 0 END) AS 'Other'
      FROM error_logs
      WHERE 1=1
    `;

    const queryParams = [];

    if (startDate) {
      query += ' AND timestamp >= ?';
      queryParams.push(startDate);
    }
    if (endDate) {
      query += ' AND timestamp <= ?';
      queryParams.push(endDate);
    }
    if (page) {
      query += ' AND page = ?';
      queryParams.push(page);
    }

    query += ` GROUP BY DATE_FORMAT(timestamp, '%a') ORDER BY DATE_FORMAT(timestamp, '%a')`;

    const [rows] = await pool.execute(query, queryParams);
    res.json({ message: 'Errors over time retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving errors over time:', error);
    res.status(500).json({ error: 'Failed to retrieve errors over time' });
  }
});


// GET route to retrieve recent error logs
router.get('/recent-error-logs', async (req, res) => {
  try {
    const pool = getPool(req);
    const { startDate, endDate, page, limit = 10 } = req.query;

    let query = `
      SELECT 
        page as path,
        errorCode,
        SUM(count) as count,
        MAX(lastOccurrence) as lastOccurrence
      FROM error_logs 
      WHERE 1=1
    `;
    const queryParams = [];

    if (startDate) { query += ' AND timestamp >= ?'; queryParams.push(startDate); }
    if (endDate) { query += ' AND timestamp <= ?'; queryParams.push(endDate); }
    if (page) { query += ' AND page = ?'; queryParams.push(page); }

    query += ' GROUP BY page, errorCode ORDER BY lastOccurrence DESC';
    query += ` LIMIT ${parseInt(limit, 10)}`; // Insert the limit directly

    const [rows] = await pool.execute(query, queryParams);
    res.json({ message: 'Recent error logs retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving recent error logs:', error);
    res.status(500).json({ error: 'Failed to retrieve recent error logs' });
  }
});


// GET route for device performance
router.get('/device-performance', async (req, res) => {
  try {
    const pool = getPool(req);

    const [rows] = await pool.execute(
      `SELECT 
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
       ORDER BY avg_loadTime DESC`
    );

    res.json({ message: 'Device performance metrics retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving device performance metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve device performance metrics' });
  }
});

// GET route for aggregated metrics
router.get('/technical-metrics/aggregate', async (req, res) => {
  try {
    const pool = getPool(req);
    const { page } = req.query;

    const [rows] = await pool.execute(
      `SELECT 
         page,
         AVG(fcp) as avg_fcp,
         AVG(lcp) as avg_lcp,
         AVG(tti) as avg_tti,
         AVG(loadTime) as avg_loadTime,
         COUNT(*) as total_records
       FROM performance_metrics
       WHERE 1=1
       ${page ? 'AND page = ?' : ''}
       GROUP BY page`,
      page ? [page] : []
    );

    res.json({ message: 'Aggregated performance metrics retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving aggregated metrics:', error);
    res.status(500).json({ error: 'Failed to retrieve aggregated metrics' });
  }
});

// GET route to retrieve browser usage statistics from user_activity table
router.get('/browser-stats', async (req, res) => {
  try {
    const pool = getPool(req);
    
    const [rows] = await pool.execute(
      `SELECT browser, COUNT(*) as count 
       FROM user_activity 
       GROUP BY browser 
       ORDER BY count DESC`
    );

    res.json({ message: 'Browser usage statistics retrieved successfully', data: rows });
  } catch (error) {
    console.error('Error retrieving browser usage statistics:', error);
    res.status(500).json({ error: 'Failed to retrieve browser usage statistics' });
  }
});

module.exports = router;