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

  const TRANSLATION = {
    previousMonth: 'Forrige måned',
    nextMonth: 'Neste måned',
    months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
    weekdays: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    weekdaysShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
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
      datepicker.setAttribute('data-hw-datepicker-index', index);

      // Create a new pikadate instance
      const pikaday = new Pikaday({
        field: datepicker,
        container: datepicker.parentNode,
        format: 'D MMM YYYY',
        position: 'bottom left',
        onOpen: () => {
          datepicker.parentNode.scrollIntoView();
        },
        onSelect: (date) => {
          const day = date.getDate();
          const month = TRANSLATION.months[date.getMonth()];
          const year = date.getFullYear();
          datepicker.value = `${day}. ${month} ${year}`;
        },
        disableWeekends: true,
        firstDay: 1,
        i18n: TRANSLATION,
      });
    });
  }


  // Initialise HWModule component
  init();
};

HWDatePicker();
