const express = require("express");
const router = express.Router();
const prisma = require('../config/db');

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: User analytics and tracking data
 */

// Utility function to get date range
const getDateRange = (days) => {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
};

/**
 * @swagger
 * /api/track:
 *   post:
 *     summary: Track user activity and analytics
 *     tags: [Analytics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - visitorId
 *               - userType
 *               - visitCount
 *             properties:
 *               visitorId:
 *                 type: string
 *                 example: visitor_123456
 *               country:
 *                 type: string
 *                 example: United States
 *               deviceType:
 *                 type: string
 *                 example: Desktop
 *               browser:
 *                 type: string
 *                 example: Chrome
 *               page:
 *                 type: string
 *                 example: /home
 *               event:
 *                 type: string
 *                 default: demographic
 *                 example: demographic
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 example: 2024-01-15T10:30:00Z
 *               visitCount:
 *                 type: integer
 *                 example: 5
 *               userType:
 *                 type: string
 *                 example: returning
 *     responses:
 *       200:
 *         description: Activity tracked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Activity tracked successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 */
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

/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Get comprehensive user analytics data
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Analytics data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: integer
 *                   example: 1250
 *                 newUsers:
 *                   type: integer
 *                   example: 45
 *                 returningUsers:
 *                   type: integer
 *                   example: 1205
 *                 activeUsers:
 *                   type: integer
 *                   example: 320
 *                 averageVisitsPerUser:
 *                   type: number
 *                   example: 3.2
 *                 topCountries:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       country:
 *                         type: string
 *                         example: United States
 *                       count:
 *                         type: integer
 *                         example: 450
 *                 deviceBreakdown:
 *                   type: object
 *                   properties:
 *                     Desktop:
 *                       type: integer
 *                       example: 750
 *                     Mobile:
 *                       type: integer
 *                       example: 400
 *                     Tablet:
 *                       type: integer
 *                       example: 100
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
// Get user analytics data
router.get("/", async (req, res) => {
  try {
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
    
    res.status(200).json(formattedResults);
  } catch (err) {
    console.error("Error fetching analytics:", err);
    res.status(500).json({ error: "Database error" });
  }
});

/**
 * @swagger
 * /api/total-users:
 *   get:
 *     summary: Get total user count
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Total users count retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: integer
 *                   example: 1250
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/total-users", async (req, res) => {
  try {
    const results = await prisma.$queryRaw`
      SELECT DATE_FORMAT(timestamp, '%b') AS month, 
       COUNT(DISTINCT visitorId) AS users 
       FROM user_activity 
       GROUP BY month 
       ORDER BY MIN(timestamp)
    `;
    
    // Convert BigInt to Number for JSON serialization
    const convertedResults = results.map(row => ({
      ...row,
      users: Number(row.users)
    }));
    
    res.json(convertedResults);
  } catch (error) {
    console.error("Error fetching total users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * @swagger
 * /api/new-vs-returning:
 *   get:
 *     summary: Get new vs returning users analytics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: New vs returning users data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   month:
 *                     type: string
 *                     example: Jan
 *                   new_users:
 *                     type: integer
 *                     example: 45
 *                   returning_users:
 *                     type: integer
 *                     example: 123
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
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
    
    // Convert BigInt to Number for JSON serialization
    const convertedResults = results.map(row => ({
      ...row,
      new_users: Number(row.new_users),
      returning_users: Number(row.returning_users)
    }));
    
    res.json(convertedResults);
  } catch (error) {
    console.error("Error fetching new vs returning users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * @swagger
 * /api/active-users:
 *   get:
 *     summary: Get active users count
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Active users count retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 activeUsers:
 *                   type: integer
 *                   example: 320
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
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
    
    // Convert BigInt to Number for JSON serialization
    const convertedResults = results.map(row => ({
      ...row,
      daily: Number(row.daily),
      weekly: Number(row.weekly),
      monthly: Number(row.monthly)
    }));
    
    res.json(convertedResults.length > 0 ? [convertedResults[0]] : []);
  } catch (error) {
    console.error("Error fetching active users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * @swagger
 * /api/growth-rate:
 *   get:
 *     summary: Get user growth rate analytics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Growth rate data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 growthRate:
 *                   type: number
 *                   example: 15.5
 *                 period:
 *                   type: string
 *                   example: monthly
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
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

/**
 * @swagger
 * /api/user-breakdown:
 *   get:
 *     summary: Get user breakdown by demographics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: User breakdown data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 byCountry:
 *                   type: object
 *                   example: {"United States": 450, "Canada": 120, "UK": 89}
 *                 byDevice:
 *                   type: object
 *                   example: {"Desktop": 750, "Mobile": 400, "Tablet": 100}
 *                 byBrowser:
 *                   type: object
 *                   example: {"Chrome": 800, "Firefox": 250, "Safari": 200}
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/user-breakdown", async (req, res) => {
  try {
    // Use groupBy to get distinct counts
    const newUsersData = await prisma.userActivity.groupBy({
      by: ['visitorId'],
      where: { userType: 'new' },
      _count: true
    });
    
    const returningUsersData = await prisma.userActivity.groupBy({
      by: ['visitorId'],
      where: { userType: 'returning' },
      _count: true
    });
    
    const newUsersCount = newUsersData.length;
    const returningUsersCount = returningUsersData.length;
    
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