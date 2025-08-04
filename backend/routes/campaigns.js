const express = require('express');
const router = express.Router();

// GET all campaigns
router.get('/campaigns', async (req, res) => {
  try {
    const pool = req.app.locals.pool;
    const [rows] = await pool.execute(
      `SELECT id, name, description, image_url, start_date, end_date, type, created_at, updated_at FROM campaigns ORDER BY created_at DESC`
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

// GET a single campaign by ID
router.get('/campaigns/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = req.app.locals.pool;
    const [rows] = await pool.execute(
      `SELECT id, name, description, image_url, start_date, end_date, type, created_at, updated_at FROM campaigns WHERE id = ?`,
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching campaign:', error);
    res.status(500).json({ error: 'Failed to fetch campaign' });
  }
});

// POST a new campaign
router.post('/campaigns', async (req, res) => {
  const { name, description, image_url, start_date, end_date, type } = req.body;
  if (!name || !start_date || !end_date || !type) {
    return res.status(400).json({ error: 'Name, start_date, end_date, and type are required.' });
  }
  
  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(start_date) || !dateRegex.test(end_date)) {
    return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD format.' });
  }
  
  try {
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `INSERT INTO campaigns (name, description, image_url, start_date, end_date, type, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [name, description || null, image_url || null, start_date, end_date, type]
    );
    res.status(201).json({
      message: 'Campaign created successfully',
      campaignId: result.insertId,
    });
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});

// PUT update a campaign
router.put('/campaigns/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, image_url, start_date, end_date, type } = req.body;
  if (!name || !start_date || !end_date || !type) {
    return res.status(400).json({ error: 'Name, start_date, end_date, and type are required.' });
  }
  
  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(start_date) || !dateRegex.test(end_date)) {
    return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD format.' });
  }
  
  try {
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `UPDATE campaigns SET name = ?, description = ?, image_url = ?, start_date = ?, end_date = ?, type = ?, updated_at = NOW() WHERE id = ?`,
      [name, description || null, image_url || null, start_date, end_date, type, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    res.status(200).json({ message: 'Campaign updated successfully' });
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).json({ error: 'Failed to update campaign' });
  }
});

// DELETE a campaign
router.delete('/campaigns/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `DELETE FROM campaigns WHERE id = ?`,
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    res.status(200).json({ message: 'Campaign deleted successfully' });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).json({ error: 'Failed to delete campaign' });
  }
});

// --- Campaign Form Questions API ---
// GET all questions for a campaign
router.get('/campaigns/:id/questions', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = req.app.locals.pool;
    
    // First, let's clean up any malformed options data
    const [updateResult] = await pool.execute(
      `UPDATE campaign_questions SET options = NULL WHERE campaign_id = ? AND (options = '' OR options = 'null' OR options = '[]')`,
      [id]
    );
    
    const [rows] = await pool.execute(
      `SELECT id, campaign_id, question_order, label, type, options FROM campaign_questions WHERE campaign_id = ? ORDER BY question_order ASC`,
      [id]
    );
    
    console.log('Raw database rows:', rows);
    // Parse options JSON safely
    const questions = rows.map(q => {
      console.log(`Processing question ${q.id}:`, q);
      console.log(`Raw options for question ${q.id}:`, q.options);
      console.log(`Options type:`, typeof q.options);
      
      // Special check for the problematic question
      if (q.id === 10) {
        console.log('=== SPECIAL DEBUG FOR QUESTION 10 ===');
        console.log('Raw options:', q.options);
        console.log('Options type:', typeof q.options);
        console.log('Options length:', q.options ? q.options.length : 'null');
        if (typeof q.options === 'string') {
          console.log('Options string length:', q.options.length);
          console.log('Options string chars:', Array.from(q.options).map(c => c.charCodeAt(0)));
        }
        console.log('=== END SPECIAL DEBUG ===');
      }
      
      let opts = [];
      if (q.options && q.options !== null && q.options !== 'null' && q.options !== '') {
        try {
          // Check if it's already an array (MySQL might have parsed it)
          if (Array.isArray(q.options)) {
            opts = q.options;
            console.log(`Options already parsed for question ${q.id}:`, opts);
          } else {
            opts = JSON.parse(q.options);
            console.log(`Parsed options for question ${q.id}:`, opts);
          }
          if (!Array.isArray(opts)) opts = [];
        } catch (error) {
          console.error(`Failed to parse options for question ${q.id}:`, error);
          console.error(`Raw options that failed:`, q.options);
          opts = [];
        }
      }
      const result = { ...q, options: opts };
      console.log(`Final question ${q.id}:`, result);
      return result;
    });
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching campaign questions:', error);
    res.status(500).json({ error: 'Failed to fetch campaign questions' });
  }
});

// POST (replace all) questions for a campaign
router.post('/campaigns/:id/questions', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = req.body.questions;
    if (!Array.isArray(questions)) {
      return res.status(400).json({ error: 'Questions must be an array' });
    }
    const pool = req.app.locals.pool;
    // Delete old questions
    await pool.execute(`DELETE FROM campaign_questions WHERE campaign_id = ?`, [id]);
    // Insert new questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      // Only save options for question types that need them
      let optionsJson = null;
      if ((q.type === 'multiple' || q.type === 'checkbox') && q.options && q.options.length > 0) {
        optionsJson = JSON.stringify(q.options);
      }
      await pool.execute(
        `INSERT INTO campaign_questions (campaign_id, question_order, label, type, options) VALUES (?, ?, ?, ?, ?)`,
        [id, i, q.label, q.type, optionsJson]
      );
    }
    res.status(200).json({ message: 'Questions saved successfully' });
  } catch (error) {
    console.error('Error saving campaign questions:', error);
    res.status(500).json({ error: 'Failed to save campaign questions' });
  }
});

// --- Campaign Submissions API ---
// POST submit a campaign form
router.post('/campaigns/:id/submit', async (req, res) => {
  try {
    const { id } = req.params;
    const { answers, visitor_id } = req.body;
    
    if (!answers || typeof answers !== 'object') {
      return res.status(400).json({ error: 'Answers are required and must be an object' });
    }
    
    const pool = req.app.locals.pool;
    
    // Verify campaign exists
    const [campaignRows] = await pool.execute(
      `SELECT id FROM campaigns WHERE id = ?`,
      [id]
    );
    
    if (campaignRows.length === 0) {
      return res.status(404).json({ error: 'Campaign not found' });
    }
    
    // Insert submission
    console.log('Storing submission with answers:', answers);
    const answersJson = JSON.stringify(answers);
    console.log('Answers JSON:', answersJson);
    
    const [result] = await pool.execute(
      `INSERT INTO campaign_submissions (campaign_id, visitor_id, answers) VALUES (?, ?, ?)`,
      [id, visitor_id || null, answersJson]
    );
    
    res.status(201).json({
      message: 'Submission received successfully',
      submissionId: result.insertId,
    });
  } catch (error) {
    console.error('Error submitting campaign form:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

// GET all submissions for a campaign (admin only)
router.get('/campaigns/:id/submissions', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = req.app.locals.pool;
    
    const [rows] = await pool.execute(
      `SELECT id, campaign_id, visitor_id, answers, status, created_at, updated_at 
       FROM campaign_submissions 
       WHERE campaign_id = ? 
       ORDER BY created_at DESC`,
      [id]
    );
    
    console.log('Raw database rows:', rows);
    
    // Parse answers JSON safely
    const submissions = rows.map(row => {
      let answers = {};
      if (row.answers) {
        try {
          // Log the raw answers string for debugging
          console.log(`Raw answers for submission ${row.id}:`, row.answers);
          console.log(`Raw answers type:`, typeof row.answers);
          
          // Handle both string and object cases
          if (typeof row.answers === 'string') {
            answers = JSON.parse(row.answers);
          } else if (typeof row.answers === 'object') {
            answers = row.answers;
          }
          
          console.log(`Parsed answers for submission ${row.id}:`, answers);
        } catch (error) {
          console.error(`Failed to parse answers for submission ${row.id}:`, error);
          console.error(`Raw answers that failed to parse:`, row.answers);
          answers = {};
        }
      } else {
        console.log(`No answers found for submission ${row.id}`);
      }
      return { ...row, answers };
    });
    
    console.log('Sending submissions:', submissions);
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Error fetching campaign submissions:', error);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

// PUT update submission status (admin only)
router.put('/campaigns/submissions/:submissionId/status', async (req, res) => {
  try {
    const { submissionId } = req.params;
    const { status } = req.body;
    
    if (!['submitted', 'reviewed', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be submitted, reviewed, approved, or rejected.' });
    }
    
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `UPDATE campaign_submissions SET status = ?, updated_at = NOW() WHERE id = ?`,
      [status, submissionId]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    
    res.status(200).json({ message: 'Submission status updated successfully' });
  } catch (error) {
    console.error('Error updating submission status:', error);
    res.status(500).json({ error: 'Failed to update submission status' });
  }
});

module.exports = router; 