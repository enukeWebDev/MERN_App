const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');



/**
 * Register a new user
 * POST/api/users
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  //Validate that all fields have the information
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please enter all fields')
  }

  //Validate if user already exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exist')
  }

  //Hash the password using genSalt & hash method of bcrypt
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  //Confirmation when the user is created
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user information')
  }
})

/**
 * Authenticate a user
 * POST/api/users/login
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body

  //Validate the user email
  const user = await User.findOne({ email })

  //Validate the user password using bcrypt compare method
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user information')
  }

})

/**
 * Get a user data
 * GET/api/users/me
 * @param {*} req 
 * @param {*} res 
 * @access Private
 */
const getMe = asyncHandler(async (req, res) => {

  res.status(200).json(req.user)
})

//Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = { registerUser, loginUser, getMe, };