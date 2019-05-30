const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    type: { type: Number, required: true },
    title: { type: String, required: true },
    researchsubline: { type: mongoose.Schema.Types.ObjectId, required: true },
    photo: { type: String, required: true },
    summary: { type: String, required: true },
    productions: [{ type: mongoose.Schema.Types.ObjectId }],
    users: { type: mongoose.Schema.Types.ObjectId, required: true }
  },
  { timestamps: true }
);

module.exports = Project = mongoose.model('project', ProjectSchema);
