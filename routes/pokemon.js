const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const axios = require("axios");
const mongoose = require("mongoose");

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
    name: req.body.pokemon.name,
    sprites: req.body.pokemon.sprites
  });

  // Find user
  User.findOne({ username: req.body.username }).then((user) => {
    // Try updating Pokemon array
    const onTeam = user
      .updateOne({ $push: { pokemon: newPoke } })
      .then((onTeam) => {
        res.status(200).json(onTeam);
      });
    if (!onTeam) return res.status(400).json({ msg: e.message });
  });
});

router.put("/del", auth, async (req, res) => {
  const remove = await User.updateMany(
    { username: req.body.username },
    {
      $pull: {
        pokemon: { _id: { $in: [mongoose.Types.ObjectId(req.body.id)] } }
      }
    }
  )
    .then((offTeam) => {
      res.status(200).json({ msg: offTeam });
    })
    .catch((e) => {
      return res.status(400).json({ msg: e.message });
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
