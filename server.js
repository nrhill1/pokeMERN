const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/auth.js");
const pokeRoutes = require("./routes/pokemon.js");

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

// Auth Routes
app.use("/auth", authRoutes);
app.use("/poke", pokeRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
