var fs = require('fs'),
    glob = require('glob'),
    args = process.argv.splice(2);

function concat(input, output) {
    if(fs.exists(output))
        fs.unlinkSync(output);
    glob.sync(input).forEach(function(file) {
        fs.appendFileSync(output, fs.readFileSync(file, 'utf-8'));
    });
}

module.exports = concat;
