const express = require('express');
const router = express.Router();
const prisma = require('../config/db');


// Route to fetch demographic analytics
router.get('/demographic-analytics', async (req, res) => {
  try {
    // Country Distribution
    const countryDistribution = await prisma.$queryRaw`
      SELECT 
        country, 
        COUNT(DISTINCT visitorId) as visitor_count 
      FROM user_activity 
      WHERE country IS NOT NULL AND country != ''
      GROUP BY country 
      ORDER BY visitor_count DESC
    `;

    // Device Type Distribution
    const deviceDistribution = await prisma.$queryRaw`
      SELECT 
        deviceType, 
        COUNT(DISTINCT visitorId) as visitor_count 
      FROM user_activity 
      WHERE deviceType IS NOT NULL AND deviceType != ''
      GROUP BY deviceType 
      ORDER BY visitor_count DESC
    `;

    // Page Engagement
    const pageEngagement = await prisma.$queryRaw`
      SELECT 
        page, 
        COUNT(*) as visits,
        COUNT(DISTINCT visitorId) as unique_visitors
      FROM user_activity
      GROUP BY page
      ORDER BY visits DESC
    `;

    // Inquiries Distribution
    const inquiriesDistribution = await prisma.$queryRaw`
      SELECT 
        inquiry_type, 
        COUNT(*) as inquiry_count 
      FROM inquiries 
      GROUP BY inquiry_type 
      ORDER BY inquiry_count DESC
    `;

    // Demographic Breakdown by Time
    const timeBasedBreakdown = await prisma.$queryRaw`
      SELECT 
        DATE_FORMAT(timestamp, '%Y-%m') as month,
        COUNT(DISTINCT visitorId) as total_visitors,
        COUNT(DISTINCT CASE WHEN deviceType = 'Mobile' THEN visitorId END) as mobile_visitors,
        COUNT(DISTINCT CASE WHEN deviceType = 'Desktop' THEN visitorId END) as desktop_visitors,
        COUNT(DISTINCT CASE WHEN deviceType = 'Tablet' THEN visitorId END) as tablet_visitors
      FROM user_activity
      GROUP BY month
      ORDER BY month DESC
    `;

    res.json({
      countryDistribution,
      deviceDistribution,
      pageEngagement,
      inquiriesDistribution,
      timeBasedBreakdown
    });
  } catch (error) {
    console.error('Error fetching demographic analytics:', error);
    res.status(500).json({ error: 'Failed to retrieve demographic analytics' });
  }
});

// Route to fetch detailed country data
router.get('/country-details', async (req, res) => {
  try {

    const countryDetails = await prisma.$queryRaw`
      SELECT 
        country, 
        COUNT(DISTINCT visitorId) as total_visitors,
        COUNT(DISTINCT CASE WHEN event = 'page_visit' THEN visitorId END) as page_visits,
        COUNT(DISTINCT CASE WHEN event = 'inquiry' THEN visitorId END) as inquiries,
        ROUND(COUNT(DISTINCT CASE WHEN event = 'inquiry' THEN visitorId END) / 
              NULLIF(COUNT(DISTINCT visitorId), 0) * 100, 2) as inquiry_rate
      FROM user_activity
      WHERE country IS NOT NULL AND country != ''
      GROUP BY country
      ORDER BY total_visitors DESC
    `;

    res.json(countryDetails);
  } catch (error) {
    console.error('Error fetching country details:', error);
    res.status(500).json({ error: 'Failed to retrieve country details' });
  }
});

module.exports = router;