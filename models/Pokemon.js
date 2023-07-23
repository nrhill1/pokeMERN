import mongoose from 'mongoose'

// Create Schema
const Schema = mongoose.Schema;

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

const Pokemon = mongoose.model("Pokemon", PokeSchema);

export default Pokemon;
