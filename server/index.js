const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const businessRoutes = require('./routes/businessRoutes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/business', businessRoutes);

app.get('/', (req, res) => {
  res.send('Voice2Web API is running...');
});

// Database connection (dummy for now)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/voice2web')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
