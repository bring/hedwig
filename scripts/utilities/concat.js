/**
 *
 * concat
 *
 * -> Concatinate contents of given files
 * -> Will replace old file if existing
 *
 */

var fs = require('fs'),
    glob = require('glob');

function concat(input, output, ignorePattern='') {
    // First delete old file
    if (fs.existsSync(output)) {
      fs.unlinkSync(output, function(err){
        console.log('Deleted old file');
      });  
    }

    // Then create new file
    glob.sync(input, {ignore: ignorePattern, nosort: true}).forEach(function(file) {
        fs.appendFileSync(output, fs.readFileSync(file, 'utf-8'));
    });
}

module.exports = concat;
