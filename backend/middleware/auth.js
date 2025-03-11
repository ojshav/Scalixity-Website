// middleware/auth.js
const jwt = require('jsonwebtoken');

// Ensure JWT secret is strictly fetched from environment variables
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Access denied: No token provided',
      reason: 'no-token'
    });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      // Handle specific JWT errors
      let errorDetails = {
        success: false,
        reason: 'token-error'
      };

      if (err.name === 'TokenExpiredError') {
        errorDetails.message = 'Session expired: Please log in again';
        errorDetails.expired = true;
      } else if (err.name === 'JsonWebTokenError') {
        errorDetails.message = 'Invalid token: Please log in again';
      } else {
        errorDetails.message = 'Authentication error';
      }

      return res.status(403).json(errorDetails);
    }
    
    req.user = user;
    next();
  });
};

// Middleware to check token expiration without full verification
const checkTokenExpiration = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Access denied: No token provided',
      reason: 'no-token'
    });
  }

  try {
    const decoded = jwt.decode(token);
    if (!decoded) {
      return res.status(403).json({
        success: false,
        message: 'Invalid token format',
        reason: 'token-error'
      });
    }

    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTime) {
      return res.status(403).json({
        success: false,
        message: 'Session expired: Please log in again',
        reason: 'token-expired',
        expired: true
      });
    }

    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Invalid token: Please log in again',
      reason: 'token-error'
    });
  }
};

module.exports = { authenticateToken, checkTokenExpiration };