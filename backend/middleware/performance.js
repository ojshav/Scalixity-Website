/**
 * Performance Monitoring Middleware
 * Tracks request/response times, system metrics, and provides real-time performance insights
 */

const errorMonitoringService = require('../services/errorMonitoring');

/**
 * Request performance tracking middleware
 */
const performanceTracker = (req, res, next) => {
  const startTime = Date.now();
  const startHrTime = process.hrtime();
  
  // Track request start
  req.startTime = startTime;
  req.startHrTime = startHrTime;
  
  // Override res.end to capture response time
  const originalEnd = res.end;
  res.end = function(chunk, encoding) {
    const endTime = Date.now();
    const hrDiff = process.hrtime(startHrTime);
    const responseTime = endTime - startTime;
    const preciseResponseTime = (hrDiff[0] * 1000) + (hrDiff[1] / 1000000);
    
    // Record performance metrics
    errorMonitoringService.recordPerformance(req, res, responseTime);
    
    // Add performance headers only if not already sent
    if (!res.headersSent) {
      res.setHeader('X-Response-Time', `${preciseResponseTime.toFixed(3)}ms`);
      res.setHeader('X-Timestamp', new Date().toISOString());
    }
    
    // Log slow requests
    if (responseTime > 2000) {
      console.warn(`[PERFORMANCE] Slow request: ${req.method} ${req.originalUrl} - ${responseTime}ms`);
    }
    
    // Call original end method
    originalEnd.call(this, chunk, encoding);
  };
  
  next();
};

/**
 * Memory usage tracking middleware
 */
const memoryTracker = (req, res, next) => {
  const memBefore = process.memoryUsage();
  
  res.on('finish', () => {
    const memAfter = process.memoryUsage();
    const memDiff = {
      rss: memAfter.rss - memBefore.rss,
      heapUsed: memAfter.heapUsed - memBefore.heapUsed,
      heapTotal: memAfter.heapTotal - memBefore.heapTotal,
      external: memAfter.external - memBefore.external
    };
    
    // Log significant memory increases
    if (memDiff.heapUsed > 10 * 1024 * 1024) { // 10MB
      console.warn(`[MEMORY] High memory usage increase: ${(memDiff.heapUsed / 1024 / 1024).toFixed(2)}MB for ${req.method} ${req.originalUrl}`);
    }
    
    // Add memory usage headers in development
    if (process.env.NODE_ENV === 'development' && !res.headersSent) {
      res.setHeader('X-Memory-Used', `${(memAfter.heapUsed / 1024 / 1024).toFixed(2)}MB`);
      res.setHeader('X-Memory-Total', `${(memAfter.heapTotal / 1024 / 1024).toFixed(2)}MB`);
    }
  });
  
  next();
};

/**
 * Database query performance tracking
 */
const dbPerformanceTracker = (req, res, next) => {
  req.dbQueries = [];
  req.dbQueryCount = 0;
  req.dbQueryTime = 0;
  
  // Simple tracking without method override to prevent infinite loops
  req.trackDbQuery = (type, duration, success = true, error = null) => {
    req.dbQueryCount++;
    req.dbQueryTime += duration;
    req.dbQueries.push({ type, duration, success, error });
  };
  
  res.on('finish', () => {
    // Add database performance headers
    if (req.dbQueryCount > 0 && !res.headersSent) {
      res.setHeader('X-DB-Queries', req.dbQueryCount.toString());
      res.setHeader('X-DB-Time', `${req.dbQueryTime}ms`);
    }
    
    // Log excessive database usage
    if (req.dbQueryCount > 10) {
      console.warn(`[DB-PERFORMANCE] High query count: ${req.dbQueryCount} queries for ${req.method} ${req.originalUrl}`);
    }
    if (req.dbQueryTime > 1000) {
      console.warn(`[DB-PERFORMANCE] Slow database operations: ${req.dbQueryTime}ms total for ${req.method} ${req.originalUrl}`);
    }
  });
  
  next();
};

/**
 * Request size tracking middleware (simplified to avoid stream conflicts)
 */
const requestSizeTracker = (req, res, next) => {
  let requestSize = 0;
  
  // Get size from Content-Length header to avoid consuming the stream
  if (req.headers['content-length']) {
    requestSize = parseInt(req.headers['content-length']);
    req.requestSize = requestSize;
    
    // Log large requests
    if (requestSize > 5 * 1024 * 1024) { // 5MB
      console.warn(`[REQUEST-SIZE] Large request: ${(requestSize / 1024 / 1024).toFixed(2)}MB for ${req.method} ${req.originalUrl}`);
    }
  } else {
    req.requestSize = 0;
  }
  
  next();
};

/**
 * Response size tracking middleware
 */
const responseSizeTracker = (req, res, next) => {
  const originalWrite = res.write;
  const originalEnd = res.end;
  let responseSize = 0;
  
  res.write = function(chunk, encoding) {
    if (chunk) {
      responseSize += Buffer.isBuffer(chunk) ? chunk.length : Buffer.byteLength(chunk, encoding);
    }
    return originalWrite.call(this, chunk, encoding);
  };
  
  res.end = function(chunk, encoding) {
    if (chunk) {
      responseSize += Buffer.isBuffer(chunk) ? chunk.length : Buffer.byteLength(chunk, encoding);
    }
    
    // Only set header if headers haven't been sent yet
    if (!res.headersSent) {
      res.setHeader('X-Response-Size', `${responseSize} bytes`);
    }
    
    // Log large responses
    if (responseSize > 10 * 1024 * 1024) { // 10MB
      console.warn(`[RESPONSE-SIZE] Large response: ${(responseSize / 1024 / 1024).toFixed(2)}MB for ${req.method} ${req.originalUrl}`);
    }
    
    return originalEnd.call(this, chunk, encoding);
  };
  
  next();
};

/**
 * CPU usage tracking middleware
 */
const cpuTracker = (req, res, next) => {
  const startCpuUsage = process.cpuUsage();
  
  res.on('finish', () => {
    const endCpuUsage = process.cpuUsage(startCpuUsage);
    const cpuTime = (endCpuUsage.user + endCpuUsage.system) / 1000; // Convert to milliseconds
    
    // Add CPU usage header in development
    if (process.env.NODE_ENV === 'development' && !res.headersSent) {
      res.setHeader('X-CPU-Time', `${cpuTime.toFixed(3)}ms`);
    }
    
    // Log high CPU usage
    if (cpuTime > 100) { // 100ms
      console.warn(`[CPU] High CPU usage: ${cpuTime.toFixed(3)}ms for ${req.method} ${req.originalUrl}`);
    }
  });
  
  next();
};

/**
 * Error tracking middleware
 */
const errorTracker = (err, req, res, next) => {
  // Record error with context
  errorMonitoringService.recordError(err, {
    req,
    responseTime: req.startTime ? Date.now() - req.startTime : null,
    dbQueries: req.dbQueries || [],
    requestSize: req.requestSize || 0
  });
  
  next(err);
};

/**
 * Performance summary middleware
 */
const performanceSummary = (req, res, next) => {
  res.on('finish', () => {
    const responseTime = req.startTime ? Date.now() - req.startTime : 0;
    
    // Create performance summary
    const summary = {
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      responseTime,
      dbQueries: req.dbQueryCount || 0,
      dbTime: req.dbQueryTime || 0,
      requestSize: req.requestSize || 0,
      userAgent: req.headers['user-agent'],
      ip: req.ip
    };
    
    // Log performance summary for slow requests
    if (responseTime > 1000 || (req.dbQueryCount && req.dbQueryCount > 5)) {
      console.log('[PERFORMANCE-SUMMARY]', JSON.stringify(summary));
    }
  });
  
  next();
};

/**
 * Health check middleware
 */
const healthCheck = (req, res, next) => {
  // Add health status to all responses in development
  if (process.env.NODE_ENV === 'development' && !res.headersSent) {
    const memUsage = process.memoryUsage();
    res.setHeader('X-Health-Memory', `${(memUsage.heapUsed / 1024 / 1024).toFixed(2)}MB`);
    res.setHeader('X-Health-Uptime', `${Math.floor(process.uptime())}s`);
  }
  
  next();
};

/**
 * Combined performance middleware stack
 */
const performanceMiddleware = [
  performanceTracker,
  memoryTracker,
  dbPerformanceTracker,
  requestSizeTracker,
  responseSizeTracker,
  cpuTracker,
  performanceSummary,
  healthCheck
];

module.exports = {
  performanceTracker,
  memoryTracker,
  dbPerformanceTracker,
  requestSizeTracker,
  responseSizeTracker,
  cpuTracker,
  errorTracker,
  performanceSummary,
  healthCheck,
  performanceMiddleware
};
