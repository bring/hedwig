import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';

/**
 * @function HWHero
 * @version 0.0.1
 * @desc Attaches interactivity to hero
 * @param {object} settings
 */

const HWHero = ({
  selector = '[data-hw-hero]',
  searchingClass = 'hw-hero--searching',
  searchInputSelector = '[data-hw-search-input]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector), // All dropdown DOM nodes
  };


  /**
   * @function toggleActive
   * @desc Toggles the search overlay
   */
  function toggleActive(e) {
    e.preventDefault();
    const input = e.currentTarget;
    const container = findParent({ selector: '[data-hw-hero]', elem: input });

    if (container.classList.contains(searchingClass)) {
      container.classList.remove(searchingClass);
    } else {
      container.classList.add(searchingClass);
    }
  }

  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   */
  function bindEvents(hero) {
    const searchInput = q(searchInputSelector, hero);
    searchInput.addEventListener('focus', toggleActive);
    searchInput.addEventListener('blur', toggleActive);
  }


  function init() {
    // Check if any search fields exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all hero elements and initialise each
    SETTINGS.elements.forEach((hero) => {

      // Skip if already initialised
      if (hero.getAttribute('data-hw-hero-initialised') === 'true') { return; }

      // Mark as initialised
      hero.setAttribute('data-hw-hero-initialised', true);

      // Set up event listeners
      bindEvents(hero);
    });
  }

  init();
};

HWHero();
