var fs = require('fs'),
    glob = require('glob');

function concat(input, output) {
    // First delete old file
    if (fs.existsSync(output)) {
      fs.unlinkSync(output, function(err){
        console.log('Deleted old css file');
      });  
    }

    // Then create new file
    glob.sync(input).forEach(function(file) {
        fs.appendFileSync(output, fs.readFileSync(file, 'utf-8'));
    });
}

module.exports = concat;
