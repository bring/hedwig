const concat = require('./utilities/concat');
const fs = require('fs');


/**
 * Make directory if it does not exists
 */

var dir = './tmp';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}


function concatCss() {
  concatBringCss();
  concatPostenCss();
}

function concatBringCss() {
  concat('{src/shared/**/*.css,src/bring/**/*.css}', './tmp/bring.css');
  console.log('🔨 Concatinated all Bring CSS...');
}

function concatPostenCss() {
  concat('{src/shared/**/*.css,src/posten/**/*.css}', './tmp/posten.css');
  console.log('🔨 Concatinated all Posten CSS...');
}

concatCss();
