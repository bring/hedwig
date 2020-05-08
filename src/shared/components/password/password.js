/* global window */

import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import findParent from '../../utilities/js/findParent';

/**
 * @function HWPassword
 * @version 0.0.1
 * @desc Updates the "password strength" indicator on input
 * @param {object} settings
 */
const HWPassword = ({
    passwordSelector = '[data-hw-password]',
  } = {}) => {

  // Module settings object
  const SETTINGS = {
    elements: qa(passwordSelector), // All password DOM nodes
    defaultRules: {
      minLength: 8,
      capsRequired: true,
      specialRequired: true,
    },
  };


   /**
   * @function calculateStrength
   * @desc Calculate password strength from 1-10
   * @param {String} password
   */
  function calculateStrength(password, rules) {
    const errors = [];

    // Run tests against string
    if (password.length < rules.minLength) {
      errors.push('minLength');
    }
    if (rules.capsRequired && !/^[^A-Z]*[A-Z]/.test(password)) {
      errors.push('hasCaps');
    }
    if (rules.specialRequired && !/[0-9!@#$%^&*]/.test(password)) {
      errors.push('hasSpecialChar');
    }

    // Scores
    // All requirements met = 50%
    // Extra length = bonus points
    const baseScore = Math.floor(5 - errors.length);
    const bonusScore = baseScore === 5 ? password.length - rules.minLength : 0;

    // Return score from 1 to 10
    return Math.min(baseScore + bonusScore, 10);
  }

  /**
   * @function updateIndicator
   * @desc Updates the password strength indicator
   * @param {Event} e
   */
  function updateIndicator(e) {
    // Get element
    const elem = e.target;

    // Find container
    const container = findParent({ selector: '[data-hw-password]', elem });

    // Find validation settings
    const {
      hwPasswordMinLength,
      hwPasswordCapsRequired,
      hwPasswordSpecialRequired,
    } = container.dataset;

    const rules = {
      minLength: (hwPasswordMinLength && parseInt(hwPasswordMinLength, 10)) || SETTINGS.defaultRules.minLength,
      capsRequired: hwPasswordCapsRequired ? hwPasswordCapsRequired === 'true' : SETTINGS.defaultRules.capsRequired,
      specialRequired: hwPasswordSpecialRequired ? hwPasswordSpecialRequired === 'true' : SETTINGS.defaultRules.specialRequired,
    };

    // Get password strength
    const strength = calculateStrength(e.target.value, rules);

    // Append class to container
    // TODO: This removes all classes. Also added modifiers.
    container.className = 'hw-password';
    container.classList.add(`hw-password--strength-${strength}`);

  }


  /**
   * @function bindEvents
   * @desc Adds listener to toggle
   * @param {node} trigger
   */
  function bindEvents(trigger) {
    trigger.addEventListener('input', updateIndicator);
  }


  /**
   * @function init
   * @desc Initialises the toggle
   */
  function init() {
    // Check if any toggles exist, return if not.
    if (SETTINGS.elements.length < 1) {
      return;
    }

    // Loop through all toggles and initialise each
    SETTINGS.elements.forEach((input) => {
      // Skip if already initialised
      if (input.getAttribute('data-hw-password-initialised') === 'true') { return false; }

      // Mark as initialised
      input.setAttribute('data-hw-password-initialised', true);

      // Find elements
      const trigger = q('.hw-password__input', input);

      // Set up event listeners
      bindEvents(trigger);
    });
  }


  // Initialise HWPassword component
  init();
};

HWPassword();
