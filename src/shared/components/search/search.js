import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWSearch
 * @version 0.0.1
 * @desc Controls search field
 * @param {object} settings
 */

const HWSearch = ({
  selector = '[data-hw-search]',
  activeClass = 'hw-search--active',
  dirtyClass = 'hw-search--dirty',
  staticClass = 'hw-search--static',
  searchInputSelector = '[data-hw-search-input]',
  placeholderSelector = '[data-hw-search-placeholder]',
} = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(selector), // All dropdown DOM nodes
  };

  // const searchContainer = q(searchContainerSelector);
  // const searchInput = q(searchInputSelector);

  /**
   * @function startPlaceholderRotate
   * @desc Starts the placeholder rotation for given search field
   * @param {HTMLElement} search
   */
  function startPlaceholderRotate(search) {
    const placeholder = q(placeholderSelector, search);
    const { hwSearchPlaceholders } = search.dataset;
    if(!hwSearchPlaceholders){
      return;
    }
    const texts = JSON.parse(hwSearchPlaceholders);

    placeholder.innerText = texts[0];

    // Bail out if only one text
    if (texts.length < 2) {
      search.classList.add(staticClass);
      return;
    }

    let interval = 1;

    setInterval(() => {
      placeholder.innerText = texts[interval];

      if (interval < (texts.length - 1)) {
        interval += 1;
      } else {
        interval = 0;
      }
    }, 3000);
  }

  /**
   * @function toggleActive
   * @desc Toggles the dropdown options list for a dropdown
   */
  function toggleActive(e) {
    e.preventDefault();
    // Determine if we've clicked on an option
    const input = e.currentTarget;
    const container = findParent({ selector: '[data-hw-search]', elem: input });

    if (container.classList.contains(activeClass)) {
      container.classList.remove(activeClass);
    } else {
      container.classList.add(activeClass);
    }

    // Check if input is empty (and whether to allow placeholder texts to reappear)
    if (input.value !== '') {
      container.classList.add(dirtyClass);
    } else {
      container.classList.remove(dirtyClass);
    }
  }

  function onArrowDownOrUp(e) {
    if (e.keyCode === KEYS.DOWN) {
      const hwSearch = findParent({ selector, elem: e.target });
      if(e.target.tagName == 'INPUT'){ // We are currently in the search input field
        const suggestionLinks = qa('[data-hw-search-suggestion] a', hwSearch); //Find the current search field's suggestionLinks
        suggestionLinks[0].focus();
      } else if ( e.target.tagName == 'A'){
        const next = findParent({ selector: '.hw-search__suggestion', elem: e.target }).nextElementSibling;
        if(next){
          q('.hw-search__suggestion-link', next).focus();
        } else {
          q(searchInputSelector, hwSearch).focus();
        }
      }
      e.preventDefault();
    }

    if(e.keyCode === KEYS.UP) {
      const hwSearch = findParent({ selector, elem: e.target });
      if(e.target.tagName == 'INPUT'){
        const suggestionLinks = qa('[data-hw-search-suggestion] a', hwSearch); //Find the current search field's suggestionLinks
        suggestionLinks[suggestionLinks.length - 1].focus();
      } else if ( e.target.tagName == 'A'){
        const previous = findParent({ selector: '.hw-search__suggestion', elem: e.target }).previousElementSibling;
        if(previous){
          q('.hw-search__suggestion-link', previous).focus();
        } else {
          q(searchInputSelector, hwSearch).focus();
        }
      }
      e.preventDefault();
    }
  }

  function onReset(e, search){
    let input = q(searchInputSelector, search);
    input.value = ''; // triggers an input event in IE 11, but not in Chrome
    //Create an input event
    var event = document.createEvent('Event');
    event.initEvent('input', true, true);
    input.dispatchEvent(event);
    input.focus();
  }

  function onInput(e, search) {
    if(e.target.value === ''){
      search.classList.remove('hw-search--hasvalue');
    } else {
      search.classList.add('hw-search--hasvalue');
    }
  }

  /**
   * @function bindEvents
   * @desc Adds listener to dropdown
   */
  function bindEvents(search) {
    const input = q(searchInputSelector, search);
    input.addEventListener('focus', toggleActive);
    input.addEventListener('blur', toggleActive);
    const suggestions = q('.hw-search__suggestions', search);
    if(suggestions) {
      search.addEventListener('keydown', e => onArrowDownOrUp(e));
    }
    input.addEventListener('input', e => onInput(e, search));
    const resetButton = q('[data-hw-search-reset]', search);
    if(resetButton){
      resetButton.addEventListener('click', e => onReset(e, search));
    }
    // Check if input is empty ( hasValue or not)
    onInput({target:input}, search);
    // Check if input is empty (and whether to allow placeholder texts to reappear)
    if (input.value !== '') {
      search.classList.add(dirtyClass);
    } else {
      search.classList.remove(dirtyClass);
    }
  }

  function init() {
    // Check if any search fields exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all search fields and initialise each
    SETTINGS.elements.forEach((search) => {

      // Skip if already initialised
      if (search.getAttribute('data-hw-search-initialised') === 'true') { return; }

      // Mark as initialised
      search.setAttribute('data-hw-search-initialised', true);

      // Set up event listeners
      bindEvents(search);

      // Start placeholder rotation
      startPlaceholderRotate(search);
    });
  }

  init();
};

HWSearch();
