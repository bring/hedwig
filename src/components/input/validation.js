/**
 * Validation
 */

/**
 * Find all inputs with validation
 */

const input = document.querySelectorAll('[data-hw-validate]')[0];
const message = document.querySelectorAll('[data-hw-error-message]')[0];

/**
 * If there is any validation inputs
 */
function validateTextInput(e) {
  const value = e.target.value;

 /**
  * Add error class and remove hidden class for validation messages
  */

  if (value.length > 3) {
    input.classList.add('hw-input--error');
    message.classList.remove('hw-error--is-hidden');
  } else {
    input.classList.remove('hw-input--error');
    message.classList.add('hw-error--is-hidden');
  }
}

if (input) {
  /**
   * Add the listener
   */

  input.addEventListener('input', validateTextInput);
}
