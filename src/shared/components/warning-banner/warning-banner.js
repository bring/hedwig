/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';

/**
 * @function HWWarningBanner
 * @version 0.0.1
 * @desc Creates warning banner
 * @param {object} settings
 */
const HWWarningBanner = ({
  warningBannerSelector = '[data-hw-warning-banner]',
  activeItemClass = 'hw-warning-banner--expanded',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(warningBannerSelector), // All warning banner DOM nodes
  };

  /**
   * @function toggleWarningBanner
   * @desc Toggles the contents for a toggle
   * @param {Event} e
   */
  function toggleWarningBanner(e) {
    // Determine if we've clicked on an option
    const elem = e.target;

    // Find container and elem
    const container = findParent({
      selector: '[data-hw-warning-banner]',
      elem
    });
    const contents = q('.hw-warning-banner__contents', container);

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
   * @function bindToggleEvents
   * @desc Adds listener to warning banner
   * @param {node} trigger
   */
  function bindToggleEvents(trigger) {
    trigger.addEventListener('click', toggleWarningBanner);
  }

  /**
   * @function init
   * @desc Initialises the warning banner
   */
  function init() {
    // Check if any warning banners exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all banners and initialise each
    SETTINGS.elements.forEach((banner) => {
      // Skip if already initialised
      if (banner.getAttribute('data-hw-warning-banner-initialised') === 'true') {
        return false;
      }

      // Mark as initialised
      banner.setAttribute('data-hw-warning-banner-initialised', true);

      // Find elements
      const trigger = q('.hw-warning-banner__trigger', banner);
      const contents = q('.hw-warning-banner__contents', banner);

      if (trigger && contents) {
        // Find warning banner name
        const warningBannerName = banner.getAttribute('data-hw-warning-banner');

        // Apply aria-roles
        trigger.setAttribute('aria-controls', `warning-banner-${warningBannerName}`);
        contents.setAttribute('id', `warning-banner-${warningBannerName}`);

        // Set up event listeners for opening banner
        bindToggleEvents(trigger);
      }
    });
  }

  // Initialise HWBanner component
  init();
};

HWWarningBanner();
