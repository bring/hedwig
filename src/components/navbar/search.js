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
} = {}) => {
  const serchField = q(searchFieldSelector);
  let originalDistanceToTop = 0;

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
        interval += 1;
      } else {
        interval = 0;
      }
    }, 3000);
  }


  function addClassWhenScrolled() {
    const distanceToTop = serchField.getBoundingClientRect().top;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    if (serchField.classList.contains(searchFieldClass) && scrollTop > originalDistanceToTop) {
      return;
    }

    if (distanceToTop < 0) {
      serchField.classList.add(searchFieldClass);
      return;
    }

    if (scrollTop < originalDistanceToTop) {
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

    originalDistanceToTop = Math.round(serchField.getBoundingClientRect().top);

    window.addEventListener('scroll', throttle(addClassWhenScrolled, 100));

    if (originalDistanceToTop < 0) {
      originalDistanceToTop = 20;
    }

    setPlaceholderText();
  }

  init();
};

HWSearch();
