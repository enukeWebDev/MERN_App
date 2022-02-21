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
    throw newError('User already exist')
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
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user information')
  }

  // res.json({ message: 'Register User' })
})

/**
 * Authenticate a user
 * POST/api/users/login
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

/**
 * Get a user data
 * GET/api/users/me
 * @param {*} req 
 * @param {*} res 
 * @access Public
 */

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'User data' })
})

module.exports = { registerUser, loginUser, getMe, };