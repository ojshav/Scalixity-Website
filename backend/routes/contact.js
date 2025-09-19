const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Contact form submissions
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 example: +1234567890
 *               message:
 *                 type: string
 *                 example: I would like to know more about your services
 *     responses:
 *       201:
 *         description: Contact form submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Contact form submitted successfully
 *                 id:
 *                   type: integer
 *                   example: 1
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       429:
 *         $ref: '#/components/responses/RateLimitError'
 */
// POST route to handle contact form submission
router.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required fields'
    });
  }

  try {
    const result = await prisma.contactUs.create({
      data: {
        name,
        email,
        phone: phone || null,
        message
      }
    });

    res.status(201).json({
      message: 'Contact form submitted successfully',
      id: result.id
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({
      error: 'Failed to submit contact form'
    });
  }
});

/**
 * @swagger
 * /api/contact:
 *   get:
 *     summary: Get all contact form submissions (Admin only)
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contact submissions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ContactForm'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
// GET route to retrieve all contact submissions (for admin purposes)
router.get('/contact', async (req, res) => {
  try {
    const contacts = await prisma.contactUs.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        message: true,
        status: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      error: 'Failed to fetch contact submissions'
    });
  }
});

module.exports = router;