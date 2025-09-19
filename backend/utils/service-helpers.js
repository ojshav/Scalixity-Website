const cloudinary = require('cloudinary').v2;
const multer = require('multer');

// Cloudinary is already configured in the main server, but let's ensure configuration
if (!cloudinary.config().cloud_name) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

// Multer configuration for memory storage (same pattern as existing work.js)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit (same as existing backend)
  },
  fileFilter: (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

/**
 * Upload image to Cloudinary
 * @param {Buffer} imageBuffer - Image buffer from multer
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} - Cloudinary upload result
 */
const uploadToCloudinary = (imageBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder: options.folder || 'scalixity/services',
      public_id: options.public_id,
      transformation: options.transformation || [
        { quality: 'auto' },
        { fetch_format: 'auto' }
      ],
      overwrite: true,
      resource_type: 'auto',
    };

    cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    ).end(imageBuffer);
  });
};

/**
 * Delete image from Cloudinary
 * @param {string} publicId - Cloudinary public ID
 * @returns {Promise<void>}
 */
const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
};

/**
 * Extract public ID from Cloudinary URL
 * @param {string} url - Cloudinary URL
 * @returns {string|null} - Public ID or null if not found
 */
const extractPublicIdFromUrl = (url) => {
  if (!url) return null;
  
  try {
    // Extract public ID from Cloudinary URL
    // URL format: https://res.cloudinary.com/cloud_name/image/upload/folder/public_id.extension
    const matches = url.match(/\/v\d+\/(.+)\./);
    if (matches && matches[1]) {
      return matches[1];
    }
    
    // Fallback: try different pattern
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0];
  } catch (error) {
    console.warn('Could not extract public ID from URL:', url);
    return null;
  }
};

/**
 * Get optimized image URL from Cloudinary
 * @param {string} publicId - Cloudinary public ID
 * @param {Object} options - Transformation options
 * @returns {string} - Optimized image URL
 */
const getOptimizedImageUrl = (publicId, options = {}) => {
  return cloudinary.url(publicId, {
    width: options.width,
    height: options.height,
    quality: options.quality || 'auto',
    format: options.format || 'auto',
    fetch_format: 'auto',
    secure: true,
  });
};

module.exports = {
  upload,
  uploadToCloudinary,
  deleteFromCloudinary,
  extractPublicIdFromUrl,
  getOptimizedImageUrl,
  cloudinary
};