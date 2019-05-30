const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const ResearchLine = require('../../models/ResearchLine');

// @route   POST api/researchlines
// @desc    Create one research line
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name field is required')
        .not()
        .isEmpty(),
      check('description', 'Description field is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (req.user.role != 0 || req.user.role != 1)
      return res.status(403).json({ msg: 'User not authorized' });
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    // Build Research Line object
    const researchLineFields = {};
    if (name) researchLineFields.name = name;
    if (description) researchLineFields.description = description;

    try {
      // Create
      researchline = new ResearchLine(researchLineFields);
      await researchline.save();
      res.json(researchline);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/researchlines/:id_line
// @desc    Update Resarch line
// @access  Private
router.put(
  '/:id_line',
  [
    auth,
    [
      check('name', 'Name field is required')
        .not()
        .isEmpty(),
      check('description', 'Description field is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (req.user.role === 2)
      return res.status(403).json({ msg: 'User not authorized' });
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    const updatedResearchLine = {
      name,
      description
    };

    try {
      researchline = await ResearchLine.findOneAndUpdate(
        { _id: req.params.id_line },
        { $set: updatedResearchLine },
        { new: true }
      );

      return res.json(researchline);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Serve Error');
    }
  }
);

module.exports = router;
