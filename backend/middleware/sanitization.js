/**
 * Request Sanitization and Input Security Middleware
 * Implements comprehensive input sanitization, XSS protection, and data validation
 */

const validator = require('validator');
const xss = require('xss');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');

/**
 * XSS Configuration with enhanced security
 */
const xssOptions = {
  whiteList: {
    // Allow basic formatting tags for rich text content
    p: [],
    br: [],
    strong: [],
    em: [],
    u: [],
    i: [],
    b: [],
    span: ['class'],
    div: ['class'],
    ul: [],
    ol: [],
    li: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: []
  },
  stripIgnoreTag: true,
  stripIgnoreTagBody: ['script', 'style'],
  allowCommentTag: false,
  css: false // Disable CSS to prevent style-based attacks
};

/**
 * Sanitize string input against XSS
 */
const sanitizeString = (input) => {
  if (typeof input !== 'string') {
    return input;
  }
  
  // Remove null bytes and control characters
  let sanitized = input.replace(/\0/g, '').replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  
  // Apply XSS filtering
  sanitized = xss(sanitized, xssOptions);
  
  // Additional sanitization
  sanitized = sanitized
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol (except for base64 images)
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/on\w+\s*=/gi, ''); // Remove event handlers
  
  return sanitized;
};

/**
 * Sanitize email input
 */
const sanitizeEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return email;
  }
  
  const sanitized = validator.normalizeEmail(email, {
    gmail_lowercase: true,
    gmail_remove_dots: false,
    outlookdotcom_lowercase: true,
    yahoo_lowercase: true,
    icloud_lowercase: true
  });
  
  return sanitized;
};

/**
 * Sanitize URL input
 */
const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return url;
  }
  
  // Only allow http, https, and mailto protocols
  if (!validator.isURL(url, { protocols: ['http', 'https', 'mailto'] })) {
    return '';
  }
  
  return validator.escape(url);
};

/**
 * Sanitize phone number
 */
const sanitizePhone = (phone) => {
  if (!phone || typeof phone !== 'string') {
    return phone;
  }
  
  // Remove all non-numeric characters except +, -, (, ), and spaces
  return phone.replace(/[^\d+\-() ]/g, '');
};

/**
 * Sanitize JSON input
 */
const sanitizeJSON = (input) => {
  if (typeof input === 'object' && input !== null) {
    return sanitizeObject(input);
  }
  
  if (typeof input === 'string') {
    try {
      const parsed = JSON.parse(input);
      return JSON.stringify(sanitizeObject(parsed));
    } catch (error) {
      return sanitizeString(input);
    }
  }
  
  return input;
};

/**
 * Deep sanitize object properties
 */
const sanitizeObject = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }
  
  const sanitized = {};
  
  for (const [key, value] of Object.entries(obj)) {
    // Sanitize key name
    const cleanKey = sanitizeString(key);
    
    if (typeof value === 'string') {
      // Special handling for different field types
      if (key.toLowerCase().includes('email')) {
        sanitized[cleanKey] = sanitizeEmail(value);
      } else if (key.toLowerCase().includes('url') || key.toLowerCase().includes('link')) {
        sanitized[cleanKey] = sanitizeUrl(value);
      } else if (key.toLowerCase().includes('phone')) {
        sanitized[cleanKey] = sanitizePhone(value);
      } else {
        sanitized[cleanKey] = sanitizeString(value);
      }
    } else if (typeof value === 'object') {
      sanitized[cleanKey] = sanitizeObject(value);
    } else {
      sanitized[cleanKey] = value;
    }
  }
  
  return sanitized;
};

/**
 * Middleware to sanitize request body
 */
const sanitizeBody = (req, res, next) => {
  if (req.body) {
    try {
      req.body = sanitizeObject(req.body);
      console.log(`[SANITIZE] Request body sanitized for ${req.method} ${req.path}`);
    } catch (error) {
      console.error(`[SANITIZE] Error sanitizing request body: ${error.message}`);
      return res.status(400).json({
        error: 'Invalid request data',
        message: 'Request contains malformed data',
        timestamp: new Date().toISOString()
      });
    }
  }
  next();
};

/**
 * Middleware to sanitize query parameters
 */
const sanitizeQuery = (req, res, next) => {
  if (req.query) {
    try {
      req.query = sanitizeObject(req.query);
      console.log(`[SANITIZE] Query parameters sanitized for ${req.method} ${req.path}`);
    } catch (error) {
      console.error(`[SANITIZE] Error sanitizing query parameters: ${error.message}`);
      return res.status(400).json({
        error: 'Invalid query parameters',
        message: 'Query contains malformed data',
        timestamp: new Date().toISOString()
      });
    }
  }
  next();
};

/**
 * Middleware to sanitize route parameters
 */
const sanitizeParams = (req, res, next) => {
  if (req.params) {
    try {
      req.params = sanitizeObject(req.params);
      console.log(`[SANITIZE] Route parameters sanitized for ${req.method} ${req.path}`);
    } catch (error) {
      console.error(`[SANITIZE] Error sanitizing route parameters: ${error.message}`);
      return res.status(400).json({
        error: 'Invalid route parameters',
        message: 'Parameters contain malformed data',
        timestamp: new Date().toISOString()
      });
    }
  }
  next();
};

/**
 * Comprehensive input sanitization middleware
 */
const sanitizeInput = (req, res, next) => {
  try {
    // Sanitize all input sources
    if (req.body) req.body = sanitizeObject(req.body);
    if (req.query) req.query = sanitizeObject(req.query);
    if (req.params) req.params = sanitizeObject(req.params);
    
    console.log(`[SANITIZE] Complete input sanitization for ${req.method} ${req.path}`);
    next();
  } catch (error) {
    console.error(`[SANITIZE] Critical sanitization error: ${error.message}`);
    return res.status(400).json({
      error: 'Input sanitization failed',
      message: 'Request contains unsafe data',
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * MongoDB injection protection
 */
const mongoSanitizeMiddleware = mongoSanitize({
  replaceWith: '_',
  onSanitize: ({ req, key }) => {
    console.warn(`[MONGO-SANITIZE] Removed prohibited character in key: ${key}`);
  }
});

/**
 * SQL injection protection for legacy queries
 */
const sqlSanitize = (req, res, next) => {
  const sqlInjectionPatterns = [
    /('|(\\')|(;)|(\\;)|(\|)|(\\|)|(\*)|(\\\*))/i,
    /((\%27)|(\')|(\\x27)|(\%22)|(\\x22)|(\"))/i,
    /((\%6F)|o|(\%4F))((\%72)|r|(\%52))/i,
    /((\%55)|u|(\%75))((\%6E)|n|(\%4E))((\%69)|i|(\%49))((\%6F)|o|(\%4F))((\%6E)|n|(\%4E))/i,
    /((\%73)|s|(\%53))((\%65)|e|(\%45))((\%6C)|l|(\%4C))((\%65)|e|(\%45))((\%63)|c|(\%43))((\%74)|t|(\%54))/i,
    /((\%69)|i|(\%49))((\%6E)|n|(\%4E))((\%73)|s|(\%53))((\%65)|e|(\%45))((\%72)|r|(\%52))((\%74)|t|(\%54))/i,
    /((\%64)|d|(\%44))((\%65)|e|(\%45))((\%6C)|l|(\%4C))((\%65)|e|(\%45))((\%74)|t|(\%54))((\%65)|e|(\%45))/i,
    /((\%75)|u|(\%55))((\%70)|p|(\%50))((\%64)|d|(\%44))((\%61)|a|(\%41))((\%74)|t|(\%54))((\%65)|e|(\%45))/i,
    /((\%64)|d|(\%44))((\%72)|r|(\%52))((\%6F)|o|(\%4F))((\%70)|p|(\%50))/i
  ];
  
  const checkForSqlInjection = (value) => {
    if (typeof value !== 'string') return false;
    
    return sqlInjectionPatterns.some(pattern => pattern.test(value));
  };
  
  const hasSqlInjection = (obj) => {
    if (typeof obj === 'string') {
      return checkForSqlInjection(obj);
    }
    
    if (Array.isArray(obj)) {
      return obj.some(item => hasSqlInjection(item));
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return Object.values(obj).some(value => hasSqlInjection(value));
    }
    
    return false;
  };
  
  // Check all input sources for SQL injection attempts
  if (hasSqlInjection(req.body) || hasSqlInjection(req.query) || hasSqlInjection(req.params)) {
    console.warn(`[SQL-SANITIZE] Potential SQL injection blocked from IP: ${req.ip}`);
    return res.status(400).json({
      error: 'Invalid input detected',
      message: 'Request contains potentially harmful content',
      timestamp: new Date().toISOString()
    });
  }
  
  next();
};

/**
 * File upload sanitization
 */
const sanitizeFileUpload = (req, res, next) => {
  if (req.files || req.file) {
    const files = req.files || [req.file];
    
    for (const file of files) {
      if (file && file.originalname) {
        // Sanitize filename
        file.originalname = file.originalname
          .replace(/[^a-zA-Z0-9._-]/g, '') // Remove special characters
          .slice(0, 255); // Limit filename length
        
        // Check file extension
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.doc', '.docx', '.txt'];
        const fileExt = path.extname(file.originalname).toLowerCase();
        
        if (!allowedExtensions.includes(fileExt)) {
          return res.status(400).json({
            error: 'Invalid file type',
            message: `File type ${fileExt} is not allowed`,
            allowedTypes: allowedExtensions,
            timestamp: new Date().toISOString()
          });
        }
      }
    }
  }
  
  next();
};

/**
 * Complete security middleware stack
 */
const securityMiddleware = [
  mongoSanitizeMiddleware,
  sanitizeInput,
  sqlSanitize
];

module.exports = {
  sanitizeString,
  sanitizeEmail,
  sanitizeUrl,
  sanitizePhone,
  sanitizeJSON,
  sanitizeObject,
  sanitizeBody,
  sanitizeQuery,
  sanitizeParams,
  sanitizeInput,
  sanitizeFileUpload,
  mongoSanitizeMiddleware,
  sqlSanitize,
  securityMiddleware
};
