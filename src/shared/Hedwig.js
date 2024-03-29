import zenscroll from 'zenscroll';

import q from './utilities/js/q';
import checkSupport from './utilities/js/checkSupport';

/**
 * @function HedwigApp
 * @version 0.0.1
 * @desc Bootstraps the application
 */
const HWApp = () => {
  // Module settings object
  const SETTINGS = {
    document: q('html'), // All password DOM nodes
    zenscroll: {
      edgeOffset: 100, // px
    },
  };

  /**
   * @function init
   * @desc Initialises the accordion
   */
  function init() {
    // Skip if already initialised
    if (SETTINGS.document.getAttribute('data-hw-app-initialised') === 'true') { return; }

    // Mark as initialised
    SETTINGS.document.setAttribute('data-hw-app-initialised', true);

    // Initialise zenscroll
    zenscroll.setup(null, SETTINGS.zenscroll.edgeOffset);

    // Check for js support, and remove `no-js` class from body.
    checkSupport();
  }

  // Initialise HWApp
  init();
};


if (document.getElementsByTagName("html")[0].getAttribute("data-hw-app-initialised") === 'true') {
  console.log("Already initialized");
}
else {
  HWApp();
}
