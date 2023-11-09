const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNum: String,
  message: String,
});

module.exports = mongoose.model("Contact", contactSchema);
