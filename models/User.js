const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true
    },
    last_name: {
      type: String,
      lowercase: true,
      required: true
    },
    birthdate: { type: Date, required: true },
    email: {
      type: String,
      lowercase: true,
      unique: [true, 'email already exists'],
      required: true
    },
    password: { type: String, required: true },
    role: { type: Number, default: 2 },
    photo: { type: String },
    projects: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }]
    }
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('user', UserSchema);
