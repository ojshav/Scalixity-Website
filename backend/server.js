require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const prisma = require('./config/db');

// Import routes
const analyticsRoutes = require("./routes/analytics");
const engagementRoutes = require('./routes/engagement');
const demographicRoutes = require('./routes/demographic');
const technicalRoutes = require('./routes/technical');
const workRoutes = require('./routes/work');
const contactRoutes = require('./routes/contact');
const servicesRoutes = require('./routes/services');
const InquireRoutes = require('./routes/inquires');
const campaignsRoutes = require('./routes/campaigns');

// Import middleware and utilities
const { logger, httpLogger } = require('./utils/logger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const { rateLimiters, securityMiddleware, sanitizeInput } = require('./middleware/security');
const { swaggerSpec, swaggerUi } = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware (should be first)
app.use(securityMiddleware);

// Rate limiting
app.use('/api', rateLimiters.general);

// CORS configuration (more secure)
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? 
    process.env.ALLOWED_ORIGINS.split(',') : 
    ["http://kea.mywire.org:5700", "http://localhost:3000","http://kea.mywire.org:5000","http://localhost:5000","http://192.168.0.210:3000", "http://192.168.0.210:5700","https://www.scalixity.com","https://scalixity.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));



// HTTP request logging
app.use(httpLogger);

// Body parsing with increased limits for images
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Input sanitization
app.use(sanitizeInput);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Scalixity API Documentation'
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Make prisma available globally for compatibility (some routes might still reference req.app.locals.pool)
app.locals.pool = {
  execute: async (query, params) => {
    // This is a compatibility shim - routes should be updated to use Prisma directly
    console.warn('Deprecated: Using pool.execute compatibility shim. Please update route to use Prisma.');
    throw new Error('This query should be converted to Prisma. Query: ' + query);
  }
};

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ message: 'Database connection successful' });
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Database setup function - with Prisma, table creation is handled by migrations
// This function is kept for backwards compatibility but should eventually be removed
async function setupDatabase() {
  try {
    console.log('Database setup with Prisma - tables should be created via Prisma migrations');
    
    // Check if default admin exists, if not create one
    const existingSuperAdmin = await prisma.adminUser.findFirst({
      where: { role: 'super_admin' }
    });

    if (!existingSuperAdmin) {
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
      await prisma.adminUser.create({
        data: {
          username: process.env.ADMIN_USERNAME,
          password: hashedPassword,
          email: process.env.ADMIN_EMAIL,
          role: 'super_admin',
          receiveEmails: true
        }
      });
      console.log('Default super admin user created');
    }
    
    console.log('Database setup completed');
  } catch (error) {
    console.error('Database setup error:', error);
    process.exit(1);
  }
}

// Routes with specific rate limiting
const adminRoutes = require('./routes/admin');
app.use('/api/admin', rateLimiters.auth, adminRoutes);
app.use("/api", analyticsRoutes);
app.use("/api", engagementRoutes);
app.use("/api", demographicRoutes);
app.use("/api", technicalRoutes);
app.use("/api", rateLimiters.contact, contactRoutes);
app.use("/api/work", workRoutes);
app.use('/api', servicesRoutes); 
app.use("/api", InquireRoutes);
app.use('/api', rateLimiters.campaign, campaignsRoutes);

// 404 handler for undefined routes
app.use(notFoundHandler);

// Global error handling middleware (must be last)
app.use(errorHandler);

// Start server
(async () => {
  try {
    await setupDatabase();
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info('Database connected successfully');
      logger.info(`API Documentation available at http://localhost:${PORT}/api-docs`);
      console.log(`Server running on port ${PORT}`);
      console.log('Database pool initialized');
      console.log(`API Documentation: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    logger.error('Server startup error:', error);
    console.error('Server startup error:', error);
    process.exit(1);
  }
})();
