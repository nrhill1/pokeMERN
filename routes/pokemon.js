const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Pokémon Model
import Pokemon from "../models/Pokemon.js";

// @route   POST poke/add
// @desc    Add pokemon to user team
// @access  Public
