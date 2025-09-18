/**
 * Admin Service Layer with Prisma
 * Handles all admin-related database operations
 */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateTokens } = require('../middleware/auth');

class AdminService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  /**
   * Authenticate admin user
   */
  async authenticate(username, password) {
    try {
      const user = await this.prisma.adminUser.findUnique({
        where: { username },
        select: {
          id: true,
          username: true,
          password: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true
        }
      });

      if (!user) {
        return { success: false, message: 'Invalid credentials' };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return { success: false, message: 'Invalid credentials' };
      }

      // Update last login and activity
      await this.prisma.adminUser.update({
        where: { id: user.id },
        data: {
          lastLogin: new Date(),
          lastActivity: new Date()
        }
      });

      // Temporarily use simple JWT generation to fix authentication
      const token = jwt.sign(
        { 
          userId: user.id, 
          username: user.username,
          role: user.role 
        }, 
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      return {
        success: true,
        message: 'Login successful',
        token: token,
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName
        }
      };

    } catch (error) {
      console.error('Authentication error:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  /**
   * Get admin profile by ID
   */
  async getProfile(userId) {
    try {
      const user = await this.prisma.adminUser.findUnique({
        where: { id: parseInt(userId) },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          lastLogin: true,
          lastActivity: true,
          receiveEmails: true
        }
      });

      if (!user) {
        return { success: false, message: 'User not found' };
      }

      return { success: true, user: user };
    } catch (error) {
      console.error('Get profile error:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  /**
   * Update admin profile
   */
  async updateProfile(userId, updateData) {
    try {
      const { firstName, lastName, email, password, receiveEmails } = updateData;
      const updateFields = {};

      if (firstName) updateFields.firstName = firstName;
      if (lastName) updateFields.lastName = lastName;
      if (receiveEmails !== undefined) updateFields.receiveEmails = receiveEmails;

      if (email) {
        // Check if email is already in use by another user
        const existingUser = await this.prisma.adminUser.findFirst({
          where: {
            email,
            NOT: { id: parseInt(userId) }
          }
        });

        if (existingUser) {
          return { success: false, message: 'Email already in use' };
        }
        updateFields.email = email;
      }

      if (password) {
        updateFields.password = await bcrypt.hash(password, 10);
      }

      if (Object.keys(updateFields).length === 0) {
        return { success: false, message: 'No valid fields to update' };
      }

      const updatedUser = await this.prisma.adminUser.update({
        where: { id: parseInt(userId) },
        data: updateFields,
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          receiveEmails: true
        }
      });

      return { success: true, data: updatedUser };
    } catch (error) {
      console.error('Update profile error:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  /**
   * Create new admin user (super admin only)
   */
  async createAdmin(adminData) {
    try {
      const { username, email, password, firstName, lastName, role, receiveEmails } = adminData;

      // Check if username or email already exists
      const existingUser = await this.prisma.adminUser.findFirst({
        where: {
          OR: [
            { username },
            { email }
          ]
        }
      });

      if (existingUser) {
        return { success: false, message: 'Username or email already exists' };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await this.prisma.adminUser.create({
        data: {
          username,
          email,
          password: hashedPassword,
          firstName: firstName || null,
          lastName: lastName || null,
          role: role || 'admin',
          receiveEmails: receiveEmails || false
        },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          receiveEmails: true
        }
      });

      return { success: true, data: newUser };
    } catch (error) {
      console.error('Create admin error:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  /**
   * Delete admin user (super admin only)
   */
  async deleteAdmin(userIdToDelete, currentUserId) {
    try {
      // Prevent self-deletion
      if (parseInt(userIdToDelete) === parseInt(currentUserId)) {
        return { success: false, message: 'Cannot delete your own account' };
      }

      const user = await this.prisma.adminUser.findUnique({
        where: { id: parseInt(userIdToDelete) }
      });

      if (!user) {
        return { success: false, message: 'User not found' };
      }

      await this.prisma.adminUser.delete({
        where: { id: parseInt(userIdToDelete) }
      });

      return { success: true, message: 'Admin user deleted successfully' };
    } catch (error) {
      console.error('Delete admin error:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  /**
   * Get all admin users (super admin only)
   */
  async getAllAdmins() {
    try {
      const users = await this.prisma.adminUser.findMany({
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          firstName: true,
          lastName: true,
          receiveEmails: true,
          lastLogin: true,
          lastActivity: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return { success: true, data: users };
    } catch (error) {
      console.error('Get all admins error:', error);
      return { success: false, message: 'Internal server error' };
    }
  }

  /**
   * Update user activity timestamp
   */
  async updateActivity(userId) {
    try {
      await this.prisma.adminUser.update({
        where: { id: parseInt(userId) },
        data: { lastActivity: new Date() }
      });
      return { success: true };
    } catch (error) {
      console.error('Update activity error:', error);
      return { success: false };
    }
  }

  /**
   * Check if user has super admin privileges
   */
  async isSuperAdmin(userId) {
    try {
      const user = await this.prisma.adminUser.findUnique({
        where: { id: parseInt(userId) },
        select: { role: true }
      });

      return user && user.role === 'super_admin';
    } catch (error) {
      console.error('Check super admin error:', error);
      return false;
    }
  }

  /**
   * Check user inactivity
   */
  async checkInactivity(userId, timeoutMs = 30 * 60 * 1000) {
    try {
      const user = await this.prisma.adminUser.findUnique({
        where: { id: parseInt(userId) },
        select: { lastActivity: true }
      });

      if (!user || !user.lastActivity) {
        return { inactive: true };
      }

      const lastActivity = new Date(user.lastActivity);
      const currentTime = new Date();

      return {
        inactive: (currentTime - lastActivity) > timeoutMs,
        lastActivity: user.lastActivity
      };
    } catch (error) {
      console.error('Check inactivity error:', error);
      return { inactive: true };
    }
  }
}

module.exports = AdminService;
