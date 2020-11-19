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
  },
  sprites: {
    type: Array,
    required: true,
    default: void 0,
    maxlength: 2
  }
});

module.exports = Pokemon = mongoose.model("Pokemon", PokeSchema);
