/**
 * @function horizontalScroll
 * @desc Scroll horizontally inside an element
 * @param {HTMLElement} [containerEl] element to scroll inside of
 * @param {int} x Target x coordinates to scroll to
 */
const horizontalScroll = (containerEl, x) => {
  if(containerEl.scroll){
    containerEl.scroll({
      behavior: 'smooth',
      left: x,
      top: 0
    });
  } else {
    containerEl.scrollLeft = x;
  }
};

export default horizontalScroll;

