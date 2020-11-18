const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PokeSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = Pokemon = mongoose.model("Pokemon", PokeSchema);
