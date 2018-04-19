/**
 * @function verticalScroll
 * @desc Scroll vertically inside an element
 * @param {HTMLElement} [containerEl] element to scroll inside of
 * @param {int} x Target x coordinates to scroll to
 */
const verticalScroll = (containerEl, x) => {
  containerEl.scrollLeft = x;
};

export default verticalScroll;

