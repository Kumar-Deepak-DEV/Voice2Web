const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

// @route   POST /api/business/onboard
// @desc    Mock endpoint for creating a business via voice-extracted data
// @access  Public (for now)
router.post('/onboard', async (req, res) => {
  try {
    // In a real scenario, the AI extraction would have parsed this data
    const newBusiness = new Business(req.body);
    const savedBusiness = await newBusiness.save();
    res.status(201).json({
      success: true,
      message: 'Business profile generated successfully',
      data: savedBusiness
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// @route   GET /api/business/:id
// @desc    Get business details for consumer discovery or owner dashboard
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ success: false, message: 'Business not found' });
    res.status(200).json({ success: true, data: business });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// @route   GET /api/business
// @desc    Get all businesses for the Consumer directory
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Basic search/filter can be added here
    const businesses = await Business.find({}).limit(20);
    res.status(200).json({ success: true, data: businesses });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
