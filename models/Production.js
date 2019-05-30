const mongoose = require('mongoose');

const ProductionSchema = new mongoose.Schema({
  type: { type: Number, required: true },
  title: { type: String, required: true },
  resources: {
    dataset: [{ type: mongoose.Schema.Types.ObjectId }],
    code: { type: String },
    other: { type: String }
  },
  researchline: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  photo: { type: String, required: true },
  abstract: { type: String, required: true },
  document: { type: String }
});

module.exports = Production = mongoose.model('production', ProductionSchema);
