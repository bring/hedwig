import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWModule
 * @version 0.0.1
 * @desc Describe your module here
 * @param {object} settings
 */
const HWModule = ({
    moduleSelector = '[data-hw-module]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(moduleSelector), // All module DOM nodes
  };


  /**
   * @function moduleMethod
   * @desc Describe what the method does here
   * @param {Event} e
   */
  function moduleMethod(e) {
    // Grab clicked element
    const elem = e.target;

    // Things here
    // ...
  }


  /**
   * @function bindEvents
   * @desc Adds listener to module
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', moduleMethod);
  }


  /**
   * @function init
   * @desc Initialises the module
   */
  function init() {
    // Check if any modules exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all modules and initialise each
    SETTINGS.elements.forEach((module) => {
      // Skip if already initialised
      if (module.getAttribute('data-hw-module-initialised') === 'true') { return false; }

      // Mark as initialised
      module.setAttribute('data-hw-module-initialised', true);

      // Example of binding event to button
      const moduleButton = q('.hw-module__trigger', module);
      bindEvents(moduleButton);

      // Other things here
    });
  }


  // Initialise HWModule component
  init();
};

HWModule();
