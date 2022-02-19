const express = require('express');
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers');

/**
 * Chaining 2 routes that has the same endpoint to make the more cleaner
 * router.get('/', getGoals) & router.post('/', setGoals) have the same endpoint
 * router.put('/:id', updateGoals) & router.delete('/:id', deleteGoals) has the same endpoint
 */

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;