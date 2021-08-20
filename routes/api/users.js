const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
//@routes POST api/users
//@desc   Register User
//@access Public
router.post(
  '/',
  [
    check('name', 'Name is required!').not().isEmpty(),
    check('email', 'please enter valid email').isEmail(),
    check(
      'password',
      'please enter password longer than 6 characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('User route');
  }
);

module.exports = router;
