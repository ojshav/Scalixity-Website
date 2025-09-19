const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define colors for each level
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Tell winston that you want to link the colors
winston.addColors(colors);

// Define format for logs
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.errors({ stack: true }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}${info.stack ? '\n' + info.stack : ''}`
  )
);

// Define format for file logs (without colors)
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');

// Define which transports the logger must use
const transports = [
  // Console transport
  new winston.transports.Console({
    format: format,
    level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
  }),
  
  // Error log file transport
  new DailyRotateFile({
    filename: path.join(logsDir, 'error-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    level: 'error',
    format: fileFormat,
    maxSize: '20m',
    maxFiles: '14d',
    zippedArchive: true,
  }),
  
  // Combined log file transport
  new DailyRotateFile({
    filename: path.join(logsDir, 'combined-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    format: fileFormat,
    maxSize: '20m',
    maxFiles: '14d',
    zippedArchive: true,
  }),
  
  // HTTP requests log
  new DailyRotateFile({
    filename: path.join(logsDir, 'http-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    level: 'http',
    format: fileFormat,
    maxSize: '20m',
    maxFiles: '7d',
    zippedArchive: true,
  }),
];

// Create the logger
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
  levels,
  format,
  transports,
  exceptionHandlers: [
    new DailyRotateFile({
      filename: path.join(logsDir, 'exceptions-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      format: fileFormat,
      maxSize: '20m',
      maxFiles: '14d',
      zippedArchive: true,
    }),
  ],
  rejectionHandlers: [
    new DailyRotateFile({
      filename: path.join(logsDir, 'rejections-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      format: fileFormat,
      maxSize: '20m',
      maxFiles: '14d',
      zippedArchive: true,
    }),
  ],
});

// HTTP request logging middleware
const httpLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logData = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      contentLength: res.get('Content-Length'),
    };
    
    if (res.statusCode >= 400) {
      logger.warn('HTTP Request', logData);
    } else {
      logger.http('HTTP Request', logData);
    }
  });
  
  next();
};

// Security event logger
const logSecurityEvent = (event, details, req) => {
  const securityLog = {
    event,
    details,
    ip: req?.ip || req?.connection?.remoteAddress,
    userAgent: req?.get('User-Agent'),
    timestamp: new Date().toISOString(),
    url: req?.originalUrl,
    method: req?.method
  };
  
  logger.warn('Security Event', securityLog);
};

// Database operation logger
const logDatabaseOperation = (operation, table, details = {}) => {
  const dbLog = {
    operation,
    table,
    details,
    timestamp: new Date().toISOString()
  };
  
  logger.info('Database Operation', dbLog);
};

// Error logger with context
const logError = (error, context = {}) => {
  const errorLog = {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString()
  };
  
  logger.error('Application Error', errorLog);
};

module.exports = {
  logger,
  httpLogger,
  logSecurityEvent,
  logDatabaseOperation,
  logError
};