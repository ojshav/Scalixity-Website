// routes/work.js
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: './backend/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const prisma = require('../config/db');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to check authentication (you might want to add proper JWT authentication)
const authMiddleware = async (req, res, next) => {
    // Add your authentication logic here
    // For now, we'll just proceed
    next();
};

// Apply body-parser middleware to this router with increased limits
router.use(bodyParser.json({ limit: '10mb' }));
router.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// Create new project
router.post('/projects', authMiddleware, async (req, res) => {
    try {
        const { title, description, image, live_url } = req.body;

        if (!title || !description || !image || !live_url) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        let imageUrl = image;

        // Check if the image is a base64 string (new upload)
        if (image.startsWith('data:image')) {
            try {
                // Upload image to Cloudinary
                const uploadResult = await cloudinary.uploader.upload(image, {
                    folder: 'projects',
                });
                
                // Get the Cloudinary image URL
                imageUrl = uploadResult.secure_url;
            } catch (uploadError) {
                console.error('Error uploading to Cloudinary:', uploadError);
                return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
            }
        }

        // Store project details in the database
        const result = await prisma.project.create({
            data: {
                title,
                description,
                image: imageUrl,
                liveUrl: live_url
            }
        });

        res.status(201).json({
            id: result.id,
            title,
            description,
            image: imageUrl,
            live_url
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
});

// Update project
router.put('/projects/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, live_url } = req.body;

        if (!title || !description || !image || !live_url) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        let imageUrl = image;

        // Check if the image is a base64 string (new upload)
        if (image.startsWith('data:image')) {
            try {
                // Upload image to Cloudinary
                const uploadResult = await cloudinary.uploader.upload(image, {
                    folder: 'projects',
                });
                
                // Get the Cloudinary image URL
                imageUrl = uploadResult.secure_url;
            } catch (uploadError) {
                console.error('Error uploading to Cloudinary:', uploadError);
                return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
            }
        }

        const result = await prisma.project.update({
            where: { id: parseInt(id) },
            data: {
                title,
                description,
                image: imageUrl,
                liveUrl: live_url
            }
        });

        res.json({
            id: parseInt(id),
            title,
            description,
            image: imageUrl,
            live_url
        });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ error: 'Failed to update project' });
    }
});

// Delete project
router.delete('/projects/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await prisma.project.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

module.exports = router;