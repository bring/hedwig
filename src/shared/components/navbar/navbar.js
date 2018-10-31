import q from '../../../shared/utilities/js/q';
import qa from '../../../shared/utilities/js/qa';
import KEYS from '../../utilities/js/keys';

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
  searching = 'hw--searching',
  activeHamburgerClass = 'hw-hamburger--active',
  desktopSearchFieldSelector = '.hw-navbar__search .hw-search__input',
  closeSearchSelector = '[data-hw-navbar-close-search]'
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
    hamburgerIcon: q(hamburgerIcon),
    desktopSearchField: q(desktopSearchFieldSelector),
    footer: q('footer'),
    main: q('main'),
    searchSection: q('.hw-navbar__search')
  };
  // Keep track of where focus was before trapFocus()
  let returnFocusEl = null;


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


  const focusableElsSelector =
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';
  /**
   * @function trapFocus
   * @desc trap focus in an element
   * @param {node} element
   */
  function trapFocus(element) {
    const focusableEls = qa(focusableElsSelector, element).filter((element) => {
      // Filter out elements that are not focusable
      return element.tabIndex != -1;
    });
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    element.addEventListener('keydown', e => {
      const isTabPressed = e.keyCode === KEYS.TAB;
      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        /* shift + tab */ if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } /* tab */ else if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    });
  }



  function toggleSearch() {
    if (SETTINGS.navbar.classList.contains(showSearchClass)) {
      SETTINGS.navbar.classList.remove(showSearchClass);
      if(SETTINGS.main) {
        SETTINGS.main.classList.remove(searching);
      }
      if(SETTINGS.footer) {
        SETTINGS.footer.classList.remove(searching);
      }
      returnFocusEl.focus();
      return;
    }

    trapFocus(SETTINGS.searchSection);
    returnFocusEl = document.activeElement;
    SETTINGS.navbar.classList.add(showSearchClass);
    if(SETTINGS.main) {
      SETTINGS.main.classList.add(searching);
    }
    if(SETTINGS.footer) {
      SETTINGS.footer.classList.add(searching);
    }
    if (SETTINGS.desktopSearchField) {
      SETTINGS.desktopSearchField.focus();
    }
  }

  function onEscape(e){
    if(e.keyCode === KEYS.ESCAPE) {
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
      q('.hw-navbar__search').addEventListener('keydown', e => onEscape(e));
    }
    if(SETTINGS.closeSearch){
      SETTINGS.closeSearch.addEventListener('click', toggleSearch);
    }
  }

  init();
};

HWNavbar();
