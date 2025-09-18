const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const { authenticateToken, checkTokenExpiration } = require('../middleware/auth');
const { updateUserActivity } = require('../middleware/activityTracker');
const { validateZod, validateParams, serviceSchemas } = require('../validators/service-schemas');
const { upload, uploadToCloudinary, deleteFromCloudinary, extractPublicIdFromUrl } = require('../utils/service-helpers');

/**
 * @swagger
 * tags:
 *   name: Admin Services
 *   description: Service management (admin authentication required)
 */

// Middleware to check if user is admin (extend existing patterns)
const isAdmin = async (req, res, next) => {
  try {
    const user = await prisma.adminUser.findUnique({
      where: { id: req.user.userId },
      select: { role: true }
    });

    if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
      return res.status(403).json({
        success: false,
        message: 'Access denied: Admin privileges required'
      });
    }
    next();
  } catch (error) {
    console.error('Admin check error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Apply authentication middleware to all routes
router.use(authenticateToken);
router.use(checkTokenExpiration);
router.use(updateUserActivity);
router.use(isAdmin);

/**
 * @swagger
 * /api/admin/services:
 *   get:
 *     summary: Get all services (admin view)
 *     tags: [Admin Services]
 *     security:
 *       - bearerAuth: []
 *     description: Retrieve all services with complete database structure for admin management
 *     responses:
 *       200:
 *         description: Services retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Service'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Access denied - Admin required
 *       500:
 *         description: Internal server error
 */
router.get('/', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      include: {
        features: {
          orderBy: { order: 'asc' }
        },
        technologies: {
          orderBy: { order: 'asc' }
        },
        benefits: {
          orderBy: { order: 'asc' }
        },
        keywords: {
          orderBy: { order: 'asc' }
        },
        pricing: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error('Error fetching admin services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * @swagger
 * /api/admin/services/{id}:
 *   get:
 *     summary: Get service by ID (admin view)
 *     tags: [Admin Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Service retrieved successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Access denied - Admin required
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', validateParams(serviceSchemas.id), async (req, res) => {
  try {
    const { id } = req.validatedParams;

    const service = await prisma.service.findUnique({
      where: { id },
      include: {
        features: {
          orderBy: { order: 'asc' }
        },
        technologies: {
          orderBy: { order: 'asc' }
        },
        benefits: {
          orderBy: { order: 'asc' }
        },
        keywords: {
          orderBy: { order: 'asc' }
        },
        pricing: true,
      }
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error('Error fetching service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * @swagger
 * /api/admin/services:
 *   post:
 *     summary: Create new service
 *     tags: [Admin Services]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - slug
 *               - title
 *               - description
 *               - shortDescription
 *               - features
 *               - technologies
 *               - benefits
 *             properties:
 *               slug:
 *                 type: string
 *                 example: ai-development
 *               title:
 *                 type: string
 *                 example: AI Development Services
 *               description:
 *                 type: string
 *                 example: Comprehensive AI development solutions
 *               shortDescription:
 *                 type: string
 *                 example: AI solutions for your business
 *               features:
 *                 type: string
 *                 description: JSON array of features
 *                 example: '["Machine Learning", "Natural Language Processing"]'
 *               technologies:
 *                 type: string
 *                 description: JSON array of technologies
 *                 example: '["Python", "TensorFlow", "PyTorch"]'
 *               benefits:
 *                 type: string
 *                 description: JSON array of benefits
 *                 example: '["Increased efficiency", "Cost reduction"]'
 *               keywords:
 *                 type: string
 *                 description: JSON array of keywords (optional)
 *                 example: '["AI", "machine learning", "automation"]'
 *               pricing:
 *                 type: string
 *                 description: JSON object with pricing info (optional)
 *                 example: '{"starting": "£5,000", "description": "Starting from £5,000"}'
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Service image file (optional)
 *               heroImage:
 *                 type: string
 *                 format: binary
 *                 description: Service hero image file (optional)
 *     responses:
 *       201:
 *         description: Service created successfully
 *       400:
 *         description: Validation error or slug already exists
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Access denied - Admin required
 *       500:
 *         description: Internal server error
 */
router.post('/', upload.any(), async (req, res) => {
  try {
    // Parse form data
    const serviceData = {
      slug: req.body.slug,
      title: req.body.title,
      description: req.body.description,
      shortDescription: req.body.shortDescription,
      features: req.body.features ? JSON.parse(req.body.features) : [],
      technologies: req.body.technologies ? JSON.parse(req.body.technologies) : [],
      benefits: req.body.benefits ? JSON.parse(req.body.benefits) : [],
      keywords: req.body.keywords ? JSON.parse(req.body.keywords) : undefined,
      pricing: req.body.pricing ? JSON.parse(req.body.pricing) : undefined,
      pricingPlans: req.body.pricingPlans ? JSON.parse(req.body.pricingPlans) : undefined,
    };

    // Validate the data
    const validatedData = serviceSchemas.create.parse(serviceData);

    // Check if slug already exists
    const existingService = await prisma.service.findUnique({
      where: { slug: validatedData.slug }
    });

    if (existingService) {
      return res.status(400).json({
        success: false,
        message: 'Service with this slug already exists',
      });
    }

    // Handle image uploads
    let imageUrl = '';
    let heroImageUrl = '';

    // Find service image and hero image
    const files = req.files || [];
    const serviceImageFile = files.find(f => f.fieldname === 'image');
    const heroImageFile = files.find(f => f.fieldname === 'heroImage');

    if (serviceImageFile) {
      const imageResult = await uploadToCloudinary(serviceImageFile.buffer, {
        folder: 'scalixity/services/images',
        public_id: `${validatedData.slug}-image`,
      });
      imageUrl = imageResult.secure_url;
    }

    if (heroImageFile) {
      const heroImageResult = await uploadToCloudinary(heroImageFile.buffer, {
        folder: 'scalixity/services/hero-images',
        public_id: `${validatedData.slug}-hero`,
      });
      heroImageUrl = heroImageResult.secure_url;
    }

    // Handle technology icon uploads and update technology data
    const processedTechnologies = await Promise.all(
      validatedData.technologies.map(async (tech, index) => {
        const techIconFile = files.find(f => f.fieldname === `techIcon-${index}`);
        let iconUrl = typeof tech === 'object' ? tech.iconUrl : null;
        
        if (techIconFile) {
          const iconResult = await uploadToCloudinary(techIconFile.buffer, {
            folder: 'scalixity/services/tech-icons',
            public_id: `${validatedData.slug}-tech-${index}`,
          });
          iconUrl = iconResult.secure_url;
        }
        
        return {
          technology: typeof tech === 'string' ? tech : tech.name,
          iconUrl: iconUrl,
          order: index,
        };
      })
    );

    // Create service in database
    const service = await prisma.service.create({
      data: {
        slug: validatedData.slug,
        title: validatedData.title,
        description: validatedData.description,
        shortDescription: validatedData.shortDescription,
        imageUrl: imageUrl || null,
        heroImageUrl: heroImageUrl || null,
        pricingPlans: validatedData.pricingPlans || null,
        features: {
          create: validatedData.features.map((feature, index) => ({
            feature,
            order: index,
          })),
        },
        technologies: {
          create: processedTechnologies,
        },
        benefits: {
          create: validatedData.benefits.map((benefit, index) => ({
            benefit,
            order: index,
          })),
        },
        keywords: validatedData.keywords ? {
          create: validatedData.keywords.map((keyword, index) => ({
            keyword,
            order: index,
          })),
        } : undefined,
        pricing: validatedData.pricing ? {
          create: {
            starting: validatedData.pricing.starting,
            description: validatedData.pricing.description,
          },
        } : undefined,
      },
      include: {
        features: true,
        technologies: true,
        benefits: true,
        keywords: true,
        pricing: true,
      },
    });

    res.status(201).json({
      success: true,
      data: service,
      message: 'Service created successfully',
    });

  } catch (error) {
    console.error('Error creating service:', error);
    
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: (error.errors || []).map(err => ({
          field: err.path?.join('.') || 'unknown',
          message: err.message || 'Validation failed'
        }))
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create service',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * @swagger
 * /api/admin/services/{id}:
 *   put:
 *     summary: Update service
 *     tags: [Admin Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               slug:
 *                 type: string
 *                 example: ai-development
 *               title:
 *                 type: string
 *                 example: AI Development Services
 *               description:
 *                 type: string
 *                 example: Comprehensive AI development solutions
 *               shortDescription:
 *                 type: string
 *                 example: AI solutions for your business
 *               features:
 *                 type: string
 *                 description: JSON array of features
 *               technologies:
 *                 type: string
 *                 description: JSON array of technologies
 *               benefits:
 *                 type: string
 *                 description: JSON array of benefits
 *               keywords:
 *                 type: string
 *                 description: JSON array of keywords (optional)
 *               pricing:
 *                 type: string
 *                 description: JSON object with pricing info (optional)
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Service image file (optional)
 *               heroImage:
 *                 type: string
 *                 format: binary
 *                 description: Service hero image file (optional)
 *     responses:
 *       200:
 *         description: Service updated successfully
 *       400:
 *         description: Validation error
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Access denied - Admin required
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', validateParams(serviceSchemas.id), upload.any(), async (req, res) => {
  try {
    const { id } = req.validatedParams;

    // Check if service exists
    const existingService = await prisma.service.findUnique({
      where: { id },
      include: {
        features: true,
        technologies: true,
        benefits: true,
        keywords: true,
        pricing: true,
      }
    });

    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      });
    }

    // Parse form data (only include provided fields)
    const updateData = {};
    if (req.body.slug) updateData.slug = req.body.slug;
    if (req.body.title) updateData.title = req.body.title;
    if (req.body.description) updateData.description = req.body.description;
    if (req.body.shortDescription) updateData.shortDescription = req.body.shortDescription;
    if (req.body.features) updateData.features = JSON.parse(req.body.features);
    if (req.body.technologies) updateData.technologies = JSON.parse(req.body.technologies);
    if (req.body.benefits) updateData.benefits = JSON.parse(req.body.benefits);
    if (req.body.keywords) updateData.keywords = JSON.parse(req.body.keywords);
    if (req.body.pricing) updateData.pricing = JSON.parse(req.body.pricing);
    if (req.body.pricingPlans) updateData.pricingPlans = JSON.parse(req.body.pricingPlans);

    // Validate update data if any fields provided
    if (Object.keys(updateData).length > 0) {
      serviceSchemas.update.parse(updateData);
    }

    // Check if slug already exists (excluding current service)
    if (updateData.slug && updateData.slug !== existingService.slug) {
      const slugExists = await prisma.service.findFirst({
        where: { 
          slug: updateData.slug,
          NOT: { id }
        }
      });

      if (slugExists) {
        return res.status(400).json({
          success: false,
          message: 'Service with this slug already exists',
        });
      }
    }

    // Handle image uploads
    let imageUrl = existingService.imageUrl;
    let heroImageUrl = existingService.heroImageUrl;

    // Find service image and hero image
    const files = req.files || [];
    const serviceImageFile = files.find(f => f.fieldname === 'image');
    const heroImageFile = files.find(f => f.fieldname === 'heroImage');

    if (serviceImageFile) {
      const imageResult = await uploadToCloudinary(serviceImageFile.buffer, {
        folder: 'scalixity/services/images',
        public_id: `${updateData.slug || existingService.slug}-image`,
      });
      imageUrl = imageResult.secure_url;
    }

    if (heroImageFile) {
      const heroImageResult = await uploadToCloudinary(heroImageFile.buffer, {
        folder: 'scalixity/services/hero-images',
        public_id: `${updateData.slug || existingService.slug}-hero`,
      });
      heroImageUrl = heroImageResult.secure_url;
    }

    // Build update object
    const dbUpdateData = {};
    if (updateData.slug) dbUpdateData.slug = updateData.slug;
    if (updateData.title) dbUpdateData.title = updateData.title;
    if (updateData.description) dbUpdateData.description = updateData.description;
    if (updateData.shortDescription) dbUpdateData.shortDescription = updateData.shortDescription;
    dbUpdateData.imageUrl = imageUrl;
    dbUpdateData.heroImageUrl = heroImageUrl;
    if (updateData.pricingPlans !== undefined) {
      dbUpdateData.pricingPlans = updateData.pricingPlans;
    }

    // Handle related data updates
    if (updateData.features) {
      dbUpdateData.features = {
        deleteMany: {},
        create: updateData.features.map((feature, index) => ({
          feature,
          order: index,
        })),
      };
    }

    if (updateData.technologies && Array.isArray(updateData.technologies)) {
      // Handle technology icon uploads and update technology data
      const processedTechnologies = await Promise.all(
        updateData.technologies.map(async (tech, index) => {
          const techIconFile = files.find(f => f.fieldname === `techIcon-${index}`);
          let iconUrl = typeof tech === 'object' ? tech.iconUrl : null;
          
          if (techIconFile) {
            const iconResult = await uploadToCloudinary(techIconFile.buffer, {
              folder: 'scalixity/services/tech-icons',
              public_id: `${updateData.slug || existingService.slug}-tech-${index}`,
            });
            iconUrl = iconResult.secure_url;
          }
          
          return {
            technology: typeof tech === 'string' ? tech : tech.name,
            iconUrl: iconUrl,
            order: index,
          };
        })
      );

      dbUpdateData.technologies = {
        deleteMany: {},
        create: processedTechnologies,
      };
    }

    if (updateData.benefits) {
      dbUpdateData.benefits = {
        deleteMany: {},
        create: updateData.benefits.map((benefit, index) => ({
          benefit,
          order: index,
        })),
      };
    }

    if (updateData.keywords !== undefined) {
      dbUpdateData.keywords = {
        deleteMany: {},
        create: updateData.keywords ? updateData.keywords.map((keyword, index) => ({
          keyword,
          order: index,
        })) : [],
      };
    }

    if (updateData.pricing !== undefined) {
      dbUpdateData.pricing = updateData.pricing ? (
        existingService.pricing ? {
          update: {
            starting: updateData.pricing.starting,
            description: updateData.pricing.description,
          },
        } : {
          create: {
            starting: updateData.pricing.starting,
            description: updateData.pricing.description,
          },
        }
      ) : {
        delete: true,
      };
    }

    // Update service in database
    const service = await prisma.service.update({
      where: { id },
      data: dbUpdateData,
      include: {
        features: true,
        technologies: true,
        benefits: true,
        keywords: true,
        pricing: true,
      },
    });

    res.status(200).json({
      success: true,
      data: service,
      message: 'Service updated successfully',
    });

  } catch (error) {
    console.error('Error updating service:', error);
    
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: (error.errors || []).map(err => ({
          field: err.path?.join('.') || 'unknown',
          message: err.message || 'Validation failed'
        }))
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to update service',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * @swagger
 * /api/admin/services/{id}:
 *   delete:
 *     summary: Delete service
 *     tags: [Admin Services]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Access denied - Admin required
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', validateParams(serviceSchemas.id), async (req, res) => {
  try {
    const { id } = req.validatedParams;

    // Check if service exists
    const existingService = await prisma.service.findUnique({
      where: { id },
    });

    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      });
    }

    // Delete images from Cloudinary (optional cleanup)
    try {
      if (existingService.imageUrl) {
        const imagePublicId = extractPublicIdFromUrl(existingService.imageUrl);
        if (imagePublicId) {
          await deleteFromCloudinary(imagePublicId);
        }
      }

      if (existingService.heroImageUrl) {
        const heroImagePublicId = extractPublicIdFromUrl(existingService.heroImageUrl);
        if (heroImagePublicId) {
          await deleteFromCloudinary(heroImagePublicId);
        }
      }
    } catch (cloudinaryError) {
      console.warn('Error deleting images from Cloudinary:', cloudinaryError);
      // Continue with database deletion even if Cloudinary deletion fails
    }

    // Delete service from database (cascade delete will handle related records)
    await prisma.service.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Service deleted successfully',
    });

  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete service',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;