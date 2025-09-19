const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const { validateParams } = require('../validators/service-schemas');
const { serviceSchemas } = require('../validators/service-schemas');

/**
 * @swagger
 * tags:
 *   name: Public Services
 *   description: Public service information (no authentication required)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique service identifier
 *         slug:
 *           type: string
 *           description: URL-friendly service identifier
 *         title:
 *           type: string
 *           description: Service title
 *         description:
 *           type: string
 *           description: Detailed service description
 *         shortDescription:
 *           type: string
 *           description: Brief service description
 *         image:
 *           type: string
 *           description: Service image URL
 *         heroImage:
 *           type: string
 *           description: Service hero image URL
 *         features:
 *           type: array
 *           items:
 *             type: string
 *           description: List of service features
 *         technologies:
 *           type: array
 *           items:
 *             type: string
 *           description: Technologies used
 *         benefits:
 *           type: array
 *           items:
 *             type: string
 *           description: Service benefits
 *         keywords:
 *           type: array
 *           items:
 *             type: string
 *           description: SEO keywords
 *         pricing:
 *           type: object
 *           properties:
 *             starting:
 *               type: string
 *               description: Starting price
 *             description:
 *               type: string
 *               description: Pricing description
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/website-services:
 *   get:
 *     summary: Get all services for website display
 *     tags: [Public Services]
 *     description: Retrieve all services with complete information for website frontend
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
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
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

    // Transform data to match frontend interface (same as original Next.js app)
    const transformedServices = services.map(service => ({
      id: service.id,
      slug: service.slug,
      title: service.title,
      description: service.description,
      shortDescription: service.shortDescription,
      image: service.imageUrl || '',
      heroImage: service.heroImageUrl || '',
      features: service.features.map(f => f.feature),
      technologies: service.technologies.map(t => t.technology),
      benefits: service.benefits.map(b => b.benefit),
      keywords: service.keywords.map(k => k.keyword),
      pricing: service.pricing ? {
        starting: service.pricing.starting,
        description: service.pricing.description,
      } : undefined,
    }));

    res.status(200).json({
      success: true,
      data: transformedServices,
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * @swagger
 * /api/website-services/{slug}:
 *   get:
 *     summary: Get service by slug
 *     tags: [Public Services]
 *     description: Retrieve a specific service by its slug for website display
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Service slug
 *         example: ai-development
 *     responses:
 *       200:
 *         description: Service retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Service'
 *       404:
 *         description: Service not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Service not found
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/:slug', validateParams(serviceSchemas.slug), async (req, res) => {
  try {
    const { slug } = req.validatedParams;

    const service = await prisma.service.findUnique({
      where: { slug },
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

    // Transform data to match frontend interface
    const transformedService = {
      id: service.id,
      slug: service.slug,
      title: service.title,
      description: service.description,
      shortDescription: service.shortDescription,
      image: service.imageUrl || '',
      heroImage: service.heroImageUrl || '',
      features: service.features.map(f => f.feature),
      technologies: service.technologies.map(t => t.technology),
      benefits: service.benefits.map(b => b.benefit),
      keywords: service.keywords.map(k => k.keyword),
      pricing: service.pricing ? {
        starting: service.pricing.starting,
        description: service.pricing.description,
      } : undefined,
    };

    res.status(200).json({
      success: true,
      data: transformedService,
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
 * /api/website-services/slugs/all:
 *   get:
 *     summary: Get all service slugs
 *     tags: [Public Services]
 *     description: Retrieve all service slugs for static site generation
 *     responses:
 *       200:
 *         description: Service slugs retrieved successfully
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
 *                     type: string
 *                   example: ["ai-development", "web-development", "mobile-apps"]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/slugs/all', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      select: {
        slug: true
      }
    });

    const slugs = services.map(service => service.slug);

    res.status(200).json({
      success: true,
      data: slugs,
    });
  } catch (error) {
    console.error('Error fetching service slugs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch service slugs',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;