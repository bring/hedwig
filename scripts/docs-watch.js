var watch = require('node-watch');
var build = require('./docs-build');

function filter(pattern, fn) {
  return function(evt, name) {
    if (pattern.test(name)) {
      fn.apply(null, arguments);
    }
  }
}

function buildDocs(args) {
    console.log("The docs was saved! ✍️");
    build();
}

watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
