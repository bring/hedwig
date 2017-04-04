var watch = require('node-watch');

function filter(pattern, fn) {
  return function(evt, name) {
    if (pattern.test(name)) {
      fn.apply(null, arguments);
    }
  }
}

function buildDocs(args) {
    console.log(args, "Building ✍️");
}

watch('src', { recursive: true }, filter(/\.md$/, buildDocs));
