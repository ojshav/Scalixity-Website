const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');
const { authenticateToken, checkTokenExpiration } = require('../middleware/auth');
const { updateUserActivity } = require('../middleware/activityTracker');

// Inactivity timeout (in milliseconds) - 30 minutes
const INACTIVITY_TIMEOUT = 30 * 60 * 1000;

// Middleware to check for inactivity (same as before)
const checkInactivity = async (req, res, next) => {
  try {
    const user = await prisma.adminUser.findUnique({
      where: { id: req.user.userId },
      select: { lastActivity: true }
    });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const lastActivity = new Date(user.lastActivity);
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
    const user = await prisma.adminUser.findUnique({
      where: { id: req.user.userId },
      select: { role: true }
    });

    if (!user || user.role !== 'super_admin') {
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

    const user = await prisma.adminUser.findUnique({
      where: { username: username }
    });
    
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    await prisma.adminUser.update({
      where: { id: user.id },
      data: { 
        lastLogin: new Date(),
        lastActivity: new Date()
      }
    });
    
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
      const user = await prisma.adminUser.findUnique({
        where: { id: req.user.userId },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          lastLogin: true,
          lastActivity: true,
          receiveEmails: true
        }
      });
      
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      res.status(200).json({ success: true, data: user });
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
      const updateData = {};

      // Build dynamic update object
      if (firstName) updateData.firstName = firstName;
      if (lastName) updateData.lastName = lastName;
      if (email) {
        // Check if email is already in use by another user
        const existingEmail = await prisma.adminUser.findFirst({
          where: { 
            email: email,
            id: { not: req.user.userId }
          }
        });
        if (existingEmail) {
          return res.status(400).json({
            success: false,
            message: 'Email already in use'
          });
        }
        updateData.email = email;
      }
      if (receiveEmails !== undefined) updateData.receiveEmails = receiveEmails;
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateData.password = hashedPassword;
      }

      if (Object.keys(updateData).length === 0) {
        return res.status(400).json({
          success: false,
          message: 'No valid fields to update'
        });
      }

      const updatedUser = await prisma.adminUser.update({
        where: { id: req.user.userId },
        data: updateData,
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          receiveEmails: true
        }
      });

      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedUser
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
      const existing = await prisma.adminUser.findFirst({
        where: {
          OR: [
            { username: username },
            { email: email }
          ]
        }
      });
      if (existing) {
        return res.status(400).json({
          success: false,
          message: 'Username or email already exists'
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.adminUser.create({
        data: {
          username,
          email,
          password: hashedPassword,
          firstName: firstName || null,
          lastName: lastName || null,
          role: role || 'admin',
          receiveEmails: receiveEmails || false
        }
      });

      res.status(201).json({
        success: true,
        message: 'Admin user created successfully',
        userId: newUser.id
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
      const userIdToDelete = parseInt(req.params.id);

      // Prevent self-deletion
      if (userIdToDelete === req.user.userId) {
        return res.status(400).json({
          success: false,
          message: 'Cannot delete your own account'
        });
      }

      const user = await prisma.adminUser.findUnique({
        where: { id: userIdToDelete }
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      await prisma.adminUser.delete({
        where: { id: userIdToDelete }
      });

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
      const users = await prisma.adminUser.findMany({
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          receiveEmails: true,
          lastLogin: true
        }
      });

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