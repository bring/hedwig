import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';

/**
 * @function HWHero
 * @version 0.0.1
 * @desc Attaches interactivity to hero with search field. (not required otherwise)
 * @param {object} settings
 */

const HWHero = ({
  selector = '[data-hw-hero]',
  searchingClass = 'hw-hero--searching',
  searchInputSelector = '[data-hw-search-input]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector), // All hero DOM nodes
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
   * @function toggleImages
   * @desc Toggle the images on breakpoints
   */
  function toggleImages(imageContainer, images) {
    const width = window.innerWidth;
    const screenWidth = screen.width;
    const { small, large } = images;
    if (width < 720 || screenWidth < 720) {
      imageContainer.style.backgroundImage = `url("${small}")`;
    } else {
      imageContainer.style.backgroundImage = `url("${large}")`;
    }
  }

  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   */
  function bindEvents(hero) {
    const searchInput = q(searchInputSelector, hero);
    const { hwHeroImages } = hero.dataset;

    if (searchInput) {
      searchInput.addEventListener('focus', toggleActive);
      searchInput.addEventListener('blur', toggleActive);
    }

    if (hwHeroImages) {
      const images = JSON.parse(hwHeroImages);
      const imageContainer = q('.hw-hero__image', hero);
      toggleImages(imageContainer, images);
      window.addEventListener('resize', () => toggleImages(imageContainer, images));
    }
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
