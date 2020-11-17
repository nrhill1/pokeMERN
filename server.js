const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/auth");

// Set up Express
const app = express();

// JSON Middleware
app.use(express.json());
// CORS Middleware
app.use(cors());

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// User Routes
app.use("/auth", authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
