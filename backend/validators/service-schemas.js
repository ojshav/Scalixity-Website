const { z } = require('zod');

// Service validation schemas using Zod
const serviceSchemas = {
  create: z.object({
    slug: z.string()
      .min(1, 'Slug is required')
      .max(100, 'Slug must be less than 100 characters')
      .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
    title: z.string()
      .min(1, 'Title is required')
      .max(200, 'Title must be less than 200 characters'),
    description: z.string()
      .min(1, 'Description is required')
      .max(2000, 'Description must be less than 2000 characters'),
    shortDescription: z.string()
      .min(1, 'Short description is required')
      .max(500, 'Short description must be less than 500 characters'),
    features: z.array(z.string().min(1, 'Feature cannot be empty'))
      .min(1, 'At least one feature is required'),
    technologies: z.array(z.string().min(1, 'Technology cannot be empty'))
      .min(1, 'At least one technology is required'),
    benefits: z.array(z.string().min(1, 'Benefit cannot be empty'))
      .min(1, 'At least one benefit is required'),
    keywords: z.array(z.string().min(1, 'Keyword cannot be empty')).optional(),
    pricing: z.object({
      starting: z.string().min(1, 'Starting price is required'),
      description: z.string().min(1, 'Pricing description is required'),
    }).optional(),
  }),

  update: z.object({
    slug: z.string()
      .min(1, 'Slug is required')
      .max(100, 'Slug must be less than 100 characters')
      .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
      .optional(),
    title: z.string()
      .min(1, 'Title is required')
      .max(200, 'Title must be less than 200 characters')
      .optional(),
    description: z.string()
      .min(1, 'Description is required')
      .max(2000, 'Description must be less than 2000 characters')
      .optional(),
    shortDescription: z.string()
      .min(1, 'Short description is required')
      .max(500, 'Short description must be less than 500 characters')
      .optional(),
    features: z.array(z.string().min(1, 'Feature cannot be empty'))
      .min(1, 'At least one feature is required')
      .optional(),
    technologies: z.array(z.string().min(1, 'Technology cannot be empty'))
      .min(1, 'At least one technology is required')
      .optional(),
    benefits: z.array(z.string().min(1, 'Benefit cannot be empty'))
      .min(1, 'At least one benefit is required')
      .optional(),
    keywords: z.array(z.string().min(1, 'Keyword cannot be empty')).optional(),
    pricing: z.object({
      starting: z.string().min(1, 'Starting price is required'),
      description: z.string().min(1, 'Pricing description is required'),
    }).optional(),
  }),

  slug: z.object({
    slug: z.string().min(1, 'Service slug is required'),
  }),

  id: z.object({
    id: z.string().min(1, 'Service ID is required'),
  }),
};

// Validation middleware for Zod schemas (to integrate with existing Joi middleware)
const validateZod = (schema) => {
  return (req, res, next) => {
    try {
      req.validatedData = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      next(error);
    }
  };
};

// Validate parameters middleware
const validateParams = (schema) => {
  return (req, res, next) => {
    try {
      req.validatedParams = schema.parse(req.params);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Invalid parameters',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      next(error);
    }
  };
};

module.exports = {
  serviceSchemas,
  validateZod,
  validateParams
};