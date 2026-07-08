const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    address: String,
    city: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  description: String,
  contact: {
    phone: String,
    whatsapp: String,
    email: String,
  },
  operatingHours: {
    open: String,
    close: String,
    rawText: String, // e.g., "8 AM - 10 PM"
  },
  productsServices: [{
    name: String,
    description: String,
    price: Number,
  }],
  status: {
    type: String,
    enum: ['Draft', 'Published'],
    default: 'Draft',
  },
  websiteGeneratedAt: Date,
  themeConfig: {
    name: {
      type: String,
      enum: ['Classic', 'Modern', 'Professional', 'Minimal'],
      default: 'Classic',
    },
    primaryColor: String,
    fontFamily: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);
