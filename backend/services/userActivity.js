/**
 * User Activity Service - Prisma Implementation
 * Handles user tracking, performance metrics, and error logging
 */

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class UserActivityService {
  /**
   * Track user activity
   */
  async trackUserActivity(activityData) {
    try {
      const { 
        visitorId, 
        country, 
        deviceType, 
        browser,
        page, 
        event = 'page_view',
        timestamp = new Date().toISOString(),
        visitCount = 1,
        userType = 'visitor'
      } = activityData;

      // Validate only essential required fields
      if (!visitorId) {
        throw new Error('Missing required field: visitorId');
      }

      const activity = await prisma.userActivity.create({
        data: {
          visitorId,
          page,
          timestamp: new Date(timestamp),
          event,
          deviceType,
          country,
          browser,
          visitCount,
          userType
        }
      });

      // Create associated inquiry
      await prisma.inquiry.create({
        data: {
          visitorId,
          activityId: activity.id,
          inquiryType: event,
          timestamp: new Date(timestamp)
        }
      });

      return activity;
    } catch (error) {
      console.error('Error tracking user activity:', error);
      throw error;
    }
  }

  /**
   * Get user analytics data
   */
  async getAnalyticsData() {
    try {
      const results = await prisma.userActivity.groupBy({
        by: ['page'],
        _count: {
          id: true
        }
      });

      return results.map(result => ({
        page: result.page,
        visits: result._count.id
      }));
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw new Error('Failed to fetch analytics data');
    }
  }

  /**
   * Get total users per month
   */
  async getTotalUsersPerMonth() {
    try {
      const results = await prisma.$queryRaw`
        SELECT 
          DATE_FORMAT(timestamp, '%b') AS month, 
          COUNT(DISTINCT visitorId) AS users 
        FROM user_activity 
        GROUP BY month 
        ORDER BY MIN(timestamp)
      `;

      return results;
    } catch (error) {
      console.error('Error fetching total users per month:', error);
      throw new Error('Failed to fetch user data');
    }
  }

  /**
   * Get new vs returning users per month
   */
  async getNewVsReturningUsers() {
    try {
      const results = await prisma.$queryRaw`
        SELECT 
          DATE_FORMAT(timestamp, '%b') AS month,
          COUNT(DISTINCT CASE WHEN userType = 'new' THEN visitorId END) AS new_users,
          COUNT(DISTINCT CASE WHEN userType = 'returning' THEN visitorId END) AS returning_users
        FROM user_activity
        GROUP BY month
        ORDER BY MIN(timestamp)
      `;

      return results;
    } catch (error) {
      console.error('Error fetching new vs returning users:', error);
      throw new Error('Failed to fetch user data');
    }
  }

  /**
   * Get active users (DAU, WAU, MAU)
   */
  async getActiveUsers() {
    try {
      const dailyDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const weeklyDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const monthlyDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

      const [daily, weekly, monthly] = await Promise.all([
        prisma.userActivity.groupBy({
          by: ['visitorId'],
          where: {
            timestamp: { gte: dailyDate }
          }
        }),
        prisma.userActivity.groupBy({
          by: ['visitorId'],
          where: {
            timestamp: { gte: weeklyDate }
          }
        }),
        prisma.userActivity.groupBy({
          by: ['visitorId'],
          where: {
            timestamp: { gte: monthlyDate }
          }
        })
      ]);

      return [{
        month: 'Current',
        daily: daily.length,
        weekly: weekly.length,
        monthly: monthly.length
      }];
    } catch (error) {
      console.error('Error fetching active users:', error);
      throw new Error('Failed to fetch active users');
    }
  }

  /**
   * Get user growth rate per month
   */
  async getUserGrowthRate() {
    try {
      const results = await prisma.$queryRaw`
        WITH MonthlyUsers AS (
          SELECT 
            DATE_FORMAT(timestamp, '%b') AS month, 
            COUNT(DISTINCT visitorId) AS users,
            MIN(timestamp) AS min_timestamp
          FROM user_activity
          GROUP BY month
        )
        SELECT 
          month,
          (users - LAG(users) OVER (ORDER BY min_timestamp)) / 
          NULLIF(LAG(users) OVER (ORDER BY min_timestamp), 0) * 100 AS rate
        FROM MonthlyUsers
        ORDER BY min_timestamp
      `;

      return results;
    } catch (error) {
      console.error('Error fetching growth rate:', error);
      throw new Error('Failed to fetch growth rate');
    }
  }

  /**
   * Get user breakdown
   */
  async getUserBreakdown() {
    try {
      const [newUsers, returningUsers] = await Promise.all([
        prisma.userActivity.groupBy({
          by: ['visitorId'],
          where: { userType: 'new' }
        }),
        prisma.userActivity.groupBy({
          by: ['visitorId'],
          where: { userType: 'returning' }
        })
      ]);

      return [
        { name: "New Users", value: newUsers.length },
        { name: "Returning Users", value: returningUsers.length }
      ];
    } catch (error) {
      console.error('Error fetching user breakdown:', error);
      throw new Error('Failed to fetch user breakdown');
    }
  }

  /**
   * Log performance metrics
   */
  async logPerformanceMetric(metricData) {
    try {
      const {
        visitorId,
        page,
        fcp,
        lcp,
        tti,
        loadTime,
        timestamp,
        deviceType,
        country
      } = metricData;

      return await prisma.performanceMetric.create({
        data: {
          visitorId,
          page,
          fcp: fcp ? parseFloat(fcp) : null,
          lcp: lcp ? parseFloat(lcp) : null,
          tti: tti ? parseFloat(tti) : null,
          loadTime: loadTime ? parseFloat(loadTime) : null,
          timestamp: new Date(timestamp),
          deviceType,
          country
        }
      });
    } catch (error) {
      console.error('Error logging performance metric:', error);
      throw error;
    }
  }

  /**
   * Log error
   */
  async logError(errorData) {
    try {
      const {
        visitorId,
        page,
        errorCode,
        errorMessage,
        source,
        timestamp,
        deviceType,
        browser,
        country
      } = errorData;

      // Check if error already exists and update count
      const existingError = await prisma.errorLog.findFirst({
        where: {
          visitorId,
          page,
          errorCode,
          errorMessage
        }
      });

      if (existingError) {
        return await prisma.errorLog.update({
          where: { id: existingError.id },
          data: {
            count: { increment: 1 },
            lastOccurrence: new Date(timestamp)
          }
        });
      } else {
        return await prisma.errorLog.create({
          data: {
            visitorId,
            page,
            errorCode,
            errorMessage,
            source,
            count: 1,
            firstOccurrence: new Date(timestamp),
            lastOccurrence: new Date(timestamp),
            timestamp: new Date(timestamp),
            deviceType,
            browser,
            country
          }
        });
      }
    } catch (error) {
      console.error('Error logging error:', error);
      throw error;
    }
  }

  /**
   * Get performance metrics summary
   */
  async getPerformanceMetricsSummary(page = null) {
    try {
      const where = page ? { page } : {};
      
      const metrics = await prisma.performanceMetric.aggregate({
        where,
        _avg: {
          fcp: true,
          lcp: true,
          tti: true,
          loadTime: true
        },
        _count: {
          id: true
        }
      });

      return {
        averageFCP: metrics._avg.fcp,
        averageLCP: metrics._avg.lcp,
        averageTTI: metrics._avg.tti,
        averageLoadTime: metrics._avg.loadTime,
        totalMeasurements: metrics._count.id
      };
    } catch (error) {
      console.error('Error fetching performance metrics summary:', error);
      throw new Error('Failed to fetch performance metrics');
    }
  }

  /**
   * Get error logs summary
   */
  async getErrorLogsSummary() {
    try {
      const [totalErrors, errorsByType] = await Promise.all([
        prisma.errorLog.aggregate({
          _sum: { count: true }
        }),
        prisma.errorLog.groupBy({
          by: ['errorCode'],
          _sum: { count: true },
          orderBy: { _sum: { count: 'desc' } }
        })
      ]);

      return {
        totalErrors: totalErrors._sum.count || 0,
        errorsByType: errorsByType.map(error => ({
          errorCode: error.errorCode,
          count: error._sum.count
        }))
      };
    } catch (error) {
      console.error('Error fetching error logs summary:', error);
      throw new Error('Failed to fetch error logs');
    }
  }
}

module.exports = new UserActivityService();
