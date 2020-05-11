/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';
import KEYS from '../../utilities/js/keys';

/**
 * @function HWCurtain
 * @version 0.0.1
 * @desc Creates interactive curtain from .hw-curtain
 * @param {object} settings
 */
export const HWCurtain = () => {

  /**
   * @function toggleCurtain
   * @desc Toggles the curtain
   * @param {Event} e
   */
  function toggleCurtain(e) {
    const curtain = findParent({selector: '.hw-curtain', elem: e.target});
    const trigger = q('.hw-curtain__trigger', curtain);
    const content = q('.hw-curtain__content', curtain);

    if(curtain.classList.contains('hw-curtain--closed')){
      // Open curtain
      curtain.classList.remove('hw-curtain--closed');
      trigger.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
      curtain.style.height = trigger.offsetHeight + content.scrollHeight + 'px';
    } else {
      // Close curtain
      curtain.classList.add('hw-curtain--closed');
      trigger.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
      curtain.style.height = trigger.offsetHeight + 'px';
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
        toggleCurtain(e);
        break;
      default:
        break;
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to curtain
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleCurtain);
    trigger.addEventListener('keydown', handleKeyboardEvents);
  }


  /**
   * @function init
   * @desc Initialises the curtain
   */
  function init() {
    // Check if any curtains exist, return if not.
    const elements = qa('.hw-curtain');
    if (elements.length < 1) {
      return;
    }

    // Loop through all curtains and initialise each
    elements.forEach((curtain) => {
      // Skip if already initialised
      if (curtain.getAttribute('data-hw-curtain-initialised') === 'true') { return false; }

      // Mark as initialised
      curtain.setAttribute('data-hw-curtain-initialised', true);

      const trigger = q('.hw-curtain__trigger', curtain);
      const content = q('.hw-curtain__content', curtain);

      curtain.style.height = trigger.offsetHeight + 'px';
      curtain.classList.add('hw-curtain--closed');
      trigger.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');

      bindEvents(curtain);
      return null;
    });
  }

  init();
};

HWCurtain();
