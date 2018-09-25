import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWAutoComplete
 * @version 0.0.1
 * @desc Autcomplete component
 * @param {object} settings
 */
const HWAutoComplete = ({ moduleSelector = '[data-hw-autocomplete]' } = {}) => {
  // Module settings object
  const SETTINGS = { elements: qa(moduleSelector) }; // All module DOM nodes

  /**
   * @function onArrowDown
   * @desc Select the first item in the list
   * @param {node} trigger
   */
  function onArrowDown(e, suggestion) {
    if (e.keyCode === 40) {
      suggestion.focus();
      const input = q('input', suggestion);
      input.checked = true;
      const change = new Event('change');
      input.dispatchEvent(change);
    }
  }
  /**
   * @function onArrowUp
   * @desc toggle visibility of resetbutton based on input value
   * @param {node} trigger
   */
  function onArrowUp(e, autocomplete) {
    if (e.target.value === '') {
      autocomplete.setAttribute('data-hw-autocomplete-reset-visible', false);
    } else {
      autocomplete.setAttribute('data-hw-autocomplete-reset-visible', true);
    }
  }

  /**
   * @function onSugChange
   * @desc Bind the value of input to suggestion
   * @param {node} trigger
   */
  function onSugChange(e, searchField) {
    console.log(e);
  }

  /**
   * @function onReset
   * @desc Reset search field
   * @param {node} trigger
   */
  function onReset(e, searchField, autocomplete) {
    autocomplete.setAttribute('data-hw-autocomplete-reset-visible', false);
    searchField.value = '';
    searchField.focus();
  }

  /**
   * @function bindEvents
   * @desc Adds listener to module
   * @param {node, node} trigger
   */
  function bindEvents(searchField, suggestions, resetButton, autocomplete) {
    suggestions.forEach(suggestion => {
      q('input', suggestion).addEventListener('change', e =>
        onSugChange(e, searchField)
      );
    });

    searchField.addEventListener('keydown', e =>
      onArrowDown(e, suggestions[0])
    );

    searchField.addEventListener('keyup', e => onArrowUp(e, autocomplete));

    resetButton.addEventListener('click', e =>
      onReset(e, searchField, autocomplete)
    );
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
    SETTINGS.elements.forEach(autocomplete => {
      // Skip if already initialised
      if (
        autocomplete.getAttribute('data-hw-autocomplete-initialised') === 'true'
      ) {
        return false;
      }

      // Mark as initialised
      autocomplete.setAttribute('data-hw-autocomplete-initialised', true);

      const searchField = q('[data-hw-autocomplete-input]', autocomplete);
      if (searchField.value === '') {
        autocomplete.setAttribute('data-hw-autocomplete-reset-visible', false);
      } else {
        autocomplete.setAttribute('data-hw-autocomplete-reset-visible', true);
      }

      const resetButton = q('[data-hw-autocomplete-reset]', autocomplete);
      const suggestions = qa('[data-hw-autocomplete-suggestion]', autocomplete);

      bindEvents(searchField, suggestions, resetButton, autocomplete);

      // Other things here
    });
  }

  // Initialise HWAutoComplete component
  init();
};

HWAutoComplete();
