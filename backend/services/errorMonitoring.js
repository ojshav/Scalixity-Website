/**
 * Comprehensive Error Monitoring and Logging Service
 * Provides real-time error tracking, performance monitoring, and alerting
 */

const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');

class ErrorMonitoringService extends EventEmitter {
  constructor() {
    super();
    
    this.config = {
      logDirectory: path.join(__dirname, '../logs'),
      maxLogFiles: parseInt(process.env.MAX_LOG_FILES) || 30,
      maxFileSize: parseInt(process.env.MAX_LOG_FILE_SIZE) || 10 * 1024 * 1024, // 10MB
      alertThresholds: {
        errorRate: parseFloat(process.env.ERROR_RATE_THRESHOLD) || 5.0, // 5%
        responseTime: parseInt(process.env.RESPONSE_TIME_THRESHOLD) || 2000, // 2 seconds
        memoryUsage: parseFloat(process.env.MEMORY_USAGE_THRESHOLD) || 0.8 // 80%
      }
    };

    this.metrics = {
      errors: {
        total: 0,
        byType: {},
        byEndpoint: {},
        recent: []
      },
      performance: {
        requests: 0,
        totalResponseTime: 0,
        avgResponseTime: 0,
        slowRequests: 0
      },
      system: {
        startTime: Date.now(),
        uptime: 0,
        memoryUsage: { used: 0, total: 0, percentage: 0 },
        cpuUsage: 0
      },
      alerts: {
        sent: 0,
        lastAlert: null,
        cooldown: 5 * 60 * 1000 // 5 minutes
      }
    };

    this.initialize();
  }

  /**
   * Initialize error monitoring service
   */
  async initialize() {
    try {
      // Create logs directory if it doesn't exist
      await this.ensureLogDirectory();
      
      // Setup periodic metrics collection
      this.setupMetricsCollection();
      
      // Setup log rotation
      this.setupLogRotation();
      
      // Setup process monitoring
      this.setupProcessMonitoring();
      
      console.log('[ERROR-MONITOR] Error monitoring service initialized');
    } catch (error) {
      console.error('[ERROR-MONITOR] Failed to initialize:', error);
    }
  }

  /**
   * Ensure log directory exists
   */
  async ensureLogDirectory() {
    try {
      await fs.access(this.config.logDirectory);
    } catch {
      await fs.mkdir(this.config.logDirectory, { recursive: true });
      console.log(`[ERROR-MONITOR] Created log directory: ${this.config.logDirectory}`);
    }
  }

  /**
   * Record an error with detailed context
   */
  async recordError(error, context = {}) {
    try {
      // Prevent infinite loops by checking if we're already handling an error
      if (this._handlingError) {
        console.error('[ERROR-MONITOR] Preventing recursive error handling:', error.message);
        return;
      }
      
      this._handlingError = true;
      
      const errorRecord = {
        timestamp: new Date().toISOString(),
        message: error.message,
        stack: error.stack,
        type: error.constructor.name,
        severity: this.categorizeError(error),
        context: {
          ...context,
          userAgent: context.req?.headers?.['user-agent'],
          ip: context.req?.ip,
          method: context.req?.method,
          url: context.req?.originalUrl,
          userId: context.req?.user?.id
        },
        environment: process.env.NODE_ENV || 'development',
        version: process.env.APP_VERSION || '1.0.0-phase6'
      };

      // Update metrics
      this.updateErrorMetrics(errorRecord);
      
      // Log to file
      await this.logToFile('errors', errorRecord);
      
      // Check for alerts
      this.checkAlertThresholds();
      
      // Emit event for real-time monitoring
      this.emit('error', errorRecord);
      
      return errorRecord;
    } catch (recordError) {
      // Fallback to console logging if error recording fails
      console.error('[ERROR-MONITOR] Failed to record error:', recordError.message);
      console.error('[ERROR-MONITOR] Original error:', error.message);
      return null;
    } finally {
      this._handlingError = false;
    }
  }

  /**
   * Record performance metrics
   */
  recordPerformance(req, res, responseTime) {
    const performanceRecord = {
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      responseTime,
      userAgent: req.headers['user-agent'],
      ip: req.ip,
      userId: req.user?.id
    };

    // Update performance metrics
    this.updatePerformanceMetrics(performanceRecord);
    
    // Log slow requests
    if (responseTime > this.config.alertThresholds.responseTime) {
      this.logToFile('slow-requests', performanceRecord);
      this.emit('slowRequest', performanceRecord);
    }
    
    // Log all requests (optional, for debugging)
    if (process.env.LOG_ALL_REQUESTS === 'true') {
      this.logToFile('requests', performanceRecord);
    }
  }

  /**
   * Categorize error severity
   */
  categorizeError(error) {
    // Critical errors that require immediate attention
    const criticalPatterns = [
      /database.*connection/i,
      /cannot connect/i,
      /timeout/i,
      /permission denied/i,
      /out of memory/i
    ];

    // High priority errors
    const highPatterns = [
      /validation.*failed/i,
      /authentication.*failed/i,
      /authorization.*failed/i,
      /rate.*limit/i
    ];

    // Medium priority errors
    const mediumPatterns = [
      /not found/i,
      /invalid.*input/i,
      /bad request/i
    ];

    const message = error.message.toLowerCase();
    
    if (criticalPatterns.some(pattern => pattern.test(message))) {
      return 'critical';
    } else if (highPatterns.some(pattern => pattern.test(message))) {
      return 'high';
    } else if (mediumPatterns.some(pattern => pattern.test(message))) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  /**
   * Update error metrics
   */
  updateErrorMetrics(errorRecord) {
    this.metrics.errors.total++;
    
    // Track by type
    if (!this.metrics.errors.byType[errorRecord.type]) {
      this.metrics.errors.byType[errorRecord.type] = 0;
    }
    this.metrics.errors.byType[errorRecord.type]++;
    
    // Track by endpoint
    const endpoint = errorRecord.context.url || 'unknown';
    if (!this.metrics.errors.byEndpoint[endpoint]) {
      this.metrics.errors.byEndpoint[endpoint] = 0;
    }
    this.metrics.errors.byEndpoint[endpoint]++;
    
    // Keep recent errors (last 100)
    this.metrics.errors.recent.unshift(errorRecord);
    if (this.metrics.errors.recent.length > 100) {
      this.metrics.errors.recent = this.metrics.errors.recent.slice(0, 100);
    }
  }

  /**
   * Update performance metrics
   */
  updatePerformanceMetrics(performanceRecord) {
    this.metrics.performance.requests++;
    this.metrics.performance.totalResponseTime += performanceRecord.responseTime;
    this.metrics.performance.avgResponseTime = 
      this.metrics.performance.totalResponseTime / this.metrics.performance.requests;
    
    if (performanceRecord.responseTime > this.config.alertThresholds.responseTime) {
      this.metrics.performance.slowRequests++;
    }
  }

  /**
   * Setup periodic metrics collection
   */
  setupMetricsCollection() {
    setInterval(() => {
      this.collectSystemMetrics();
    }, 30000); // Every 30 seconds
  }

  /**
   * Collect system metrics
   */
  collectSystemMetrics() {
    const memUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    
    this.metrics.system.uptime = Date.now() - this.metrics.system.startTime;
    this.metrics.system.memoryUsage = {
      used: memUsage.heapUsed,
      total: memUsage.heapTotal,
      percentage: (memUsage.heapUsed / memUsage.heapTotal) * 100
    };
    this.metrics.system.cpuUsage = (cpuUsage.user + cpuUsage.system) / 1000000; // Convert to seconds
    
    // Check memory usage threshold
    if (this.metrics.system.memoryUsage.percentage > this.config.alertThresholds.memoryUsage * 100) {
      this.emit('highMemoryUsage', this.metrics.system.memoryUsage);
    }
  }

  /**
   * Check alert thresholds
   */
  checkAlertThresholds() {
    const now = Date.now();
    
    // Cooldown check
    if (this.metrics.alerts.lastAlert && 
        (now - this.metrics.alerts.lastAlert) < this.metrics.alerts.cooldown) {
      return;
    }
    
    // Calculate error rate
    const errorRate = this.metrics.performance.requests > 0 ? 
      (this.metrics.errors.total / this.metrics.performance.requests) * 100 : 0;
    
    if (errorRate > this.config.alertThresholds.errorRate) {
      this.sendAlert('high_error_rate', {
        errorRate: errorRate.toFixed(2),
        threshold: this.config.alertThresholds.errorRate,
        totalErrors: this.metrics.errors.total,
        totalRequests: this.metrics.performance.requests
      });
    }
  }

  /**
   * Send alert (can be extended to integrate with external services)
   */
  async sendAlert(type, data) {
    const alert = {
      timestamp: new Date().toISOString(),
      type,
      severity: 'warning',
      data,
      environment: process.env.NODE_ENV
    };
    
    console.warn(`🚨 [ALERT] ${type.toUpperCase()}:`, data);
    
    // Log alert
    await this.logToFile('alerts', alert);
    
    // Update alert metrics
    this.metrics.alerts.sent++;
    this.metrics.alerts.lastAlert = Date.now();
    
    // Emit alert event
    this.emit('alert', alert);
    
    // TODO: Integrate with external alerting services (Slack, email, etc.)
  }

  /**
   * Log data to file
   */
  async logToFile(type, data) {
    try {
      const filename = `${type}-${new Date().toISOString().split('T')[0]}.log`;
      const filepath = path.join(this.config.logDirectory, filename);
      const logEntry = JSON.stringify(data) + '\n';
      
      await fs.appendFile(filepath, logEntry);
    } catch (error) {
      console.error(`[ERROR-MONITOR] Failed to log to file:`, error);
    }
  }

  /**
   * Setup log rotation
   */
  setupLogRotation() {
    // Run daily at midnight
    const now = new Date();
    const msUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) - now;
    
    setTimeout(() => {
      this.rotateLogFiles();
      // Setup daily rotation
      setInterval(() => this.rotateLogFiles(), 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
  }

  /**
   * Rotate and clean old log files
   */
  async rotateLogFiles() {
    try {
      const files = await fs.readdir(this.config.logDirectory);
      const logFiles = files.filter(file => file.endsWith('.log'));
      
      // Sort by creation time
      const fileStats = await Promise.all(
        logFiles.map(async file => {
          const stat = await fs.stat(path.join(this.config.logDirectory, file));
          return { file, mtime: stat.mtime };
        })
      );
      
      fileStats.sort((a, b) => b.mtime - a.mtime);
      
      // Remove old files
      if (fileStats.length > this.config.maxLogFiles) {
        const filesToRemove = fileStats.slice(this.config.maxLogFiles);
        
        for (const { file } of filesToRemove) {
          await fs.unlink(path.join(this.config.logDirectory, file));
          console.log(`[ERROR-MONITOR] Removed old log file: ${file}`);
        }
      }
      
      console.log(`[ERROR-MONITOR] Log rotation completed. Kept ${Math.min(fileStats.length, this.config.maxLogFiles)} files.`);
    } catch (error) {
      console.error('[ERROR-MONITOR] Log rotation failed:', error);
    }
  }

  /**
   * Setup process monitoring (removed to prevent infinite loops)
   * Global error handlers should be managed at the application level
   */
  setupProcessMonitoring() {
    // Process monitoring disabled to prevent recursive error loops
    // Global error handlers are managed by the main server file
    console.log('[ERROR-MONITOR] Process monitoring disabled to prevent infinite loops');
  }

  /**
   * Get comprehensive metrics
   */
  getMetrics() {
    return {
      ...this.metrics,
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.metrics.system.startTime
    };
  }

  /**
   * Get health status
   */
  getHealthStatus() {
    const errorRate = this.metrics.performance.requests > 0 ? 
      (this.metrics.errors.total / this.metrics.performance.requests) * 100 : 0;
    
    const memoryUsagePercent = this.metrics.system.memoryUsage.percentage;
    const avgResponseTime = this.metrics.performance.avgResponseTime;
    
    let status = 'healthy';
    const issues = [];
    
    if (errorRate > this.config.alertThresholds.errorRate) {
      status = 'degraded';
      issues.push(`High error rate: ${errorRate.toFixed(2)}%`);
    }
    
    if (memoryUsagePercent > this.config.alertThresholds.memoryUsage * 100) {
      status = 'degraded';
      issues.push(`High memory usage: ${memoryUsagePercent.toFixed(2)}%`);
    }
    
    if (avgResponseTime > this.config.alertThresholds.responseTime) {
      status = 'degraded';
      issues.push(`Slow response time: ${avgResponseTime.toFixed(2)}ms`);
    }
    
    return {
      status,
      errorRate: parseFloat(errorRate.toFixed(2)),
      memoryUsage: parseFloat(memoryUsagePercent.toFixed(2)),
      avgResponseTime: parseFloat(avgResponseTime.toFixed(2)),
      issues,
      uptime: this.metrics.system.uptime
    };
  }

  /**
   * Generate performance report
   */
  generateReport(timeframe = '24h') {
    const now = Date.now();
    const timeframeMs = timeframe === '24h' ? 24 * 60 * 60 * 1000 : 
                      timeframe === '1h' ? 60 * 60 * 1000 : 
                      24 * 60 * 60 * 1000;
    
    const cutoff = now - timeframeMs;
    
    // Filter recent errors
    const recentErrors = this.metrics.errors.recent.filter(
      error => new Date(error.timestamp).getTime() > cutoff
    );
    
    return {
      timeframe,
      generated: new Date().toISOString(),
      summary: {
        totalErrors: recentErrors.length,
        totalRequests: this.metrics.performance.requests,
        errorRate: this.metrics.performance.requests > 0 ? 
          ((recentErrors.length / this.metrics.performance.requests) * 100).toFixed(2) : 0,
        avgResponseTime: this.metrics.performance.avgResponseTime.toFixed(2),
        slowRequests: this.metrics.performance.slowRequests
      },
      errorsByType: recentErrors.reduce((acc, error) => {
        acc[error.type] = (acc[error.type] || 0) + 1;
        return acc;
      }, {}),
      errorsBySeverity: recentErrors.reduce((acc, error) => {
        acc[error.severity] = (acc[error.severity] || 0) + 1;
        return acc;
      }, {}),
      systemMetrics: this.metrics.system,
      topErrors: recentErrors.slice(0, 10)
    };
  }
}

// Create singleton instance
const errorMonitoringService = new ErrorMonitoringService();

module.exports = errorMonitoringService;
