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


test('Dropdown opens on click', () => {
  const dropdown = document.querySelectorAll('.hw-dropdown')[0];
  dropdown.click();

  const list = dropdown.querySelectorAll('.hw-dropdown__options')[0];
  const status = list.getAttribute('aria-hidden');

  expect(status).toEqual('false');
});


test('Selected value updates when option selected', () => {
  const dropdown = document.querySelectorAll('.hw-dropdown')[0];
  dropdown.click();

  const firstItem = dropdown.querySelectorAll('.hw-dropdown__option')[0];
  const secondItem = dropdown.querySelectorAll('.hw-dropdown__option')[1];
  firstItem.click();

  const firstItemSelected = firstItem.getAttribute('data-hw-dropdown-option-selected');
  const secondItemSelected = secondItem.getAttribute('data-hw-dropdown-option-selected');

  expect(firstItemSelected).toEqual('true');
  expect(secondItemSelected).toEqual('false');
});

