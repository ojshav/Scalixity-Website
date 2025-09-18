/**
 * Campaigns Service - Prisma Implementation
 * Handles campaigns, questions, and submissions with JSON field management
 */

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class CampaignsService {
  /**
   * Get all campaigns
   */
  async getAllCampaigns() {
    try {
      console.log('[CAMPAIGNS-SERVICE] Starting getAllCampaigns');
      const campaigns = await prisma.campaign.findMany({
        orderBy: { createdAt: 'desc' }
      });
      console.log('[CAMPAIGNS-SERVICE] Found campaigns:', campaigns.length);

      // Manually fetch questions and submissions for each campaign
      const campaignsWithRelations = await Promise.all(
        campaigns.map(async (campaign) => {
          try {
            console.log('[CAMPAIGNS-SERVICE] Fetching relations for campaign:', campaign.id);
            const [questions, submissions] = await Promise.all([
              prisma.campaignQuestion.findMany({
                where: { campaignId: campaign.id },
                orderBy: { questionOrder: 'asc' }
              }),
              prisma.campaignSubmission.findMany({
                where: { campaignId: campaign.id }
              })
            ]);

            console.log('[CAMPAIGNS-SERVICE] Found', questions.length, 'questions and', submissions.length, 'submissions for campaign', campaign.id);
            
            return {
              ...campaign,
              questions,
              submissions
            };
          } catch (relationError) {
            console.error('[CAMPAIGNS-SERVICE] Error fetching relations for campaign', campaign.id, ':', relationError);
            // Return campaign without relations if relation fetch fails
            return {
              ...campaign,
              questions: [],
              submissions: []
            };
          }
        })
      );

      console.log('[CAMPAIGNS-SERVICE] Successfully processed all campaigns with relations');
      return campaignsWithRelations;
    } catch (error) {
      console.error('[CAMPAIGNS-SERVICE] Error in getAllCampaigns:', error);
      throw new Error('Failed to fetch campaigns');
    }
  }

  /**
   * Get single campaign by ID
   */
  async getCampaignById(id) {
    try {
      const campaign = await prisma.campaign.findUnique({
        where: { id: parseInt(id) }
      });

      if (!campaign) {
        throw new Error('Campaign not found');
      }

      // Manually fetch questions and submissions
      const [questions, submissions] = await Promise.all([
        prisma.campaignQuestion.findMany({
          where: { campaignId: campaign.id },
          orderBy: { questionOrder: 'asc' }
        }),
        prisma.campaignSubmission.findMany({
          where: { campaignId: campaign.id }
        })
      ]);

      return {
        ...campaign,
        questions,
        submissions
      };
    } catch (error) {
      console.error('Error fetching campaign:', error);
      throw error;
    }
  }

  /**
   * Create new campaign
   */
  async createCampaign(campaignData) {
    try {
      const { name, description, imageUrl, startDate, endDate, type } = campaignData;

      if (!name || !startDate || !endDate || !type) {
        throw new Error('Name, start_date, end_date, and type are required.');
      }

      return await prisma.campaign.create({
        data: {
          name,
          description: description || null,
          imageUrl: imageUrl || null,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          type
        }
      });
    } catch (error) {
      console.error('Error creating campaign:', error);
      throw error;
    }
  }

  /**
   * Update campaign
   */
  async updateCampaign(id, campaignData) {
    try {
      const { name, description, imageUrl, startDate, endDate, type } = campaignData;

      if (!name || !startDate || !endDate || !type) {
        throw new Error('Name, start_date, end_date, and type are required.');
      }

      return await prisma.campaign.update({
        where: { id: parseInt(id) },
        data: {
          name,
          description: description || null,
          imageUrl: imageUrl || null,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          type
        }
      });
    } catch (error) {
      console.error('Error updating campaign:', error);
      throw error;
    }
  }

  /**
   * Delete campaign
   */
  async deleteCampaign(id) {
    try {
      return await prisma.campaign.delete({
        where: { id: parseInt(id) }
      });
    } catch (error) {
      console.error('Error deleting campaign:', error);
      throw error;
    }
  }

  /**
   * Get campaign questions
   */
  async getCampaignQuestions(campaignId) {
    try {
      const questions = await prisma.campaignQuestion.findMany({
        where: { campaignId: parseInt(campaignId) },
        orderBy: { questionOrder: 'asc' }
      });

      // Process JSON options safely
      return questions.map(q => {
        let options = [];
        if (q.options && q.options !== null) {
          try {
            // Handle both JSON object and string cases
            if (typeof q.options === 'string') {
              options = JSON.parse(q.options);
            } else if (Array.isArray(q.options)) {
              options = q.options;
            } else if (typeof q.options === 'object') {
              options = q.options;
            }
          } catch (error) {
            console.error(`Failed to parse options for question ${q.id}:`, error);
            options = [];
          }
        }
        
        return { ...q, options };
      });
    } catch (error) {
      console.error('Error fetching campaign questions:', error);
      throw error;
    }
  }

  /**
   * Save campaign questions (replace all)
   */
  async saveCampaignQuestions(campaignId, questions) {
    try {
      if (!Array.isArray(questions)) {
        throw new Error('Questions must be an array');
      }

      return await prisma.$transaction(async (prisma) => {
        // Delete existing questions
        await prisma.campaignQuestion.deleteMany({
          where: { campaignId: parseInt(campaignId) }
        });

        // Insert new questions
        const createdQuestions = [];
        for (let i = 0; i < questions.length; i++) {
          const q = questions[i];
          
          // Process options for storage
          let optionsJson = null;
          if ((q.type === 'multiple' || q.type === 'checkbox') && q.options && q.options.length > 0) {
            optionsJson = q.options; // Prisma handles JSON serialization
          }

          const question = await prisma.campaignQuestion.create({
            data: {
              campaignId: parseInt(campaignId),
              questionOrder: i,
              label: q.label,
              type: q.type,
              options: optionsJson
            }
          });

          createdQuestions.push(question);
        }

        return createdQuestions;
      });
    } catch (error) {
      console.error('Error saving campaign questions:', error);
      throw error;
    }
  }

  /**
   * Submit campaign form
   */
  async submitCampaignForm(campaignId, submissionData) {
    try {
      const { answers, visitor_id } = submissionData;

      if (!answers || typeof answers !== 'object') {
        throw new Error('Answers are required and must be an object');
      }

      // Verify campaign exists
      const campaign = await prisma.campaign.findUnique({
        where: { id: parseInt(campaignId) }
      });

      if (!campaign) {
        throw new Error('Campaign not found');
      }

      return await prisma.campaignSubmission.create({
        data: {
          campaignId: parseInt(campaignId),
          visitorId: visitor_id || null,
          answers: answers // Prisma handles JSON serialization
        }
      });
    } catch (error) {
      console.error('Error submitting campaign form:', error);
      throw error;
    }
  }

  /**
   * Get campaign submissions
   */
  async getCampaignSubmissions(campaignId) {
    try {
      const submissions = await prisma.campaignSubmission.findMany({
        where: { campaignId: parseInt(campaignId) },
        orderBy: { createdAt: 'desc' }
      });

      // Get campaign name separately
      const campaign = await prisma.campaign.findUnique({
        where: { id: parseInt(campaignId) },
        select: { name: true }
      });

      // Process JSON answers safely and add campaign name
      return submissions.map(submission => {
        let answers = {};
        if (submission.answers) {
          try {
            // Handle both JSON object and string cases
            if (typeof submission.answers === 'string') {
              answers = JSON.parse(submission.answers);
            } else if (typeof submission.answers === 'object') {
              answers = submission.answers;
            }
          } catch (error) {
            console.error(`Failed to parse answers for submission ${submission.id}:`, error);
            answers = {};
          }
        }
        
        return { 
          ...submission, 
          answers,
          campaign: campaign
        };
      });
    } catch (error) {
      console.error('Error fetching campaign submissions:', error);
      throw error;
    }
  }

  /**
   * Update submission status
   */
  async updateSubmissionStatus(submissionId, status) {
    try {
      const validStatuses = ['submitted', 'reviewed', 'approved', 'rejected'];
      if (!validStatuses.includes(status)) {
        throw new Error('Invalid status. Must be submitted, reviewed, approved, or rejected.');
      }

      return await prisma.campaignSubmission.update({
        where: { id: parseInt(submissionId) },
        data: { 
          status: status.toUpperCase() // Convert to enum format
        }
      });
    } catch (error) {
      console.error('Error updating submission status:', error);
      throw error;
    }
  }
}

module.exports = new CampaignsService();
