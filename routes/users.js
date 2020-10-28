const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/User.js')

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
    User.find()
        .sort({ username })
        .then(users => res.json(users))
})

module.exports = router;