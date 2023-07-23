import mongoose from 'mongoose';

// Create Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  reg_date: {
    type: Date,
    default: Date.now
  },
  pokemon: { type: Array, default: void 0, maxlength: 6 }
});

const User = mongoose.model("User", UserSchema);

export default User;
