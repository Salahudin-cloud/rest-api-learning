const mongoose = require("mongoose");
require("dotenv").config;
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      
    } );
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
    mongoose.disconnect();
  }
};
module.exports = connectDB;
