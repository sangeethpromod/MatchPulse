// models/image.js
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrls: [{ type: String, required: true }],
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
 