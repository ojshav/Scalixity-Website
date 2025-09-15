const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const { Prisma } = require('@prisma/client');
// Function to format data into weekly periods
const formatWeeklyData = (rows) => {
    const weeklyData = {};
    
    rows.forEach(row => {
        const week = `${row.week_start} - ${row.week_end}`;
        if (!weeklyData[week]) {
            weeklyData[week] = { period: week, duration: 0, pages: 0, bounceRate: 0, count: 0 };
        }
        weeklyData[week].duration += row.session_duration;
        weeklyData[week].pages += row.pages_per_session;
        weeklyData[week].bounceRate += row.bounce_rate;
        weeklyData[week].count += 1;
    });
    
    return Object.values(weeklyData).map(week => ({
        period: week.period,
        duration: week.count ? (week.duration / week.count).toFixed(2) : 0,
        pages: week.count ? (week.pages / week.count).toFixed(2) : 0,
        bounceRate: week.count ? (week.bounceRate / week.count).toFixed(2) : 0,
    }));
};

// Route to fetch user engagement data
router.get('/engagement', async (req, res) => {
    try {
        console.log('Fetching engagement data...');
        
        const results = await prisma.$queryRaw`
            SELECT 
                MIN(DATE_FORMAT(timestamp, '%Y-%m-%d')) as week_start,
                MIN(DATE_FORMAT(DATE_ADD(timestamp, INTERVAL 6 DAY), '%Y-%m-%d')) as week_end,
                AVG(TIMESTAMPDIFF(MINUTE, timestamp, 
                    CASE 
                        WHEN event = 'exit' THEN timestamp 
                        ELSE DATE_ADD(timestamp, INTERVAL 5 MINUTE)
                    END
                )) AS session_duration,
                COUNT(DISTINCT page) / COUNT(DISTINCT visitorId) AS pages_per_session,
                (COUNT(CASE WHEN event = 'exit' THEN 1 END) / COUNT(*)) * 100 AS bounce_rate
            FROM user_activity
            GROUP BY YEARWEEK(timestamp)
            ORDER BY MIN(timestamp) ASC
        `;
        
        console.log('Raw engagement results:', results);
        
        const formattedData = formatWeeklyData(results);
        console.log('Formatted engagement data:', formattedData);
        
        res.json(formattedData);
    } catch (error) {
        console.error('Engagement Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get most visited pages
router.get('/most-visited', async (req, res) => {
    try {
        console.log('Fetching most visited pages...');
        
        const results = await prisma.$queryRaw`
            SELECT 
                page, 
                COUNT(*) AS views,
                AVG(TIMESTAMPDIFF(SECOND, timestamp, 
                    CASE 
                        WHEN event = 'exit' THEN timestamp 
                        ELSE DATE_ADD(timestamp, INTERVAL 30 SECOND)
                    END
                )) AS avgTime,
                (COUNT(CASE WHEN event = 'exit' THEN 1 END) / COUNT(*)) * 100 AS bounceRate
            FROM user_activity
            GROUP BY page
            ORDER BY views DESC
            LIMIT 10
        `;
        
        console.log('Most visited pages raw results:', results);
        
        const formattedResults = results.map(row => ({
            page: row.page,
            views: parseInt(row.views, 10),
            avgTime: row.avgTime ? Number(row.avgTime) : 0, // Ensure it's a number
            bounceRate: row.bounceRate ? Number(row.bounceRate) : 0
        }));
        
        res.json(formattedResults);
    } catch (error) {
        console.error('Most Visited Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get device distribution
router.get('/device-distribution', async (req, res) => {
    try {
        console.log('Fetching device distribution...');
        
        const results = await prisma.$queryRaw`
            SELECT 
                COALESCE(deviceType, 'unknown') AS deviceType, 
                COUNT(*) AS count
            FROM user_activity
            GROUP BY deviceType
        `;
        
        console.log('Device distribution raw results:', results);
        
        const formattedResults = results.map(row => ({ 
            name: row.deviceType, 
            value: parseInt(row.count) 
        }));
        console.log('Formatted device distribution:', formattedResults);
        
        res.json(formattedResults);
    } catch (error) {
        console.error('Device Distribution Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;