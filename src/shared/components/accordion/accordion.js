/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWAccordion
 * @version 0.0.1
 * @desc Creates interactive accordion from ul
 * @param {object} settings
 */
const HWAccordion = ({
  accordionSelector = '[data-hw-accordion]',
  activeItemClass = 'hw-accordion__item--expanded',
} = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(accordionSelector), // All accordion DOM nodes
  };


  /**
   * @function collapseAllItems
   * @desc Collapses all open item for given accordion
   * @param {HTMLelement} accordion
   */
  function collapseAllItems(accordion) {
    // Find all accordion items
    const items = qa('.hw-accordion__item', accordion);

    // Collapse all items
    items.forEach((item) => {
      const trigger = q('.hw-accordion__trigger', item);
      if (!trigger) return;
      const contents = q('.hw-accordion__contents', item);
      const triggerHeight = trigger.getAttribute('data-hw-accordion-trigger-height');

      trigger.setAttribute('aria-expanded', false);
      contents.setAttribute('aria-hidden', true);
      item.style.height = `${triggerHeight}px`;
      item.classList.remove(activeItemClass);
    });
  }


  /**
   * @function toggleAccordion
   * @desc Toggles the accordion options list for a accordion
   * @param {Event} e
   */
  function toggleAccordion(e) {
    // Determine if we've clicked on an option
    const elem = findParent({
      selector: '.hw-accordion__trigger',
      elem: e.target
    });

    // Find contents and parent item
    const contents = elem.nextElementSibling;
    const accordion = findParent({
      selector: '[data-hw-accordion]',
      elem
    });
    const item = findParent({
      selector: '.hw-accordion__item',
      elem
    });

    // Find heights
    const triggerHeight = elem.getAttribute('data-hw-accordion-trigger-height');
    const totalHeight = item.getAttribute('data-hw-accordion-item-height');

    // Display/hide accordion
    if (contents.getAttribute('aria-hidden') === 'false') {
      contents.setAttribute('aria-hidden', true);
      item.style.height = `${triggerHeight}px`;
      elem.setAttribute('aria-expanded', false);
      item.classList.remove(activeItemClass);
    } else {
      // Check for multiple expanded allowed option
      const allowMultiple = accordion.getAttribute('data-hw-accordion-allow-multiple');
      if (allowMultiple === null) {
        // Collapse all other items
        collapseAllItems(accordion);
      }

      contents.setAttribute('aria-hidden', false);
      item.style.height = `${totalHeight}px`;
      elem.setAttribute('aria-expanded', true);
      item.classList.add(activeItemClass);
    }
  }


  /**
   * @function bindClickEvent
   * @desc Adds listener to list button
   * @param {node} accordion
   */
  function handleKeyboardEvents(e) {
    const key = e.keyCode || e.which;

    switch (key) {
      case KEYS.SPACE:
      case KEYS.ESCAPE:
      case KEYS.ENTER:
        e.preventDefault();
        toggleAccordion(e);
        break;
      default:
        break;
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to accordion
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleAccordion);
    trigger.addEventListener('keydown', handleKeyboardEvents);
  }


  /**
   * @function init
   * @desc Initialises the accordion
   */
  function init() {
    // Check if any accordions exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all accordions and initialise each
    SETTINGS.elements.forEach((accordion) => {
      // Skip if already initialised
      if (accordion.getAttribute('data-hw-accordion-initialised') === 'true') {
        return false;
      }

      // Mark as initialised
      accordion.setAttribute('data-hw-accordion-initialised', true);

      // Find accordion name
      const accordionName = accordion.getAttribute('data-hw-accordion');

      // Find all accordion items
      const items = qa('.hw-accordion__item', accordion);

      // Attach listeners, aria-attributes and heights to all items
      function configureAcccordionItems(items, true);

      return null;
    });
  }
  /**
   * @desc Function to set accordion items' and content heights
   * @param {array} accordionItems 
   * @param {boolean} isInit 
   */
  function configureAcccordionItems(accordionItems, isInit) {
    // Attach listeners, aria-attributes and heights to all items
    accordionItems.forEach((item, index) => {
      const trigger = q('.hw-accordion__trigger', item);
      if (!trigger) return;
      const contents = q('.hw-accordion__contents', item);

      if (isInit) {
        // Set name and index attributes
        trigger.setAttribute('aria-controls', `${accordionName}-${index}`);
        contents.setAttribute('id', `${accordionName}-${index}`);
      }

      // Get heights
      const triggerHeight = trigger.offsetHeight;
      const contentsHeight = contents.offsetHeight;
      const totalHeight = parseInt(contentsHeight, 10) + parseInt(triggerHeight, 10);

      // Set height attributes
      trigger.setAttribute('data-hw-accordion-trigger-height', triggerHeight);
      contents.setAttribute('data-hw-accordion-contents-height', contentsHeight);
      item.setAttribute('data-hw-accordion-item-height', totalHeight);

      if (isInit) {
        // Check for default expanded option
        const openByDefault = item.getAttribute('data-hw-accordion-default-expanded');

        if (openByDefault !== null) {
          item.classList.add(activeItemClass);
          trigger.setAttribute('aria-expanded', 'true');
          contents.setAttribute('aria-hidden', 'false');
          item.style.height = `${totalHeight}px`;
        } else {
          trigger.setAttribute('aria-expanded', 'false');
          contents.setAttribute('aria-hidden', 'true');
          item.style.height = `${triggerHeight}px`;
          // Set up event listeners for opening accordion
          bindEvents(trigger);
        }
      } else {
        item.style.height = contents.getAttribute('aria-hidden') === 'true' ? `${triggerHeight}px` : `${totalHeight}px`;
      }
    });
  }

  /**
   * @param {function} func 
   * @param {time} wait 
   * @param {boolean} immediate 
   * @desc This function is optimise the number of calls made a function
   */
  function debounce(func, wait, immediate) {
    var timeout;
    return () => {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  /**
   * @desc Handles resize of accordion in the page
   */
  const resizeAccordion = debounce(function (e) {
    // Module settings object
    const SETTINGS = {
      elements: qa(accordionSelector), // All accordion DOM nodes
    };
    // Check if any accordions exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }
    // Loop through all accordions and initialise each
    SETTINGS.elements.forEach((accordion) => {
      // Find all accordion items
      const items = qa('.hw-accordion__item', accordion);

      // Attach listeners, aria-attributes and heights to all items
      configureAcccordionItems(items);
      return null;
    });
  }, 500, false);
  //Resize event to get the new sizes
  window.addEventListener("resize", resizeAccordion);

  // Initialise HWAccordion component
  init();

};

HWAccordion();