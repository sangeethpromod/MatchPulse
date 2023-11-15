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
const {
  createPlayerWithImage,
  getPlayersByFirstName,
} = require("../controllers/addplayerController"); // Import modified functions

// Routes
router.post("/register", authController.register);
router.post("/tokens", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);
router.get("/validate-reset-token/:token", authController.resetPassword);

// Create Newsletter Routes
router.post("/subscribe", saveEmail);
router.get("/subscriptions", getSubscriptions);
router.delete("/subscriptions/:id", deleteEmail);

// Create Contact Routes
router.post("/contacts", createContact);
router.get("/getcontacts", getContact);
router.post("/sendcontactEmail", sendcontactEmail);

// Create Player Routes
router.post("/createPlayer", upload.array("file"), createPlayerWithImage);
router.get("/getPlayers/:firstName", getPlayersByFirstName);

module.exports = router;



          <div className="trophy-number-enter">
            {inputPairs.map((pair, index) => (
              <div key={pair.id} className="trophy-pair">
                <input
                  type="text"
                  placeholder="ENTER TROPHY NAME"
                  value={pair.label}
                  onChange={(e) => handleInputChange(e, pair.id, "label")}
                />
                <input
                  type="text"
                  placeholder="ENTER NUMBER OF TROPHIES"
                  value={pair.value}
                  onChange={(e) => handleInputChange(e, pair.id, "value")}
                />
              </div>
            ))}
            <button className="add-more-trophy" onClick={handleAddMoreTrophies}>
              Add More
            </button>
          </div>;