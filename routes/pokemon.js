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

router.put("/add", auth, async (req, res) => {
  // Create new pokemon to be inserted into array
  const newPoke = Pokemon({
    id: req.body.pokemon.id,
    name: req.body.pokemon.name
  });

  // Find user
  User.findOne({ username: req.body.username }).then((user) => {
    // Try updating Pokemon array
    try {
      const onTeam = user.update({ $push: { pokemon: newPoke } });
      res.status(200).json(user.pokemon);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
});

module.exports = router;

/*
if (!pokeAdd)
        return res.status(400).json({
          status: "error",
          msg: `Something went wrong adding ${poke.name} to ${username}'s team...`
        });
*/
