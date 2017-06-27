/**
 *
 * filter
 *
 * -> Matches given pattern and invokes callback if match found
 *
 */

function filter(pattern, fn) {
  return function(evt, name) {
    if (pattern.test(name)) {
      fn.apply(null, arguments);
    }
  }
}

module.exports = filter;
