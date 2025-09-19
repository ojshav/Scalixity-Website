/**
 * Projects Service - Prisma Implementation
 * Handles project CRUD operations with Cloudinary integration
 */

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

class ProjectsService {
  constructor(prisma) {
    this.prisma = prisma;
  }
  /**
   * Get all projects
   */
  async getAllProjects() {
    try {
      if (!this.prisma) {
        throw new Error('Prisma client not initialized');
      }
      return await this.prisma.project.findMany({
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw new Error('Failed to fetch projects');
    }
  }

  /**
   * Get project by ID
   */
  async getProjectById(id) {
    try {
      if (!id) {
        throw new Error('Project ID is required');
      }

      const projectId = parseInt(id);
      if (isNaN(projectId)) {
        throw new Error('Invalid project ID');
      }

      const project = await this.prisma.project.findUnique({
        where: { id: projectId }
      });
      
      if (!project) {
        throw new Error('Project not found');
      }
      
      return project;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  }

  /**
   * Create new project
   */
  async createProject(projectData) {
    try {
      const { title, description, image, live_url } = projectData;

      if (!title || !description || !image || !live_url) {
        throw new Error('All fields are required');
      }

      let imageUrl = image;

      // Check if the image is a base64 string (new upload)
      if (image.startsWith('data:image')) {
        try {
          // Upload image to Cloudinary
          const uploadResult = await cloudinary.uploader.upload(image, {
            folder: 'projects',
          });
          
          imageUrl = uploadResult.secure_url;
        } catch (uploadError) {
          console.error('Error uploading to Cloudinary:', uploadError);
          throw new Error('Failed to upload image to Cloudinary');
        }
      }

      return await this.prisma.project.create({
        data: {
          title,
          description,
          image: imageUrl,
          liveUrl: live_url
        }
      });
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

  /**
   * Update project
   */
  async updateProject(id, projectData) {
    try {
      const { title, description, image, live_url } = projectData;

      if (!title || !description || !image || !live_url) {
        throw new Error('All fields are required');
      }

      let imageUrl = image;

      // Check if the image is a base64 string (new upload)
      if (image.startsWith('data:image')) {
        try {
          // Upload image to Cloudinary
          const uploadResult = await cloudinary.uploader.upload(image, {
            folder: 'projects',
          });
          
          imageUrl = uploadResult.secure_url;
        } catch (uploadError) {
          console.error('Error uploading to Cloudinary:', uploadError);
          throw new Error('Failed to upload image to Cloudinary');
        }
      }

      const updatedProject = await this.prisma.project.update({
        where: { id: parseInt(id) },
        data: {
          title,
          description,
          image: imageUrl,
          liveUrl: live_url
        }
      });

      return updatedProject;
    } catch (error) {
      console.error('Error updating project:', error);
      if (error.code === 'P2025') {
        throw new Error('Project not found');
      }
      throw error;
    }
  }

  /**
   * Delete project
   */
  async deleteProject(id) {
    try {
      const deletedProject = await this.prisma.project.delete({
        where: { id: parseInt(id) }
      });
      
      return deletedProject;
    } catch (error) {
      console.error('Error deleting project:', error);
      if (error.code === 'P2025') {
        throw new Error('Project not found');
      }
      throw error;
    }
  }

  /**
   * Get projects with pagination
   */
  async getProjectsPaginated(page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;
      
      const [projects, totalCount] = await Promise.all([
        this.prisma.project.findMany({
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' }
        }),
        this.prisma.project.count()
      ]);

      return {
        projects,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalCount / limit),
          totalItems: totalCount,
          itemsPerPage: limit
        }
      };
    } catch (error) {
      console.error('Error fetching paginated projects:', error);
      throw new Error('Failed to fetch projects');
    }
  }

  /**
   * Search projects by title or description
   */
  async searchProjects(searchTerm) {
    try {
      return await this.prisma.project.findMany({
        where: {
          OR: [
            {
              title: {
                contains: searchTerm,
                mode: 'insensitive'
              }
            },
            {
              description: {
                contains: searchTerm,
                mode: 'insensitive'
              }
            }
          ]
        },
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('Error searching projects:', error);
      throw new Error('Failed to search projects');
    }
  }
}

module.exports = ProjectsService;
