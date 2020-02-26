import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import trapFocus from '../../utilities/js/trapFocus';

let returnFocusEl = null;

/**
 * @function HWModal
 * @version 0.0.1
 * @desc Describe your module here
 * @param {object} settings
 */
export const HWDrawer = ({
  drawerSelector = '[data-hw-drawer]',
  drawerTrigger = '[data-hw-drawer-trigger]',
  drawerContentSelector = '[data-hw-drawer-content]'
} = {}) => {
  // Module settings object
  const SETTINGS = { drawers: qa(drawerSelector), triggers: qa(drawerTrigger) }; // All drawer DOM nodes

  /**
   * @function moduleMethod
   * @desc Describe what the method does here
   * @param {Event} e
   */
  function toggleModal(e) {
    // Grab clicked element and drawer associated with it
    const elem = e.currentTarget;
    const drawerId = elem.getAttribute('data-hw-drawer-trigger');
    const body = document.getElementsByTagName('BODY')[0];
    const drawer = q(`[data-hw-drawer=${drawerId}]`);
    const drawerContent = q(drawerContentSelector, drawer);
    // add EventListeners to focusable elements in drawer to trap focus in drawer
    trapFocus(drawer);

    const drawerHidden = drawer.getAttribute('aria-hidden');
    // Toggle drawer
    if (drawerHidden === 'true') {
      returnFocusEl = elem;
      drawer.setAttribute('aria-hidden', false);
      body.style.overflow = 'hidden';
      if(drawerContent) {
        drawerContent.classList.remove('hw-drawer__content--animate-out');
      }
      drawer.classList.remove('hw-drawer--animate-out');
      drawer.classList.add('hw-drawer--open');

      // set focus to first element in drawer
      const focusableEls = qa('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], input[type="submit"], select', drawer);
      setTimeout(function () {
        if (focusableEls.length < 1) {
          console.warn(`No focusable elements in drawer '${drawerId}'. At least the close button needs to be a <button>`);
        } else {
          const firstFocusableEl = focusableEls[0];
          firstFocusableEl.focus();
        }
      }, 300);
      setTimeout (() =>{
      drawerContent.addEventListener("transitionend", function(){
          drawerContent.style.transform = 'none';
      });
      },200)
    } else {
      drawer.setAttribute('aria-hidden', true);
      // animation out drawer
      if(drawerContent) {
        drawerContent.classList.add('hw-drawer__content--animate-out');
      }
      drawer.classList.add('hw-drawer--animate-out');
      setTimeout(() => {
        drawer.classList.remove('hw-drawer--open');
      }, 400);
      drawerContent.addEventListener("transitionend", function(){
          drawerContent.style.removeProperty('transform');
      });
      body.style.overflow = 'visible';

      // set focus on button which opens drawer after drawer removed
      returnFocusEl.focus();
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
    if (SETTINGS.drawers.length < 1) {
      return;
    }

    // Loop through all modules and initialise each
    SETTINGS.drawers.forEach(drawer => {
      // Skip if already initialised
      if (drawer.getAttribute('data-hw-drawer-initialised') === 'true') {
        return false;
      }

      // Mark as initialised
      drawer.setAttribute('data-hw-drawer-initialised', true);
      drawer.setAttribute('aria-hidden', true);
      const closeButton = q('button[data-hw-drawer-trigger].hw-drawer__close-button', drawer);
      if(!closeButton){
        const drawerName = drawer.getAttribute('data-hw-drawer');
        console.warn(`The close button of drawer '${drawerName}' is not of type button, or it is missing. This is required to improve accessibility.`);
      }
    });

    // Example of binding event to button
    SETTINGS.triggers.forEach(trigger => {
      // Skip if already initialised
      if (
        trigger.getAttribute('data-hw-drawer-trigger-initialised') === 'true'
      ) {
        return false;
      }
      // Mark as initialised
      trigger.setAttribute('data-hw-drawer-trigger-initialised', true);
      bindEvents(trigger);
    });
  }

  // Initialise HWModule component
  init();
};

HWDrawer();
