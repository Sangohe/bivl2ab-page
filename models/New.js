const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  photo: { type: String },
  description: { type: String }
});

module.exports = New = mongoose.model('new', NewSchema);
