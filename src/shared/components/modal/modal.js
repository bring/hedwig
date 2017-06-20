import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';

/**
 * @function HWModal
 * @version 0.0.1
 * @desc Describe your module here
 * @param {object} settings
 */
const HWModal = ({
    modalSelector = '[data-hw-modal]',
    modalTrigger = '[data-hw-modal-trigger]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    modals: qa(modalSelector), // All modal DOM nodes
    triggers: qa(modalTrigger),
  };


  /**
   * @function moduleMethod
   * @desc Describe what the method does here
   * @param {Event} e
   */
  function toggleModal(e) {
    // Grab clicked element and modal associated with it
    const elem = e.currentTarget;
    const modalId = elem.getAttribute('data-hw-modal-trigger');
    const body = document.getElementsByTagName('BODY')[0];
    const modal = q(`[data-hw-modal=${modalId}`);
    const modalHidden = modal.getAttribute('aria-hidden');
    // Toggle modal
    if (modalHidden === 'true') {
      modal.setAttribute('aria-hidden', false);
      modal.classList.add('hw-modal--open');
      body.style.overflow = 'hidden';
    } else {
      modal.setAttribute('aria-hidden', true);
      modal.classList.remove('hw-modal--open');
      body.style.overflow = 'visible';
    }
  }


  /**
   * @function bindEvents
   * @desc Adds listener to module
   * @param {node} trigger
   */

  function bindEvents(trigger) {
    trigger.addEventListener('click', toggleModal);
  }


  /**
   * @function init
   * @desc Initialises the module
   */
  function init() {
    // Check if any modules exist, return if not.
    if (SETTINGS.modals.length < 1) {
      return;
    }

    // Loop through all modules and initialise each
    SETTINGS.modals.forEach((modal) => {
      // Skip if already initialised
      if (modal.getAttribute('data-hw-modal-initialised') === 'true') { return false; }

      // Mark as initialised
      modal.setAttribute('data-hw-modal-initialised', true);
      modal.setAttribute('aria-hidden', true);

    });

    // Example of binding event to button
    SETTINGS.triggers.forEach((trigger) => {
      // Skip if already initialised
      if (trigger.getAttribute('data-hw-modal-trigger-initialised') === 'true') { return false; }
      // Mark as initialised
      trigger.setAttribute('data-hw-modal-trigger-initialised', true);
      bindEvents(trigger);
    });
  }


  // Initialise HWModule component
  init();
};

HWModal();
