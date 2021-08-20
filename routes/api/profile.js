const express = require('express');

const router = express.Router();
//@routes GET api/profile
//@desc   Test route
//@access Public
router.get('/', (req,res) => res.send('user router'));

module.exports = router;