### Track and trace page


```html
---
  <section class="hw-block hw-block--full hw-block--bg-white">

    <!-- Header -->

    <header class="hw-navbar">
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

    <!-- Footer -->

    <main class="hw-block--full hw-block--bg-gray-lightest">

      <div class="hw-container--narrow">
        <div class="hw-block hw-block--full hw-block--pt-large hw-block--pb-large">
          <img src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/illustration-send.svg" type="image/svg+xml" />
        </div>
      </div>
      <div class="hw-container">
        <div class="hw-block hw-block--mt hw-block--mb">
          <h1 class="hw-text-center">Hva skal du sende?</h1>
          <h3 class="hw-text-center">Finn pris og sendemåte på det du skal sende</h3>
        </div>
      </div>
      <div class="hw-container--narrow">
        <div class="hw-block
          hw-block--full
          hw-block--mt
          hw-block--mb
          hw-text-center">
          <button class="hw-button hw-button--primary">Pakke</button>
          <button class="hw-button hw-button--primary">Brev</button>
        </div>
      </div>

    </main>

    <footer class="hw-footer">

      <div class="hw-footer__desktop">
        <div class="hw-block hw-block--full hw-block--limited">
          <div class="hw-grid">
            <div class="hw-grid__item hw-one-quarter">
              <p class="hw-footer__title">Kundeservice</p>
              <hr class="hw-hr hw-hr--white" />
              <div class="hw-block hw-block--full hw-block--mt-small">
                <ul class="hw-footer__links">
                  <li><a href="#">Kontakt oss</a></li>
                  <li><a href="#">Aktuelt nå</a></li>
                  <li><a href="#">Driftsmeldinger</a></li>
                  <li><a href="#">Reklamasjon og klager</a></li>
                  <li><a href="#">Fakturaspørsmål</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <p class="hw-footer__title">Om Posten</p>
              <hr class="hw-hr hw-hr--white" />
              <div class="hw-block hw-block--full hw-block--mt-small">
                <ul class="hw-footer__links">
                  <li><a href="#">Våre tjenester</a></li>
                  <li><a href="#">Priser</a></li>
                  <li><a href="#">Vilkår</a></li>
                  <li><a href="#">Jobb og karriere</a></li>
                  <li><a href="#">Miljø</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <p class="hw-footer__title">Søk etter</p>
              <hr class="hw-hr hw-hr--white" />
              <div class="hw-block hw-block--full hw-block--mt-small">
                <ul class="hw-footer__links">
                  <li><a href="#">Postkontor og åpningstider</a></li>
                  <li><a href="#">Navn og adresser</a></li>
                  <li><a href="#">Postnummert og sted</a></li>
                  <li><a href="#">Ledige stillinger</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <button class="hw-footer__button hw-button hw-button--full hw-button--secondary">BE OM TILBUD</button>
              <button class="hw-footer__button hw-button hw-button--full hw-button--secondary">ENGLISH</button>
            </div>
          </div>
        </div>
      </div>

      <div class="hw-footer__mobile">
        <div class="hw-block hw-block--half hw-block--pt-small">
          <div class="hw-grid">
            <div class="hw-grid__item hw-small--one-half">
              <button class="hw-footer__button hw-button hw-button--full hw-button--secondary">BE OM TILBUD</button>
            </div><!--
            --><div class="hw-grid__item hw-small--one-half">
              <button class="hw-footer__button hw-button hw-button--full hw-button--secondary">ENGLISH</button>
            </div>
          </div>
        </div>

        <ul class="hw-accordion hw-accordion--dark" data-hw-accordion="footer-menu">
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Kundeservice
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              awdawdaw
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Våre tjenester
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              addwaawd
            </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Søk etter
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              dawdawd
            </div>
          </li>
        </ul>
      </div>

      <div class="hw-block hw-block--full hw-block--pb-small">
        <div class="hw-footer__logo">
          <svg class="hw-icon">
            <use xlink:href="#logo-white"></use>
          </svg>
        </div>
      </div>

      <div class="hw-block hw-block--full hw-block--bg-white hw-block--pt-small hw-block--pb-small">
        <div class="hw-footer__legal">
          <a href="#">© Posten Norge</a>
          <span>|</span>
          <a href="#">Personvern og sikkerhet</a>
          <span>|</span>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>

  </section>
```
