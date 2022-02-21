/**
 * Register a new user
 * POST/api/users
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const registerUser = (req, res) => {
  res.json({ message: 'Register User' })
}

/**
 * Authenticate a user
 * POST/api/users/login
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const loginUser = (req, res) => {
  res.json({ message: 'Login User' })
}

/**
 * Get a user data
 * GET/api/users/me
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const getMe = (req, res) => {
  res.json({ message: 'User data' })
}

module.exports = { registerUser, loginUser, getMe, };