### Example article layout


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


    <main class="hw-block hw-block--full hw-block--limited-text">

      <article>
        <div class="hw-block hw-block--mt-large">
          <div class="hw-wysiwyg">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <p class="hw-text-lead">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <hr class="hw-hr" />
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h3>Where does it come from</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <p>-- callout --</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div class="hw-block hw-block--full hw-block--mb-large hw-block--mt-large">
              <figure class="hw-image hw-image--large">
                <img src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg" />
                <figcaption>
                  Contrary to popular belief, Lorem Ipsum is not simply random text.
                </figcaption>
              </figure>
            </div>
            <h3>Where does it come from</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <a href="#" class="hw-cta">
              <div class="hw-block hw-block--mt-large hw-block--pt hw-block--pb hw-block--mb-large hw-block--bg-gray-lighter">
                <h3 class="hw-cta__title">Lurer du på hva Bring kan gjøre med fortolling av sendingene dine?</h3>
                <button class="hw-button hw-button--primary hw-button--full">
                  Kontakt oss
                </button>
              </div>
            </a>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
          </p>
          <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <p>--callout--</p>
          <h3>Where does it come from</h3>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <h2>Tables! Hell yeah!</h2>
            <p>--table--</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <figure class="hw-image">
              <img src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg" />
              <figcaption>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </figcaption>
            </figure>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>--facttbox--</p>
          </div>
        </div>
      </article>

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
