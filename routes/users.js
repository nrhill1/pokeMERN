const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

// User Model
const User = require('../models/User.js')

// @route   POST api/users
// @desc    Register new user 
// @access  Public

router.post('/', (req, res) => {
  // Define request body
  const {username, email, password} = req.body;

  // Registration validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please complete the registration form."})
  }

  // Find existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: "This email is already in use."})

      const newUser = User({
        username,
        email,
        password,
        pokemon: []
      })

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              res.json({
                user
              })
            })
        })
      })
    })

})

module.exports = router;