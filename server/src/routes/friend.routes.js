const router = require('express').Router();
const auth = require('../middleware/auth');

// GET /api/friends
// For now return some mock friends (later you can fetch from DB)
router.get('/', auth, (req, res) => {
  res.json({
    friends: [
      { _id: '1', email: 'alice@test.com' },
      { _id: '2', email: 'bob@test.com' },
      { _id: '3', email: 'charlie@test.com' },
    ],
  });
});

module.exports = router;
