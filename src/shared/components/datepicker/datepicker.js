import Pikaday from 'pikaday';
import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWDatePicker
 * @version 0.0.1
 * @desc Describe your module here
 * @param {object} settings
 */
const HWDatePicker = ({
    datePickerSelector = '[data-hw-datepicker]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(datePickerSelector), // All module DOM nodes
  };

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
    SETTINGS.elements.forEach((datepicker, index) => {
      // Skip if already initialised
      if (datepicker.getAttribute('data-hw-module-initialised') === 'true') { return false; }

      // Mark as initialised
      datepicker.setAttribute('data-hw-module-initialised', true);
      datepicker.setAttribute('id', `datepicker-${index}`);
      const datePickerId = `datepicker-${index}`;
      const datePickerWidth = datepicker.offsetWidth;
      console.log(datepicker.offsetWidth);

      // Create a new pikadate instance
      const pikaday = new Pikaday({
        field: datepicker,
        container: datepicker.parentNode,
        firstDay: 1,
        i18n: {
          previousMonth: 'Forrige måned',
          nextMonth: 'Neste måned',
          months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
          weekdays: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
          weekdaysShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        },
      });

    });
  }


  // Initialise HWModule component
  init();
};

HWDatePicker();
