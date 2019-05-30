const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  url: { type: String }
});

module.exports = Dataset = mongoose.model('dataset', DatasetSchema);
