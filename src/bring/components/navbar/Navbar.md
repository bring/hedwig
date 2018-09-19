## Navbar

```code
[Base]            .hw-navbar
[Absolute]        .hw-navbar--absolute
[Transparent]     .hw-navbar--transparent
[Sticky]          .hw-navbar--sticky
```




### Navbar with menu

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__top">
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
        <button class="hw-navbar__menu-button" data-hw-toggle-menu>
          <span>Menu</span>
          <div class="hw-hamburger" data-hw-menu-icon>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
          </div>
        </button>
      </nav>
    </div>
    <section class="hw-navbar__drawer" data-hw-menu-drawer>
      <div class="hw-navbar__drawer-content">
        <div class="hw-navbar__drawer-mobile">
        </div>
        <div class="hw-navbar__drawer-desktop">
          <div class="hw-grid">
            <div class="hw-grid__item hw-one-quarter">
              <h2>Sende</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Post - like formater</a></li>
                <li><a href="#">Post - blandede formater</a></li>
                <li><a href="#">Brev med sikkerhet</a></li>
                <li><a href="#">Pakker til postkassen</a></li>
                <li><a href="#">Frankering</a></li>
                <li><a href="#">Pakker til bedrift</a></li>
                <li><a href="#">Pakker til private</a></li>
                <li><a href="#">Gods i Norge</a></li>
                <li><a href="#">Gods internasjonalt</a></li>
              </ul>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2>Motta</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Spore</a></li>
                <li><a href="#">Adresseendring, varig</a></li>
                <li><a href="#">Adresseendring, midlertidig</a></li>
                <li><a href="#">Oppbevaring av post</a></li>
                <li><a href="#">Leie av postboks</a></li>
                <li><a href="#">Import og fortolling</a></li>
              </ul>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2>Rådgivning</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Farlig gods</a></li>
                <li><a href="#">Klargjøring av forsendelse</a></li>
                <li><a href="#">Returløsninger</a></li>
                <li><a href="#">Adressetjenester</a></li>
                <li><a href="#">Våre integrasjonsløsninger</a></li>
                <li><a href="#">Lagerløsninger</a></li>
                <li><a href="#">Netthandel</a></li>
                <li><a href="#">Kundedialog</a></li>
                <li><a href="#">Logistikkløsninger</a></li>
              </ul>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h2>Kundeservice</h2>
              <div class="hw-block hw-block--full hw-block--pt-small hw-block--pb-small">
                <hr class="hw-hr hw-hr--gray-light"/>
              </div>
              <ul class="hw-linklist">
                <li><a href="#">Reklamasjon og klage</a></li>
                <li><a href="#">Fakturaspørsmål</a></li>
                <li><a href="#">Driftsmeldinger</a></li>
                <li><a href="#">Finn postkontor og åpningstider</a></li>
                <li><a href="#">Min profil</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</header>
```





### Default navbar (with search)

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">

    <div class="hw-navbar__top">
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
        <button class="hw-navbar__search-button" data-hw-toggle-search>
          <span class="hw-navbar__search-text">Søk</span><!--
          --><i class="hw-navbar__icon far fa-search fa-2x"></i>
        </button>
        <button class="hw-navbar__item" data-hw-drawer-trigger="login">Logg inn<!--
          --><i class="hw-navbar__icon far fa-user fa-2x"></i>
        </button>
        <button class="hw-navbar__menu-button" data-hw-toggle-menu>
          <span>Meny</span>
          <span>Lukk</span>
          <div class="hw-hamburger" data-hw-menu-icon>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
          </div>
        </button>
      </nav>
    </div>

    <div class="hw-drawer" data-hw-drawer="login">
      <div class="hw-drawer__overlay hw-animate hw-animate--fade-in-overlay" data-hw-drawer-trigger="Drawer2"></div>
      <div class="hw-drawer__content">
        <div class="hw-drawer__header">
          <div class="hw-drawer__close">
            <button class="hw-drawer__close-button" data-hw-drawer-trigger="login">
              <i class="fas fa-times fa-3x" title="Close drawer"></i>
            </button>
          </div>
        </div>
        <div class="hw-drawer__body">
          <div class="hw-block hw-block--mb hw-text-center">
            <svg class="hw-icon--gray-lighter" role="img" aria-labelledby="avatar">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar"></use>
          </svg>
          </div>
          <div class="hw-block hw-block--mb">
            <h2 class="hw-text-center">Hvor vil du logge inn?</h2>
          </div>
          <hr class="hw-hr hw-hr--centered">
          <div class="hw-block hw-block--mt">
            <div class="hw-container hw-container--narrow">
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Mybring
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Min post
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Frimerkebutikken
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                Digipost
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                MINe - Internasjonalt gods
              </a>
              <a class="hw-button hw-button--secondary hw-button--large hw-button--full" href="#">
                MINe - Offshore &amp; Energy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="hw-navbar__drawer" data-hw-menu-drawer>
      <div class="hw-navbar__drawer-content">

        <div class="hw-navbar__drawer-mobile">

          <div class="hw-search hw-search--standalone"
            data-hw-search
            data-hw-search-placeholders='["Søk"]'
          >
            <div class="hw-search__inner">
              <input
                data-hw-search-input
                class="hw-search__input" type="text"
                aria-label="Search" />
              <svg class="hw-search__icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
              </svg>
              <span class="hw-search__placeholder" data-hw-search-placeholder></span>
            </div>
          </div>

          <div class="hw-block hw-block--full hw-block--mt-large">
            <ul class="hw-accordion hw-accordion--dark" data-hw-accordion="example3" data-hw-accordion-allow-multiple>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Sende
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <ul class="hw-accordion__link-items">
                    <li class="hw-accordion__link-item">
                      <a href="#" class="hw-accordion__link">Post</a>
                    </li>
                    <li class="hw-accordion__link-item">
                      <a href="#" class="hw-accordion__link">Pakker</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Motta
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                  <ul class="hw-accordion__link-items">
                    <li class="hw-accordion__link-item">
                      <a href="#" class="hw-accordion__link">Spore en forsendelse</a>
                    </li>
                    <li class="hw-accordion__link-item">
                      <a href="#" class="hw-accordion__link">
                        Adresseendring og oppbevaring av post
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="hw-accordion__item">
                <button class="hw-accordion__trigger">
                  Rådgivning
                  <div class="hw-accordion__arrow"></div>
                </button>
                <div class="hw-accordion__contents">
                 <ul class="hw-accordion__link-items">
                    <li class="hw-accordion__link-item">
                      <a href="#" class="hw-accordion__link">Lagerløsninger</a>
                    </li>
                    <li class="hw-accordion__link-item">
                      <a href="#" class="hw-accordion__link">Netthandel</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div class="hw-navbar__drawer-desktop">
          <div class="hw-grid">
            <div class="hw-grid__item hw-one-half hw-medium--one-quarter">

              <h2 class="hw-navbar__title">Sende</h2>
              <hr class="hw-hr">

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
              <hr class="hw-hr">

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
              <hr class="hw-hr">

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
                    <a class="hw-navbar__link" href="#">Med like formater</a>
                  </li>
                  <li>
                    <a href="#">Med blandede formater</a>
                  </li>
                </ul>
              </div>

            </div><!--
            --><div class="hw-grid__item hw-one-half hw-medium--one-quarter">
              <h2 class="hw-navbar__title">Kundeservice</h2>
              <hr class="hw-hr">

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
      >
        <span class="hw-search__background"></span>
        <div class="hw-search__inner">
          <input
            data-hw-search-input
            class="hw-search__input" type="text"
            aria-label="Søk"
            placeholder="Søk" />
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

### Transparent navbar

```html
<header class="hw-navbar hw-navbar--transparent">
  <div class="hw-navbar__content">
    <div class="hw-navbar__top">
      <div class="hw-navbar__logo">
        <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-bring-white"></use>
        </svg>
        <svg class="hw-navbar__logo-white" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-bring-white"></use>
        </svg>
      </div>
      <nav class="hw-navbar__menu">
        <a href="#" class="hw-navbar__item">English</a>
        <a href="#" class="hw-navbar__item">Login<!--
          --><i class="hw-navbar__icon far fa-user fa-2x"></i>
        </a>
        <button class="hw-navbar__menu-button" data-hw-toggle-menu>
          <span>Meny</span>
          <div class="hw-hamburger" data-hw-menu-icon>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
          </div>
        </button>
      </nav>
    </div>
    <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
  </div>
</header>
```

## Navbar without menu

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">

    <div class="hw-navbar__top">
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
    </div>
</header>
```


### Navbar without search

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__top">
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
        <a href="#" class="hw-navbar__item">English</a>
        <a href="#" class="hw-navbar__item">Login<!--
        --><i class="hw-navbar__icon far fa-user fa-2x"></i>
        </a>
        <button class="hw-navbar__menu-button" data-hw-toggle-menu>
          <span>Menu</span>
          <div class="hw-hamburger" data-hw-menu-icon>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
            <span class="hw-hamburger__part"></span>
          </div>
        </button>
      </nav>
    </div>
    <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
  </div>
</header>
```

