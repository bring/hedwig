
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
      <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
        <title id="Logo">Go to homepage</title>
        <use xlink:href="#logo-bring"></use>
      </svg>
      <svg class="hw-navbar__logo-white" aria-labelledby="Logo" role="img">
        <title id="Logo">Go to homepage</title>
        <use xlink:href="#logo-bring-white"></use>
      </svg>
    </a>

    <nav class="hw-navbar__menu">
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
    <section class="hw-navbar__drawer" data-hw-menu-drawer>
      <div class="hw-navbar__drawer-content">

        <div class="hw-navbar__drawer-mobile">

          <div class="hw-search"
            data-hw-search
            data-hw-search-placeholders='["Sok"]'
          >
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

          <div class="hw-block hw-block--full hw-block--mt-large">
            <ul class="hw-accordion hw-accordion--dark" data-hw-accordion="example3" data-hw-accordion-allow-multiple>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Logg inn
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <div class="hw-navbar__menu-group">
                    <ul class="hw-navbar__menu-group-links">
                      <li>
                        <a href="#">My bring</a>
                      </li>
                      <li>
                        <a href="#">Min post</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Sende
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <p>contents</p>
                </div>
              </li>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Motta
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <p>contents</p>
                </div>
              </li>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Rådgivning
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <p>contents</p>
                </div>
              </li>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Kundeservice
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <p>contents</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div class="hw-navbar__drawer-desktop">
          <div class="hw-grid">
            <div class="hw-grid__item hw-one-half hw-medium--one-quarter">

              <h2 class="hw-navbar__title">Sende</h2>
              <hr class="hw-hr hw-hr--white">

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Post</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Pakker</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

            </div><!--
            --><div class="hw-grid__item hw-one-half hw-medium--one-quarter">
              <h2 class="hw-navbar__title">Motta</h2>
              <hr class="hw-hr hw-hr--white">

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Post</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Pakker</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

            </div><!--
            --><div class="hw-grid__item hw-one-half hw-medium--one-quarter">
              <h2 class="hw-navbar__title">Rådgivning</h2>
              <hr class="hw-hr hw-hr--white">

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Post</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Pakker</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

            </div><!--
            --><div class="hw-grid__item hw-one-half hw-medium--one-quarter">
              <h2 class="hw-navbar__title">Kundeservice</h2>
              <hr class="hw-hr hw-hr--white">

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Post</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

              <div class="hw-navbar__menu-group">
                <h3 class="hw-navbar__menu-group-title">Pakker</h3>
                <ul class="hw-navbar__menu-group-links">
                  <li>
                    <a href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
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

<!--

### Navbar without search

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__logo">
      <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
        <title id="Logo">Go to homepage</title>
        <use xlink:href="#logo-bring"></use>
      </svg>
      <svg class="hw-navbar__logo-white" aria-labelledby="Logo" role="img">
        <title id="Logo">Go to homepage</title>
        <use xlink:href="#logo-bring-white"></use>
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
  </div>
</header>
```

### Transparent navbar

```html
<header class="hw-navbar hw-navbar--transparent">
  <div class="hw-navbar__content">
    <div class="hw-navbar__logo">
      <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
        <title id="Logo">Go to homepage</title>
        <use xlink:href="#logo-bring"></use>
      </svg>
      <svg class="hw-navbar__logo-white" aria-labelledby="Logo" role="img">
        <title id="Logo">Go to homepage</title>
        <use xlink:href="#logo-bring-white"></use>
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
  </div>
</header>
```

-->
