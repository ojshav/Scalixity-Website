const express = require('express');
const router = express.Router();

// GET all campaigns
router.get('/campaigns', async (req, res) => {
  try {
    const pool = req.app.locals.pool;
    const [rows] = await pool.execute(
      `SELECT id, name, start_date, end_date, type, created_at, updated_at FROM campaigns ORDER BY created_at DESC`
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
      `SELECT id, name, start_date, end_date, type, created_at, updated_at FROM campaigns WHERE id = ?`,
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
  const { name, start_date, end_date, type } = req.body;
  if (!name || !start_date || !end_date || !type) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `INSERT INTO campaigns (name, start_date, end_date, type, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())`,
      [name, start_date, end_date, type]
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
  const { name, start_date, end_date, type } = req.body;
  if (!name || !start_date || !end_date || !type) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    const pool = req.app.locals.pool;
    const [result] = await pool.execute(
      `UPDATE campaigns SET name = ?, start_date = ?, end_date = ?, type = ?, updated_at = NOW() WHERE id = ?`,
      [name, start_date, end_date, type, id]
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
    const [rows] = await pool.execute(
      `SELECT id, campaign_id, question_order, label, type, options FROM campaign_questions WHERE campaign_id = ? ORDER BY question_order ASC`,
      [id]
    );
    // Parse options JSON safely
    const questions = rows.map(q => {
      let opts = [];
      if (q.options) {
        try {
          opts = JSON.parse(q.options);
          if (!Array.isArray(opts)) opts = [];
        } catch {
          opts = [];
        }
      }
      return { ...q, options: opts };
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
      await pool.execute(
        `INSERT INTO campaign_questions (campaign_id, question_order, label, type, options) VALUES (?, ?, ?, ?, ?)`,
        [id, i, q.label, q.type, q.options ? JSON.stringify(q.options) : null]
      );
    }
    res.status(200).json({ message: 'Questions saved successfully' });
  } catch (error) {
    console.error('Error saving campaign questions:', error);
    res.status(500).json({ error: 'Failed to save campaign questions' });
  }
});

module.exports = router; 