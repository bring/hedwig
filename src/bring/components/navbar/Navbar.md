
## Navbar

```code
[Base]            .hw-navbar
[Absolute]        .hw-navbar--absolute
[Transparent]     .hw-navbar--transparent
```

### Default navbar (with search)

```html
<header class="hw-navbar">
  <a href="#" class="hw-navbar__logo">
    <svg class="hw-navbar__logo-standard">
      <use xlink:href="#logo-bring"></use>
    </svg>
    <svg class="hw-navbar__logo-white">
      <use xlink:href="#logo-bring-white"></use>
    </svg>
  </a>
  <nav class="hw-navbar__menu">
    <a href="#" class="hw-navbar__item">English</a>
    <a href="#" class="hw-navbar__item">Logg inn</a>
    <button class="hw-navbar__search-button" data-hw-toggle-search>
      Søk
      <svg class="hw-navbar__search-icon">
        <use xlink:href="#search"></use>
      </svg>
    </button>
    <button class="hw-navbar__menu-button" data-hw-toggle-menu>
      <span>Menu</span>
      <div class="hw-hamburger" data-hw-menu-icon>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
      </div>
    </button>
  </nav>
  <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
  <div class="hw-navbar__overlay" data-hw-navbar-overlay></div>
  <section class="hw-navbar__search">
    <div class="hw-search hw-search--large"
      data-hw-search
      data-hw-search-placeholders='["Søk etter pakke", "Eks.: 1212012381238123", "Eller på nettstedet", "Eks.: Bedriftspakke"]'
    >
      <span class="hw-search__background"></span>
      <div class="hw-search__inner">
        <input
          data-hw-search-input
          class="hw-search__input" type="text" />
        <svg class="hw-search__icon">
          <use xlink:href="#search"></use>
        </svg>
        <span class="hw-search__placeholder" data-hw-search-placeholder></span>
      </div>
    </div>
  </section>
</header>
```

### Navbar without search

```html
<header class="hw-navbar">
  <div class="hw-navbar__logo">
    <svg>
      <use xlink:href="#logo-bring"></use>
    </svg>
  </div>
  <nav class="hw-navbar__menu">
    <a href="#" class="hw-navbar__item">English</a>
    <a href="#" class="hw-navbar__item">Login</a>
    <button class="hw-navbar__menu-button" data-hw-toggle-menu>
      <span>Menu</span>
      <div class="hw-hamburger" data-hw-menu-icon>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
      </div>
    </button>
  </nav>
  <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
</header>
```

### Transparent navbar

```html
<header class="hw-navbar hw-navbar--transparent">
  <div class="hw-navbar__logo">
    <svg>
      <use xlink:href="#logo-bring"></use>
    </svg>
  </div>
  <nav class="hw-navbar__menu">
    <a href="#" class="hw-navbar__item">English</a>
    <a href="#" class="hw-navbar__item">Login</a>
    <button class="hw-navbar__menu-button" data-hw-toggle-menu>
      <span>Menu</span>
      <div class="hw-hamburger" data-hw-menu-icon>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
      </div>
    </button>
  </nav>
  <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
</header>
```
