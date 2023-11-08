const Newsletter = require("../models/newsletter");
const nodemailer = require("nodemailer");

// Controller to save an email address to the database
const saveEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email format is valid
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.status(401).json({ error: "Invalid email format" });
    }

    // Check if the email already exists
    const existingEntry = await Newsletter.findOne({ email });
    if (existingEntry) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newsletterEntry = new Newsletter({ email });
    await newsletterEntry.save();

    // Send a confirmation email
    sendConfirmationEmail(email, res); // Pass res for error handling

    res.status(201).json({ message: "Email subscription successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Function to send a confirmation email
function sendConfirmationEmail(email, res) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail email address
      pass: process.env.EMAIL_PASS, // Your Gmail password or an app-specific password if you have 2FA enabled
    },
  });

 const mailOptions = {
   from: '"MatchPulse" <contact@matchPulse.com>', // Use environment variable for sender's email
   to: email,
   subject: "Welcome to MatchPulse - Your Sports Updates",
   text: `Dear MatchPulse Subscriber,

Welcome to MatchPulse - your gateway to the exciting world of sports! Thank you for subscribing to our newsletter. We're here to keep you in the game with real-time insights on players, teams, and fixtures.

What to expect from MatchPulse:

1. Stay in the Game: Get real-time insights on your favorite players, team stats, and upcoming fixtures.
2. Team Profiles: Discover in-depth team profiles.
3. Fixture Updates: Stay up-to-date on match schedules, scores, and key highlights.
4. Be Part of the Action: Engage with fellow sports enthusiasts in our vibrant community.

MatchPulse is your pass to the world of sports. Let the games begin!

Warm regards,
MatchPulse Team`,
 };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email: " + error);
      res.status(500).json({ error: "Error sending confirmation email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Confirmation email sent" });
    }
  });
}

const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Newsletter.find({}, "email");
    res.status(200).json(subscriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteEmail = async (req, res) => {
  try {
    const emailId = req.params.id; 

    // this will Check if the email exists
    const existingEntry = await Newsletter.findOne({ _id: emailId });

    if (!existingEntry) {
      return res.status(404).json({ error: "Email not found" });
    }

    // thil will Delete the email entry
    await existingEntry.remove();

    res.status(200).json({ message: "Email deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { saveEmail, getSubscriptions, deleteEmail };
