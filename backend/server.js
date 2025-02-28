// backend/server.js
require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'scalixity_admin',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
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
    
    
    // Check if default admin exists, if not create one
const [rows] = await connection.execute('SELECT * FROM admin_users WHERE username = ?', [process.env.ADMIN_USERNAME]);

if (rows.length === 0) {
  // Create default admin user
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

// Start server
(async () => {
  try {
    await setupDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
  }
})();