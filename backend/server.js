//Entry Point of the App

const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/api/goals', (req, res) => {
  res.status(200).json({ message: 'Starts here...' });
});

app.listen(port, () => console.log(`Server is running on PORT ${port}`));