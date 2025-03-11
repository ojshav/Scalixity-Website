const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const { authenticateToken, checkTokenExpiration } = require('../middleware/auth');
const { updateUserActivity } = require('../middleware/activityTracker');

// Inactivity timeout (in milliseconds) - 30 minutes
const INACTIVITY_TIMEOUT = 30 * 60 * 1000;

// Middleware to check for inactivity (same as before)
const checkInactivity = async (req, res, next) => {
  try {
    const [users] = await pool.execute(
      'SELECT last_activity FROM admin_users WHERE id = ?',
      [req.user.userId]
    );

    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const lastActivity = new Date(users[0].last_activity);
    const currentTime = new Date();

    if (currentTime - lastActivity > INACTIVITY_TIMEOUT) {
      return res.status(401).json({ 
        success: false, 
        message: 'Session expired due to inactivity',
        reason: 'inactivity',
        expired: true
      });
    }

    next();
  } catch (error) {
    console.error('Inactivity check error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Middleware to check if user is super admin
const isSuperAdmin = async (req, res, next) => {
  try {
    const [users] = await pool.execute(
      'SELECT role FROM admin_users WHERE id = ?',
      [req.user.userId]
    );

    if (users.length === 0 || users[0].role !== 'super_admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied: Super admin privileges required'
      });
    }
    next();
  } catch (error) {
    console.error('Super admin check error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
// Admin login endpoint (same as before)
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    const [users] = await pool.execute('SELECT * FROM admin_users WHERE username = ?', [username]);
    
    if (users.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    const user = users[0];
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    await pool.execute(
      'UPDATE admin_users SET last_login = NOW(), last_activity = NOW() WHERE id = ?', 
      [user.id]
    );
    
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username,
        role: user.role 
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.status(200).json({ 
      success: true, 
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Get admin profile
router.get('/profile', 
  authenticateToken,
  checkTokenExpiration,
  checkInactivity,
  updateUserActivity,
  async (req, res) => {
    try {
      const [users] = await pool.execute(
        'SELECT id, username, email, role, first_name, last_name, last_login, last_activity, receive_emails ' +
        'FROM admin_users WHERE id = ?', 
        [req.user.userId]
      );
      
      if (users.length === 0) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      res.status(200).json({ success: true, data: users[0] });
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Update admin profile
router.put('/profile',
  authenticateToken,
  checkTokenExpiration,
  checkInactivity,
  updateUserActivity,
  async (req, res) => {
    try {
      const { firstName, lastName, email, password, receiveEmails } = req.body;
      const updateFields = [];
      const updateValues = [];

      // Build dynamic update query
      if (firstName) {
        updateFields.push('first_name = ?');
        updateValues.push(firstName);
      }
      if (lastName) {
        updateFields.push('last_name = ?');
        updateValues.push(lastName);
      }
      if (email) {
        // Check if email is already in use by another user
        const [existingEmail] = await pool.execute(
          'SELECT id FROM admin_users WHERE email = ? AND id != ?',
          [email, req.user.userId]
        );
        if (existingEmail.length > 0) {
          return res.status(400).json({
            success: false,
            message: 'Email already in use'
          });
        }
        updateFields.push('email = ?');
        updateValues.push(email);
      }
      if (receiveEmails !== undefined) {
        updateFields.push('receive_emails = ?');
        updateValues.push(receiveEmails);
      }
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateFields.push('password = ?');
        updateValues.push(hashedPassword);
      }

      if (updateFields.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No valid fields to update'
        });
      }

      updateValues.push(req.user.userId);
      const updateQuery = `UPDATE admin_users SET ${updateFields.join(', ')} WHERE id = ?`;

      await pool.execute(updateQuery, updateValues);

      // Fetch updated user data
      const [updatedUser] = await pool.execute(
        'SELECT id, username, email, role, first_name, last_name, receive_emails ' +
        'FROM admin_users WHERE id = ?',
        [req.user.userId]
      );

      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedUser[0]
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Create new admin (super admin only)
router.post('/users',
  authenticateToken,
  checkTokenExpiration,
  checkInactivity,
  updateUserActivity,
  isSuperAdmin,
  async (req, res) => {
    try {
      const { username, email, password, firstName, lastName, role, receiveEmails } = req.body;

      // Validate required fields
      if (!username || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Username, email, and password are required'
        });
      }

      // Check if username or email already exists
      const [existing] = await pool.execute(
        'SELECT id FROM admin_users WHERE username = ? OR email = ?',
        [username, email]
      );
      if (existing.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Username or email already exists'
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await pool.execute(
        'INSERT INTO admin_users (username, email, password, first_name, last_name, role, receive_emails) ' +
        'VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          username,
          email,
          hashedPassword,
          firstName || null,
          lastName || null,
          role || 'admin',
          receiveEmails || false
        ]
      );

      res.status(201).json({
        success: true,
        message: 'Admin user created successfully',
        userId: result.insertId
      });
    } catch (error) {
      console.error('Error creating admin user:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Delete admin (super admin only)
router.delete('/users/:id',
  authenticateToken,
  checkTokenExpiration,
  checkInactivity,
  updateUserActivity,
  isSuperAdmin,
  async (req, res) => {
    try {
      const userIdToDelete = req.params.id;

      // Prevent self-deletion
      if (userIdToDelete === req.user.userId.toString()) {
        return res.status(400).json({
          success: false,
          message: 'Cannot delete your own account'
        });
      }

      const [user] = await pool.execute(
        'SELECT id FROM admin_users WHERE id = ?',
        [userIdToDelete]
      );

      if (user.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      await pool.execute('DELETE FROM admin_users WHERE id = ?', [userIdToDelete]);

      res.status(200).json({
        success: true,
        message: 'Admin user deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting admin user:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Get all admins (super admin only)
router.get('/users',
  authenticateToken,
  checkTokenExpiration,
  checkInactivity,
  updateUserActivity,
  isSuperAdmin,
  async (req, res) => {
    try {
      const [users] = await pool.execute(
        'SELECT id, username, email, role, first_name, last_name, receive_emails, last_login ' +
        'FROM admin_users'
      );

      res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      console.error('Error fetching admin users:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Check session endpoint (same as before)
router.get('/check-session', 
  authenticateToken,
  checkTokenExpiration,
  checkInactivity,
  updateUserActivity,
  async (req, res) => {
    res.status(200).json({ success: true, message: 'Session active' });
  }
);

// Apply to all protected routes
router.use(authenticateToken, checkTokenExpiration, checkInactivity, updateUserActivity);

module.exports = router;