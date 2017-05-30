/* global test expect document */
import q from '../../../utilities/js/q';

// Set up our document body
document.body.innerHTML =
  `<ul class="hw-accordion" data-hw-accordion="example1">
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">test1<div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg">test1</div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">test2<div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg">test3</div>
      </div>
    </li>
    <li class="hw-accordion__item" data-hw-accordion-default-expanded>
      <button class="hw-accordion__trigger">test3<div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg">test3</div>
      </div>
    </li>
  </ul>`;

require('../accordion');


test('Accordion initialises if selector found', () => {
  const accordion = q('.hw-accordion');
  const status = accordion.getAttribute('data-hw-accordion-initialised');

  expect(status).toEqual('true');
});


test('accordion opens default expanded item', () => {
  const defaultItem = q('[data-hw-accordion-default-expanded]');
  const hasClass = defaultItem.classList.contains('hw-accordion__item--expanded');

  expect(hasClass).toEqual(true);
});


test('accordion opens on click', () => {
  const firstItem = q('.hw-accordion__trigger');
  firstItem.click();

  const hasClass = firstItem.classList.contains('hw-accordion__item--expanded');

  expect(hasClass).toEqual(false);
});
