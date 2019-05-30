const mongoose = require('mongoose');

const ResearchLineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = ResearchLine = mongoose.model(
  'researchline',
  ResearchLineSchema
);
