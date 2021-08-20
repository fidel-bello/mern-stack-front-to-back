const express = require('express');

const router = express.Router();
//@routes GET api/users
//@desc   Test route
//@access Public
router.get('/', (req,res) => res.send('user route'));

module.exports = router;