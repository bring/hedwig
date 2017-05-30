const doc = document;

/**
 * @function qa
 * @desc query selector all with results as array
 * @param {string} [el] element to search for
 * @param {node} context element or document to search inside of
 * @return {array} - Elements that matched query.
 */
const qa = (el, context = doc) => [].slice.call(context.querySelectorAll(el));

export default qa;
