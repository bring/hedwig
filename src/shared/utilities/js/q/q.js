const doc = document;

/**
 * @function q
 * @desc query selector all, returning first match only
 * @param {string} [el] element to search for
 * @param {node} context element or document to search inside of
 * @return {HTMLelement} - First element that matched query.
 */
export const q = (el, context = doc) => [].slice.call(context.querySelectorAll(el))[0];

export default q;
