-- Creating the Car Dealer table with a foreign key
CREATE TABLE cars_dealer (
  id SERIAL PRIMARY KEY,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(50),
  trim VARCHAR(50),
  completed BOOLEAN DEFAULT false,
);