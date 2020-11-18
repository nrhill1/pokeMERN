const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// User Model
const User = require("../models/User.js");

// @route   POST auth/register
// @desc    Register new user
// @access  Public

router.post("/register", (req, res) => {
  // Define request body
  const { username, email, password } = req.body;

  // Registration validation
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ msg: "Please complete the registration form." });
  }

  // Find existing user
  User.findOne({ email }).then((user) => {
    // Check if the email is already registered
    if (user)
      return res.status(400).json({ msg: "This email is already in use." });

    // Check if username is in database
    User.findOne({ username }).then((user) => {
      if (user)
        return res
          .status(400)
          .json({ msg: "This username is already in use." });

      // Define new user based on schema
      const newUser = User({
        username,
        email,
        password,
        pokemon: []
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            jwt.sign(
              { id: user.id },
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user
                });
              }
            );
          });
        });
      });
    });
  });
});

// @route   POST auth/login
// @desc    Auth user
// @access  Public

router.post("/login", (req, res) => {
  // Define request body
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please complete all fields." });
  }

  // Find existing user
  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(400).json({ msg: "This email is not registered." });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user
          });
        }
      );
    });
  });
});

// @route   GET auth/users
// @desc    Auth user
// @access  Private

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .then((user) => res.json(user));
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
