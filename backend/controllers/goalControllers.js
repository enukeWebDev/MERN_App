const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

/**
 * Get goals
 * GET/api/goals
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const getGoals = asyncHandler(async (req, res) => {

  const goals = await Goal.find();

  res.status(200).json(goals);
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

  const goal = await Goal.create({
    text: req.body.text,
  })

  res.status(200).json(goal);
});

/**
 * Update goals
 * PUT/api/goals/id
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const updateGoals = asyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal);
});

/**
 * Delete goals
 * DELETE/api/goals/id
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const deleteGoals = asyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});


module.exports = { getGoals, setGoals, updateGoals, deleteGoals };