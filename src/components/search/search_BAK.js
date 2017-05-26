// import throttle from 'lodash/throttle';
// import q from '../../utilities/js/q';

// /**
//  * @function HWSearch
//  * @version 0.0.1
//  * @desc Controls search field
//  * @param {object} settings
//  */

// const HWSearch = ({
//   activeClass = 'hw-search--active',
//   dirtyClass = 'hw-search--dirty',
//   searchContainerSelector = '[data-hw-search]',
//   searchInputSelector = '[data-hw-search-input]',
//   placeholderSelector = '[data-hw-search-placeholder]',
//   stickyClass = 'hw-search--stick',
// } = {}) => {
//   const searchContainer = q(searchContainerSelector);
//   const searchInput = q(searchInputSelector);

//   let originalDistanceToTop = 0;

//   function startPlaceholderRotate() {
//     const placeholder = q(placeholderSelector);

//     const { hwSearchPlaceholders } = searchContainer.dataset;
//     const texts = JSON.parse(hwSearchPlaceholders);

//     placeholder.innerText = texts[0];

//     let interval = 1;

//     setInterval(() => {
//       placeholder.innerText = texts[interval];

//       if (interval < (texts.length - 1)) {
//         interval += 1;
//       } else {
//         interval = 0;
//       }
//     }, 3000);
//   }


//   function addClassWhenScrolled() {
//     const distanceToTop = searchContainer.getBoundingClientRect().top;
//     const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

//     if (searchContainer.classList.contains(stickyClass) && scrollTop > originalDistanceToTop) {
//       return;
//     }

//     if (distanceToTop < 0) {
//       searchContainer.classList.add(stickyClass);
//       return;
//     }

//     if (scrollTop < originalDistanceToTop) {
//       searchContainer.classList.remove(stickyClass);
//     }
//   }


//   /**
//    * @function toggleActive
//    * @desc Toggles the dropdown options list for a dropdown
//    */
//   function toggleActive() {
//     // Display/hide dropdown
//     if (searchContainer.classList.contains(activeClass)) {
//       searchContainer.classList.remove(activeClass);
//     } else {
//       searchContainer.classList.add(activeClass);
//     }

//     // Check if input is empty (and whether to allow placeholder texts to reappear)
//     if (searchInput.value !== '') {
//       searchContainer.classList.add(dirtyClass);
//     } else {
//       searchContainer.classList.remove(dirtyClass);
//     }
//   }

//   /**
//    * @function bindEvents
//    * @desc Adds listener to dropdown
//    */
//   function bindEvents() {
//     searchInput.addEventListener('focus', toggleActive);
//     searchInput.addEventListener('blur', toggleActive);
//   }


//   function init() {
//     if (!searchContainer) {
//       return;
//     }

//     // Skip if already initialised
//     if (searchContainer.getAttribute('data-hw-search-initialised') === 'true') { return; }

//     // Mark as initialised
//     searchContainer.setAttribute('data-hw-search-initialised', true);

//     originalDistanceToTop = Math.round(searchContainer.getBoundingClientRect().top);

//     // Set up event listeners
//     bindEvents(searchContainer);
//     window.addEventListener('scroll', throttle(addClassWhenScrolled, 100));

//     if (originalDistanceToTop < 0) {
//       originalDistanceToTop = 20;
//     }

//     startPlaceholderRotate();
//   }

//   init();
// };

// HWSearch();
