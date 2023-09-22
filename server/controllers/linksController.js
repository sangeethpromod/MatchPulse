// // controllers/authController.js

// const Link = require("../models/links"); // Corrected model import
// const { link } = require("../routes/authRoutes");
// const {users} = require("../models/User")

// // used to save user data
// const saveLinkData = async (req, res) => {
//   try {
//     const {
//       username,
//       bioName,
//       about,
//       emoji,
//       instagramLink,
//       facebookLink,
//       pintrestLink,
//       xLink,
//       linkdinLink,
//       threadsLink,
//     } = req.body;

//     const newLink = new Link({
//       username,
//       bioName,
//       about,
//       emoji,
//       instagramLink,
//       facebookLink,
//       pintrestLink,
//       xLink,
//       linkdinLink,
//       threadsLink,
//     });

//     newLink.isDataLinked = true;
    

//     // api to save data to mongodb

//     await newLink.save();

//     res.status(201).json({ message: "User data saved successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// const getLinkData = async (req, res) => {
//   try {
//     // It gets the data to show in front page
//     username=req.params.username
//     const links = await Link.findOne({username});

//     res.status(200).json(links);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// module.exports = {
//   saveLinkData,
//   getLinkData,
// };
