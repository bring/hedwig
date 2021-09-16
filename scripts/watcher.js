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
/* 
Files that are to be concatenated to the end must be specified in the form a pattern here.
To learn more about glob pattern visit the following links
https://www.npmjs.com/package/glob
http://www.jedit.org/users-guide/globs.html
and to test
https://globster.xyz/
*/
const impFiles = 'src/shared/base/display.css';

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

/**
 * Contatenating all files for bring
 */
function concatBringCss() {
  concat('{src/shared/**/*.css,src/bring/**/*.css}', './tmp/bring_wo_impfiles.css', impFiles);
  concat('{tmp/bring_wo_impfiles.css,' + impFiles + '}', './tmp/bring.css');
  console.log('🔨 Concatinated all Bring CSS...');
}

/**
 * Contatenating all files for posten
 */
function concatPostenCss() {
  concat('{src/shared/**/*.css,src/posten/**/*.css}', './tmp/posten_wo_impfiles.css', impFiles);
  concat('{tmp/posten_wo_impfiles.css,' + impFiles + '}', './tmp/posten.css');
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

function svg(){
  spawn('npm', ['run', 'svg'], {
    stdio: 'inherit'
  });
  console.log('Optimized all SVGs and built SVG sprite');
}

function svgSprite() {
  spawn('npm', ['run', 'svg:sprite'], {
    stdio: 'inherit'
  });
  console.log('Built SVG sprite');
}


//Optimize the updated SVG and builds the SVG sprite
function processOneSvg(evt, name){
  if(evt == 'update'){
    spawn('node', ['node_modules/svgo/bin/svgo', '-i', name, '-o', name.replace('assets/icons', 'dist/icons')], {stdio: 'inherit'});
    svgSprite();
  }
}

function buildIconsJs() {
  spawn('npm', ['run', 'js:build:icons']);
  console.log('The icons JS was compiled');
}

/**
 * Initial compiling
 */

svg();
concatCss();
startBringCssCompile();
startPostenCssCompile();
buildJs();
buildIconsJs();

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
watch('assets', { recursive: true }, filter(/icons.js$/, buildIconsJs));
watch('assets/icons', { recursive: true },filter(/\.svg$/, (evt, name) => { processOneSvg(evt, name) }));
