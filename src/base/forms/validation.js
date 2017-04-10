
var input = document.querySelectorAll('[data-hw-validate]')[0];
var message = document.querySelectorAll('[data-hw-error-message]')[0];

if (input) {
  console.log(input);

  function validateTextInput(e) {
    const value = e.target.value;

    if (value.length > 3) {
      input.classList.add('hw-input-error');
      message.classList.remove('hw-input-error--is-hidden');
    } else {
      input.classList.remove('hw-input-error');
      message.classList.add('hw-input-error--is-hidden');
    }
  };

  input.addEventListener("input", validateTextInput);
};
