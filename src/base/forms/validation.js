/**
 * Validation
 */

/**
 * Find all inputs with validation
 */

var input = document.querySelectorAll('[data-hw-validate]')[0];
var message = document.querySelectorAll('[data-hw-error-message]')[0];

/**
 * If there is any validation inputs
 */

if (input) {
  function validateTextInput(e) {
    const value = e.target.value;

    /**
     * Add error class and remove hidden class for validation messages
     */

    if (value.length > 3) {
      input.classList.add('hw-input-error');
      message.classList.remove('hw-input-error--is-hidden');
    } else {
      input.classList.remove('hw-input-error');
      message.classList.add('hw-input-error--is-hidden');
    }
  };

  /**
   * Add the listener
   */

  input.addEventListener("input", validateTextInput);
};
