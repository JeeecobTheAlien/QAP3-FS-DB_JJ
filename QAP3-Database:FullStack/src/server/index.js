// src/server/index.js
const express = require('express');
const app = express();
const port = 3000;

// Configure EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'src/client/views');

// Configure static files directory
app.use(express.static('src/client/public'));

// Configure routes
const apiRoutes = require('./routes/api');
const viewsRoutes = require('./routes/views');

app.use('/api', apiRoutes);
app.use('/', viewsRoutes);
app.use(express.json());
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});