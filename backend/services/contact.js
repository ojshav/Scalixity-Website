/**
 * Contact & Inquiries Service - Prisma Implementation
 * Handles contact forms and service inquiries
 */

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class ContactService {
  /**
   * Create contact form submission
   */
  async createContactSubmission(contactData) {
    try {
      const { name, email, phone, message } = contactData;
      
      // Basic validation
      if (!name || !email || !message) {
        throw new Error('Name, email, and message are required fields');
      }

      return await prisma.contactUs.create({
        data: {
          name,
          email,
          phone: phone || null,
          message,
          status: 'NEW'
        }
      });
    } catch (error) {
      console.error('Error creating contact submission:', error);
      throw error;
    }
  }

  /**
   * Get all contact submissions
   */
  async getAllContactSubmissions() {
    try {
      return await prisma.contactUs.findMany({
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      throw new Error('Failed to fetch contact submissions');
    }
  }

  /**
   * Update contact submission status
   */
  async updateContactStatus(id, status) {
    try {
      const validStatuses = ['NEW', 'IN_PROGRESS', 'RESOLVED'];
      if (!validStatuses.includes(status.toUpperCase())) {
        throw new Error('Invalid status');
      }

      return await prisma.contactUs.update({
        where: { id: parseInt(id) },
        data: { status: status.toUpperCase() }
      });
    } catch (error) {
      console.error('Error updating contact status:', error);
      throw error;
    }
  }

  /**
   * Create service inquiry
   */
  async createServiceInquiry(inquiryData) {
    try {
      const { companyName, email, industryName, serviceName } = inquiryData;
      
      if (!companyName || !email || !industryName || !serviceName) {
        throw new Error('All fields are required for service inquiry');
      }

      return await prisma.serviceInquiry.create({
        data: {
          companyName,
          email,
          industryName,
          serviceName,
          status: 'NEW'
        }
      });
    } catch (error) {
      console.error('Error creating service inquiry:', error);
      throw error;
    }
  }

  /**
   * Get all service inquiries
   */
  async getAllServiceInquiries() {
    try {
      return await prisma.serviceInquiry.findMany({
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.error('Error fetching service inquiries:', error);
      throw new Error('Failed to fetch service inquiries');
    }
  }

  /**
   * Update service inquiry status
   */
  async updateServiceInquiryStatus(id, status) {
    try {
      const validStatuses = ['NEW', 'IN_PROGRESS', 'RESOLVED'];
      if (!validStatuses.includes(status.toUpperCase())) {
        throw new Error('Invalid status');
      }

      return await prisma.serviceInquiry.update({
        where: { id: parseInt(id) },
        data: { status: status.toUpperCase() }
      });
    } catch (error) {
      console.error('Error updating service inquiry status:', error);
      throw error;
    }
  }

  /**
   * Create general inquiry
   */
  async createInquiry(inquiryData) {
    try {
      const { visitorId, activityId, inquiryType, timestamp } = inquiryData;
      
      if (!visitorId || !inquiryType) {
        throw new Error('VisitorId and inquiryType are required');
      }

      return await prisma.inquiry.create({
        data: {
          visitorId,
          activityId: activityId || null,
          inquiryType,
          timestamp: timestamp ? new Date(timestamp) : new Date()
        }
      });
    } catch (error) {
      console.error('Error creating inquiry:', error);
      throw error;
    }
  }

  /**
   * Get inquiries with activity data
   */
  async getInquiriesWithActivity() {
    try {
      return await prisma.inquiry.findMany({
        include: {
          activity: {
            select: {
              page: true,
              deviceType: true,
              country: true,
              browser: true,
              userType: true
            }
          }
        },
        orderBy: { timestamp: 'desc' }
      });
    } catch (error) {
      console.error('Error fetching inquiries with activity:', error);
      throw new Error('Failed to fetch inquiries');
    }
  }
}

module.exports = new ContactService();
