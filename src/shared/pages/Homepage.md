### Example homepage layout


```html
---
  <section class="hw-block hw-block--full hw-block--col-white">

    <!-- Header -->

    <header class="hw-navbar">
      <a href="#" class="hw-navbar__logo">
        <svg class="hw-navbar__logo-standard">
          <use xlink:href="#logo"></use>
        </svg>
        <svg class="hw-navbar__logo-white">
          <use xlink:href="#logo-white"></use>
        </svg>
      </a>
      <nav class="hw-navbar__menu">
        <a href="#" class="hw-navbar__item">English</a>
        <a href="#" class="hw-navbar__item">Logg inn</a>
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


    <main>

      <!-- Hero -->

      <section class="hw-hero hw-hero--large" data-hw-hero>
        <div class="hw-hero__image rellax" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero.png');"
        data-rellax-speed="-4"></div>
          <div class="hw-hero__overlay-angle"></div>
          <div class="hw-hero__overlay"></div>
          <div class="hw-hero__search-container">
            <div class="hw-search"
              data-hw-search
              data-hw-search-placeholders='["Søk etter pakke", "Eks.: 1212012381238123", "Eller på nettstedet", "Eks.: Bedriftspakke"]'
            >
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
          </div>
        </div>
      </section>

      <section class="hw-block hw-block--limited hw-block--mt-large hw-block--mb-large">

        <div class="hw-grid">
          <div class="hw-grid__item hw-medium--one-half hw-large--one-third">
            <a href="#" class="hw-card-nav">
              <div class="hw-block hw-block--mt-large hw-block--mb-large">
                <h2 class="hw-card-nav__title">Sende</h2>
                <hr class="hw-hr hw-hr--centered" />
                <p class="hw-card-nav__text">
                  Finn riktig tjeneste og bestill
                </p>
              </div>
            </a>
          </div><!--
      --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
            <a href="#" class="hw-card-nav">
              <div class="hw-block hw-block--mt-large hw-block--mb-large">
                <h2 class="hw-card-nav__title">Motta</h2>
                <hr class="hw-hr hw-hr--centered" />
                <div class="hw-card-nav__text">
                  Adresseendring og mottakkertjenester.
                </div>
              </div>
            </a>
          </div><!--
      --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
            <a href="#" class="hw-card-nav">
              <div class="hw-block hw-block--mt-large hw-block--mb-large">
                <h2 class="hw-card-nav__title">Mer om</h2>
                <hr class="hw-hr hw-hr--centered" />
                <div class="hw-card-nav__text">
                  Netthandel, kundedialog, adresser, transport, lagring og mer.
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Flexcards -->

      <section class="hw-flexcards">
        <article class="hw-flexcard">
          <div class="hw-flexcard__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/flexcard-1.png');" />
          <div class="hw-flexcard__overlay" />
          <div class="hw-flexcard__contents">
            <h3 class="hw-flexcard__title">Smartere logistikk på 1-2-3</h3>
            <p class="hw-flexcard__subtitle">Få verdifulle tips på hvordan din bedrift kan spare tid og penger!</p>
          </div>
        </article>
        <article class="hw-flexcard">
          <div class="hw-flexcard__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/flexcard-2.png');" />
          <div class="hw-flexcard__overlay" />
          <div class="hw-flexcard__contents">
            <h3 class="hw-flexcard__title">LOAD.17</h3>
            <p class="hw-flexcard__subtitle">Norges strørste netthandelslkonferanse</p>
          </div>
        </article>
        <article class="hw-flexcard">
          <div class="hw-flexcard__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/flexcard-1.png');" />
          <div class="hw-flexcard__overlay" />
          <div class="hw-flexcard__contents">
            <h3 class="hw-flexcard__title">Smartere logistikk på 1-2-3</h3>
            <p class="hw-flexcard__subtitle">Få verdifulle tips på hvordan din bedrift kan spare tid og penger!</p>
          </div>
        </article>
      </section>

    </main>

    <!-- Footer -->

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
              <p class="hw-footer__title">Om Bring</p>
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

      <div class="hw-block hw-block--full hw-block--col-white hw-block--pt-small hw-block--pb-small">
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
