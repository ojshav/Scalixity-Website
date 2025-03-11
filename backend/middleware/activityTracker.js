// middleware/activityTracker.js
const updateUserActivity = async (req, res, next) => {
    if (req.user) {
      try {
        // Update last activity timestamp in the database
        const pool = req.app.locals.pool;
        await pool.execute(
          'UPDATE admin_users SET last_activity = NOW() WHERE id = ?',
          [req.user.userId]
        );
      } catch (error) {
        console.error('Error updating user activity:', error);
      }
    }
    next();
  };
  
  module.exports = { updateUserActivity };