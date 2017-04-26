import throttle from 'lodash/throttle';
import q from '../../utilities/js/q';

/**
 * @function HWNavbar
 * @version 0.0.1
 * @desc Toggle classes for navbar
 * @param {object} settings
 */

const HWSearch = ({
  searchFieldSelector = '[data-hw-search]',
  searchFieldInputSelector = '[data-hw-search-input]',
  searchFieldClass = 'hw-search--stick',
  originalDistanceToTop = 0,
} = {}) => {
  const serchField = q(searchFieldSelector);

  function setPlaceholderText() {
    const input = q(searchFieldInputSelector);

    const texts = [
      'Søk etter pakke',
      'Eks.: 1212012381238123',
      'Eller på nettstedet',
      'Eks.: Bedriftspakke',
    ];

    let interval = 0;

    setInterval(() => {
      input.placeholder = texts[interval];

      if (interval < (texts.length - 1)) {
        interval++;
      } else {
        interval = 0;
      }
    }, 3000);
  }

  function addClassWhenScrolled() {
    const distanceToTop = serchField.getBoundingClientRect().top;

    if (serchField.classList.contains(searchFieldClass) && window.scrollY > originalDistanceToTop) {
      return;
    }

    if (distanceToTop < 0) {
      serchField.classList.add(searchFieldClass);
      return;
    }

    if (window.scrollY < originalDistanceToTop) {
      serchField.classList.remove(searchFieldClass);
    }
  }


  function init() {
    if (!serchField) {
      return;
    }

    // Skip if already initialised
    if (serchField.getAttribute('data-hw-search-initialised') === 'true') { return; }

    // Mark as initialised
    serchField.setAttribute('data-hw-search-initialised', true);

    originalDistanceToTop = serchField.getBoundingClientRect().top;

    window.addEventListener('scroll', throttle(addClassWhenScrolled, 100));

    setPlaceholderText();
  }

  init();
};

HWSearch();
