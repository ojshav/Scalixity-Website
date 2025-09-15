require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const prisma = require('./config/db');
const analyticsRoutes = require("./routes/analytics");
const engagementRoutes = require('./routes/engagement');
const demographicRoutes = require('./routes/demographic');
const technicalRoutes = require('./routes/technical');
const workRoutes = require('./routes/work');
const contactRoutes = require('./routes/contact');
const servicesRoutes = require('./routes/services');
const InquireRoutes = require('./routes/inquires');
const campaignsRoutes = require('./routes/campaigns');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({

  origin: ["http://kea.mywire.org:5700", "http://localhost:3000","http://kea.mywire.org:5000","http://localhost:5000","http://192.168.0.210:3000", "http://192.168.0.210:5700","https://www.scalixity.com","https://scalixity.com"], // No trailing slash


  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));





app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

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

// Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);
app.use("/api", analyticsRoutes);
app.use("/api", engagementRoutes);
app.use("/api", demographicRoutes);
app.use("/api", technicalRoutes);
app.use("/api", contactRoutes);
app.use("/api/work", workRoutes);
app.use('/api', servicesRoutes); 
app.use("/api", InquireRoutes);
app.use('/api', campaignsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
(async () => {
  try {
    await setupDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Database pool initialized');
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
})();
