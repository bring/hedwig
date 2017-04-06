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

docs.listen(port, () => {
  console.log(`Docs is running on port ${port} 🎉`);
  console.log(`Open docs at http://localhost/${port}`);
});

assets.listen(3001, () => {
  console.log(`Assets is running on port 3001 🎉`);
  console.log(`Open assets at http://localhost/3001`);
});
