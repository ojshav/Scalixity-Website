/**
 * Analytics Service Layer with Prisma
 * Handles all analytics-related database operations
 */

class AnalyticsService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  /**
   * Track user activity
   */
  async trackActivity(activityData) {
    try {
      const { 
        visitorId, 
        country, 
        deviceType, 
        browser,
        page, 
        event = 'demographic',
        timestamp = new Date(),
        visitCount,
        userType
      } = activityData;

      // Validate required fields
      if (!visitorId || !userType || typeof visitCount !== 'number') {
        return { 
          success: false, 
          message: 'Missing or invalid required fields: visitorId, userType, visitCount' 
        };
      }

      // Create user activity record
      const activity = await this.prisma.userActivity.create({
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

      // Create inquiry record
      await this.prisma.inquiry.create({
        data: {
          visitorId,
          activityId: activity.id,
          inquiryType: event,
          timestamp: new Date(timestamp)
        }
      });

      return { 
        success: true, 
        message: 'Activity tracked successfully',
        data: {
          visitorId,
          country,
          deviceType,
          activityId: activity.id
        }
      };
    } catch (error) {
      console.error('Track activity error:', error);
      return { success: false, message: 'Failed to track activity' };
    }
  }

  /**
   * Get page visits analytics
   */
  async getPageVisits() {
    try {
      const results = await this.prisma.userActivity.groupBy({
        by: ['page'],
        _count: {
          id: true
        },
        orderBy: {
          _count: {
            id: 'desc'
          }
        }
      });

      return results.map(result => ({
        page: result.page,
        visits: result._count.id
      }));
    } catch (error) {
      console.error('Get page visits error:', error);
      throw error;
    }
  }

  /**
   * Get total users per month
   */
  async getTotalUsersPerMonth() {
    try {
      const results = await this.prisma.$queryRaw`
        SELECT DATE_FORMAT(timestamp, '%b') AS month, 
               COUNT(DISTINCT visitorId) AS users 
        FROM user_activity 
        GROUP BY month 
        ORDER BY MIN(timestamp)
      `;

      return results;
    } catch (error) {
      console.error('Get total users per month error:', error);
      throw error;
    }
  }

  /**
   * Get new vs returning users per month
   */
  async getNewVsReturningUsers() {
    try {
      const results = await this.prisma.$queryRaw`
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
      console.error('Get new vs returning users error:', error);
      throw error;
    }
  }

  /**
   * Get active users (DAU, WAU, MAU)
   */
  async getActiveUsers() {
    try {
      const now = new Date();
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const [dailyUsers, weeklyUsers, monthlyUsers] = await Promise.all([
        this.prisma.userActivity.findMany({
          where: { timestamp: { gte: oneDayAgo } },
          distinct: ['visitorId'],
          select: { visitorId: true }
        }),
        this.prisma.userActivity.findMany({
          where: { timestamp: { gte: oneWeekAgo } },
          distinct: ['visitorId'],
          select: { visitorId: true }
        }),
        this.prisma.userActivity.findMany({
          where: { timestamp: { gte: oneMonthAgo } },
          distinct: ['visitorId'],
          select: { visitorId: true }
        })
      ]);

      return [{
        month: 'Current',
        daily: dailyUsers.length,
        weekly: weeklyUsers.length,
        monthly: monthlyUsers.length
      }];
    } catch (error) {
      console.error('Get active users error:', error);
      throw error;
    }
  }

  /**
   * Get user growth rate per month
   */
  async getGrowthRate() {
    try {
      const results = await this.prisma.$queryRaw`
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
      console.error('Get growth rate error:', error);
      throw error;
    }
  }

  /**
   * Get user breakdown (new vs returning)
   */
  async getUserBreakdown() {
    try {
      const [newUsers, returningUsers] = await Promise.all([
        this.prisma.userActivity.findMany({
          where: { userType: 'new' },
          distinct: ['visitorId'],
          select: { visitorId: true }
        }),
        this.prisma.userActivity.findMany({
          where: { userType: 'returning' },
          distinct: ['visitorId'],
          select: { visitorId: true }
        })
      ]);

      return [
        { name: "New Users", value: newUsers.length },
        { name: "Returning Users", value: returningUsers.length }
      ];
    } catch (error) {
      console.error('Get user breakdown error:', error);
      throw error;
    }
  }

  /**
   * Get device type analytics
   */
  async getDeviceTypeAnalytics() {
    try {
      const results = await this.prisma.userActivity.groupBy({
        by: ['deviceType'],
        _count: {
          id: true
        },
        where: {
          deviceType: {
            not: null
          }
        }
      });

      return results.map(result => ({
        deviceType: result.deviceType,
        count: result._count.id
      }));
    } catch (error) {
      console.error('Get device type analytics error:', error);
      throw error;
    }
  }

  /**
   * Get country analytics
   */
  async getCountryAnalytics() {
    try {
      const results = await this.prisma.userActivity.groupBy({
        by: ['country'],
        _count: {
          id: true
        },
        where: {
          country: {
            not: null
          }
        },
        orderBy: {
          _count: {
            id: 'desc'
          }
        },
        take: 10 // Top 10 countries
      });

      return results.map(result => ({
        country: result.country,
        count: result._count.id
      }));
    } catch (error) {
      console.error('Get country analytics error:', error);
      throw error;
    }
  }

  /**
   * Get browser analytics
   */
  async getBrowserAnalytics() {
    try {
      const results = await this.prisma.userActivity.groupBy({
        by: ['browser'],
        _count: {
          id: true
        },
        where: {
          browser: {
            not: null
          }
        },
        orderBy: {
          _count: {
            id: 'desc'
          }
        }
      });

      return results.map(result => ({
        browser: result.browser,
        count: result._count.id
      }));
    } catch (error) {
      console.error('Get browser analytics error:', error);
      throw error;
    }
  }
}

module.exports = AnalyticsService;
