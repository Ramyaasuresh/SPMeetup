const router = require('express').Router();
const { body } = require('express-validator');
const Auth = require('../controllers/authController');
const User = require('../models/User');

// Register
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  Auth.register
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required'),
  ],
  Auth.login
);

// (Optional) Debug: list users without password hashes
router.get('/users', async (_req, res, next) => {
  try {
    const users = await User.find({}, '-passwordHash').sort({ createdAt: -1 });
    res.json(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
