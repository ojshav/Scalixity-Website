const express = require("express");
const router = express.Router();
const pool = require('../config/db');

// Utility function to get date range
const getDateRange = (days) => {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
};

// Store user activity in MySQL
router.post("/track", async (req, res) => {
  try {
    console.log("Received tracking data:", req.body);
    const { visitorId, page, timestamp, event } = req.body;
    if (!pool) {
      console.error("Database pool is undefined");
      return res.status(500).json({ error: "Database connection not available" });
    }
    const mysqlTimestamp = new Date(timestamp).toISOString().slice(0, 19).replace("T", " ");
    const query = "INSERT INTO user_activity (visitorId, page, timestamp, event) VALUES (?, ?, ?, ?)";
    const [result] = await pool.execute(query, [visitorId, page, mysqlTimestamp, event]);
    console.log("Data inserted successfully:", result);
    res.status(200).json({ message: "User activity tracked successfully" });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ error: "Database error", details: err.message });
  }
});

// Get user analytics data
router.get("/", async (req, res) => {
  try {
    console.log("Fetching user analytics data...");
    const [results] = await pool.execute("SELECT page, COUNT(*) as visits FROM user_activity GROUP BY page");
    console.log("Analytics Data:", results);
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching analytics:", err);
    res.status(500).json({ error: "Database error" });
  }
});
// Fetch total users per month
router.get("/total-users", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT DATE_FORMAT(timestamp, '%b') AS month, 
       COUNT(DISTINCT visitorId) AS users 
FROM user_activity 
GROUP BY month 
ORDER BY MIN(timestamp);
`
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching total users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch new vs returning users per month
router.get("/new-vs-returning", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `SELECT DATE_FORMAT(timestamp, '%b') AS month, 
       COUNT(DISTINCT CASE WHEN timestamp >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) THEN visitorId END) AS new, 
       COUNT(DISTINCT CASE WHEN timestamp < DATE_SUB(CURDATE(), INTERVAL 30 DAY) THEN visitorId END) AS returning 
FROM user_activity 
GROUP BY month 
ORDER BY MIN(timestamp);
`
    );
    res.json(rows);
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

    const [results] = await pool.execute(
      `SELECT 
        'Current' as month,
        (SELECT COUNT(DISTINCT visitorId) FROM user_activity WHERE timestamp >= ?) as daily,
        (SELECT COUNT(DISTINCT visitorId) FROM user_activity WHERE timestamp >= ?) as weekly,
        (SELECT COUNT(DISTINCT visitorId) FROM user_activity WHERE timestamp >= ?) as monthly`,
      [dailyDate, weeklyDate, monthlyDate]
    );
    
    res.json(results ? [results] : []);
  } catch (error) {
    console.error("Error fetching active users:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch user growth rate per month
router.get("/growth-rate", async (req, res) => {
  try {
    const [rows] = await pool.execute(
      `WITH MonthlyUsers AS (
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
ORDER BY min_timestamp;
`
    );
    res.json(rows);
  } catch (error) {
    console.error("Error fetching growth rate:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch user breakdown
router.get("/user-breakdown", async (req, res) => {
  try {
    const [newUsers] = await pool.execute(
      "SELECT COUNT(DISTINCT visitorId) AS new_users FROM user_activity WHERE timestamp >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)"
    );
    const [returningUsers] = await pool.execute(
      "SELECT COUNT(DISTINCT visitorId) AS returning_users FROM user_activity WHERE visitorId IN (SELECT visitorId FROM user_activity WHERE timestamp < DATE_SUB(CURDATE(), INTERVAL 30 DAY))"
    );
    res.json([
      { name: "New Users", value: newUsers[0].new_users },
      { name: "Returning Users", value: returningUsers[0].returning_users }
    ]);
  } catch (error) {
    console.error("Error fetching user breakdown:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
