/**
 * Get goals
 * GET/api/goals
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */

const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals...' });
};

/**
 * Set goals
 * POST/api/goals
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const setGoals = (req, res) => {
  res.status(200).json({ message: 'Set goal...' });
};

/**
 * Update goals
 * PUT/api/goals/id
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Goal with ID ${req.params.id} has been updated.` });
};

/**
 * Delete goals
 * DELETE/api/goals/id
 * @access Private
 * @param {*} req 
 * @param {*} res 
 */
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Goal with ID ${req.params.id} has been deleted.` });
};


module.exports = { getGoals, setGoals, updateGoals, deleteGoals };