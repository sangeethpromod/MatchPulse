const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

// Create a new contact
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNum, message } = req.body;
    // Add validation and data processing logic as needed

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      mobileNum,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact Created Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find({}, {});
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

//this send the email
const sendcontactEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "your_email@example.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email could not be sent" });
  }
};

module.exports = { createContact, getContact, sendcontactEmail };

