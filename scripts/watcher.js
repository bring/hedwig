/**
 *
 * Watcher
 *
 * -> Watches all source files and runs appropriate tasks
 *
 */

const packageJson = require('../package.json');
const watch = require('node-watch');
const build = require('./docs-build');
const filter = require('./utilities/filter');
const spawn = require('child_process').spawn;
const concat = require('./utilities/concat');
const fs = require('fs');

/**
 * Make directory if it does not exists
 */

var dir = './tmp';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

var dir = './dist';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

/**
 * Watch tasks
 */

function buildDocs(args) {
  console.log('✍️ The DOCS was saved');
  build();
}

function buildJs(args) {
  console.log('🎉 The JS was compiled!');
  spawn('npm', ['run', 'js:dev'], {
    stdio: 'inherit',
  });
}

function concatCss() {
  concatBringCss();
  concatPostenCss();
}

function concatBringCss() {
  concat('src/+(bring|shared)/**/*.css', './tmp/bring.css');
  console.log('🔨 Concatinated all Bring CSS...');
}

function concatPostenCss() {
  concat('src/+(posten|shared)/**/*.css', './tmp/posten.css');
  console.log('🔨 Concatinated all Posten CSS...');
}

function startBringCssCompile() {
  spawn('npm', ['run', 'css:dev:bring'], {
    stdio: 'inherit',
  });
  console.log('📦 Built bring dev CSS bundle');
}

function startPostenCssCompile() {
  spawn('npm', ['run', 'css:dev:posten'], {
    stdio: 'inherit',
  });
  console.log('📦 Built posten dev CSS bundle');
}

/**
 * Initial compiling
 */

concatCss();
startBringCssCompile();
startPostenCssCompile();
buildJs();

/**
 * Watch processes
 */

watch('src', { recursive: true }, filter(/\.js$/, buildJs));
watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
watch('src/shared', { recursive: true }, filter(/\.css$/, concatCss));
watch('src/bring', { recursive: true }, filter(/\.css$/, concatBringCss));
watch('src/posten', { recursive: true }, filter(/\.css$/, concatPostenCss));
watch('tmp', { recursive: true }, filter(/bring.css$/, startBringCssCompile));
watch('tmp', { recursive: true }, filter(/posten.css$/, startPostenCssCompile));
