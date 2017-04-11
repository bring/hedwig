/**
 * Load all modules
 */
import HWDropdown from './components/dropdown/dropdown';


/**
 * HedwigApp constructor
 */
class HedwigApp {

  constructor(options) {
    this.name = 'Hedwig Front-End Application';
    this.modules = {};
    this.settings = Object.assign({}, {
      version: 0.1,
    }, options);
  }

  init() {
    console.info('initialising hedwig app!');

    // Attach and initialise modules
    this.modules.HWDropdown = HWDropdown();
    // ...
  }
}

export default HedwigApp;
