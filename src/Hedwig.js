import checkSupport from './utilities/js/checkSupport';

/**
 * @function HedwigApp
 * @version 0.0.1
 * @desc Bootstraps the application
 */
const HWApp = () => {
  /**
   * @function init
   * @desc Initialises the accordion
   */
  function init() {
    // Check for js support, and remove `no-js` class from body.
    checkSupport();
  }

  // Initialise HWApp
  init();
};

HWApp();
