import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWAutoComplete
 * @version 0.0.1
 * @desc Autcomplete component
 * @param {object} settings
 */
const HWAutoComplete = ({
    moduleSelector = '[data-hw-autocomplete]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(moduleSelector), // All module DOM nodes
  };

  /**
   * @function selectOption
   * @desc Select option in list
   * @param {Event} e
   */

  function selectOption(autocomplete) {
    const input = q('[data-hw-autocomplete-input]', autocomplete);
    const selectedOption = q('[data-hw-autocomplete-selected="true"]', autocomplete);
    const selectedValue = selectedOption.getAttribute('data-hw-autocomplete-value');
    input.value = selectedValue;
  }

  /**
   * @function navigateSuggestions
   * @desc Navigate the list based in direction
   * @param {Event} e
   */
  function navigateOptions(autocomplete, direction) {
    // Find all options
    const options = [...qa('[data-hw-autocomplete-suggestion]', autocomplete)];
    const optionsLength = options.length;
    // Find index of selected option
    const currentIndex = options.findIndex(option => {
      return option.getAttribute('data-hw-autocomplete-selected') === 'true';
    });

    const choosePrev = (index) => {
      // If nothing or first option is selected – select the last option
      if (index === -1 || index === 0) {
        options[0].setAttribute('data-hw-autocomplete-selected', false);
        options[optionsLength - 1].setAttribute('data-hw-autocomplete-selected', true);
      } else {
        options[index].setAttribute('data-hw-autocomplete-selected', false);
        options[index - 1].setAttribute('data-hw-autocomplete-selected', true);
      }
    };

    const chooseNext = (index) => {
      // If nothing or last option is selected – select the fist option
      if (index === -1 || index === optionsLength - 1) {
        options[optionsLength - 1].setAttribute('data-hw-autocomplete-selected', false);
        options[0].setAttribute('data-hw-autocomplete-selected', true);
      } else {
        options[index].setAttribute('data-hw-autocomplete-selected', false);
        options[index + 1].setAttribute('data-hw-autocomplete-selected', true);
      }
    };

    if (direction === 'prev') { choosePrev(currentIndex); }
    if (direction === 'next') { chooseNext(currentIndex); }
  }

  /**
   * @function handleKeyboardEvents
   * @desc Handle key presses
   * @param {node} dropdown
   */
  function handleKeyboardEvents(e, autocomplete) {
    const key = e.keyCode || e.which;

    switch (key) {
      case KEYS.UP:
        e.preventDefault();
        navigateOptions(autocomplete, 'prev');
        break;
      case KEYS.DOWN:
        e.preventDefault();
        navigateOptions(autocomplete, 'next');
        break;
      case KEYS.SPACE:
      case KEYS.ESCAPE:
      case KEYS.ENTER:
        e.preventDefault();
        selectOption(autocomplete);
        break;
      default:
        break;
    }
  }

  /**
   * @function bindEvents
   * @desc Adds listener to module
   * @param {node} trigger
   */
  function bindEvents(autocomplete) {
    autocomplete.addEventListener('keydown', (e) => handleKeyboardEvents(e, autocomplete));
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
    SETTINGS.elements.forEach((autocomplete) => {
      // Skip if already initialised
      if (autocomplete.getAttribute('data-hw-autocomplete-initialised') === 'true') { return false; }

      // Mark as initialised
      autocomplete.setAttribute('data-hw-autocomplete-initialised', true);

      bindEvents(autocomplete);

      // Other things here
    });
  }


  // Initialise HWAutoComplete component
  init();
};

HWAutoComplete();
