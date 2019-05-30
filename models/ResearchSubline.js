const mongoose = require('mongoose');

const ResearchSublineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  researchline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'researchline',
    required: true
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }]
});

module.exports = ResearchSubline = mongoose.model(
  'researchsubline',
  ResearchSublineSchema
);
