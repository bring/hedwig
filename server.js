/**
 * Development server
 * ------------------
 * Docs is on port 3000
 * Build is on port 3001
 * Assets is on port 3002
 */

const express = require('express');

/**
 * Environment / configuration
 */

const portDocs = process.env.PORT || 3000;
const portBuild = process.env.PORT || 3001;
const portAssets = process.env.PORT || 3002;

/**
 * Create our express app
 */

const docs = express();
const build = express();
const assets = express();

/**
 * Serve static files from the appropriate folder
 */

docs.use(express.static(`${__dirname}/docs`));
build.use(express.static(`${__dirname}/build`));
assets.use(express.static(`${__dirname}/assets`));

/**
 * Attach servers to port
 */

docs.listen(portDocs, () => {
  console.log(`Docs is running on port ${portDocs} 🎉`);
  console.log(`Open docs at http://localhost/${portDocs}`);
});

build.listen(portBuild, () => {
  console.log(`Docs is running on port ${portBuild} 🎉`);
  console.log(`Open docs at http://localhost/${portBuild}`);
});

assets.listen(portAssets, () => {
  console.log(`Docs is running on port ${portAssets} 🎉`);
  console.log(`Open docs at http://localhost/${portAssets}`);
});
