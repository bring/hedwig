import qa from '../../utilities/js/qa';

/**
 * @function HWDropdown
 * @version 0.0.1
 * @desc Creates custom dropdowns for all found elements
 * @param {object} settings
 */
const HWDropdown = ({
    dropdown = '[data-hw-dropdown]',
    activeClass = 'hw-dropdown--visible',
  } = {}) => {

  // Find all instances of dom nodes
  const DOM = {
    dropdowns: qa(dropdown),
  };


  /**
   * @function openDialog
   * @desc Sets up dialog and state ready to be shown.
   * @param {Event} e
   */
  function openDropdown(e) {
    // Find dropdown-list within dropdown container
    const el = e.currentTarget.querySelectorAll('[data-hw-dropdown-options]')[0];

    // Display dropdown
    el.setAttribute('aria-hidden', false);
    el.classList.add(activeClass);
  }


  /**
   * @function bindClickEvent
   * @desc Adds listener to list button
   * @param {node} dialog
   */
  function bindClickEvent(dialog) {
    dialog.addEventListener('click', openDropdown);
  }


  /**
   * @function init
   * @desc Initialises the dropdown
   */
  function init() {
    // Check if any dropdowns exist, return if not.
    if (DOM.dropdowns.length < 1) {
      return false;
    }

    return DOM.dropdowns.forEach((dialog) => {

      // Add aria roles and attributes
      const controls = dialog.getAttribute('data-hw-dropdown');

      dialog.setAttribute('aria-controls', controls);
      dialog.setAttribute('aria-role', 'listbox');

      // Set up event listeners for opening dialog
      bindClickEvent(dialog);

      // dialog.classList.add(readyClass);
    });
  }


  // Initialise HWDropdown component
  init();
};

export default HWDropdown;
