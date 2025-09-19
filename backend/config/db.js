const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient({
  // Production: Only show errors and warnings
  log: ['warn', 'error'],
  
  // Development: Show all queries (uncomment below)
  // log: ['query', 'info', 'warn', 'error'],
});

module.exports = prisma;