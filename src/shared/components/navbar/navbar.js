import q from '../../../shared/utilities/js/q';

/**
 * @function HWNavbar
 * @version 0.0.1
 * @desc Toggle classes for navbar
 * @param {object} settings
 */

const HWNavbar = ({
  navbarSelector = '.hw-navbar',
  menuButtonSelector = '[data-hw-toggle-menu]',
  searchButtonSelector = '[data-hw-toggle-search]',
  overlaySelector = '[data-hw-navbar-overlay]',
  hamburgerIcon = '[data-hw-menu-icon]',
  activeClass = 'hw-navbar--active',
  loginActiveClass = 'hw-navbar--login-active',
  showSearchClass = 'hw-navbar--searching',
  activeHamburgerClass = 'hw-hamburger--active',
  desktopSearchFieldSelector = '.hw-navbar__search .hw-search__input',
} = {}) => {
  // Module settings object
  const SETTINGS = {
    navbar: q(navbarSelector), // All navbar DOM nodes
    menuButton: q(menuButtonSelector),
    searchButton: q(searchButtonSelector),
    overlay: q(overlaySelector),
    hamburgerIcon: q(hamburgerIcon),
    desktopSearchField: q(desktopSearchFieldSelector),
    footer: q('footer'),
    main: q('main'),
  };

  /**
   * @function toggleMenu
   * @desc Add class to menu button navigation
   */

  function toggleMenu() {
    if (SETTINGS.navbar.classList.contains(activeClass)) {
      SETTINGS.navbar.classList.remove(activeClass);
      SETTINGS.hamburgerIcon.classList.remove(activeHamburgerClass);
      if (SETTINGS.footer && SETTINGS.main) {
        SETTINGS.main.style.display = 'block';
        SETTINGS.footer.style.display = 'block';
      }
      return;
    }

    if (SETTINGS.navbar.classList.contains(loginActiveClass)) {
      SETTINGS.navbar.classList.remove(loginActiveClass);
      SETTINGS.hamburgerIcon.classList.remove(activeHamburgerClass);
      return;
    }

    SETTINGS.navbar.classList.add(activeClass);
    SETTINGS.hamburgerIcon.classList.add(activeHamburgerClass);
    if (SETTINGS.footer && SETTINGS.main) {
      SETTINGS.main.style.display = 'none';
      SETTINGS.footer.style.display = 'none';
    }
  }

  function toggleSearch() {
    if (SETTINGS.navbar.classList.contains(showSearchClass)) {
      SETTINGS.navbar.classList.remove(showSearchClass);
      return;
    }

    SETTINGS.navbar.classList.add(showSearchClass);
    if (SETTINGS.desktopSearchField) {
      SETTINGS.desktopSearchField.focus();
    }
  }

  function init() {
    if (!SETTINGS.navbar) {
      return;
    }

    // Skip if already initialised
    if (SETTINGS.menuButton) {
      if (
        SETTINGS.menuButton.getAttribute('data-hw-menu-initialised') === 'true'
      ) {
        return;
      }

      // Mark as initialised
      SETTINGS.menuButton.setAttribute('data-hw-menu-initialised', true);

      // Attach event listeners
      SETTINGS.menuButton.addEventListener('click', toggleMenu);
      SETTINGS.menuButton.style.width = SETTINGS.menuButton.offsetWidth + 'px';
    }

    // Optional search button
    if (SETTINGS.searchButton) {
      SETTINGS.searchButton.addEventListener('click', toggleSearch);
      SETTINGS.overlay.addEventListener('click', toggleSearch);
    }
  }

  init();
};

HWNavbar();
