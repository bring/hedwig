/* global document window */

/**
 * @function getPosition
 * @desc Returns an elements position in the viewport
 * @param {htmlElement} [elem] target element
 * @return {object} - Object with position values
 */
const getPosition = (elem) => {
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;

  const top = (box.top + scrollTop) - clientTop;

  const bottom = (box.bottom + scrollTop) - clientTop;
  return {
    top: Math.round(top),
    bottom: Math.round(bottom),
    offsetFromTop: Math.round(box.top),
    left: box.left,
    right: box.right
  };
};

export default getPosition;
