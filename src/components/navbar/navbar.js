import qa from '../../utilities/js/qa';

/**
 * @function HWDropdown
 * @version 0.0.1
 * @desc Creates custom dropdowns for all found elements
 * @param {object} settings
 */
const HWNavbar = ({
    navbarSelector = '[data-hw-toggle-menu]',
    activeClass = 'hw-menu-icon--open',
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(navbarSelector), // All dropdown DOM nodes
  };

  if (SETTINGS.elements.length < 1) {
    return;
  }
  
};

HWNavbar();
