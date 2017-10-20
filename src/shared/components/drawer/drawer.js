import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWModal
 * @version 0.0.1
 * @desc Describe your module here
 * @param {object} settings
 */
const HWDrawer = ({
    drawerSelector = '[data-hw-drawer]',
    drawerTrigger = '[data-hw-drawer-trigger]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    drawers: qa(drawerSelector), // All drawer DOM nodes
    triggers: qa(drawerTrigger),
  };


  /**
   * @function moduleMethod
   * @desc Describe what the method does here
   * @param {Event} e
   */
  function toggleModal(e) {
    // Grab clicked element and drawer associated with it
    const elem = e.currentTarget;
    const drawerId = elem.getAttribute('data-hw-drawer-trigger');
    const body = document.getElementsByTagName('BODY')[0];
    const drawer = q(`[data-hw-drawer=${drawerId}]`);

    const drawerHidden = drawer.getAttribute('aria-hidden');
    // Toggle drawer
    if (drawerHidden === 'true') {
      drawer.setAttribute('aria-hidden', false);
      drawer.classList.add('hw-drawer--open');
      body.style.overflow = 'hidden';
    } else {
      drawer.setAttribute('aria-hidden', true);
      drawer.classList.remove('hw-drawer--open');
      body.style.overflow = 'visible';
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to module
   * @param {node} trigger
   */

  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleModal);
  }


  /**
   * @function init
   * @desc Initialises the module
   */
  function init() {
    // Check if any modules exist, return if not.
    if (SETTINGS.drawers.length < 1) {
      return;
    }

    // Loop through all modules and initialise each
    SETTINGS.drawers.forEach((drawer) => {
      // Skip if already initialised
      if (drawer.getAttribute('data-hw-drawer-initialised') === 'true') { return false; }

      // Mark as initialised
      drawer.setAttribute('data-hw-drawer-initialised', true);
      drawer.setAttribute('aria-hidden', true);

    });

    // Example of binding event to button
    SETTINGS.triggers.forEach((trigger) => {
      // Skip if already initialised
      if (trigger.getAttribute('data-hw-drawer-trigger-initialised') === 'true') { return false; }
      // Mark as initialised
      trigger.setAttribute('data-hw-drawer-trigger-initialised', true);
      bindEvents(trigger);
    });
  }


  // Initialise HWModule component
  init();
};

HWDrawer();
