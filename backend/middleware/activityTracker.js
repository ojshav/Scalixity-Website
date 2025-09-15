// middleware/activityTracker.js
const prisma = require('../config/db');

const updateUserActivity = async (req, res, next) => {
    if (req.user) {
      try {
        // Update last activity timestamp in the database
        await prisma.adminUser.update({
          where: { id: req.user.userId },
          data: { lastActivity: new Date() }
        });
      } catch (error) {
        console.error('Error updating user activity:', error);
      }
    }
    next();
  };
  
  module.exports = { updateUserActivity };