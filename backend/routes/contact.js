const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

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