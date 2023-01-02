/**
 * Development server
 * ------------------
 * Build is on port 3001
 */

const express = require('express');

/**
 * Environment / configuration
 */

const portBuild = 3001;

/**
 * Create our express app
 */

const build = express();

/**
 * Accept browser requests for assets
 */

build.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/**
 * Start build and assets folders
 */

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging') {
  build.use(express.static(`${__dirname}/assets`));
  build.use(express.static(`${__dirname}/dist`));

  build.listen(portBuild, () => {
    console.log(`🔨 Build bundles is on port ${portBuild}`);
  });
}
