/* global test expect document */

// Set up our document body
document.body.innerHTML =
  `<div class="hw-dropdown"
    data-hw-dropdown="characters"
    data-hw-dropdown-placeholder="Choose option"
    data-hw-dropdown-default-selected="2"
  >
    <div class="hw-dropdown__inner">
      <div class="hw-dropdown__placeholder"></div>
      <div class="hw-dropdown__arrow"></div>
      <ul class="hw-dropdown__options">
        <li class="hw-dropdown__option" data-hw-dropdown-value="1">Harry</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="2">Hedwig</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="3">Fredrik</li>
      </ul>
    </div>
  </div>`;

require('./dropdown');

test('Dropdown initialises if selector found', () => {
  const dropdown = document.querySelectorAll('.hw-dropdown')[0];
  const status = dropdown.getAttribute('data-hw-dropdown-initialised');

  expect(status).toEqual('true');
});

test('Dropdown selects default value if found', () => {
  const defaultOption = document.querySelectorAll('[data-hw-dropdown-value="2"]')[0];
  const selected = defaultOption.getAttribute('data-hw-dropdown-option-selected');

  expect(selected).toEqual('true');
});

