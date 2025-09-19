const Joi = require('joi');

// Admin validation schemas
const adminSchemas = {
  login: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).max(100).required()
  }),
  
  register: Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
    firstName: Joi.string().min(1).max(50).required(),
    lastName: Joi.string().min(1).max(50).required(),
    role: Joi.string().valid('admin', 'moderator', 'user').default('user')
  }),
  
  updateProfile: Joi.object({
    firstName: Joi.string().min(1).max(50),
    lastName: Joi.string().min(1).max(50),
    email: Joi.string().email(),
    receiveEmails: Joi.boolean()
  }).min(1)
};

// Contact form validation
const contactSchemas = {
  create: Joi.object({
    name: Joi.string().min(1).max(100).required(),
    email: Joi.string().email().required(),
    subject: Joi.string().min(1).max(200).required(),
    message: Joi.string().min(10).max(2000).required()
  })
};

// Project validation schemas
const projectSchemas = {
  create: Joi.object({
    title: Joi.string().min(1).max(200).required(),
    description: Joi.string().min(10).max(2000).required(),
    image: Joi.string().required(), // Base64 or URL
    live_url: Joi.string().uri().required()
  }),
  
  update: Joi.object({
    title: Joi.string().min(1).max(200).required(),
    description: Joi.string().min(10).max(2000).required(),
    image: Joi.string().required(),
    live_url: Joi.string().uri().required()
  })
};

// Campaign validation schemas
const campaignSchemas = {
  create: Joi.object({
    name: Joi.string().min(1).max(200).required(),
    description: Joi.string().max(2000).allow('').optional(),
    image_url: Joi.string().uri().allow('').optional(),
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().greater(Joi.ref('start_date')).required(),
    type: Joi.string().min(1).max(50).required()
  }),
  
  update: Joi.object({
    name: Joi.string().min(1).max(200).required(),
    description: Joi.string().max(2000).allow('').optional(),
    image_url: Joi.string().uri().allow('').optional(),
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().greater(Joi.ref('start_date')).required(),
    type: Joi.string().min(1).max(50).required()
  }),
  
  questions: Joi.object({
    questions: Joi.array().items(
      Joi.object({
        label: Joi.string().min(1).max(500).required(),
        type: Joi.string().valid('text', 'email', 'number', 'textarea', 'multiple', 'checkbox').required(),
        options: Joi.array().items(Joi.string()).when('type', {
          is: Joi.string().valid('multiple', 'checkbox'),
          then: Joi.required(),
          otherwise: Joi.optional()
        })
      })
    ).required()
  }),
  
  submission: Joi.object({
    answers: Joi.object().required(),
    visitor_id: Joi.string().optional()
  }),
  
  statusUpdate: Joi.object({
    status: Joi.string().valid('submitted', 'reviewed', 'approved', 'rejected').required()
  })
};

// Service inquiry validation
const inquirySchemas = {
  create: Joi.object({
    companyName: Joi.string().min(1).max(200).required(),
    email: Joi.string().email().required(),
    industryName: Joi.string().min(1).max(100).required(),
    serviceName: Joi.string().min(1).max(100).required(),
    additionalInfo: Joi.string().max(2000).allow('').optional()
  })
};

// Performance metrics validation
const metricsSchemas = {
  performance: Joi.object({
    visitorId: Joi.string().required(),
    page: Joi.string().max(500).optional(),
    FCP: Joi.number().positive().optional(),
    LCP: Joi.number().positive().optional(),
    TTI: Joi.number().positive().optional(),
    loadTime: Joi.number().positive().optional(),
    deviceType: Joi.string().max(50).optional(),
    country: Joi.string().max(100).optional()
  }),
  
  errorLogs: Joi.object({
    recentErrorLogs: Joi.array().items(
      Joi.object({
        path: Joi.string().required(),
        errorCode: Joi.string().required(),
        count: Joi.number().integer().positive().default(1),
        lastOccurrence: Joi.date().iso().optional(),
        errorMessage: Joi.string().max(1000).optional(),
        source: Joi.string().max(500).optional()
      })
    ).required(),
    visitorId: Joi.string().required(),
    page: Joi.string().max(500).optional(),
    timestamp: Joi.date().iso().optional(),
    deviceType: Joi.string().max(50).optional(),
    browser: Joi.string().max(100).optional(),
    country: Joi.string().max(100).optional()
  })
};

// Parameter validation schemas
const paramSchemas = {
  id: Joi.object({
    id: Joi.number().integer().positive().required()
  }),
  
  submissionId: Joi.object({
    submissionId: Joi.number().integer().positive().required()
  })
};

// Query validation schemas
const querySchemas = {
  pagination: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    search: Joi.string().max(200).optional()
  }),
  
  analytics: Joi.object({
    startDate: Joi.date().iso().optional(),
    endDate: Joi.date().iso().optional(),
    groupBy: Joi.string().valid('hour', 'day', 'week', 'month', 'deviceType').optional(),
    visitorId: Joi.string().optional(),
    page: Joi.string().max(500).optional()
  })
};

module.exports = {
  adminSchemas,
  contactSchemas,
  projectSchemas,
  campaignSchemas,
  inquirySchemas,
  metricsSchemas,
  paramSchemas,
  querySchemas
};