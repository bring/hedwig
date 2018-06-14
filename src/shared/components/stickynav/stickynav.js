import zenscroll from 'zenscroll';
import throttle from 'lodash/throttle';
import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import getPosition from '../../utilities/js/position';
import horizontalScroll from '../../utilities/js/horizontalScroll';

/**
 * @function HWStickyNav
 * @version 0.0.1
 * @desc Sticky navigation with hash navigation
 * @param {object} settings
 */

const HWStickyNav = ({
  selector = '[data-hw-sticky-nav]',
  linkSelector = '.hw-stickynav__link',
  innerSelector = '.hw-stickynav__nav',
  activeItemClass = 'hw-stickynav__link--active'
} = {}) => {
  // Module settings object
  const SETTINGS = {
    element: q(selector), // All sticky DOM nodes
    internalScroller: zenscroll.createScroller(q(innerSelector)),
  };

  /**
   * @function updateLinks
   * @desc add and remove active classes as needed
   */
  function updateLinks(activeLinkId) {
    const links = qa(linkSelector, SETTINGS.element);

    // Loop through links and set correct class
    links.forEach((link) => {
      if (link.getAttribute('href') === activeLinkId) {
        link.classList.add(activeItemClass);
      } else {
        link.classList.remove(activeItemClass);
      }
    });

    // Store currently active item to settings
    SETTINGS.currentItem = activeLinkId;
  }

  /**
   * @function checkPosition
   * @desc Check the scroll position and add active class to link(s)
   */
  function checkPosition() {
    const offset = window.pageYOffset + SETTINGS.element.clientHeight;
    const match = SETTINGS.sections
      .find(section => offset >= section.top && offset <= section.bottom);

    // Check if there is no match (we're not within a section)
    if (!match) {
      updateLinks();
      return;
    }

    // Check if we need to change the currently active item
    if (match.id !== SETTINGS.currentItem) {
      updateLinks(match.id);
    }
  }

  // Find and store section positions
  function findSectionPositions() {
    const links = qa(linkSelector, SETTINGS.element);
    SETTINGS.sections = links.map((link) => {
      const id = link.getAttribute('href');
      const el = q(id);
      const pos = getPosition(el);
      return {
        id,
        top: pos.top,
        bottom: pos.bottom
      };
    });
  }
  // Gives smooth scroll effect
  function handleClick(e) {
    e.preventDefault();
    const element = e.target;
    if (!element.classList.contains('hw-stickynav__link')) { return; }

    // Scroll the content up or down according to the selected item
    const target = getPosition(q(element.hash));
    zenscroll.toY((target.top - SETTINGS.element.clientHeight) + 1);

    // Scroll menu to the right or left
    const innerElement = q(innerSelector);
    const offset = (element.offsetLeft - (innerElement.clientWidth / 2)) + (element.clientWidth / 2);
    
    // Scroll horizontally (if using supported browser)
    if (innerElement.scroll) {
      innerElement.scroll({
        behavior: 'smooth',
        left: offset,
        top: 0,
      });
    } else {
      horizontalScroll(innerElement, offset);
    }
  }

  function init() {
    if (!SETTINGS.element) {
      return;
    }

    // Skip if already initialised
    if (SETTINGS.element.getAttribute('data-hw-sticky-nav-initialised') === 'true') { return; }

    // Mark as initialised
    SETTINGS.element.setAttribute('data-hw-sticky-nav-initialised', true);

    // Find all section positions
    findSectionPositions();

    // Add HW acceleration
    SETTINGS.element.style.willChange = 'top';

    // Attach event listeners
    SETTINGS.element.addEventListener('click', handleClick);
    window.addEventListener('scroll', throttle(checkPosition, 50));
    window.addEventListener('resize', throttle(() => {
      init();
    }, 100));

    // Fire initial check (in case user starts halfway down page)
    checkPosition();
  }

  init();
};

HWStickyNav();
