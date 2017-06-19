import throttle from 'lodash/throttle';
import qa from '../../utilities/js/qa';
import getPosition from '../../utilities/js/position';

/**
 * @function HWSticky
 * @version 0.0.1
 * @desc Toggle classes for given element
 * @param {object} settings
 */

const HWSticky = ({
  selector = '[data-hw-sticky]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector), // All sticky DOM nodes
  };

  function fix(el) {
    el.style.position = 'fixed';
    el.style.top = 0;
    el.style.left = 0;
    el.style.right = 0;
    el.setAttribute('data-hw-sticky-stuck', true);
  }

  function unfix(el) {
    el.style.position = 'static';
    el.style.top = 'auto';
    el.style.left = 'auto';
    el.style.right = 'auto';
    el.setAttribute('data-hw-sticky-stuck', false);
  }

  function checkPosition() {
    SETTINGS.elements.forEach((sticky) => {
      const position = getPosition(sticky);
      const offset = window.pageYOffset;
      const { hwStickyStuck, hwStickyInitialTop } = sticky.dataset;

      if (position.offsetFromTop < 1 && hwStickyStuck === 'false') {
        return fix(sticky);
      }

      if (offset < hwStickyInitialTop && hwStickyStuck !== 'false') {
        unfix(sticky);
      }
    });
  }

  function resetPosition() {
    SETTINGS.elements.forEach((sticky) => {
      const { offsetFromTop } = getPosition(sticky);
      sticky.setAttribute('data-hw-sticky-initial-top', offsetFromTop);
    });
  }

  function init() {
    if (!SETTINGS.elements) {
      return;
    }

    // Loop through all stickies and initialise
    SETTINGS.elements.forEach((sticky) => {

      // Skip if already initialised
      if (sticky.getAttribute('data-hw-sticky-initialised') === 'true') { return false; }

      // Mark as initialised
      sticky.setAttribute('data-hw-sticky-initialised', true);

      // Append initial position
      const { offsetFromTop } = getPosition(sticky);
      sticky.setAttribute('data-hw-sticky-initial-top', offsetFromTop);

      // Add HW acceleration
      sticky.style.willChange = 'top';
    });

    // Attach event listeners
    window.addEventListener('scroll', throttle(checkPosition, 50));
    window.addEventListener('resize', throttle(resetPosition, 100));

    // Fire initial check (in case user starts halfway down page)
    checkPosition();
  }

  init();
};

HWSticky();
