const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Render provides a PORT environment variable

// Middleware to log request headers
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  console.log('Query Parameters:', req.query);
  next();
});

// Basic route
app.get('/', (req, res) => {
  res.send('Check your logs for request headers!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
