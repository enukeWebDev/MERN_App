const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get goals...' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Set goal...' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Goal with ID ${req.params.id} has been updated.` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Goal with ID ${req.params.id} has been deleted.` });
});

module.exports = router;