import KEYS from '../keys';
import qa from '../qa';

const focusableElsSelector =
  'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';

/**
 * @function trapFocus
 * @desc trap focus in an element
 * @param {node} element - Surrounding element
 */
const trapFocus = (element) => {
  const focusableEls = qa(focusableElsSelector, element).filter((element) => {
    // Filter out elements that are not focusable
    return element.tabIndex != -1;
  });

  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  //firstFocusableEl.focus();
  element.addEventListener('keydown', e => {
    const isTabPressed = e.keyCode === KEYS.TAB;
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  });
};

export default trapFocus;
