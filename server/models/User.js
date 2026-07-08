const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple null/undefined emails
  },
  password: {
    type: String,
    required: true,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
