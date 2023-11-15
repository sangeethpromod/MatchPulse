const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerId: {
    type: String,
    default: () => Math.floor(1000 + Math.random() * 9000).toString(),
    unique: true,
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  playerNumber: { type: String, required: true },
  playerDescription: { type: String, required: true },
  stats: {
    matches: { type: Number, required: true },
    goals: { type: Number, required: true },
    assists: { type: Number, required: true },
    mins: { type: Number, required: true },
    yellowCard: { type: Number, required: true },
    redCard: { type: Number, required: true },
  },
  trophies: [
    {
      trophyName: { type: String },
      numberOfTrophies: { type: Number },
    },
  ],
  images: [{ type: String }], // Add this field for storing image URLs
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
