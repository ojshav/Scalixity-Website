const { logger, logError } = require('../utils/logger');

// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error with context
  const context = {
    url: req.originalUrl,
    method: req.method,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('User-Agent'),
    body: req.method !== 'GET' ? req.body : undefined,
    query: req.query,
    params: req.params
  };
  
  logError(err, context);
  
  // Prisma-specific error handling
  if (err.code && err.code.startsWith('P')) {
    return handlePrismaError(err, res);
  }
  
  // Validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: err.details || err.message
    });
  }
  
  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
      error: 'authentication_failed'
    });
  }
  
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Token expired',
      error: 'token_expired'
    });
  }
  
  // Cloudinary errors
  if (err.http_code) {
    return res.status(400).json({
      success: false,
      message: 'File upload error',
      error: err.message
    });
  }
  
  // Rate limit errors
  if (err.statusCode === 429) {
    return res.status(429).json({
      success: false,
      message: err.message,
      retryAfter: err.retryAfter
    });
  }
  
  // Default error response
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || 'Internal server error';
  
  // Don't leak error details in production
  const errorResponse = {
    success: false,
    message: statusCode === 500 && process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  };
  
  res.status(statusCode).json(errorResponse);
};

// Prisma error handler
const handlePrismaError = (err, res) => {
  switch (err.code) {
    case 'P2002':
      return res.status(409).json({
        success: false,
        message: 'Duplicate entry',
        error: 'resource_already_exists',
        field: err.meta?.target
      });
      
    case 'P2025':
      return res.status(404).json({
        success: false,
        message: 'Record not found',
        error: 'resource_not_found'
      });
      
    case 'P2003':
      return res.status(400).json({
        success: false,
        message: 'Foreign key constraint failed',
        error: 'invalid_reference'
      });
      
    case 'P2004':
      return res.status(400).json({
        success: false,
        message: 'Database constraint failed',
        error: 'constraint_violation'
      });
      
    case 'P2021':
      return res.status(404).json({
        success: false,
        message: 'Table does not exist',
        error: 'table_not_found'
      });
      
    case 'P2022':
      return res.status(404).json({
        success: false,
        message: 'Column does not exist',
        error: 'column_not_found'
      });
      
    default:
      return res.status(500).json({
        success: false,
        message: 'Database error',
        error: 'database_error',
        ...(process.env.NODE_ENV !== 'production' && { details: err.message })
      });
  }
};

// 404 handler
const notFoundHandler = (req, res) => {
  const message = `Route ${req.originalUrl} not found`;
  
  logger.warn('404 Not Found', {
    url: req.originalUrl,
    method: req.method,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('User-Agent')
  });
  
  res.status(404).json({
    success: false,
    message,
    error: 'route_not_found'
  });
};

// Async error wrapper
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Success response helper
const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

// Error response helper
const sendError = (res, message, statusCode = 500, error = null) => {
  res.status(statusCode).json({
    success: false,
    message,
    ...(error && { error })
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
  asyncHandler,
  sendSuccess,
  sendError,
  handlePrismaError
};