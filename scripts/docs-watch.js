var watch = require('node-watch');
var build = require('./docs-build');
var reloadServerOnChange = require('../server').reloadServerOnChange;

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
    reloadServerOnChange();
}

watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
