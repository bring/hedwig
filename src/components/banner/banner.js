/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';

/**
 * @function HWBanner
 * @version 0.0.1
 * @desc Creates banner with expandable "read more" contents
 * @param {object} settings
 */
const HWBanner = ({
    bannerSelector = '[data-hw-banner]',
    activeItemClass = 'hw-banner--expanded',
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(bannerSelector), // All banner DOM nodes
  };


  /**
   * @function toggleBanner
   * @desc Toggles the contents for a toggle
   * @param {Event} e
   */
  function toggleBanner(e) {
    // Determine if we've clicked on an option
    const elem = e.target;

    // Find container and elem
    const container = findParent({ selector: '[data-hw-banner]', elem });
    const contents = q('.hw-banner__contents', container);

    // Display/hide banner
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
   * @desc Adds listener to banner
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleBanner);
  }


  /**
   * @function init
   * @desc Initialises the banner
   */
  function init() {
    // Check if any banners exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all banners and initialise each
    SETTINGS.elements.forEach((banner) => {
      // Skip if already initialised
      if (banner.getAttribute('data-hw-banner-initialised') === 'true') { return false; }

      // Mark as initialised
      banner.setAttribute('data-hw-banner-initialised', true);

      // Find elements
      const trigger = q('.hw-banner__trigger', banner);
      const closeTrigger = q('.hw-banner__trigger-close', banner);
      const contents = q('.hw-banner__contents', banner);

      // Find banner name
      const bannerName = banner.getAttribute('data-hw-banner');

      // Apply aria-roles
      trigger.setAttribute('aria-controls', `banner-${bannerName}`);
      contents.setAttribute('id', `banner-${bannerName}`);

      // Set up event listeners for opening banner
      bindEvents(trigger);
      bindEvents(closeTrigger);
    });
  }


  // Initialise HWBanner component
  init();
};

HWBanner();
