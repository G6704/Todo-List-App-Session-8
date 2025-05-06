const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); 

router.post('/register', register);
router.post('/login', login);

router.get('/me', authMiddleware, async (req, res) => {
  try {
    res.json({ user: { id: req.user.id } });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
