const express = require('express');

const router = express.Router();
//@routes GET api/users
//@desc   Test route
//@access Public
router.get('/', (req,res) => res.send('user router'));

module.exports = router;