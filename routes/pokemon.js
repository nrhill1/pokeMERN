import express from "express";
import bcrypt from "bcryptjs";
import config from "config";
import jwt from "jsonwebtoken";
import auth from "../middleware/auth.js";
import mongoose from "mongoose";
import axios from 'axios';

const router = express.Router();

// Pokémon Model
import Pokemon from "../models/Pokemon.js";
import User from "../models/User.js";
// @route   POST poke/add
// @desc    Add pokemon to user team
// @access  Private

router.put("/add", auth, async (req, res) => {
  // Create new pokemon to be inserted into array
  const newPoke = Pokemon({
    id: req.body.pokemon.id,
    name: req.body.pokemon.name,
    sprites: req.body.pokemon.sprites,
  });

  // Find user
  User.findOne({ username: req.body.username }).then((user) => {
    if (user.pokemon.length < 6) {
      // Try updating Pokemon array
      const onTeam = user
        .updateOne({ $push: { pokemon: newPoke } })
        .then((onTeam) => {
          res.status(200).json(onTeam);
        });
      if (!onTeam) return res.status(400).json({ msg: e.message });
    } else {
      return res.status(400).json({ msg: "User team at max capacity!" });
    }
  });
});

router.put("/del", auth, async (req, res) => {
  const remove = await User.updateMany(
    { username: req.body.username },
    {
      $pull: {
        pokemon: { _id: { $in: [mongoose.Types.ObjectId(req.body.id)] } },
      },
    }
  )
    .then((offTeam) => {
      res.status(200).json({ msg: offTeam });
    })
    .catch((e) => {
      return res.status(400).json({ msg: e.message });
    });
});

export { router as pokeRoutes };

/*
if (!pokeAdd)
        return res.status(400).json({
          status: "error",
          msg: `Something went wrong adding ${poke.name} to ${username}'s team...`
        });
*/
