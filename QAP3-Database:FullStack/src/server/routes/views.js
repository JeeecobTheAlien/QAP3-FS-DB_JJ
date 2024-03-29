// src/server/routes/views.js
const express = require('express');
const router = express.Router();
const database = require('../dal/database');

router.get('/', async (req, res) => {
  try {
    const cars = await database.getAllCars();
    console.log('Cars sent to views route:', cars); // Add this line
    res.render('index', { cars }); // Ensure correct EJS view name
  } catch (error) {
    console.error('Error in /views:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;