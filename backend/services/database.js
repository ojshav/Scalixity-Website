/**
 * Enhanced Database Service Layer with Performance Optimization
 * Provides optimized Prisma and MySQL2 connections with monitoring and pooling
 * Ensures high performance and reliability during operation
 */

const { PrismaClient } = require('../generated/prisma');
const mysql = require('mysql2/promise');
const EventEmitter = require('events');

// Database performance monitoring
class DatabaseMonitor extends EventEmitter {
  constructor() {
    super();
    this.metrics = {
      connections: {
        mysql: { active: 0, total: 0, errors: 0, peak: 0 },
        prisma: { active: 0, total: 0, errors: 0, peak: 0 }
      },
      queries: {
        total: 0,
        slow: 0,
        errors: 0,
        avgResponseTime: 0,
        totalResponseTime: 0
      },
      performance: {
        startTime: Date.now(),
        lastQuery: null,
        slowQueryThreshold: parseInt(process.env.SLOW_QUERY_THRESHOLD) || 1000
      }
    };
    
    // Monitor metrics every minute
    setInterval(() => this.logMetrics(), 60000);
  }

  recordQuery(duration, success = true, type = 'unknown') {
    this.metrics.queries.total++;
    this.metrics.queries.totalResponseTime += duration;
    
    if (!success) {
      this.metrics.queries.errors++;
      console.error(`[DB-MONITOR] Query failed - Type: ${type}, Duration: ${duration}ms`);
    }
    
    if (duration > this.metrics.performance.slowQueryThreshold) {
      this.metrics.queries.slow++;
      console.warn(`[DB-MONITOR] Slow query detected - Type: ${type}, Duration: ${duration}ms`);
    }
    
    // Calculate average response time
    this.metrics.queries.avgResponseTime = 
      this.metrics.queries.totalResponseTime / this.metrics.queries.total;
    
    this.metrics.performance.lastQuery = new Date();
    this.emit('query', { duration, success, type });
  }

  recordConnection(database, action) {
    const db = this.metrics.connections[database];
    if (!db) return;

    switch (action) {
      case 'connect':
        db.active++;
        db.total++;
        db.peak = Math.max(db.peak, db.active);
        break;
      case 'disconnect':
        db.active = Math.max(0, db.active - 1);
        break;
      case 'error':
        db.errors++;
        break;
    }
  }

  logMetrics() {
    const uptime = Math.floor((Date.now() - this.metrics.performance.startTime) / 1000);
    console.log(`[DB-MONITOR] Uptime: ${uptime}s | Queries: ${this.metrics.queries.total} | Avg Response: ${this.metrics.queries.avgResponseTime.toFixed(2)}ms | Slow: ${this.metrics.queries.slow} | Errors: ${this.metrics.queries.errors}`);
  }

  getMetrics() {
    return {
      ...this.metrics,
      uptime: Date.now() - this.metrics.performance.startTime
    };
  }

  getHealthStatus() {
    const metrics = this.getMetrics();
    const errorRate = metrics.queries.total > 0 ? (metrics.queries.errors / metrics.queries.total) * 100 : 0;
    const slowQueryRate = metrics.queries.total > 0 ? (metrics.queries.slow / metrics.queries.total) * 100 : 0;
    
    return {
      status: errorRate < 5 && slowQueryRate < 10 ? 'healthy' : 'degraded',
      errorRate: parseFloat(errorRate.toFixed(2)),
      slowQueryRate: parseFloat(slowQueryRate.toFixed(2)),
      avgResponseTime: parseFloat(metrics.queries.avgResponseTime.toFixed(2)),
      activeConnections: {
        mysql: metrics.connections.mysql.active,
        prisma: metrics.connections.prisma.active
      }
    };
  }
}

class DatabaseService {
  constructor() {
    this.monitor = new DatabaseMonitor();
    
    // Enhanced Prisma Client with optimized configuration
    this.prisma = new PrismaClient({
      log: [
        { level: 'query', emit: 'event' },
        { level: 'info', emit: 'stdout' },
        { level: 'warn', emit: 'stdout' },
        { level: 'error', emit: 'stdout' }
      ],
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        }
      }
    });

    // Enhanced MySQL2 Pool with performance optimization
    this.mysqlPool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'scalixity_admin',
      
      // Connection pool optimization
      waitForConnections: true,
      connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT) || 20,
      queueLimit: parseInt(process.env.DB_QUEUE_LIMIT) || 50,
      // Note: acquireTimeout, timeout, reconnect options removed for MySQL2 compatibility
      
      // Performance settings
      charset: 'utf8mb4',
      timezone: 'Z',
      supportBigNumbers: true,
      bigNumberStrings: false,
      dateStrings: false,
      
      // SSL settings for production
      ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
      } : false
    });

    this.setupEventListeners();
    this.setupHealthChecks();
  }

  /**
   * Setup event listeners for monitoring
   */
  setupEventListeners() {
    // Prisma query monitoring
    this.prisma.$on('query', (e) => {
      const duration = parseInt(e.duration);
      this.monitor.recordQuery(duration, true, 'prisma');
    });

    // MySQL pool event listeners
    this.mysqlPool.on('connection', () => {
      this.monitor.recordConnection('mysql', 'connect');
    });

    this.mysqlPool.on('error', (err) => {
      console.error('[DB-POOL] MySQL pool error:', err);
      this.monitor.recordConnection('mysql', 'error');
    });

    this.mysqlPool.on('release', () => {
      this.monitor.recordConnection('mysql', 'disconnect');
    });
  }

  /**
   * Setup periodic health checks
   */
  setupHealthChecks() {
    // Health check every 5 minutes
    setInterval(async () => {
      try {
        await this.testConnections();
      } catch (error) {
        console.error('[DB-HEALTH] Health check failed:', error);
      }
    }, 5 * 60 * 1000);
  }

  /**
   * Enhanced Prisma query with monitoring
   */
  async executeQuery(queryFn, type = 'unknown') {
    const startTime = Date.now();
    try {
      const result = await queryFn();
      const duration = Date.now() - startTime;
      this.monitor.recordQuery(duration, true, type);
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.monitor.recordQuery(duration, false, type);
      throw error;
    }
  }

  /**
   * Enhanced MySQL query with monitoring
   */
  async executeMySQLQuery(query, params = [], type = 'mysql') {
    const startTime = Date.now();
    try {
      const result = await this.mysqlPool.query(query, params);
      const duration = Date.now() - startTime;
      this.monitor.recordQuery(duration, true, type);
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.monitor.recordQuery(duration, false, type);
      throw error;
    }
  }

  /**
   * Get Prisma client instance
   */
  getPrisma() {
    return this.prisma;
  }

  /**
   * Get MySQL2 pool instance (for legacy code)
   */
  getMySQLPool() {
    return this.mysqlPool;
  }

  /**
   * Get database performance metrics
   */
  getMetrics() {
    return this.monitor.getMetrics();
  }

  /**
   * Get database health status
   */
  getHealthStatus() {
    return this.monitor.getHealthStatus();
  }

  /**
   * Enhanced connection testing with detailed reporting
   */
  async testConnections() {
    const results = {
      prisma: { status: false, responseTime: 0, error: null },
      mysql: { status: false, responseTime: 0, error: null }
    };

    // Test Prisma connection
    try {
      const startTime = Date.now();
      await this.prisma.$queryRaw`SELECT 1 as test`;
      results.prisma.responseTime = Date.now() - startTime;
      results.prisma.status = true;
      console.log(`✅ Prisma connection successful (${results.prisma.responseTime}ms)`);
    } catch (error) {
      results.prisma.error = error.message;
      console.error('❌ Prisma connection failed:', error.message);
    }

    // Test MySQL2 connection
    try {
      const startTime = Date.now();
      await this.mysqlPool.query('SELECT 1 as test');
      results.mysql.responseTime = Date.now() - startTime;
      results.mysql.status = true;
      console.log(`✅ MySQL2 connection successful (${results.mysql.responseTime}ms)`);
    } catch (error) {
      results.mysql.error = error.message;
      console.error('❌ MySQL2 connection failed:', error.message);
    }

    const allHealthy = results.prisma.status && results.mysql.status;
    if (!allHealthy) {
      throw new Error('One or more database connections failed');
    }

    return results;
  }

  /**
   * Enhanced connection closing with proper cleanup
   */
  async closeConnections() {
    const results = {
      prisma: { status: false, error: null },
      mysql: { status: false, error: null }
    };

    // Close Prisma connection
    try {
      await this.prisma.$disconnect();
      results.prisma.status = true;
      console.log('Prisma connection closed');
    } catch (error) {
      results.prisma.error = error.message;
      console.error('Error closing Prisma connection:', error.message);
    }

    // Close MySQL2 pool
    try {
      await this.mysqlPool.end();
      results.mysql.status = true;
      console.log('MySQL2 pool closed');
    } catch (error) {
      results.mysql.error = error.message;
      console.error('Error closing MySQL2 pool:', error.message);
    }

    return results;
  }

  /**
   * Database maintenance operations
   */
  async performMaintenance() {
    console.log('[DB-MAINTENANCE] Starting database maintenance...');
    
    try {
      // Clear query cache if needed
      await this.mysqlPool.query('RESET QUERY CACHE');
      
      // Optimize tables (MySQL specific)
      const tables = ['admin_users', 'campaigns', 'projects', 'contact_submissions', 
                     'user_activity', 'technical_details', 'engagement_metrics', 
                     'demographic_data', 'analytics_data', 'services_data', 'inquiries'];
      
      for (const table of tables) {
        try {
          await this.mysqlPool.query(`OPTIMIZE TABLE ${table}`);
          console.log(`[DB-MAINTENANCE] Optimized table: ${table}`);
        } catch (error) {
          console.warn(`[DB-MAINTENANCE] Failed to optimize table ${table}:`, error.message);
        }
      }
      
      console.log('[DB-MAINTENANCE] Database maintenance completed');
      return { success: true, message: 'Maintenance completed successfully' };
    } catch (error) {
      console.error('[DB-MAINTENANCE] Database maintenance failed:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Handle graceful shutdown with enhanced cleanup
   */
  setupGracefulShutdown() {
    const gracefulShutdown = async (signal) => {
      console.log(`Received ${signal}, closing database connections...`);
      
      try {
        // Stop health checks
        clearInterval(this.healthCheckInterval);
        
        // Close connections
        const results = await this.closeConnections();
        console.log('Database service shutdown completed');
        
        return results;
      } catch (error) {
        console.error('Error during database service shutdown:', error);
        throw error;
      }
    };

    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
    process.on('uncaughtException', async (error) => {
      console.error('� Uncaught exception in database service:', error);
      await gracefulShutdown('uncaughtException');
      process.exit(1);
    });
  }
}

// Create singleton instance
const databaseService = new DatabaseService();

module.exports = databaseService;
