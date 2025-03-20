const express = require('express');
const router = express.Router();

// GET all inquiries
router.get('/inquiries', async (req, res) => {
  try {
    const pool = req.app.locals.pool;
    const [rows] = await pool.execute(
      `SELECT id, company_name, email, industry_name, service_name, status, 
       created_at, updated_at FROM service_inquiries ORDER BY created_at DESC`
    );
    
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// GET a single inquiry by ID
router.get('/inquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = req.app.locals.pool;
    
    const [rows] = await pool.execute(
      `SELECT id, company_name, email, industry_name, service_name, status, 
       created_at, updated_at FROM service_inquiries WHERE id = ?`,
      [id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    res.status(500).json({ error: 'Failed to fetch inquiry' });
  }
});

// POST a new inquiry (your existing code)
router.post('/inquiries', async (req, res) => {
  const { company_name, email, industry_name, service_name } = req.body;  
  // Ensure all required fields are present
  if (!company_name || !email || !industry_name || !service_name) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `INSERT INTO service_inquiries (company_name, email, industry_name, service_name, created_at) 
       VALUES (?, ?, ?, ?, NOW())`,
      [company_name, email, industry_name, service_name]
    );
    res.status(201).json({
      message: 'Service inquiry stored successfully',
      inquiryId: result.insertId,
    });
  } catch (error) {
    console.error('Error storing service inquiry:', error);
    res.status(500).json({ error: 'Failed to store service inquiry' });
  }
});

// UPDATE an inquiry's status
router.put('/inquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validate status
    if (!status || !['new', 'in_progress', 'resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `UPDATE service_inquiries SET status = ? WHERE id = ?`,
      [status, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    
    res.status(200).json({ message: 'Inquiry status updated successfully' });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    res.status(500).json({ error: 'Failed to update inquiry status' });
  }
});

// DELETE an inquiry
router.delete('/inquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = req.app.locals.pool;
    
    const [result] = await pool.execute(
      `DELETE FROM service_inquiries WHERE id = ?`,
      [id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ error: 'Failed to delete inquiry' });
  }
});

module.exports = router;