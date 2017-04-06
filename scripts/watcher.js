var packageJson = require('../package.json');
var watch = require('node-watch');
var build = require('./docs-build');
var filter = require('./utilities/filter');
var spawn = require('child_process').spawn;
var concat = require('./utilities/concat');
var fs = require('fs');

/**
 * Make directory if it does not exists
 */

var dir = './tmp';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

var dir = './build';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

/**
* Watch tasks
*/

function buildJs(args) {
  console.log("🎉 The JS was compiled!");
  spawn('npm', ['run', 'js:dev'], {
    stdio: 'inherit'
  });
}

function concatCss() {
  concat('src/**/*.css', './tmp/main.css');
  console.log("🔨 Concatinated all CSS...");
}

function buildDocs(args) {
  console.log("✍️ The DOCS was saved");
  build();
}

function startCssCompile() {
  spawn('npm', ['run', 'css:dev'], {
    stdio: 'inherit'
  });
  console.log("📦 Built dev CSS bundle");
}

/**
* Initial compiling
*/

concatCss();
startCssCompile();
buildJs();

/**
* Watch processes
*/

watch('src', { recursive: true }, filter(/\.js$/, buildJs));
watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
watch('src', { recursive: true }, filter(/\.css$/, concatCss));
watch('tmp', { recursive: true }, filter(/\.css$/, startCssCompile));
