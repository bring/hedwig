/* global window */

import qa from '../../utilities/js/qa';
import getClosest from '../../utilities/js/closest';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWAccordion
 * @version 0.0.1
 * @desc Creates interactive accordion from ul
 * @param {object} settings
 */
const HWAccordion = ({
    accordionSelector = '[data-hw-accordion]',
    activeItemClass = 'hw-accordion__item--expanded',
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(accordionSelector), // All accordion DOM nodes
  };


  /**
   * @function toggleAccordion
   * @desc Toggles the accordion options list for a accordion
   * @param {Event} e
   */
  function toggleAccordion(e) {
    // Determine if we've clicked on an option
    const target = e.target;

    // Find contents and parent item
    const contents = target.nextElementSibling;
    const item = getClosest('.hw-accordion__item', target);

    // Display/hide accordion
    if (contents.getAttribute('aria-hidden') === 'false') {
      contents.setAttribute('aria-hidden', true);
      item.classList.remove(activeItemClass);
    } else {
      contents.setAttribute('aria-hidden', false);
      item.classList.add(activeItemClass);
    }
  }


  /**
   * @function bindClickEvent
   * @desc Adds listener to list button
   * @param {node} accordion
   */
  function handleKeyboardEvents(e) {
    const key = e.keyCode || e.which;

    switch (key) {
      case KEYS.SPACE:
      case KEYS.ESCAPE:
      case KEYS.ENTER:
        e.preventDefault();
        toggleAccordion(e);
        break;
      default:
        break;
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to accordion
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleAccordion);
    trigger.addEventListener('keydown', handleKeyboardEvents);
  }


  /**
   * @function init
   * @desc Initialises the accordion
   */
  function init() {
    // Check if any accordions exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all accordions and initialise each
    SETTINGS.elements.forEach((accordion) => {
      // Skip if already initialised
      if (accordion.getAttribute('data-hw-accordion-initialised') === 'true') { return false; }

      // Find accordion name
      const accordionName = accordion.getAttribute('data-hw-accordion');

      // Find all accordion items
      const items = qa('.hw-accordion__item', accordion);

      // Attach listeners and aria-attributes to all items
      items.forEach((item, index) => {
        const trigger = qa('.hw-accordion__trigger', item)[0];
        const contents = qa('.hw-accordion__contents', item)[0];

        trigger.setAttribute('aria-controls', `${accordionName}-${index}`);
        contents.setAttribute('id', `${accordionName}-${index}`);
        contents.setAttribute('aria-expanded', 'false');

        // Set up event listeners for opening accordion
        bindEvents(trigger);
      });
    });
  }


  // Initialise HWAccordion component
  init();
};

HWAccordion();
