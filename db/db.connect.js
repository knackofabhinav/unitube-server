const mongoose = require("mongoose");

async function initializeDBConnection() {
  // Connecting to DB
  try {
    await mongoose
      .connect(process.env.DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then(() => console.log("successfully connected"));
  } catch (err) {
    console.error("mongoose connection failed...", error);
  }
}

module.exports = { initializeDBConnection };
