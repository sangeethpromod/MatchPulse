require("dotenv").config();

const aws = require("aws-sdk");
const Player = require("../models/addplayer");

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

aws.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

const s3 = new aws.S3();

const uploadImages = async (files) => {
  try {
    console.log("Uploading files:", files);

    const uploadedFiles = await Promise.all(
      files.map(async (file) => {
        const { originalname, buffer, mimetype } = file;
        const params = {
          Bucket: "sangeeth-matchpulse",
          ACL: "public-read",
          ContentType: mimetype,
          Key: originalname,
          Body: buffer,
        };

        const uploadedFile = await s3.upload(params).promise();
        console.log("Uploaded File:", uploadedFile);

        return uploadedFile.Location;
      })
    );

    console.log("All Uploaded Files:", uploadedFiles);

    return uploadedFiles;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};

const createPlayerWithImage = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      playerNumber,
      playerDescription,
      stats,
      trophies,
    } = req.body;
    console.log(req.body)
    const playerId = Math.floor(1000 + Math.random() * 9000).toString();

    // Ensure req.files is not empty
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No files uploaded" });
    }

    // Wait for image uploads to complete
    const imageUrls = await uploadImages(req.files);
    console.log("Image URLs:", imageUrls);

    // Assign imageUrls to the 'images' property in the Player object
    const player = new Player({
      playerId,
      firstName,
      lastName,
      playerNumber,
      playerDescription,
      stats,
      trophies,
      images: imageUrls,
    });

    // Save the player object
    await player.save();

    res
      .status(201)
      .json({ success: true, message: "Player created successfully" });
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


const getPlayersByFirstName = async (req, res) => {
  try {
    const { firstName } = req.params;
    const players = await Player.find({
      firstName: new RegExp(firstName, "i"),
    });

    res.status(200).json({ success: true, data: players });
  } catch (error) {
    console.error("Error getting players by first name:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  createPlayerWithImage,
  getPlayersByFirstName,
};
