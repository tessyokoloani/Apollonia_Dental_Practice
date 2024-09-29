const mongoose = require("mongoose");

const connectDB = async () => {
  let connection = false;
  let counter = 0;
  while (!connection || counter <= 5) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB");
      connection = true;
      counter += 1;
    } catch (err) {
      console.log("catch error: " + err.message);
      setTimeout(() => {
        console.log("Trying to connect to MongoDB...");
        counter += 1;
      }, 2000);
    }
  }
};

module.exports = connectDB;
