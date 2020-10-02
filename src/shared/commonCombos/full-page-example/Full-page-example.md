### Example page

```html|plain,light
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__top">
      <a href="#" class="hw-navbar__logo">
        <h2 class="hw-color-primary hw-h2 hw-navbar__logo-text">Hedwig Example Page</h2>
      </a>
      <nav class="hw-navbar__menu">
        <a href="#" class="hw-navbar__item">English</a>
        <a href="#" class="hw-navbar__item">Login<!--
        --><i class="hw-navbar__icon far fa-user fa-2x"></i>
        </a>
        <button class="hw-navbar__menu-button" data-hw-toggle-menu><!--
          --><span class="hw-navbar__menu-button-label-menu">Menu</span><!--
          --><span class="hw-navbar__menu-button-label-close">Close</span><!--
          --><span class="fa-stack hw-navbar__menu-button-toggle">
              <i class="hw-navbar__bars far fa-bars fa-stack-2x"></i>
              <i class="hw-navbar__times far fa-times fa-stack-2x"></i>
        </button>
      </nav>
    </div>
    <section class="hw-navbar__drawer" data-hw-menu-drawer></section>
  </div>
</header>
<div class="hw-container hw-container--mt hw-container--mb">
 <div class="hw-block hw-block--mt-medium-3">
  <div class="hw-breadcrumbs">
    <div class="hw-breadcrumb">
      <a class="hw-link" href="#">Home</a>
    </div>
    <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>

    <div class="hw-breadcrumb">
      <a class="hw-link" href="#">Level 2</a>
    </div>
    <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>

    <div class="hw-breadcrumb">
      <a class="hw-link" href="#">
        <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow-mobile"></i>
        Level 3
      </a>
    </div>
    <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>

    <span class="hw-breadcrumb__current">Current content</span>
  </div>
</div>
<div class="hw-block hw-block--mt-medium-3 hw-block--mb-large-2">
  <h1>H1 Heading</h1>
</div>
<div class="hw-block hw-block--mb-medium-2">
<h2>H2 Heading</h2>
</div>
<div class="hw-block hw-block--mb-large-2">
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
</div>

<div class="hw-block hw-block--mb-medium-2">
<h3>H3 Heading</h3>
</div>
<div class="hw-block">
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
</div>
<div class="hw-block--mt-large-2 hw-block--mb-large-2">
<figure class="hw-figure">
  <div class="hw-figure__container">
    <img
      alt="Picture of happy people"
      src="/img/posten/image-placeholder.jpg"/>
  </div>
</figure>
</div>
<div class="hw-block">
Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
</div>

<div class="hw-block hw-block--mt-large-2 hw-block--mb-medium-3">
<h2>H2 Heading</h2>
</div>
<div class="hw-block hw-block--mb-large-5">
<ul class="hw-accordion" data-hw-accordion>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvordan finner jeg hvilket hentested som tilhører min adresse?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.
          </p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hva er hentefristen på sendinger jeg må hente på Posten?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Fristen for å hente pakker og andre sendinger på postkontorene er 14 dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen returnert til avsender.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvilke regler gjelder når jeg skal motta en sending fra utlandet?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Alle sendinger fra utlandet og som kan ha tollpliktig innhold vil bli tollbehandlet/tollvurdert.</p>
          <p>Private gaver med verdi inntil kr 1000 er som oftest toll og avgiftsfrie så fremt de ikke inneholder eks alkohol og tobakksvarer</p>
          <p>For all annen import hvor verdien er kr 350 (inkludert frakt og forsikring) eller mer må du som oftest betale mva (ev andre avgifter) til staten. Posten fortoller sendingen for deg mot betaling av tollklaring.</p>
        </div>
      </div>
    </li>
  </ul>
</div>

</div>


<footer class="hw-footer">
  <div class="hw-container">
    <div class="hw-block">


      <!-- Desktop footer -->

      <div class="hw-footer__desktop">


        <div class="hw-block">
          <div class="hw-grid"><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h4 class="">Title</h4>
              <div class="hw-block">
                <ul class="hw-linklist">
                  <li><a href="#">List item 1</a></li>
                  <li><a href="#">List item 2</a></li>
                  <li><a href="#">List item 3</a></li>
                  <li><a href="#">List item 4</a></li>
                  <li><a href="#">List item 5</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h4 class="">Title</h4>
              <div class="hw-block">
                <ul class="hw-linklist">
                  <li><a href="#">List item 1</a></li>
                  <li><a href="#">List item 2</a></li>
                  <li><a href="#">List item 3</a></li>
                  <li><a href="#">List item 4</a></li>
                  <li><a href="#">List item 5</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <h4 class="">Title</h4>
              <div class="hw-block">
                <ul class="hw-linklist">
                  <li><a href="#">List item 1</a></li>
                  <li><a href="#">List item 2</a></li>
                  <li><a href="#">List item 3</a></li>
                  <li><a href="#">List item 4</a></li>
                  <li><a href="#">List item 5</a></li>
                </ul>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">
              <div class="hw-block hw-block--mb-smallest">
                <button class="hw-button hw-button--full hw-button--outline">
                  For bedrifter
                </button>
              </div>

              <div class="hw-block hw-block--mb-smallest">
                <button class="hw-button hw-button--full hw-button--outline">
                  English site
                </button>
              </div>
            </div>
          </div>
        </div>


        <div class="hw-block hw-block--mt-larger">
          <div class="hw-grid"><!--
            --><div class="hw-grid__item hw-one-quarter">
              <div class="hw-block">
                <div class="hw-footer__logo">
               <!--    <a href="#" class="hw-footer__logo-link">
                    <svg class="hw-footer__logo-link-standard">
                      <use xlink:href="#logo-posten"></use>
                    </svg>
                    <svg class="hw-footer__logo-link-white">
                      <use xlink:href="#logo-posten-white"></use>
                    </svg>
                  </a> -->
                </div>
              </div>
            </div><!--
            --><div class="hw-grid__item hw-one-quarter">

            </div><!--
            --><div class="hw-grid__item hw-one-half">
              <div class="hw-block">
                <div class="hw-some">
                  <button class="hw-some__button hw-some__button--facebook">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--google">
                    <i class="fab fa-google-plus-g"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--instagram">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--twitter">
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button class="hw-some__button hw-some__button--linkedin">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hw-hr hw-block--mt-smallest"></div>


        <div class="hw-block hw-block--mt">
          <span class="hw-copyright">© Posten Norge</span>
          <a href="#" class="hw-link">Privacy and security</a>  
          <a href="#" class="hw-link">Cookies</a>
        </div>

      </div>
    </div>



    <!-- Mobile footer -->

    <div class="hw-footer__mobile">
      <nav class="hw-footer__navigation">
        <div class="hw-block hw-block--mb-smallest">
          <button class="hw-button hw-button--full hw-button--outline">
            For bedrifter
          </button>
        </div>
        <div class="hw-block hw-block--mb-smallest">
          <button class="hw-button hw-button--full hw-button--outline">
            English site
          </button>
        </div>
          <div class="hw-block hw-block--mt">
          <div class="hw-block hw-block--mb-smallest">

          </div>


        </div>
        <div class="hw-block hw-block--mt-larger">
          <ul class="hw-accordion hw-accordion--menu" data-hw-accordion="mobile-menu" data-hw-accordion-allow-multiple>
            <li class="hw-accordion__item">
              <button class="hw-accordion__trigger">
                Lorem ipsum
                <div class="hw-accordion__arrow"></div>
              </button>
              <div class="hw-accordion__contents">
                <ul class="hw-accordion__link-items">
                  <li class="hw-accordion__link-item">                            
                    <a class="hw-accordion__link">Lorem</a> 
                  </li>
                  <li class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Aliquam consequat</a>
                  </li>
                  <li  class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Vivamus eros</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Vivamus pulvinar</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Cras at</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="hw-accordion__item">
              <button class="hw-accordion__trigger">
                Lorem ipsum
                <div class="hw-accordion__arrow"></div>
              </button>
              <div class="hw-accordion__contents">
                <ul class="hw-accordion__link-items">
                  <li class="hw-accordion__link-item">                            
                    <a class="hw-accordion__link">Ipsum</a> 
                  </li>
                  <li class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Aliquam consequat</a>
                  </li>
                  <li  class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Vivamus eros</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Vivamus pulvinar</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Cras at</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="hw-accordion__item">
              <button class="hw-accordion__trigger">
                Lorem ipsum
                <div class="hw-accordion__arrow"></div>
              </button>
              <div class="hw-accordion__contents">
                <ul class="hw-accordion__link-items">
                  <li class="hw-accordion__link-item">                            
                    <a class="hw-accordion__link">Lorem</a> 
                  </li>
                  <li class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Aliquam consequat</a>
                  </li>
                  <li  class="hw-accordion__link-item">
                    <a href="#" class="hw-accordion__link">Vivamus eros</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Vivamus pulvinar</a>
                  </li>
                  <li>
                    <a href="#" class="hw-accordion__link">Cras at</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div class="hw-block hw-block--mb hw-block--mt-larger">


          <div class="hw-footer__logo">
            <a href="#" class="hw-footer__logo-link">
              <svg class="hw-footer__logo-link-standard">
                <use xlink:href="#logo-posten"></use>
              </svg>
              <svg class="hw-footer__logo-link-white">
                <use xlink:href="#logo-posten-white"></use>
              </svg>
            </a>
          </div>


          <div class="hw-some">
            <button class="hw-some__button hw-some__button--facebook">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button class="hw-some__button hw-some__button--google">
              <i class="fab fa-google-plus-g"></i>
            </button>
            <button class="hw-some__button hw-some__button--instagram">
              <i class="fab fa-instagram"></i>
            </button>
            <button class="hw-some__button hw-some__button--twitter">
              <i class="fab fa-twitter"></i>
            </button>
            <button class="hw-some__button hw-some__button--linkedin">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>


          <div class="hw-hr hw-block--mt-smallest"></div>


          <div class="hw-block hw-block--mt">
            <span class="hw-copyright">© Posten Norge</span>
          </div>
          <div class="hw-block hw-block--mt">
            <a href="#" class="hw-link">Privacy and security</a>  
            <a href="#" class="hw-link">Cookies</a>
          </div>
        </div>


      </nav>

    </div>



    <div class="hw-footer__shared">

    </div>


    </div>
  </div>
</div>
</div>
</footer>

```
