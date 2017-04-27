
Navbar

```code
[Base]            .hw-navbar
[Absolute]        .hw-navbar--absolute
[Transparent]     .hw-navbar--transparent
```

```html
<header class="hw-navbar">
  <a href="#" class="hw-navbar__logo">
    <svg>
      <use xlink:href="#logo"></use>
    </svg>
  </a>
  <nav class="hw-navbar__menu">
    <a href="#" class="hw-navbar__item">English</a>
    <a href="#" class="hw-navbar__item">Login</a>
    <button class="hw-navbar__button" data-hw-toggle-menu>
      Menu
      <div class="hw-hamburger" data-hw-menu-icon>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
      </div>
    </button>
  </nav>
</header>
<nav class="hw-navbar__drawer" data-hw-menu-drawer>
  Menu content
  <img src="https://unsplash.it/1200/700" />
</nav>
```

```html
<header class="hw-navbar">
  <div class="hw-navbar__logo">
    <svg>
      <use xlink:href="#logo"></use>
    </svg>
  </div>
  <nav class="hw-navbar__menu">
    <a href="#" class="hw-navbar__item">English</a>
    <a href="#" class="hw-navbar__item">Login</a>
    <button class="hw-navbar__button" data-hw-toggle-menu>
      Menu
      <div class="hw-hamburger" data-hw-menu-icon>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
      </div>
    </button>
  </nav>
</header>
<nav class="hw-navbar__drawer" data-hw-menu-drawer>
  Menu content
  <img src="https://unsplash.it/1200/700" />
</nav>
<div class="hw-search" data-hw-search>
  <input
    data-hw-search-input
    class="hw-search__input" type="text" placeholder="Søk pakke eller på nettstedet" />
  <svg class="hw-search__icon">
    <use xlink:href="#search"></use>
  </svg>
</div>
```

```html
<header class="hw-navbar hw-navbar--transparent">
  <div class="hw-navbar__logo">
    <svg>
      <use xlink:href="#logo"></use>
    </svg>
  </div>
  <nav class="hw-navbar__menu">
    <a href="#" class="hw-navbar__item">English</a>
    <a href="#" class="hw-navbar__item">Login</a>
    <button class="hw-navbar__button" data-hw-toggle-menu>
      Menu
      <div class="hw-hamburger" data-hw-menu-icon>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
        <span class="hw-hamburger__part"></span>
      </div>
    </button>
  </nav>
</header>
<nav class="hw-navbar__drawer" data-hw-menu-drawer>
  Menu content
  <img src="https://unsplash.it/1200/700" />
</nav>
<div class="hw-search" data-hw-search>
  <input
    data-hw-search-input
    class="hw-search__input" type="text" placeholder="Søk pakke eller på nettstedet" />
  <svg class="hw-search__icon">
    <use xlink:href="#search"></use>
  </svg>
</div>
```
