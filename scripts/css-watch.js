var watch = require('node-watch'),
    filter = require('./utilities/filter'),
    concat = require('./utilities/concat'),
    debounce = require('debounce');

function concatCss() {
    concat('tmp/*.css', './build/main.css');
    console.log("Created dev css bundle! ✍️");
}

watch('tmp', { recursive: true }, filter(/\.css$/, debounce(concatCss)), 200);
