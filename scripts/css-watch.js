var watch = require('node-watch'),
    filter = require('./utilities/filter'),
    concat = require('./utilities/concat');

function concatCss() {
    console.log("Created dev css bundle! ✍️");
    concat('tmp/**/*.css', './build/main.css');
}

watch('src', { recursive: true }, filter(/\.css$/, concatCss));
