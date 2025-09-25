const router = require('express').Router();
const { body, param } = require('express-validator');
const auth = require('../middleware/auth');
const Plan = require('../controllers/planController');

// protect all plan routes with auth middleware
router.use(auth);

// @route   GET /api/plans
router.get('/', Plan.list);

// @route   POST /api/plans
router.post(
  '/',
  [
    body('place').isString().trim().notEmpty(),
    body('date').matches(/^\d{4}-\d{2}-\d{2}$/),
    body('time').matches(/^\d{2}:\d{2}$/),
  ],
  Plan.create   // <-- error happens here
);

// @route   DELETE /api/plans/:id
router.delete('/:id', [param('id').isMongoId()], Plan.remove);

module.exports = router;
