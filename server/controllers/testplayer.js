// controllers/playerController.js
const Player = require("../models/testingp");

exports.createPlayer = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      firstName,
      lastName,
      playerNumber,
      playerDescription,
      stats,
      trophies,
    } = req.body;

    // Generate a random 4-digit number for playerId
    const playerId = Math.floor(1000 + Math.random() * 9000).toString();

    // Create a new player with the generated playerId
    const player = new Player({
      playerId,
      firstName,
      lastName,
      playerNumber,
      playerDescription,
      stats,
      trophies,
    });

    // Save the player to the database
    await player.save();

    res
      .status(201)
      .json({ success: true, message: "Player created successfully" });
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
