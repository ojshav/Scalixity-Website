/**
 * Enhanced CORS Configuration with Security Policies
 * Implements environment-specific CORS policies and security headers
 */

const cors = require('cors');

// Environment-specific allowed origins
const getAllowedOrigins = () => {
  const env = process.env.NODE_ENV || 'development';
  
  switch (env) {
    case 'production':
      return [
        'https://scalixity.com',
        'https://www.scalixity.com',
        'https://admin.scalixity.com',
        process.env.FRONTEND_URL
      ].filter(Boolean);
    
    case 'staging':
      return [
        'https://staging.scalixity.com',
        'https://dev.scalixity.com',
        process.env.STAGING_URL
      ].filter(Boolean);
    
    case 'development':
    default:
      return [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:5173',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3001',
        'http://127.0.0.1:5173',
        process.env.DEV_URL
      ].filter(Boolean);
  }
};

// Enhanced CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = getAllowedOrigins();
    
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin && process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    
    if (!origin && process.env.NODE_ENV === 'production') {
      console.warn('[CORS] Request with no origin blocked in production');
      return callback(new Error('Origin not allowed by CORS policy'), false);
    }
    
    if (allowedOrigins.includes(origin)) {
      console.log(`[CORS] Allowed origin: ${origin}`);
      return callback(null, true);
    }
    
    console.warn(`[CORS] Blocked origin: ${origin}`);
    callback(new Error(`Origin ${origin} not allowed by CORS policy`), false);
  },
  
  // Allowed HTTP methods
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  
  // Allowed headers
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control',
    'X-API-Key'
  ],
  
  // Headers exposed to the client
  exposedHeaders: [
    'X-Total-Count',
    'X-Page-Count',
    'X-Rate-Limit-Remaining',
    'X-Rate-Limit-Reset'
  ],
  
  // Allow credentials (cookies, authorization headers)
  credentials: true,
  
  // Preflight cache duration (24 hours)
  maxAge: 24 * 60 * 60,
  
  // Handle preflight requests
  preflightContinue: false,
  optionsSuccessStatus: 200
};

/**
 * CORS middleware with environment-specific configuration
 */
const corsMiddleware = cors(corsOptions);

/**
 * Enhanced CORS middleware with logging and security checks
 */
const enhancedCors = (req, res, next) => {
  // Log CORS requests in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[CORS] ${req.method} request from origin: ${req.headers.origin || 'no-origin'}`);
  }
  
  // Apply CORS middleware
  corsMiddleware(req, res, (err) => {
    if (err) {
      console.error(`[CORS] Error: ${err.message}`);
      return res.status(403).json({
        error: 'CORS Error',
        message: 'Origin not allowed by CORS policy',
        timestamp: new Date().toISOString()
      });
    }
    
    // Add additional security headers
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    
    next();
  });
};

/**
 * Strict CORS for sensitive endpoints
 */
const strictCors = (req, res, next) => {
  const allowedOrigins = getAllowedOrigins();
  const origin = req.headers.origin;
  
  if (!origin || !allowedOrigins.includes(origin)) {
    console.warn(`[STRICT-CORS] Blocked request from origin: ${origin || 'no-origin'}`);
    return res.status(403).json({
      error: 'Access Forbidden',
      message: 'Strict CORS policy violation',
      timestamp: new Date().toISOString()
    });
  }
  
  // Apply strict headers
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '300'); // 5 minutes for strict endpoints
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
};

/**
 * API-specific CORS for external integrations
 */
const apiCors = cors({
  origin: (origin, callback) => {
    const allowedOrigins = getAllowedOrigins();
    const apiKeys = process.env.ALLOWED_API_KEYS ? process.env.ALLOWED_API_KEYS.split(',') : [];
    
    // Check for API key in headers
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKeys.includes(apiKey)) {
      return callback(null, true);
    }
    
    // Standard origin check
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    callback(new Error('API access denied'), false);
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'X-API-Key'],
  credentials: false,
  maxAge: 3600 // 1 hour for API endpoints
});

/**
 * Development-only CORS (permissive)
 */
const devCors = cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: '*'
});

/**
 * Get appropriate CORS middleware based on environment and endpoint
 */
const getCorsMiddleware = (type = 'default') => {
  const env = process.env.NODE_ENV || 'development';
  
  if (env === 'development' && type === 'dev') {
    return devCors;
  }
  
  switch (type) {
    case 'strict':
      return strictCors;
    case 'api':
      return apiCors;
    case 'enhanced':
    default:
      return enhancedCors;
  }
};

/**
 * CORS configuration info (for debugging)
 */
const getCorsInfo = () => ({
  environment: process.env.NODE_ENV || 'development',
  allowedOrigins: getAllowedOrigins(),
  methods: corsOptions.methods,
  credentials: corsOptions.credentials,
  maxAge: corsOptions.maxAge
});

module.exports = {
  corsMiddleware,
  enhancedCors,
  strictCors,
  apiCors,
  devCors,
  getCorsMiddleware,
  getCorsInfo
};
