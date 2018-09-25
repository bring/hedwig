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
    menuButtonLabelMenu: q('.hw-navbar__menu-button-label-menu'),
    menuButtonLabelClose: q('.hw-navbar__menu-button-label-close'),
    searchButton: q(searchButtonSelector),
    overlay: q(overlaySelector),
    hamburgerIcon: q(hamburgerIcon),
    desktopSearchField: q(desktopSearchFieldSelector),
    footer: q('footer'),
    main: q('main'),
  };


  function setMenuButtonLabelWidths(){
    if(SETTINGS.menuButtonLabelMenu.offsetWidth > 0) {
      SETTINGS.menuButtonLabelMenu.style.width = SETTINGS.menuButtonLabelMenu.offsetWidth + 'px';
      SETTINGS.menuButtonLabelClose.style.width = SETTINGS.menuButtonLabelMenu.offsetWidth + 'px';
    }
  }

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

    if(!SETTINGS.menuButtonLabelClose.style.width){
      setMenuButtonLabelWidths();
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

      setMenuButtonLabelWidths();
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
