/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWSwish
 * @version 0.0.1
 * @desc Creates an interactive carousel with left/right animations
 * @param {object} settings
 */
const HWSwish = ({
    swishSelector = '[data-hw-swish]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(swishSelector), // All swish DOM nodes
  };

  /**
   * @function bindClickEvent
   * @desc Adds listener to list button
   * @param {node} swish
   */
  function handleKeyboardEvents(e) {
    const key = e.keyCode || e.which;

    switch (key) {
      case KEYS.SPACE:
      case KEYS.ESCAPE:
      case KEYS.ENTER:
        e.preventDefault();
        changeSlide(e);
        break;
      default:
        break;
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to swish
   * @param {node} trigger
   */
  function changeSlide(e) {
    // Find clicked element
    const elem = e.target;

    console.log(elem);

    // Find parent wrapper
    const swish = findParent({ selector: '[data-hw-swish]', elem });
    const { hwSwishCurrentIndex, hwSwishTotalSlides } = swish.dataset;

    // Get current settings
    const { hwSwishNext } = elem.dataset;
    const direction = hwSwishNext !== undefined ? 1 : -1;
    const blockPrevious = hwSwishCurrentIndex === '0' && direction === -1;
    const blockNext = hwSwishTotalSlides === hwSwishCurrentIndex && direction === 1;

    // Calculate next move
    const newIndex = blockPrevious || blockNext ?
      hwSwishCurrentIndex : parseInt(hwSwishCurrentIndex, 10) + direction;

    // Find parent wrapper
    const inner = findParent({ selector: '.hw-swish__inner', elem });

    // Find new transformations
    const offset = (100 / hwSwishTotalSlides) * newIndex;

    // Transform wrapper
    inner.style.transform = `translateX(-${offset}%)`;
    inner.style.webkitTransform = `translateX(-${offset}%)`;

    // Update swish attributes
    swish.setAttribute('data-hw-swish-current-index', newIndex);
  }


  /**
   * @function bindEvents
   * @desc Adds listener to swish
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleswish);
    trigger.addEventListener('keydown', handleKeyboardEvents);
  }


  /**
   * @function init
   * @desc Initialises the swish
   */
  function init() {
    // Check if any swishs exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all swishs and initialise each
    SETTINGS.elements.forEach((swish) => {
      // Skip if already initialised
      if (swish.getAttribute('data-hw-swish-initialised') === 'true') { return false; }

      // Find wrapper and all slides
      const inner = q('.hw-swish__inner', swish);
      const slides = qa('.hw-swish__item', swish);

      // Add data attributes to swish
      swish.setAttribute('data-hw-swish-initialised', true);
      swish.setAttribute('data-hw-swish-current-index', 0);
      swish.setAttribute('data-hw-swish-total-slides', slides.length);

      // Append styles for container and slides
      inner.style.width = `${slides.length * 100}%`;
      slides.forEach((slide) => {
        slide.style.width = `${100 / slides.length}%`;
      });

      // Find all swish triggers
      const nextTriggers = qa('[data-hw-swish-next]', swish);
      const prevTriggers = qa('[data-hw-swish-previous]', swish);

      // Attach listeners and aria-attributes to all items
      nextTriggers.forEach((trigger) => {
        trigger.addEventListener('click', changeSlide);
      });
      prevTriggers.forEach((trigger) => {
        trigger.addEventListener('click', changeSlide);
      });

      // trigger.setAttribute('aria-controls', `${swishName}-${index}`);
      // contents.setAttribute('id', `${swishName}-${index}`);
      // trigger.setAttribute('aria-expanded', 'true');
      // contents.setAttribute('aria-hidden', 'false');

      return null;
    });
  }


  // Initialise HWSwish component
  init();
};

HWSwish();
