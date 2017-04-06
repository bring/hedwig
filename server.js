/**
 * Dependencies
 */
const express = require('express');

/**
 * Environment / configuration
 */
const port = process.env.PORT || 3000;

/**
 * Create our express app
 */
const assets = express();
const docs = express();

/**
 * Serve static files from the appropriate folder
 */
assets.use(express.static(`${__dirname}/build`));
docs.use(express.static(`${__dirname}/docs`));

/**
 * Attach servers to port
 */
assets.listen(6000, () => {
  console.log(`Hedwig is running on port ${port} 🎉`);
  console.log(`Open docs at http://localhost/${port}/assets`);
});
docs.listen(port, () => {
  console.log(`Hedwig is running on port ${port} 🎉`);
  console.log(`Open docs at http://localhost/${port}/`);
});
