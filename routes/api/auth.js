const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User')
//@routes GET api/auth
//@desc   Test route
//@access Public
router.get('/', auth, async (req,res) => {
try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user)
} catch (error) {
    console.error(error.message);
    res.status(500).send('server error')
}
});

module.exports = router;