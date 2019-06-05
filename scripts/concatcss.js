const concat = require('./utilities/concat');
const fs = require('fs');


/**
 * Make directory if it does not exists
 */

var dir = './tmp';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

/* Files that are to be concatenated to the end must be specified in the form a pattern here.
To learn more about glob pattern visit the following links
https://www.npmjs.com/package/glob
http://www.jedit.org/users-guide/globs.html
and to test
https://globster.xyz/*/
var impFiles = 'src/shared/base/display.css';


function concatCss() {
  concatBringCss();
  concatPostenCss();
  concatImp();
}

/**
 * Contatenating all files except important files for bring
 */
function concatBringCss() {
  concat('src/+(bring|shared)/**/*.css', './tmp/brings.css', impFiles);
  console.log('🔨 Concatinated all Bring CSS...');
}

/**
 * Contatenating all files except important files for posten
 */
function concatPostenCss() {
  concat('src/+(posten|shared)/**/*.css', './tmp/postens.css', impFiles);
  console.log('🔨 Concatinated all Posten CSS...');
}

/**
 * Contatenating imp files at the end to the concatenated posten/bring files
 */
function concatImp() {
  concat('{tmp/brings,src/shared/base/display}.css', './tmp/bring.css', '', true);
  concat('{tmp/postens,src/shared/base/display}.css', './tmp/posten.css', '', true);
}

concatCss();
