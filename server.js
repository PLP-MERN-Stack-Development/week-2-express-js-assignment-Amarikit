// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

const middleware = require('./middleware');
const productRoutes = require('./routes');
const advancedRoutes = require('./advancedRoutes');

app.use(bodyParser.json());
app.use(middleware.logRequest);

app.use('/api/products', advancedRoutes);   
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});


// - Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });

});

//custom error class.
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}


const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Exports
module.exports = {
  app,
  NotFoundError,
  ValidationError,
  asyncHandler
};