const express = require("express");
const router = express.Router();
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

// Routes
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
router.post("/sendemail", sendcontactEmail);

module.exports = router;
