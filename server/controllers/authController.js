const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// Configure nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "process.env.EMAIL_USER", // Your Gmail email address
    pass: "process.env.EMAIL_PASS", // Your Gmail password or an app-specific password if you have 2FA enabled
  },
});

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const userId = uuidv4();

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Check if email exists
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      userId,
      username,
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token  {fix the env file and make it process.env.JWT_SECRET }
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);

    res.json({
      token,
      username: user.username,
      userId: user.userId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the user exists with the provided email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a unique reset token (e.g., using crypto)
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Set the expiration time for the reset token (e.g., 10 minutes from now)
    const resetTokenExpiration = new Date();
    resetTokenExpiration.setMinutes(resetTokenExpiration.getMinutes() + 10);

    // Update the user's reset token and expiration in the database
    user.resetToken = resetToken;
    user.resetTokenExpiration = resetTokenExpiration;
    await user.save();

    // Send a reset password email with the reset token
    const baseUrl ='http://localhost:3000'

    
    const resetLink = `http://localhost:3001/reset-password?token=${resetToken}`;

    const html = ` <h3>Reset Your Password</h3>
                   <p>Please click the link below to reset your password:</p>
                   <a href="${resetLink}">${resetLink}</a>`;

    // Send the email using your nodemailer transporter
    const mailOptions = {
      from: "your_email@gmail.com",
      to: email,
      subject: "Password Reset",
      html
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Find the user by the reset token
    const user = await User.findOne({ resetToken: token });

    // Check if the user exists and if the token is still valid
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (user.resetTokenExpiration < Date.now()) {
      return res.status(401).json({ message: "Expired token" });
    }

    // Update the user's password with the new password (remember to hash it)
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpiration = null;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

