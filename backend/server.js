require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const analyticsRoutes = require("./routes/analytics");
const engagementRoutes = require('./routes/engagement');
const demographicRoutes = require('./routes/demographic');
const technicalRoutes = require('./routes/technical');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json());

// Create database pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'scalixity_admin',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Make pool available globally
app.locals.pool = pool;

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT 1');
    res.json({ message: 'Database connection successful', result });
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Database setup function
async function setupDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Create admin users table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) UNIQUE,
        role VARCHAR(50) DEFAULT 'admin',
        last_login DATETIME,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    // Create user_activity table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS user_activity (
        id INT AUTO_INCREMENT PRIMARY KEY,
        visitorId VARCHAR(255),
        page VARCHAR(255),
        timestamp DATETIME,
        event VARCHAR(50),
        deviceType VARCHAR(50),
        country VARCHAR(50),
        browser VARCHAR(100)
      )
    `);

    // Create inquiries table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        visitor_id VARCHAR(255) NOT NULL,
        activity_id INT,
        inquiry_type VARCHAR(50),
        timestamp DATETIME NOT NULL,
        FOREIGN KEY (activity_id) REFERENCES user_activity(id) ON DELETE SET NULL
      )
    `);

    // Create performance_metrics table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS performance_metrics (
        id INT AUTO_INCREMENT PRIMARY KEY,
        visitorId VARCHAR(255) NOT NULL,
        page VARCHAR(255),
        fcp FLOAT,          -- First Contentful Paint in milliseconds
        lcp FLOAT,          -- Largest Contentful Paint in milliseconds
        tti FLOAT,          -- Time to Interactive in milliseconds
        loadTime FLOAT,     -- Full page load time in milliseconds
        timestamp DATETIME NOT NULL,
        deviceType VARCHAR(50),
        country VARCHAR(100),
        FOREIGN KEY (visitorId) REFERENCES user_activity(visitorId) ON DELETE CASCADE
      )
    `);

    // Create error_logs table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS error_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        visitorId VARCHAR(255),
        page VARCHAR(255),
        errorCode VARCHAR(50),
        errorMessage TEXT,
        source VARCHAR(50),  -- e.g., 'fetch', 'javascript', 'resource', 'promise'
        count INT DEFAULT 1,
        firstOccurrence DATETIME,
        lastOccurrence DATETIME,
        timestamp DATETIME NOT NULL,
        deviceType VARCHAR(50),
        browser VARCHAR(100),
        country VARCHAR(100)
      )
    `);
    
    // Check if default admin exists, if not create one
    const [rows] = await connection.execute('SELECT * FROM admin_users WHERE username = ?', [process.env.ADMIN_USERNAME]);

    if (rows.length === 0) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      await connection.execute(
        'INSERT INTO admin_users (username, password, email, role) VALUES (?, ?, ?, ?)',
        [process.env.ADMIN_USERNAME, hashedPassword, process.env.ADMIN_EMAIL, process.env.ADMIN_ROLE]
      );
      console.log('Default admin user created');
    }
    
    connection.release();
    console.log('Database setup completed');
  } catch (error) {
    console.error('Database setup error:', error);
    process.exit(1);
  }
}


// Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);
app.use("/api", analyticsRoutes);
app.use("/api", engagementRoutes);
app.use("/api", demographicRoutes);
app.use("/api", technicalRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
(async () => {
  try {
    await setupDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Database pool initialized');
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
})();