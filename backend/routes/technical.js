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

// GET route to retrieve performance metrics with grouping options
router.get('/technical-metrics', async (req, res) => {
  try {
    const pool = getPool(req);
    const { visitorId, page, startDate, endDate, groupBy } = req.query;

    if (groupBy === 'deviceType') {
      const [rows] = await pool.execute(
        `SELECT deviceType, COUNT(*) as count 
         FROM performance_metrics 
         WHERE 1=1 
         ${visitorId ? 'AND visitorId = ?' : ''} 
         ${startDate ? 'AND timestamp >= ?' : ''} 
         ${endDate ? 'AND timestamp <= ?' : ''} 
         GROUP BY deviceType`,
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

module.exports = router;