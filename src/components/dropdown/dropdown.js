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
    const placeholder = dropdown.getAttribute('data-hw-dropdown-placeholder');
    const placeHolderEl = q('.hw-dropdown__placeholder', dropdown);

    // Check if option is false, if so select default placeholder
    if (selectedOption === false) {
      placeHolderEl.innerText = placeholder;
      return false;
    }

    // Otherwise, select passed options
    const allOptions = qa('.hw-dropdown__option', dropdown);
    return allOptions.forEach((option) => {
      if (option.getAttribute('data-hw-dropdown-value') === selectedOption) {
        option.setAttribute('data-hw-dropdown-option-selected', true);
        placeHolderEl.innerText = option.innerText;
      } else {
        option.setAttribute('data-hw-dropdown-option-selected', false);
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
  function toggleDropdown(e) {
    e.preventDefault();
    // Determine if we've clicked on an option
    const target = e.target;
    const dropdown = e.currentTarget;
    const targetValue = target.getAttribute('data-hw-dropdown-value');
    if (targetValue) {
      selectOption(e.currentTarget, targetValue);
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
      const selectedValue = selected[0].getAttribute('data-hw-dropdown-value');
      const currentIndex = allOptions.findIndex(i => i.getAttribute('data-hw-dropdown-value') === selectedValue);
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
   * @function bindEvents
   * @desc Adds listener to dropdown
   * @param {node} dropdown
   */
  function bindEvents(dropdown) {
    dropdown.addEventListener('click', toggleDropdown);
    dropdown.addEventListener('keydown', handleKeyboardEvents);
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
      const targetList = dropdown.getAttribute('data-hw-dropdown');

      dropdown.setAttribute('data-hw-dropdown-initialised', true);
      dropdown.setAttribute('aria-controls', targetList);
      dropdown.setAttribute('aria-role', 'listbox');
      dropdown.setAttribute('tabindex', '0');


      // Find initially selected option, otherwise display placeholder
      const defaultOption = dropdown.getAttribute('data-hw-dropdown-default-selected') || false;
      selectOption(dropdown, defaultOption);

      // Set up event listeners for opening dropdown
      bindEvents(dropdown);
    });
  }


  // Initialise HWDropdown component
  init();
};

HWDropdown();
