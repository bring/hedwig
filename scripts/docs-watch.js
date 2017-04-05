var watch = require('node-watch');
var build = require('./docs-build');
var reloadBrowser = require('../server');

function filter(pattern, fn) {
  return function(evt, name) {
    if (pattern.test(name)) {
      fn.apply(null, arguments);
    }
  }
}

function buildDocs(args) {
    console.log(args, "Building docs ✍️");
    build();
    reloadBrowser();
}

watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
