import q from '../../utilities/js/q';
import KEYS from '../../utilities/js/keys';
import trapFocus from '../../utilities/js/trapFocus';

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
  activeClass = 'hw-navbar--active',
  loginActiveClass = 'hw-navbar--login-active',
  showSearchClass = 'hw-navbar--searching',
  searching = 'hw--searching',
  desktopSearchFieldSelector = '.hw-navbar__search .hw-search__input',
  closeSearchSelector = '[data-hw-navbar-close-search]',
} = {}) => {
  // Module settings object
  const SETTINGS = {
    navbar: q(navbarSelector), // All navbar DOM nodes
    menuButton: q(menuButtonSelector),
    menuButtonLabelMenu: q('.hw-navbar__menu-button-label-menu'),
    menuButtonLabelClose: q('.hw-navbar__menu-button-label-close'),
    searchButton: q(searchButtonSelector),
    closeSearch: q(closeSearchSelector),
    overlay: q(overlaySelector),
    desktopSearchField: q(desktopSearchFieldSelector),
    footer: q('footer'),
    main: q('main'),
    searchSection: q('.hw-navbar__search'),
    drawer: q('.hw-navbar .hw-navbar__drawer'),
  };
  // Keep track of where focus was before trapFocus()
  let returnFocusEl = null;


  function setMenuButtonLabelWidths() {
    if (SETTINGS.menuButtonLabelMenu.offsetWidth > 0) {
      SETTINGS.menuButtonLabelMenu.style.width = `${SETTINGS.menuButtonLabelMenu.offsetWidth}px`;
      SETTINGS.menuButtonLabelClose.style.width = `${SETTINGS.menuButtonLabelMenu.offsetWidth}px`;
    }
  }

  /**
   * @function toggleMenu
   * @desc Add class to menu button navigation
   */

  function toggleMenu() {
    if (SETTINGS.navbar.classList.contains(activeClass)) {
      SETTINGS.navbar.classList.remove(activeClass);
      SETTINGS.drawer.setAttribute('aria-hidden', true);
      SETTINGS.menuButton.setAttribute('aria-expanded', false);
      if (SETTINGS.footer && SETTINGS.main) {
        SETTINGS.main.style.display = 'block';
        SETTINGS.footer.style.display = 'block';
      }
      return;
    }

    if (SETTINGS.navbar.classList.contains(loginActiveClass)) {
      SETTINGS.navbar.classList.remove(loginActiveClass);
      return;
    }

    if (!SETTINGS.menuButtonLabelClose.style.width) {
      setMenuButtonLabelWidths();
    }
    SETTINGS.navbar.classList.add(activeClass);
    SETTINGS.drawer.setAttribute('aria-hidden', false);
    SETTINGS.menuButton.setAttribute('aria-expanded', true);
    if (SETTINGS.footer && SETTINGS.main) {
      SETTINGS.main.style.display = 'none';
      SETTINGS.footer.style.display = 'none';
    }
  }


  function toggleSearch() {
    if (SETTINGS.navbar.classList.contains(showSearchClass)) {
      SETTINGS.navbar.classList.remove(showSearchClass);
      if (SETTINGS.main) {
        SETTINGS.main.classList.remove(searching);
      }
      if (SETTINGS.footer) {
        SETTINGS.footer.classList.remove(searching);
      }
      returnFocusEl.focus();
      return;
    }

    trapFocus(SETTINGS.searchSection);
    returnFocusEl = document.activeElement;
    SETTINGS.navbar.classList.add(showSearchClass);
    if (SETTINGS.main) {
      SETTINGS.main.classList.add(searching);
    }
    if (SETTINGS.footer) {
      SETTINGS.footer.classList.add(searching);
    }
    if (SETTINGS.desktopSearchField) {
      SETTINGS.desktopSearchField.focus();
    }
  }

  function onEscape(e) {
    if (e.keyCode === KEYS.ESCAPE) {
      toggleSearch();
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
      q('.hw-navbar__search').addEventListener('keydown', (e) => onEscape(e));
    }
    if (SETTINGS.closeSearch) {
      SETTINGS.closeSearch.addEventListener('click', toggleSearch);
    }
  }

  init();
};

HWNavbar();
