const express = require("express");
const router = express.Router();
 const multer = require("multer");
 const storage = multer.memoryStorage();
 const upload = multer({ storage: storage });


const authController = require("../controllers/authController");
const {
  saveEmail,
  getSubscriptions,
  deleteEmail,
} = require("../controllers/newsletterController");
const {
  createContact,
  getContact,
  sendcontactEmail,
} = require("../controllers/contactController");
const playerController = require("../controllers/testplayer"); 
const { uploadImage } = require("../controllers/addplayerController");

// Routes
router.post("/register", authController.register);
router.post("/register", authController.register);
router.post("/tokens", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.get("/validate-reset-token/:token", authController.resetPassword);
router.post("/subscribe", saveEmail);
router.get("/subscriptions", getSubscriptions);
router.delete("/subscriptions/:id", deleteEmail);
router.post("/contacts", createContact);
router.get("/getcontacts", getContact);
router.post("/sendcontactEmail", sendcontactEmail);
router.post("/createPlayer", playerController.createPlayer);
router.post("/images", upload.array("file"),uploadImage);

module.exports = router;
