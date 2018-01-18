/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import getPosition from '../../utilities/js/position';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWDropdown
 * @version 0.0.1
 * @desc Creates custom dropdowns for all found elements
 * @param {object} settings
 */
const HWDropdown = ({
    dropdownSelector = '[data-hw-dropdown]',
    activeClass = 'hw-dropdown--expanded',
    tooBigClass = 'hw-dropdown--is-too-big',
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(dropdownSelector), // All dropdown DOM nodes
  };


  /**
   * @function selectOption
   * @desc Selects an option in the list
   * @param {HTMLElement} dropdown
   * @param {string} option
   */
  function selectOption(dropdown, selectedOption) {
    const placeHolderEl = q('.hw-dropdown__placeholder', dropdown);
    const isSearchable = dropdown.getAttribute('data-hw-dropdown-searchable');

    // Update native select element with selected value
    dropdown.nextElementSibling.value = selectedOption;
    // dropdown.fireEvent('onchange');
    if ('createEvent' in document) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('change', false, true);
      dropdown.dispatchEvent(evt);
    } else {
      dropdown.fireEvent('onchange');
    }

    // Loop through options and select passed option
    const allOptions = qa('.hw-dropdown__option', dropdown);
    return allOptions.forEach((option) => {
      const { hwDropdownValue } = option.dataset;
      if (hwDropdownValue === selectedOption) {
        option.dataset.hwDropdownOptionSelected = true;
        // Set selected value in either input-placeholder or div-placeholder
        isSearchable === 'true' ?
          placeHolderEl.placeholder = option.innerText :
          placeHolderEl.innerText = option.innerText;
      } else {
        option.dataset.hwDropdownOptionSelected = false;
      }
    });
  }


  /**
   * @function handleFitInViewport
   * @desc Triggered when dropdown is too large for viewport
   * -> Or if the dropdown will expand below the screen end
   * @param {node} dropdown
   */
  function handleFitInViewport(dropdown) {
    const dropDownInner = q('.hw-dropdown__inner', dropdown);
    const dropDownOptions = q('.hw-dropdown__options', dropdown);
    const viewportHeight = window.innerHeight;
    const position = getPosition(dropdown);
    const dropDownHeight = dropDownOptions.offsetHeight + 50;

    // Check if dropdown is too large for viewport
    if (dropDownHeight > viewportHeight) {
      dropdown.classList.add(tooBigClass);
      dropDownInner.style.transform = `translateY(-${position.offsetFromTop - 30}px)`;
      return;
    }

    // Check if dropdown will poke below viewport
    const dropDownBottom = position.offsetFromTop + dropDownHeight;
    if (dropDownBottom > viewportHeight) {
      const overflowAmount = dropDownBottom - viewportHeight;
      dropDownInner.style.transform = `translateY(-${overflowAmount + 30}px)`;
    }
  }


  /**
   * @function resetPosition
   * @desc Remove any inline styles from dropdown
   * @param {node} dropdown
   */
  function resetPosition(dropdown) {
    const dropDownContents = q('.hw-dropdown__inner', dropdown);
    dropdown.classList.remove(tooBigClass);
    dropDownContents.style.transform = '';
    dropDownContents.scrollTop = 0;
  }


  /**
   * @function toggleDropdown
   * @desc Toggles the dropdown options list for a dropdown
   * @param {Event} e
   */
  function toggleDropdown(e, isSearchable) {
    e.preventDefault();
    // Determine if we've clicked on an option
    const target = e.target;
    const dropdown = e.currentTarget;
    const { hwDropdownValue } = target.dataset;

    if (hwDropdownValue) {
      selectOption(e.currentTarget, hwDropdownValue);
    }

    // Find dropdown-list within dropdown container
    const list = q('.hw-dropdown__options', dropdown);

    // Display/hide dropdown
    if (list.getAttribute('aria-hidden') === 'false') {
      list.setAttribute('aria-hidden', true);
      dropdown.classList.remove(activeClass);
      resetPosition(dropdown);
    } else {
      list.setAttribute('aria-hidden', false);
      dropdown.classList.add(activeClass);
      handleFitInViewport(dropdown);
    }
  }

  /**
   * @function clickOutside
   * @desc Closes the dropdown if user clicks outside the dropdown
   * @param {Event} e
   */
  function clickOutside(e) {
    e.preventDefault();

    const dropDownSelectors = qa('.hw-dropdown');

    dropDownSelectors.forEach((dropdown) => {
      if (e.target === dropdown || dropdown.contains(e.target)) {
        return;
      } else {
        // Find dropdown-list within dropdown container
        const list = q('.hw-dropdown__options', dropdown);

        // Display/hide dropdown
        if (list.getAttribute('aria-hidden') === 'false') {
          list.setAttribute('aria-hidden', true);
          dropdown.classList.remove(activeClass);
          resetPosition(dropdown);
        }
      }
    });
  }


  /**
   * @function navigateOptions
   * @desc Moves up/down the list using the keyboard
   * @param {string} direction
   */
  function navigateOptions(e, direction) {
    // Find dropdown-list within dropdown container
    let nextEl;
    const dropdown = e.currentTarget;
    const allOptions = qa('.hw-dropdown__option', dropdown);

    // Find previously selected value
    const selected = qa('[data-hw-dropdown-option-selected="true"]', dropdown);

    // If value already exists, select next/previous element
    if (selected.length > 0) {

      const { hwDropdownValue } = selected[0].dataset;
      const currentIndex = allOptions.findIndex(i => i.getAttribute('data-hw-dropdown-value') === hwDropdownValue);
      if (direction === 'next') {
        nextEl = allOptions[currentIndex + 1] || allOptions[0];
      } else {
        nextEl = allOptions[currentIndex - 1] || allOptions[allOptions.length - 1];
      }
    } else {
      // If no value selected, pick the first/last depending on direction
      nextEl = allOptions[0];
      if (direction === 'prev') {
        nextEl = allOptions[allOptions.length - 1];
      }
    }

    selectOption(dropdown, nextEl.getAttribute('data-hw-dropdown-value'));
  }


  /**
   * @function bindClickEvent
   * @desc Adds listener to list button
   * @param {node} dropdown
   */
  function handleKeyboardEvents(e) {
    const key = e.keyCode || e.which;

    switch (key) {
      case KEYS.UP:
        e.preventDefault();
        navigateOptions(e, 'prev');
        break;
      case KEYS.DOWN:
        e.preventDefault();
        navigateOptions(e, 'next');
        break;
      case KEYS.SPACE:
      case KEYS.ESCAPE:
      case KEYS.ENTER:
        e.preventDefault();
        toggleDropdown(e);
        break;
      default:
        break;
    }
  }

  /**
   * @function searchInDropdown
   * @desc Adds listener to list button
   * @param {node} dropdown
   */
  function searchInDropdown(e, dropdown) {
    const searchText = e.target.value.toLowerCase();
    const dropDownOptions = qa('.hw-dropdown__option', dropdown);

    dropDownOptions.forEach((option) => {
      const optionText = option.innerHTML.toLowerCase();
      if (!optionText.includes(searchText)) {
        option.style.display = 'none';
      } else {
        option.style.display = 'block';
      }
    });
  }


  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   * @param {node} dropdown
   */
  function bindEvents(dropdown, isSearchable) {
    window.addEventListener('click', clickOutside)
    dropdown.addEventListener('click', toggleDropdown);
    dropdown.addEventListener('keydown', handleKeyboardEvents);

    if (isSearchable) {
      const searchInput = q('input', dropdown);
      searchInput.addEventListener('input', e => searchInDropdown(e, dropdown));
    }
  }


  /**
   * @function renderMarkup
   * @desc Build custom markup from native select element
   * @param {node} dropdown
   */
  function renderMarkup(dropdown, dropdownName, isSearchable, isSmall) {

    const options = [...dropdown.children].reduce((string, option) => {
      return `${string}<li class="hw-dropdown__option" data-hw-dropdown-value="${option.value}">${option.text}</li>`;
    }, '');

    const markup = `
      <div class="hw-dropdown ${isSmall ? 'hw-dropdown--small' : null} ${isSearchable ? 'hw-dropdown--searchable' : null}" data-hw-dropdown-custom="${dropdownName}">
        <div class="hw-dropdown__inner">
          ${isSearchable ? '<input class="hw-dropdown__placeholder"></input>' : '<div class="hw-dropdown__placeholder"></div>'}
          <div class="hw-dropdown__arrow"></div>
          <ul class="hw-dropdown__options">
            ${options}
          </ul>
        </div>
      </div>
    `;

    dropdown.insertAdjacentHTML('beforebegin', markup);
  }


  /**
   * @function init
   * @desc Initialises the dropdown
   */
  function init() {
    // Check if any dropdowns exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all dropdowns and initialise each
    SETTINGS.elements.forEach((dropdown) => {
      // Skip if already initialised
      if (dropdown.getAttribute('data-hw-dropdown-initialised') === 'true') { return false; }

      // Add aria roles and attributes
      const dropdownName = dropdown.getAttribute('data-hw-dropdown');

      const isSearchable = dropdown.getAttribute('data-hw-dropdown-searchable') !== null;
      const isSmall = dropdown.getAttribute('data-hw-dropdown-small') !== null;

      // Render custom markup
      renderMarkup(dropdown, dropdownName, isSearchable, isSmall);
      const customDropdown = q(`[data-hw-dropdown-custom="${dropdownName}"]`);

      dropdown.setAttribute('data-hw-dropdown-initialised', true);
      customDropdown.setAttribute('aria-controls', dropdownName);
      customDropdown.setAttribute('aria-role', 'listbox');
      customDropdown.setAttribute('tabindex', '0');
      if (isSearchable) {
        customDropdown.setAttribute('data-hw-dropdown-searchable', true);
      }

      // Hide native select element
      dropdown.style.display = 'none';

      // Find initially selected option, otherwise select first element
      const defaultOption = dropdown.getAttribute('data-hw-dropdown-default-selected') || dropdown.children[0].value;
      selectOption(customDropdown, defaultOption);

      // Set up event listeners for opening dropdown
      bindEvents(customDropdown, isSearchable);
    });
  }


  // Initialise HWDropdown component
  init();
};

HWDropdown();
