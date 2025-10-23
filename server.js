// Import the Express module
const express = require('express');

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Create an Express application
const app = express();

// Import configuration and routes
const config = require('./config');
const productRoutes = require('./routes');

// --- MIDDLEWARES ---

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware: JSON parser
app.use(express.json());

// Authentication middleware
app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== config.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
  }
  next();
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World from Express.js API!');
});

// Product routes
app.use('/api/products', productRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';
  res.status(statusCode).json({ status: 'error', message });
});


// Start the server after connecting to the database
const PORT = process.env.PORT || 3000;