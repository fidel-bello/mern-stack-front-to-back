const express = require('express');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();
const auth = require('../../middleware/auth');
const Post = require('../../models/Posts');
const User = require('../../models/User');
//@routes GET api/posts
//@desc   Create post
//@access Private

router.post(
  '/',
  auth,
  check('text', 'Text is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@routes GET api/posts
//@desc   get all posts
//@access Private

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send('server error');
  }
});

//@routes GET api/posts/:id
//@desc   get posts by user id
//@access Private
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'post not found' });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(500).send('server error');
    }
  }
});

module.exports = router;
