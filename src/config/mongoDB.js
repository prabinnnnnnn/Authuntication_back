const mongoose = require("mongoose");

const mongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/userDatabase";

const Database = async () => {
  try {
    await mongoose.connect(mongoUri);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = Database;
