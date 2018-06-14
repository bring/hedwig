/**
 * @function horizontalScroll
 * @desc Scroll horizontally inside an element
 * @param {HTMLElement} [containerEl] element to scroll inside of
 * @param {int} x Target x coordinates to scroll to
 */
const horizontalScroll = (containerEl, x) => {
  containerEl.scrollLeft = x;
};

export default horizontalScroll;

