const asyncHandler = require('express-async-handler');

/**
 * Get goals
 * GET/api/goals
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals...' });
});

/**
 * Set goals
 * POST/api/goals
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const setGoals = asyncHandler(async (req, res) => {

  if (!req.body.text) {
    res.status(400)
    throw new Error('Please try again - text field cannot be blank.')
  }

  res.status(200).json({ message: 'Set goal...' });
});

/**
 * Update goals
 * PUT/api/goals/id
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Goal with ID ${req.params.id} has been updated.` });
});

/**
 * Delete goals
 * DELETE/api/goals/id
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Goal with ID ${req.params.id} has been deleted.` });
});


module.exports = { getGoals, setGoals, updateGoals, deleteGoals };