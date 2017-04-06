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
const portBuild = 3001;
const portAssets = 3002;

/**
 * Create our express app
 */

const docs = express();
const build = express();
const assets = express();

/**
 * Accept browser requests for assets
 */

assets.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Start build and assets folders
 */

if (process.env.NODE_ENV !== 'production') {
  build.use(express.static(`${__dirname}/build`));

  build.listen(portBuild, () => {
    console.log(`🔨 Build bundles is on port ${portBuild}`);
  });

  assets.use(express.static(`${__dirname}/assets`));

  assets.listen(portAssets, () => {
    console.log(`📦 Assets folder is on port ${portAssets}`);
  });
}

/**
 * Serve static files from the appropriate folder
 */

docs.use(express.static(`${__dirname}/docs`));

docs.listen(portDocs, () => {
  console.log(`✍️ Docs is running on port ${portDocs}`);
  console.log(`🚀 Open docs at http://localhost/${portDocs}`);
});
