// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Store config values
const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit the app if connection fails
  }
};

module.exports = { ...config, connectDB };


//Make sure to add the MongoDB URI to your .env file