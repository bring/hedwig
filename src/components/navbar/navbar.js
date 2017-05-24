import q from '../../utilities/js/q';

/**
 * @function HWNavbar
 * @version 0.0.1
 * @desc Toggle classes for navbar
 * @param {object} settings
 */

const HWNavbar = ({
  navbarSelector = '.hw-navbar',
  menuButtonSelector = '[data-hw-toggle-menu]',
  hamburgerIcon = '[data-hw-menu-icon]',
  activeClass = 'hw-navbar--active',
  activeHamburgerClass = 'hw-hamburger--active',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    navbar: q(navbarSelector), // All dropdown DOM nodes
    menuButton: q(menuButtonSelector),
    hamburgerIcon: q(hamburgerIcon),
  };

  /**
   * @function toggleMenu
   * @desc Add class to menu button navigation
   */

  function toggleMenu() {
    if (SETTINGS.navbar.classList.contains(activeClass)) {
      SETTINGS.navbar.classList.remove(activeClass);
      SETTINGS.hamburgerIcon.classList.remove(activeHamburgerClass);
      return;
    }

    SETTINGS.navbar.classList.add(activeClass);
    SETTINGS.hamburgerIcon.classList.add(activeHamburgerClass);
  }

  function init() {
    if (!SETTINGS.navbar) {
      return;
    }

    // Skip if already initialised
    if (SETTINGS.menuButton.getAttribute('data-hw-menu-initialised') === 'true') { return; }

    // Mark as initialised
    SETTINGS.menuButton.setAttribute('data-hw-menu-initialised', true);

    // Attach event listeners
    SETTINGS.menuButton.addEventListener('click', toggleMenu);
  }

  init();
};

HWNavbar();
