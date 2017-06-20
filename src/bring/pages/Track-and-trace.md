### Track and trace page


```html
---
  <section class="hw-block hw-block--full hw-block--bg-white">

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

    <div class="hw-hero hw-hero--large rellax">
      <div class="hw-hero__image rellax" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"
      data-rellax-speed="-4"></div>
      <div class="hw-hero__overlay"></div>
      <div class="hw-hero__contents">
        <div class="hw-animate hw-animate--slide-in-bottom">
          <div class="
            hw-block
            hw-block--pt
            hw-block--pb
            hw-block--limited-text
            hw-block--bg-primary-lighter
          ">
            <div class="hw-block hw-block--full">
              <h2 class="hw-h2">Spor pakker, post og gods</h2>
            </div>
            <div class="hw-block hw-block--full hw-block--mt-small">
              <label class="hw-label">Skriv inn referanse-, sendings- eller kollinummer.
              <div class="hw-search hw-search--standalone"
                data-hw-search
                data-hw-search-placeholders='["f.eks AB123456789NO"]'
              >
                <div class="hw-search__inner">
                  <input
                    data-hw-search-input
                    class="hw-search__input" type="text" />
                  <span class="hw-search__placeholder" data-hw-search-placeholder></span>
                </div>
                <button type="submit" class="hw-button hw-button--primary">Spor</button>
              </div>
              </label>
            </div>
            <div class="hw-block hw-block--full hw-block--mt-large">
              <a href="#" class="hw-link">Sporing av container</a>
            </div>
            <div class="hw-block hw-block--full hw-block--mt-small">
              <a href="#" class="hw-link">Sporing av flytransport</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <main class="hw-block hw-block--full hw-block--limited-text">

      <div class="hw-block hw-block--mt-large">
        <h2>Ofte stilte spørsmål</h2>
      </div>

      <div class="
        hw-block
        hw-block--mt-small
        hw-block--mb-large
      ">
        <ul class="hw-accordion" data-hw-accordion="example1">
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
          <li class="hw-accordion__item">
            <button class="hw-accordion__trigger">
              Lorem ipsum dolor sit amet
              <div class="hw-accordion__arrow"></div>
            </button>
            <div class="hw-accordion__contents">
              <div class="hw-wysiwyg hw-wysiwyg--small">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          </li>
        </ul>
      </div>


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
