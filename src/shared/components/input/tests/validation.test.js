/* global test expect document */

document.body.innerHTML = `
  <label class="hw-label">
    Label
    <div class="hw-error hw-error--is-hidden" data-hw-error-message>E-postadressen er ugyldig</div>
    <input type="text" class="hw-input"  data-hw-validate="text" placeholder="Type 4 letters to test validation" />
  </label>
`;

/**
 * Import function
 */

require('../validation');

/**
 * Insert text to input field and trig change
 */

const inputField = document.body.querySelectorAll('[data-hw-validate]')[0];
const message = document.querySelectorAll('[data-hw-error-message]')[0];

inputField.value = 'abcde';

const event = new Event('input', {
  bubbles: true,
  cancelable: true,
});

inputField.dispatchEvent(event);

/**
 * Check results
 */

test('If error class is added to input', () => {
  const isInputError = inputField.classList.contains('hw-input--error');
  expect(isInputError).toEqual(true);
});

test('If hidden class is removed from error message', () => {
  const isInputError = message.classList.contains('hw-error--is-hidden');
  expect(isInputError).toEqual(false);
});
