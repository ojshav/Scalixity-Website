const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Scalixity API',
      version: '1.0.0',
      description: 'Complete API documentation for Scalixity backend services including analytics, campaigns, projects, and more.',
      contact: {
        name: 'Scalixity Team',
        email: 'support@scalixity.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      },
      {
        url: 'https://api.scalixity.com',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        // Success Response
        SuccessResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string', example: 'Operation successful' },
            data: { type: 'object' }
          }
        },
        
        // Error Response
        ErrorResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Error message' },
            error: { type: 'string', example: 'error_code' },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string' },
                  message: { type: 'string' }
                }
              }
            }
          }
        },
        
        // Admin User
        AdminUser: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            username: { type: 'string', example: 'admin' },
            email: { type: 'string', example: 'admin@example.com' },
            firstName: { type: 'string', example: 'John' },
            lastName: { type: 'string', example: 'Doe' },
            role: { type: 'string', example: 'admin' },
            receiveEmails: { type: 'boolean', example: true },
            lastLogin: { type: 'string', format: 'date-time' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        
        // Project
        Project: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'AI Chatbot Project' },
            description: { type: 'string', example: 'Advanced AI chatbot for customer service' },
            image: { type: 'string', example: 'https://example.com/image.jpg' },
            liveUrl: { type: 'string', example: 'https://example.com' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        
        // Campaign
        Campaign: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Summer Campaign 2024' },
            description: { type: 'string', example: 'Summer promotional campaign' },
            imageUrl: { type: 'string', example: 'https://example.com/campaign.jpg' },
            startDate: { type: 'string', format: 'date', example: '2024-06-01' },
            endDate: { type: 'string', format: 'date', example: '2024-08-31' },
            type: { type: 'string', example: 'promotional' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        
        // Contact Form
        ContactForm: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'John Doe' },
            email: { type: 'string', example: 'john@example.com' },
            phone: { type: 'string', example: '+1234567890' },
            message: { type: 'string', example: 'I would like to know more about your services' },
            status: { type: 'string', enum: ['new', 'in_progress', 'resolved'], example: 'new' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        
        // Service Inquiry
        ServiceInquiry: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            companyName: { type: 'string', example: 'Tech Corp' },
            email: { type: 'string', example: 'contact@techcorp.com' },
            industryName: { type: 'string', example: 'Technology' },
            serviceName: { type: 'string', example: 'AI Development' },
            status: { type: 'string', enum: ['new', 'in_progress', 'resolved'], example: 'new' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        
        // Performance Metrics
        PerformanceMetric: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            visitorId: { type: 'string', example: 'visitor_123' },
            page: { type: 'string', example: '/home' },
            fcp: { type: 'number', example: 1200.5 },
            lcp: { type: 'number', example: 2500.0 },
            tti: { type: 'number', example: 3000.0 },
            loadTime: { type: 'number', example: 1500.0 },
            deviceType: { type: 'string', example: 'Desktop' },
            country: { type: 'string', example: 'United States' },
            timestamp: { type: 'string', format: 'date-time' }
          }
        },
        
        // Validation Error
        ValidationError: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Validation error' },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: { type: 'string', example: 'email' },
                  message: { type: 'string', example: 'Email is required' }
                }
              }
            }
          }
        }
      },
      
      responses: {
        UnauthorizedError: {
          description: 'Authentication token is missing or invalid',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Access denied: No token provided',
                error: 'no-token'
              }
            }
          }
        },
        
        ValidationError: {
          description: 'Input validation failed',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationError'
              }
            }
          }
        },
        
        NotFoundError: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Resource not found',
                error: 'resource_not_found'
              }
            }
          }
        },
        
        RateLimitError: {
          description: 'Too many requests',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Too many requests from this IP, please try again later.',
                retryAfter: '15 minutes'
              }
            }
          }
        }
      }
    },
    
    tags: [
      {
        name: 'Authentication',
        description: 'Admin authentication and user management'
      },
      {
        name: 'Analytics',
        description: 'User analytics and tracking data'
      },
      {
        name: 'Projects',
        description: 'Project portfolio management'
      },
      {
        name: 'Campaigns',
        description: 'Marketing campaign management'
      },
      {
        name: 'Contact',
        description: 'Contact form submissions'
      },
      {
        name: 'Inquiries',
        description: 'Service inquiry management'
      },
      {
        name: 'Technical',
        description: 'Performance metrics and error logging'
      },
      {
        name: 'Engagement',
        description: 'User engagement analytics'
      },
      {
        name: 'Demographics',
        description: 'Demographic analytics and insights'
      },
      {
        name: 'Services',
        description: 'Service and industry listings'
      }
    ]
  },
  apis: ['./routes/*.js', './middleware/*.js'], // paths to files containing OpenAPI definitions
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerSpec,
  swaggerUi
};