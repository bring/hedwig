var watch = require('node-watch');
var build = require('./docs-build');
var filter = require('./utilities/filter');

function buildDocs(args) {
    console.log("The docs was saved! ✍️");
    build();
}

watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
