var concat = require('./utilities/concat');

console.log("Created dist css bundle! ✍️");
concat('tmp/**/*.css', './build/main.min.css');
