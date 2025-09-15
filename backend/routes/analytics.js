const express = require("express");
const router = express.Router();
const prisma = require('../config/db');

// Utility function to get date range
const getDateRange = (days) => {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
};

// Store user activity in MySQL
router.post('/track', async (req, res) => {
  try {
    const { 
      visitorId, 
      country, 
      deviceType, 
      browser,
      page, 
      event = 'demographic',
      timestamp = new Date().toISOString(),
      visitCount,  // Added
      userType     // Added
    } = req.body;

    // Validate required fields
    if (!visitorId || !userType || typeof visitCount !== 'number') {
      return res.status(400).json({ error: 'Missing or invalid required fields: visitorId, userType, visitCount' });
    }

    const mysqlTimestamp = new Date(timestamp);
    
    const activityResult = await prisma.userActivity.create({
      data: {
        visitorId,
        page,
        timestamp: new Date(),
        event,
        deviceType,
        country,
        browser,
        visitCount,
        userType
      }
    });

    // Insert into inquiries table
    await prisma.inquiry.create({
      data: {
        visitorId,
        activityId: activityResult.id,
        inquiryType: event,
        timestamp: mysqlTimestamp
      }
    });

    res.status(201).json({ 
      message: 'Demographic data tracked successfully',
      visitorId,
      country,
      deviceType
    });
  } catch (error) {
    console.error('Error tracking demographic data:', error);
    res.status(500).json({ error: 'Failed to track demographic data' });
  }
});

// Get user analytics data
router.get("/", async (req, res) => {
  try {
    console.log("Fetching user analytics data...");
    const results = await prisma.userActivity.groupBy({
      by: ['page'],
      _count: {
        _all: true
      }
    });
    
    const formattedResults = results.map(result => ({
      page: result.page,
      visits: result._count._all
    }));
    
    console.log("Analytics Data:", formattedResults);
    res.status(200).json(formattedResults);
  } catch (err) {
    console.error("Error fetching analytics:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Fetch total users per month
router.get("/total-users", async (req, res) => {
  try {
    const results = await prisma.$queryRaw`
      SELECT DATE_FORMAT(timestamp, '%b') AS month, 
       COUNT(DISTINCT visitorId) AS users 
       FROM user_activity 
       GROUP BY month 
       ORDER BY MIN(timestamp)
    `;
    res.json(results);
  } catch (error) {
    console.error("Error fetching total users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch new vs returning users per month
router.get("/new-vs-returning", async (req, res) => {
  try {
    const results = await prisma.$queryRaw`
      SELECT 
         DATE_FORMAT(timestamp, '%b') AS month,
         COUNT(DISTINCT CASE WHEN userType = 'new' THEN visitorId END) AS new_users,
         COUNT(DISTINCT CASE WHEN userType = 'returning' THEN visitorId END) AS returning_users
       FROM user_activity
       GROUP BY month
       ORDER BY MIN(timestamp)
    `;
    res.json(results);
  } catch (error) {
    console.error("Error fetching new vs returning users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch active users (DAU, WAU, MAU)
router.get("/active-users", async (req, res) => {
  try {
    const dailyDate = getDateRange(1);
    const weeklyDate = getDateRange(7);
    const monthlyDate = getDateRange(30);

    const results = await prisma.$queryRaw`
      SELECT 
        'Current' as month,
        (SELECT COUNT(DISTINCT visitorId) FROM user_activity WHERE timestamp >= ${dailyDate}) as daily,
        (SELECT COUNT(DISTINCT visitorId) FROM user_activity WHERE timestamp >= ${weeklyDate}) as weekly,
        (SELECT COUNT(DISTINCT visitorId) FROM user_activity WHERE timestamp >= ${monthlyDate}) as monthly
    `;
    
    res.json(results ? [results[0]] : []);
  } catch (error) {
    console.error("Error fetching active users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch user growth rate per month
router.get("/growth-rate", async (req, res) => {
  try {
    const results = await prisma.$queryRaw`
      WITH MonthlyUsers AS (
         SELECT 
           DATE_FORMAT(timestamp, '%b') AS month, 
           COUNT(DISTINCT visitorId) AS users,
           MIN(timestamp) AS min_timestamp
         FROM user_activity
         GROUP BY month
       )
       SELECT 
         month,
         (users - LAG(users) OVER (ORDER BY min_timestamp)) / 
         NULLIF(LAG(users) OVER (ORDER BY min_timestamp), 0) * 100 AS rate
       FROM MonthlyUsers
       ORDER BY min_timestamp
    `;
    res.json(results);
  } catch (error) {
    console.error("Error fetching growth rate:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch user breakdown
router.get("/user-breakdown", async (req, res) => {
  try {
    const newUsersCount = await prisma.userActivity.count({
      where: { userType: 'new' },
      distinct: ['visitorId']
    });
    
    const returningUsersCount = await prisma.userActivity.count({
      where: { userType: 'returning' },
      distinct: ['visitorId']
    });
    
    res.json([
      { name: "New Users", value: newUsersCount },
      { name: "Returning Users", value: returningUsersCount }
    ]);
  } catch (error) {
    console.error("Error fetching user breakdown:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;