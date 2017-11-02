
## Navbar

```code
[Base]            .hw-navbar
[Absolute]        .hw-navbar--absolute
[Transparent]     .hw-navbar--transparent
```

### Default navbar (with search)

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <a href="#" class="hw-navbar__logo">
      <svg class="hw-navbar__logo-standard">
        <use xlink:href="#logo-posten"></use>
      </svg>
      <svg class="hw-navbar__logo-white">
        <use xlink:href="#logo-posten-white"></use>
      </svg>
    </a>
    <nav class="hw-navbar__menu">
      <button class="hw-navbar__search-button" data-hw-toggle-search>
        Søk
        <svg class="hw-navbar__search-icon">
          <use xlink:href="#search"></use>
        </svg>
      </button>
      <button class="hw-navbar__menu-button" data-hw-toggle-menu>
        <span>Meny</span>
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
            class="hw-search__input" type="text"
            aria-label="Search" />
          <svg class="hw-search__icon">
            <use xlink:href="#search"></use>
          </svg>
          <span class="hw-search__placeholder" data-hw-search-placeholder></span>
        </div>
      </div>
    </section>
  </div>
</header>
```

### Navbar without search

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__logo">
      <svg>
        <use xlink:href="#logo-posten"></use>
      </svg>
    </div>
    <nav class="hw-navbar__menu">
      <button class="hw-navbar__menu-button" data-hw-toggle-menu>
        <span>Meny</span>
        <div class="hw-hamburger" data-hw-menu-icon>
          <span class="hw-hamburger__part"></span>
          <span class="hw-hamburger__part"></span>
          <span class="hw-hamburger__part"></span>
        </div>
      </button>
    </nav>
    <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
    <div class="hw-navbar__overlay" data-hw-navbar-overlay></div>
  </div>
</header>
```

### Transparent navbar

```html
<header class="hw-navbar hw-navbar--transparent">
  <div class="hw-navbar__content">
    <div class="hw-navbar__logo">
      <svg>
        <use xlink:href="#logo-posten"></use>
      </svg>
    </div>
    <nav class="hw-navbar__menu">
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
  </div>
</header>
```
