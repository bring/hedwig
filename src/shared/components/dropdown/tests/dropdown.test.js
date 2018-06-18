/* global test expect document */
window.HTMLElement.prototype.dataset = {};
// Set up our document body
document.body.innerHTML = `<label class="hw-label">
      Choose character
      <select
        data-hw-dropdown="characters"
        data-hw-dropdown-default-selected="2">
        <option value="1">Harry</option>
        <option value="2">Hedwig</option>
        <option value="3">Fredrik</option>
      </select>
    </label>`;

require('../dropdown');

test('Dropdown initialises if selector found', () => {
  const dropdown = document.querySelectorAll('[data-hw-dropdown="characters"]')[0];
  const status = dropdown.getAttribute('data-hw-dropdown-initialised');
  expect(status).toEqual('true');
});

test('Dropdown selects default value if found', () => {
  setTimeout(() => {
    const defaultOption = document.querySelectorAll("[data-hw-dropdown-value='2']")[0];
    const selected = defaultOption.getAttribute('data-hw-dropdown-option-selected');
    expect(selected).toEqual('true');
  }, 500);
});

test('Dropdown opens on click', () => {
  const dropdown = document.querySelectorAll('.hw-dropdown')[0];
  dropdown.click();

  const list = dropdown.querySelectorAll('.hw-dropdown__options')[0];
  const status = list.getAttribute('aria-hidden');

  expect(status).toEqual('false');
});

test('Selected value updates when option selected', () => {
  setTimeout(() => {
    const dropdown = document.querySelectorAll('.hw-dropdown')[0];
    dropdown.click();

    const firstItem = dropdown.querySelectorAll('.hw-dropdown__option')[0];
    const secondItem = dropdown.querySelectorAll('.hw-dropdown__option')[1];
    firstItem.click();

    const firstItemSelected = firstItem.getAttribute('data-hw-dropdown-option-selected');
    const secondItemSelected = secondItem.getAttribute('data-hw-dropdown-option-selected');

    expect(firstItemSelected).toEqual('true');
    expect(secondItemSelected).toEqual('false');
  }, 500);
});
