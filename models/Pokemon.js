const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PokeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  num: {
    type: Number,
    required: true
  }
});

module.exports = Pokemon = mongoose.model("Pokemon", PokeSchema);
