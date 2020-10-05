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
export const HWDropdown = ({
    dropdownSelector = '[data-hw-dropdown]',
    activeClass = 'hw-dropdown--expanded',
    transitionClass = 'hw-dropdown--transition',
    tooBigClass = 'hw-dropdown--is-too-big'
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
  function selectOption(customDropdown, selectedOption, fireEvent = true) {
    const placeHolderEl = q('.hw-dropdown__placeholder', customDropdown);
    const isSearchable = customDropdown.getAttribute('data-hw-dropdown-searchable');

    // Update native select element with selected value
    customDropdown.nextElementSibling.value = selectedOption;

    const name = customDropdown.dataset.hwDropdownCustom;
    if(fireEvent) {
      const dropdown = q('[data-hw-dropdown="' + name + '"]');
      if (dropdown) {
        if ('createEvent' in document) {
          const evt = document.createEvent('HTMLEvents');
          evt.initEvent('change', false, true);
          dropdown.dispatchEvent(evt);
        } else {
          dropdown.fireEvent('onchange');
        }
      }
    }
    // Find all list options
    const allOptions = qa('.hw-dropdown__option', customDropdown);
    // Loop through options and select passed option
    return allOptions.forEach((option) => {
      const { hwDropdownValue, hwDropdownPlaceholder } = option.dataset;
      const customPlaceholder = (hwDropdownPlaceholder === 'null') ? '' : hwDropdownPlaceholder;

      if (hwDropdownValue === selectedOption) {
        option.dataset.hwDropdownOptionSelected = true;
        // Set selected value in either input-placeholder or div-placeholder
        if (isSearchable === 'true') {
          placeHolderEl.placeholder = customPlaceholder || option.innerText.trim();
          placeHolderEl.value = option.innerText;
        } else {
          placeHolderEl.innerText = customPlaceholder || option.innerText.trim();
        }
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
  function handleFitInViewport(customDropdown) {
    const dropDownInner = q('.hw-dropdown__inner', customDropdown);
    const dropDownOptions = q('.hw-dropdown__options', customDropdown);
    const selectedOption = q('[data-hw-dropdown-option-selected="true"]', customDropdown);
    const isSearchable = customDropdown.getAttribute('data-hw-dropdown-searchable');
    const viewportHeight = window.innerHeight;
    const position = getPosition(customDropdown);
    const selPosition = selectedOption ? getPosition(selectedOption) : "";
    const dropDownHeight = dropDownOptions.offsetHeight + 50;

    // Check if dropdown is too large for viewport
    if (dropDownHeight > viewportHeight) {
      customDropdown.classList.add(tooBigClass);
      dropDownInner.style.transform = `translateY(-${position.offsetFromTop - 30}px)`;
      dropDownInner.scrollTop=selectedOption.offsetTop;
      return;
    }

    // Check if dropdown will poke below viewport
    const dropDownBottom = position.offsetFromTop + dropDownHeight;
    if (dropDownBottom > viewportHeight) {
      const overflowAmount = dropDownBottom - viewportHeight;
      dropDownInner.style.transform = `translateY(-${overflowAmount + 30}px)`;
      return;
    }
    if(selPosition && !isSearchable){
      let overflowToSelected = selPosition.offsetFromTop - position.offsetFromTop;
      overflowToSelected = overflowToSelected == 6 ? 0 : overflowToSelected
      if(overflowToSelected < position.offsetFromTop)
        dropDownInner.style.transform = `translateY(-${overflowToSelected}px)`;
    }
  }


  /**
   * @function resetPosition
   * @desc Remove any inline styles from dropdown
   * @param {node} dropdown
   */
  function resetPosition(customDropdown) {
    const dropDownContents = q('.hw-dropdown__inner', customDropdown);
    customDropdown.classList.remove(tooBigClass);
    dropDownContents.style.transform = '';
    dropDownContents.scrollTop = 0;
    setTimeout(function() { customDropdown.classList.remove(transitionClass) }, 300);
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
    const customDropdown = e.currentTarget;
    const { hwDropdownValue } = target.dataset;
    if(target.dataset.hwDropdownOptionDisabled){
      return;
    }
    if (hwDropdownValue) {
      selectOption(e.currentTarget, hwDropdownValue);
    }

    // Find dropdown-list within dropdown container
    const list = q('.hw-dropdown__options', customDropdown);

    // Display/hide dropdown
    if (list && list.getAttribute('aria-hidden') === 'false') {
      list.setAttribute('aria-hidden', true);
      customDropdown.classList.remove(activeClass);
      resetPosition(customDropdown);
    } else {
      list.setAttribute('aria-hidden', false);
      customDropdown.classList.add(activeClass,transitionClass);
      handleFitInViewport(customDropdown);
    }
  }

  /**
   * @function clickOutside
   * @desc Closes the dropdown if user clicks outside the dropdown
   * @param {Event} e
   */
  function clickOutside(e) {

    const dropDownSelectors = qa('.hw-dropdown');

    dropDownSelectors.forEach((customDropdown) => {
      if (e.target === customDropdown || customDropdown.contains(e.target)) {
        return;
      } else {
        // Find dropdown-list within dropdown container
        const list = q('.hw-dropdown__options', customDropdown);

        // Display/hide dropdown
        if (list && list.getAttribute('aria-hidden') === 'false') {
          list.setAttribute('aria-hidden', true);
          customDropdown.classList.remove(activeClass);
          resetPosition(customDropdown);
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

    // Find all options in dropdown and put in an array
    const options = [...dropdown.querySelectorAll('.hw-dropdown__option')];
    // Return only the visible options (attributes set by search)
    const allOptions = options.filter((option) => {
      const isHidden = option.getAttribute('data-hw-dropdown-option-hidden');
      // Convert attribute string to boolean
      const isHiddenBoolean = (isHidden === 'true');
      if(option.getAttribute('data-hw-dropdown-option-disabled')){
        return false;
      }
      return !isHiddenBoolean;
    });

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
  function searchInDropdown(e, customDropdown) {
    // Always open the dropdown when searcing
    const list = q('.hw-dropdown__options', customDropdown);
    list.setAttribute('aria-hidden', false);
    customDropdown.classList.add(activeClass, transitionClass);
    handleFitInViewport(customDropdown);

    const searchText = e.target.value.toLowerCase();
    const dropDownOptions = qa('.hw-dropdown__option', customDropdown);

    dropDownOptions.forEach((option) => {
      const optionText = option.innerHTML.toLowerCase();
      if (!optionText.includes(searchText)) {
        option.style.display = 'none';
        option.setAttribute('data-hw-dropdown-option-hidden', true);
      } else {
        option.style.display = 'block';
        option.setAttribute('data-hw-dropdown-option-hidden', false);
      }
    });
  }

  /**
   * @function changeValue - update custom dropdown if the value has changed for the original dropdown.
   * @desc event handler for dropdown change event
   * @param e
   */
  function changeValue(e) {
    const customDropdown = q('[data-hw-dropdown-custom="' + e.target.dataset.hwDropdown + '"]');
    selectOption(customDropdown, e.target.value, false);

  }


  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   * @param {node} dropdown
   */
  function bindEvents(customDropdown, isSearchable, dropdown) {
    window.addEventListener('click', clickOutside)
    customDropdown.addEventListener('click', toggleDropdown);
    customDropdown.addEventListener('keydown', handleKeyboardEvents);
    dropdown.addEventListener('change', changeValue);

    if (isSearchable) {
      const searchInput = q('input', customDropdown);
      searchInput.addEventListener('input', e => searchInDropdown(e, customDropdown));
    }
  }


  /**
   * @function renderMarkup
   * @desc Build custom markup from native select element
   * @param {node} dropdown
   */
  function renderMarkup(dropdown, dropdownName, isSearchable, isSmall) {

    const options = [...dropdown.children].reduce((string, option) => {
      const placeholder = option.getAttribute('data-hw-dropdown-placeholder');
      const disabled = option.disabled ? 'data-hw-dropdown-option-disabled="true"' : '';
      return `${string}
      <li class="hw-dropdown__option ${option.disabled ? 'hw-dropdown__option--disabled' : ''}" ${disabled} data-hw-dropdown-placeholder="${placeholder}" data-hw-dropdown-value="${option.value}">
      ${option.text}
      </li>`;
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
      if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
        dropdown.classList.add('hw-dropdown--native');
        return false;
      }
      // Don't initialize native dropdowns
      if(dropdown.classList.contains('hw-dropdown--native')){
        return false;
      }
      const dropdownName = dropdown.getAttribute('data-hw-dropdown');
      if (dropdown.getAttribute('data-hw-dropdown-dirty') === 'true'){
        // Remove the previously rendered markup
        const outdatedDropdown = q(`[data-hw-dropdown-custom=${dropdownName}]`);
        if(outdatedDropdown) {
          outdatedDropdown.remove();
        }
        dropdown.setAttribute('data-hw-dropdown-initialised', false);
        dropdown.setAttribute('data-hw-dropdown-dirty', false);
      }

      // Skip if already initialised
      if (dropdown.getAttribute('data-hw-dropdown-initialised') === 'true') { return false; }

      // Add aria roles and attributes

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
      const defaultOption = dropdown.getAttribute('data-hw-dropdown-default-selected') || dropdown.options[dropdown.selectedIndex].value || dropdown.children[0].value;
      // Only init select if dropdown is not searchable
      // The third option is to prevent firing a change event on the dropdown while initializing
      if (!isSearchable) { selectOption(customDropdown, defaultOption, false); }

      // Set up event listeners for opening dropdown
      bindEvents(customDropdown, isSearchable, dropdown);
    });
  }


  // Initialise HWDropdown component
  init();
};

HWDropdown();
