const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const multer = require("multer");

dotenv.config();

const app = express();
const port = process.env.PORT; // ||3000

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
// Routes
app.use("/auth", authRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// Swagger middleware






