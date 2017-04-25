import q from '../../utilities/js/q';

const SETTINGS = {
  menuButton: '[data-hw-toggle-menu]',
  menuButtonIcon: '[data-hw-menu-icon]',
  activeClass: 'hw-hamburger--active',
};

const HWNavbar = () => {
  const menuButton = q(SETTINGS.menuButton);

  function addClassToMenuBUtton() {
    const menuButtonIcon = q(SETTINGS.menuButtonIcon);

    if (menuButtonIcon.classList.contains(SETTINGS.activeClass)) {
      menuButtonIcon.classList.remove(SETTINGS.activeClass);
    }

    menuButtonIcon.classList.add(SETTINGS.activeClass);
  }

  function init() {
    if (!menuButton) {
      return;
    }

    menuButton.addEventListener('click', addClassToMenuBUtton);
  }

  init();
};

HWNavbar(SETTINGS);
