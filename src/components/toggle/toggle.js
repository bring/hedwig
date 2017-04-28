/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';

/**
 * @function HWToggle
 * @version 0.0.1
 * @desc Creates section with expandable "read more" contents
 * @param {object} settings
 */
const HWToggle = ({
    toggleSelector = '[data-hw-toggle]',
    activeItemClass = 'hw-toggle--expanded',
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(toggleSelector), // All toggle DOM nodes
  };


  /**
   * @function toggleContents
   * @desc Toggles the visibility of the contents
   * @param {Event} e
   */
  function toggleContents(e) {
    // Determine if we've clicked on an option
    const elem = e.target;

    // Find container and elem
    const container = findParent({ selector: '[data-hw-toggle]', elem });
    const contents = q('.hw-toggle__contents', container);

    // Display/hide toggle
    if (contents.getAttribute('aria-hidden') === 'false') {
      contents.setAttribute('aria-hidden', true);
      elem.setAttribute('aria-expanded', false);
      container.classList.remove(activeItemClass);
    } else {
      contents.setAttribute('aria-hidden', false);
      elem.setAttribute('aria-expanded', true);
      container.classList.add(activeItemClass);
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to toggle
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleContents);
  }


  /**
   * @function init
   * @desc Initialises the toggle
   */
  function init() {
    // Check if any toggles exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all toggles and initialise each
    SETTINGS.elements.forEach((toggle) => {
      // Skip if already initialised
      if (toggle.getAttribute('data-hw-toggle-initialised') === 'true') { return false; }

      // Mark as initialised
      toggle.setAttribute('data-hw-toggle-initialised', true);

      // Find elements
      const trigger = q('.hw-toggle__trigger', toggle);
      const contents = q('.hw-toggle__contents', toggle);

      // Find toggle name
      const toggleName = toggle.getAttribute('data-hw-toggle');

      // Apply aria-roles
      trigger.setAttribute('aria-controls', `toggle-${toggleName}`);
      contents.setAttribute('id', `toggle-${toggleName}`);

      // Set up event listeners for opening toggle
      bindEvents(trigger);
    });
  }


  // Initialise HWToggle component
  init();
};

HWToggle();
