// database.js

const mongoose = require('mongoose');

const connectToDatabase = async () => {
  const connectionString = 'mongodb://localhost:27017/opentowork';

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectToDatabase };
