import q from '../../utilities/js/q';

/**
 * @function HWNavbar
 * @version 0.0.1
 * @desc Toggle classes for navbar
 * @param {object} settings
 */

const HWNavbar = ({
  menuButtonSelector = '[data-hw-toggle-menu]',
  menuButtonIconSelector = '[data-hw-menu-icon]',
  drawerSelector = '[data-hw-menu-drawer]',
  activeIconClass = 'hw-hamburger--active',
  activeDrawerClass = 'hw-navbar__drawer--active',
} = {}) => {
  const menuButton = q(menuButtonSelector);

  /**
   * @function toggleMenu
   * @desc Add class to menu button navigation
   */

  function toggleMenu() {
    const menuButtonIcon = q(menuButtonIconSelector);
    const drawer = q(drawerSelector);

    if (menuButtonIcon.classList.contains(activeIconClass)) {
      menuButtonIcon.classList.remove(activeIconClass);
      drawer.classList.remove(activeDrawerClass);
      return;
    }

    menuButtonIcon.classList.add(activeIconClass);
    drawer.classList.add(activeDrawerClass);
  }

  function init() {
    if (!menuButton) {
      return;
    }

    // Skip if already initialised
    if (menuButton.getAttribute('data-hw-menu-initialised') === 'true') { return; }

    // Mark as initialised
    menuButton.setAttribute('data-hw-menu-initialised', true);


    menuButton.addEventListener('click', toggleMenu);
  }

  init();
};

HWNavbar();
