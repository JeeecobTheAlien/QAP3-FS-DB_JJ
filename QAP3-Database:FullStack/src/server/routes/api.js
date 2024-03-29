// src/server/routes/api.js
const express = require('express');
const router = express.Router();
const database = require('../dal/database');

router.use(express.json());

router.get('/cars', async (req, res) => {
  try {
    const games = await database.getAllCars();
    res.json(cars);
  } catch (error) {
    console.error('Error in GET /api/cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/cars', async (req, res) => {
  const { make, trim } = req.body;
  try {
    const newCar = await database.addCars(make, trim);
    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error in POST /api/cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/cars/:id', async (req, res) => {
  const carId = req.params.id;
  const { make, trim } = req.body || {};



  try {
    const updateCars = await database.updateCars(carId, make, trim);
    res.json(updatedGame);
  } catch (error) {
    console.error('Error in PUT /api/cars/:id:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/cars/:id', async (req, res) => {
  const carId = req.params.id;
  try {
    await database.deleteCars(carId);
    res.sendStatus(204);
  } catch (error) {
    console.error('Error in DELETE /api/cars/:id:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add this route handler in your api.js file
router.patch('/cars/:id/complete', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Call a function in your database layer to mark the game as completed
      await database.markCarsAsCompleted(id);
  
      res.status(200).json({ message: `Car with ID ${id} marked as completed.` });
    } catch (error) {
      console.error('Error marking car as completed:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;