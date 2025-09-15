const express = require('express');
const router = express.Router();
const prisma = require('../config/db');

// GET all inquiries
router.get('/inquiries', async (req, res) => {
  try {
    const inquiries = await prisma.serviceInquiry.findMany({
      select: {
        id: true,
        companyName: true,
        email: true,
        industryName: true,
        serviceName: true,
        status: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: { createdAt: 'desc' }
    });
    
    res.status(200).json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// GET a single inquiry by ID
router.get('/inquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const inquiry = await prisma.serviceInquiry.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        companyName: true,
        email: true,
        industryName: true,
        serviceName: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    
    res.status(200).json(inquiry);
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
    const inquiry = await prisma.serviceInquiry.create({
      data: {
        companyName: company_name,
        email,
        industryName: industry_name,
        serviceName: service_name
      }
    });
    
    res.status(201).json({
      message: 'Service inquiry stored successfully',
      inquiryId: inquiry.id,
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
    if (!status || !['NEW', 'IN_PROGRESS', 'RESOLVED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    
    const inquiry = await prisma.serviceInquiry.update({
      where: { id: parseInt(id) },
      data: { status }
    });
    
    res.status(200).json({ 
      message: 'Inquiry status updated successfully',
      inquiry 
    });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    res.status(500).json({ error: 'Failed to update inquiry status' });
  }
});

// DELETE an inquiry
router.delete('/inquiries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.serviceInquiry.delete({
      where: { id: parseInt(id) }
    });
    
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ error: 'Failed to delete inquiry' });
  }
});

module.exports = router;