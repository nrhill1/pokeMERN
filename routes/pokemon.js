const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const axios = require("axios");

// Pokémon Model
const Pokemon = require("../models/Pokemon.js");
const User = require("../models/User.js");
// @route   POST poke/add
// @desc    Add pokemon to user team
// @access  Private

router.post("/add", auth, (req, res) => {
  // Request body
  const { username, poke } = req.body;

  // Create new Pokemon based on schema
  const newPoke = Pokemon({
    id: poke.id,
    name: poke.name
  });

  // Find user
  User.findOne({ username }).then((user) => {
    // Try updating Pokemon array
    try {
      const pokeAdd = await user.update({ $push: {pokemon: newPoke}})
      if (!pokeAdd) throw Error(`Something went wrong adding ${poke.name} to ${username}'s team...`);
      res.status(200).json(user.pokemon);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
});
