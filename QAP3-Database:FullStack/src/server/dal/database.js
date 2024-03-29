// src/server/dal/database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'QAP3_Alien',
  password: 'admin',
  port: 5432,
});

const getAllCars = async () => {
  try {
    const result = await pool.query('SELECT * FROM cars_dealer');
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

const addCars = async (title, platform) => {
  try {
    const result = await pool.query('INSERT INTO cars_dealer (make, trim) VALUES ($1, $2) RETURNING *', [make, trim]);
    return result.rows[0];
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

// Update the function to check for null values before updating
const updateCars = async (id, make, trim) => {
    try {
      const result = await pool.query(
        'UPDATE cars_dealer SET make = $1, trim = $2 WHERE id = $3',
        [make, trim, id]
      );
      return result;
    } catch (error) {
      console.error('Error updating game:', error);
      throw error;
    }
  };
  
  

const deleteCars = async (id) => {
  try {
    await pool.query('DELETE FROM cars_dealer WHERE id = $1', [id]);
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

async function markCarsAsCompleted(CarId) {
    const query = {
      text: 'UPDATE cars_dealer SET completed = true WHERE id = $1 RETURNING *',
      values: [CarId],
    };
  
    try {
      const result = await pool.query(query);
      // Assuming you want to return the updated car object
      return result.rows[0];
    } catch (error) {
      console.error('Error marking car as completed in the database:', error);
      throw error;
    }
  }

module.exports = {
  getAllCars,
  addCars,
  updateCars,
  deleteCars,
  markCarsAsCompleted,
};