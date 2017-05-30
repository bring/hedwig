/* global test expect document */

document.body.innerHTML = `
  <header class="navbar">
    <div class="navbar__logo">
      <svg>
        <use xlink:href="#logo"></use>
      </svg>
    </div>
    <nav class="navbar__menu">
      <a href="#" class="navbar__item">English</a>
      <a href="#" class="navbar__item">Login</a>
      <button class="navbar__button">
        Search
        <svg class="hw-icon">
          <use xlink:href="#search"></use>
        </svg>
      </button>
      <button class="navbar__button" data-hw-toggle-menu>
        Menu
        <div class="hw-hamburger" data-hw-menu-icon>
          <span class="hw-hamburger__part"></span>
          <span class="hw-hamburger__part"></span>
          <span class="hw-hamburger__part"></span>
        </div>
      </button>
    </nav>
  </header>
`;

/**
 * Import function
 */

require('../navbar');

/**
 * Insert text to input field and trig change
 */

const menuButtonSelector = document.body.querySelectorAll('[data-hw-toggle-menu]')[0];
const menuButtonIconSelector = document.body.querySelectorAll('[data-hw-menu-icon]')[0];
const activeClass = 'hw-hamburger--active';

/**
 * Check results
 */

test('If added class to menu button button', () => {
  menuButtonSelector.click();

  const hasAddedActiveClass = menuButtonIconSelector.classList.contains(activeClass);

  expect(hasAddedActiveClass).toEqual(true);
});
