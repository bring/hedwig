import throttle from 'lodash/throttle';
import qa from '../../utilities/js/qa';

/**
 * @function HWParallax
 * @version 0.0.1
 * @desc Adds parallax effects to given elements. Uses rellax library.
 * @param {object} settings
 */

const HWParallax = ({
  selector = '[data-hw-parallax]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector),
  };

  function getPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    }
    return (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  function animateItem(el, displace, start) {
    if (typeof window.orientation !== 'undefined') { return; }
    const scrollPosition = getPosition();
    if (scrollPosition > start) {
      el.style.transform = `translate3d(0px, ${(scrollPosition - start) / displace}px, 0px)`;
    } else {
      el.style.transform = 'translate3d(0px, 0px, 0px)';
    }
  }

  function init() {
    if (!SETTINGS.elements) {
      return;
    }

    // Loop through all elements and initialise
    SETTINGS.elements.forEach((el) => {

      // Skip if already initialised
      if (el.getAttribute('data-hw-parallax-initialised') === 'true') { return false; }

      // Mark as initialised
      el.setAttribute('data-hw-parallax-initialised', true);

      // Append correct css transforms
      el.style.transition = 'transform 0.25s ease-out';
      el.style.transitionDelay = '0s';
      el.style.willChange = 'top';

      // Get settings from element
      const { hwParallaxAmount = '1', hwParallaxStart = '0' } = el.dataset;
      const amount = parseInt(hwParallaxAmount, 10);
      const start = parseInt(hwParallaxStart, 10);

      // Attach listener
      window.addEventListener('scroll', throttle(() => animateItem(el, amount, start), 20));
    });
  }

  init();
};

HWParallax();
