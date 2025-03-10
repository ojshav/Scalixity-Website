const express = require('express');
const router = express.Router();

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
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      'INSERT INTO contact_us (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone || null, message]
    );

    res.status(201).json({
      message: 'Contact form submitted successfully',
      id: result.insertId
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
    const pool = req.app.locals.pool;
    const [rows] = await pool.execute(
      'SELECT id, name, email, phone,message, status, created_at FROM contact_us ORDER BY created_at DESC'
    );

    res.json({
      data: rows
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      error: 'Failed to fetch contact submissions'
    });
  }
});

module.exports = router;