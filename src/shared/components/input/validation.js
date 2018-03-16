/**
 * Validation
 */
import 'whatwg-fetch';
import throttle from 'lodash/throttle';
import q from '../../utilities/js/q';
import qa from '../../utilities/js/qa';
import { checkCreditCard } from '../input/creditcard';
import { checkMod11 } from '../input/mod11';

const HWValidate = ({
    validateSelector = '[data-hw-validate]',
    errorMessageSelector = '[data-hw-error-message]',
  } = {}) => {
  // Module settings object
  const SETTINGS = {
    elements: qa(validateSelector), // All input DOM nodes
    errors: qa(errorMessageSelector),
  };

  function validateEmail(e) {
    const value = e.target.value;
    const input = e.target;
    const message = e.target.nextElementSibling;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      input.classList.remove('hw-input--error');
      message.classList.add('hw-error--is-hidden');
    } else {
      input.classList.add('hw-input--error');
      message.classList.remove('hw-error--is-hidden');
    }
  }

  function validateBankAccount(e) {
    const value = e.target.value;
    const accountNumber = value.toString().replace(/\./g, '');
    const input = e.target;
    const message = e.target.nextElementSibling;
    const isValid = parseInt(accountNumber.charAt(accountNumber.length - 1), 10)
      === checkMod11(accountNumber);
    if (isValid) {
      input.classList.remove('hw-input--error');
      message.classList.add('hw-error--is-hidden');
    } else {
      input.classList.add('hw-input--error');
      message.classList.remove('hw-error--is-hidden');
    }
  }

  function validatePostalCode(e) {
    const value = e.target.value;
    const input = e.target;
    const parent = input.offsetParent;
    const message = e.target.nextElementSibling;
    const locationElem = q('[data-hw-validate-location]', parent);
    const country = input.getAttribute('data-hw-validate-country');
    const apiURL = `https://api.bring.com/shippingguide/api/postalCode.json?pnr=${value}&Country=${country}&clientUrl=hedwig`;

    if (value > 3) {
      fetch(apiURL)
        .then(response => response.json())
        .then((postnumber) => {
          if (postnumber.valid) {
            console.log(postnumber);
            input.classList.remove('hw-input--error');
            message.classList.add('hw-error--is-hidden');
            locationElem.value = postnumber.result;
          } else {
            input.classList.add('hw-input--error');
            message.classList.remove('hw-error--is-hidden');
            locationElem.value = postnumber.result;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function validateRegEx(e) {
    const value = e.target.value;
    const regexString = e.target.dataset.hwRegex;
    const parts = /\/(.*)\/(.*)/.exec(regexString);
    const regEx = new RegExp(parts[1], parts[2]);
    const input = e.target;
    const message = e.target.nextElementSibling;
    if (regEx.test(value)) {
      input.classList.remove('hw-input--error');
      message.classList.add('hw-error--is-hidden');
    } else {
      input.classList.add('hw-input--error');
      message.classList.remove('hw-error--is-hidden');
    }
  }

  function validatePhoneNumber(e) {
    const value = e.target.value;
    const input = e.target;
    const message = e.target.nextElementSibling;
    if (!/\D/.test(value) && value.length === 8) {
      input.classList.remove('hw-input--error');
      message.classList.add('hw-error--is-hidden');
    } else {
      input.classList.add('hw-input--error');
      message.classList.remove('hw-error--is-hidden');
    }
  }

  function validateCardNumber(e) {
    const value = e.target.value;
    const input = e.target;
    const cardType = input.getAttribute('data-hw-validate-card-type');
    const message = e.target.nextElementSibling;
    if (checkCreditCard(value, cardType)) {
      input.classList.remove('hw-input--error');
      message.classList.add('hw-error--is-hidden');
    } else {
      input.classList.add('hw-input--error');
      message.classList.remove('hw-error--is-hidden');
    }
  }

  function bindEvents(trigger, validateType) {
    if (validateType === 'email') {
      trigger.addEventListener('input', validateEmail);
    }
    if (validateType === 'postal-code') {
      trigger.addEventListener('input', throttle(validatePostalCode, 1000));
    }
    if (validateType === 'phone-number') {
      trigger.addEventListener('input', validatePhoneNumber);
    }
    if (validateType === 'credit-card') {
      trigger.addEventListener('input', validateCardNumber);
    }
    if (validateType === 'bank-account') {
      trigger.addEventListener('input', validateBankAccount);
    }
    if (validateType === 'regex') {
      trigger.addEventListener('input', validateRegEx);
    }
  }

  function init() {
    if (SETTINGS.elements.length < 1) {
      return;
    }
    // Loop through all toggles and initialise each
    SETTINGS.elements.forEach((input) => {
      // Skip if already initialised
      if (input.getAttribute('data-hw-validate-initialised') === 'true') { return false; }

      // Mark as initialised
      input.setAttribute('data-hw-validate-initialised', true);

      const validateType = input.getAttribute('data-hw-validate');

      // Set up event listeners
      bindEvents(input, validateType);
    });
  }

// Initialise HWValidate component
  init();
};

HWValidate();
