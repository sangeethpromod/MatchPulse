const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// const linkController = require("../controllers/linksController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
// router.post("/linkdata", linkController.saveLinkData);
// router.get("/linkdata/:username", linkController.getLinkData);

module.exports = router;
