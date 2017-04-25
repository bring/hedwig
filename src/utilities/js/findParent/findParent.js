/**
 * Get closest DOM element up the tree that contains a class, ID, or data attribute
 * - Credits to http://gomakethings.com/
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Node} Null if no match
 */
const findParent = function ({ selector, elem }) {
  const firstChar = selector.charAt(0);
  let e = elem;

  // Get closest match
  for (;e && e !== document; e = e.parentNode) {
    // If selector is a class
    if (firstChar === '.') {
      if (e.classList.contains(selector.substr(1))) {
        return e;
      }
    }

    // If selector is an ID
    if (firstChar === '#') {
      if (e.id === selector.substr(1)) {
        return e;
      }
    }

    // If selector is a data attribute
    if (firstChar === '[') {
      if (e.hasAttribute(selector.substr(1, selector.length - 2))) {
        return e;
      }
    }

    // If selector is a tag
    if (e.tagName.toLowerCase() === selector) {
      return e;
    }
  }

  return false;
};

export default findParent;
