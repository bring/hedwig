var concat = require('./utilities/concat');

concat('tmp/**/*.css', './build/main.min.css');
console.log("Created dist css bundle! ✍️");
