{navigation}


> The navbar is the container for primary navigation of {postenbring}’s website. The navbar is placed at the top of every page of the website.


```code
[Base]            .hw-navbar

Modifiers:
[Absolute]        .hw-navbar--absolute
[Fixed]           .hw-navbar--fixed
```




### Default navbar (with search and selector menu)

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">

    <div class="hw-navbar__top">
      <a href="#" class="hw-navbar__logo">
        <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-{postenbring}"></use>
        </svg>
      </a>
      <a class="hw-navbar__skip-to-content" href="#">Skip to main content</a>
      
      <div class="hw-navbar__selector">
        <a href="#" class="hw-navbar__selector-item hw-navbar__selector-item__selected">Privat</a>
        <a href="#" class="hw-navbar__selector-item">Bedrift</a>
      </div>

      <nav class="hw-navbar__menu">
        <button class="hw-navbar__search-button" data-hw-toggle-search>
          <span class="hw-navbar__search-text">Search</span><!--
          --><i class="hw-navbar__icon far fa-search fa-2x"></i>
        </button>
        <button class="hw-navbar__item" data-hw-drawer-trigger="login">Sign in<!--
          --><i class="hw-navbar__icon far fa-user fa-2x"></i>
        </button>
        <button class="hw-navbar__menu-button" data-hw-toggle-menu><!--
          --><span class="hw-navbar__menu-button-label-menu">Menu</span><!--
          --><span class="hw-navbar__menu-button-label-close">Close</span><!--
          --><span class="fa-stack hw-navbar__menu-button-toggle">
              <i class="hw-navbar__bars far fa-bars fa-stack-2x"></i>
              <i class="hw-navbar__times fal fa-times fa-stack-2x"></i>
        </button>
         <section class="hw-navbar__drawer" data-hw-menu-drawer>
               <div class="hw-navbar__drawer-content">
                 <div class="hw-navbar__drawer-mobile">
                    <div class="hw-container">
                      <div class="hw-block">
                        <div class="hw-navbar__selector hw-navbar__selector__mobile">
                          <a href="#" class="hw-navbar__selector-item hw-navbar__selector-item__selected">Privat</a>
                          <a href="#" class="hw-navbar__selector-item">Bedrift</a>
                        </div>
                      </div>
                    </div>

                    <div class="hw-container">
                    <div class="hw-block--mt-medium-2">
                     <div>
                       <h5>Title</h5>
                       <ul class="hw-linklist">
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#pakke"></use></svg></i> Service name</a></li>
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#mybring"></use></svg></i> Service name</a></li>
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#avis"></use></svg></i> Service name</a></li>
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#kundeservice"></use></svg></i> Service name</a></li>
                       </ul>
                     </div>
                   </div>


                   <ul class="hw-accordion hw-accordion--menu" data-hw-accordion="mobile-menu" data-hw-accordion-allow-multiple>
                     <li class="hw-accordion__item">
                       <button class="hw-accordion__trigger">Title<div class="hw-accordion__arrow"></div></button>
                       <div class="hw-accordion__contents">
                         <ul class="hw-accordion__link-items">
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 1</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 2</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 3</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 4</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 5</a></li>
                         </ul>
                       </div>
                     </li>
                     <li class="hw-accordion__item">
                       <button class="hw-accordion__trigger">Title<div class="hw-accordion__arrow"></div></button>
                       <div class="hw-accordion__contents">
                         <ul class="hw-accordion__link-items">
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 1</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 2</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 3</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 4</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 5</a></li>
                         </ul>
                       </div>
                     </li>
                     <li class="hw-accordion__item">
                       <button class="hw-accordion__trigger">Title<div class="hw-accordion__arrow"></div></button>
                       <div class="hw-accordion__contents">
                         <ul class="hw-accordion__link-items">
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 1</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 2</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 3</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 4</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 5</a></li>
                         </ul>
                       </div>
                     </li>
                     <li class="hw-accordion__item">
                       <button class="hw-accordion__trigger">Title<div class="hw-accordion__arrow"></div></button>
                       <div class="hw-accordion__contents">
                         <ul class="hw-accordion__link-items">
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 1</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 2</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 3</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 4</a></li>
                             <li class="hw-accordion__link-item"><a class="hw-accordion__link" href="#">Link item 5</a></li>
                         </ul>
                       </div>
                     </li>

                   </ul>
                  </div>
                 </div>







                 <div class="hw-navbar__drawer-desktop">
                  <div class="hw-flex hw-flex--fourths hw-flex--gutter-large-desktop">
                     <div>
                       <h5>Title</h5>
                       <ul class="hw-linklist">
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#pakke"></use></svg></i> Service name</a></li>
                       </ul>
                     </div>
                     <div>
                       <h5>&nbsp;</h5>
                       <ul class="hw-linklist">
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#mybring"></use></svg></i> Service name</a></li>
                       </ul>
                     </div>
                     <div>
                       <h5>&nbsp;</h5>
                       <ul class="hw-linklist">
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#avis"></use></svg></i> Service name</a></li>
                       </ul>
                     </div>
                     <div>
                       <h5>&nbsp;</h5>
                       <ul class="hw-linklist">
                         <li><a href="#"><svg class="hw-icon hw-icon--size-medium"><use xlink:href="#kundeservice"></use></svg></i> Service name</a></li>
                       </ul>
                     </div>
                   </div>

                   <div class="hw-flex hw-flex--fourths hw-flex--gutter-large-desktop">
                     <div>
                       <h5>Title</h5>
                       <ul class="hw-linklist">
                         <li><a href="#">Link item 1</a></li>
                         <li><a href="#">Link item 2</a></li>
                         <li><a href="#">Link item 3</a></li>
                         <li><a href="#">Link item 4</a></li>
                         <li><a href="#">Link item 5</a></li>
                       </ul>
                     </div>
                     <div>
                       <h5>Title</h5>
                       <ul class="hw-linklist">
                         <li><a href="#">Link item 1</a></li>
                         <li><a href="#">Link item 2</a></li>
                         <li><a href="#">Link item 3</a></li>
                         <li><a href="#">Link item 4</a></li>
                         <li><a href="#">Link item 5</a></li>
                       </ul>
                     </div><div>
                       <h5>Title</h5>
                       <ul class="hw-linklist">
                         <li><a href="#">Link item 1</a></li>
                         <li><a href="#">Link item 2</a></li>
                         <li><a href="#">Link item 3</a></li>
                         <li><a href="#">Link item 4</a></li>
                         <li><a href="#">Link item 5</a></li>
                       </ul>
                     </div><div>
                       <h5>Title</h5>
                       <ul class="hw-linklist">
                         <li><a href="#">Link item 1</a></li>
                         <li><a href="#">Link item 2</a></li>
                         <li><a href="#">Link item 3</a></li>
                         <li><a href="#">Link item 4</a></li>
                         <li><a href="#">Link item 5</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
      </nav>
    </div>

    <div class="hw-drawer" data-hw-drawer="login">
      <div class="hw-drawer__overlay hw-animate hw-animate--fade-in-overlay" data-hw-drawer-trigger="Drawer2"></div>
      <div class="hw-drawer__content" data-hw-drawer-content>
        <div class="hw-drawer__header">
          <div class="hw-drawer__close">
            <button class="hw-drawer__close-button" data-hw-drawer-trigger="login">
              <i class="fas fa-times fa-3x" title="Close drawer"></i>
            </button>
          </div>
        </div>
        <div class="hw-drawer__body">
          <div class="hw-block hw-block--mb hw-text-center">
            <i class="far fa-user fa-7x hw-color-gray-light"></i>
          </div>
          <div class="hw-block hw-block--mb">
            <h5 class="hw-text-center">Hvor vil du logge inn?</h5>
          </div>
          <hr class="hw-hr hw-hr--centered">
          <div class="hw-block hw-block--mt">
            <div class="hw-container hw-container--narrow">
              <a class="hw-button hw-button--primary hw-button--large hw-button--full" href="#">
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

    <div class="hw-navbar__overlay" data-hw-navbar-overlay></div>
    <section class="hw-navbar__search">
          <div class="hw-search hw-search--large" data-hw-search>
            <span class="hw-search__background"></span>
            <div class="hw-search__inner">
              <form method="get" action="/s%C3%B8k" id="react-navbar-search-form" role="search" aria-label="nettside innhold">
                <input
                  data-hw-search-input
                  class="hw-search__input" type="text"
                  aria-label="Søk"
                  placeholder="Søk"
                />
              </form>
              <i class="far fa-search hw-search__icon"></i>
              <button class="hw-search__button-inside" data-hw-search-reset><i class="fas fa-times-circle"></i></button>
            </div>
            <ul class="hw-search__suggestions">
              <li class="hw-search__suggestion" data-hw-search-suggestion>
                <a class="hw-search__suggestion-link" tabindex="-1" href="3">
                  <p class="hw-search__suggestion-title">Flyttetips</p>
                  <p class="hw-search__suggestion-extra">Innhold</p>
                </a>
              </li>
              <li class="hw-search__suggestion" data-hw-search-suggestion>
                <a class="hw-search__suggestion-link" tabindex="-1" href="3">
                  <p class="hw-search__suggestion-title">Adresseendring</p>
                  <p class="hw-search__suggestion-extra">Innhold</p>
                </a>
              </li>
              <li class="hw-search__suggestion" data-hw-search-suggestion>
                <a class="hw-search__suggestion-link" tabindex="-1" href="3">
                  <p class="hw-search__suggestion-title">Tolltjenester</p>
                  <p class="hw-search__suggestion-extra">Innhold</p>
                </a>
              </li>
            </ul>
          </div>
      <button class="hw-navbar__close-search" data-hw-navbar-close-search>
        <i class="far fa-times fa-2x"></i>
      </button>
    </section>
  </div>
</header>
```


The navbar `menu` and `search` functions depends on the following page structure.
When opening the menu or search, Hedwig will modify both <main> and <footer> to improve scrolling.
```
<html>
  <body>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </body>
</html>
```


## Items

The navbar can have items inside the `hw-navbar__menu` subitem.

```html
<button class="hw-navbar__item">Logg inn<!--
  --><i class="hw-navbar__icon far fa-user fa-2x"></i>
</button>
```

The buttons can either use tag <button> or <a>. Here is an <a>
```html
<a class="hw-navbar__item">Logg inn<!--
--><i class="hw-navbar__icon far fa-user fa-2x"></i>
</a>
```


#### Disclaimer

On this page, only the first navbar is able to open the search, menu and login. Normally you'll have only one Navbar on a page.



### Navbar with menu

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__top">
      <a href="#" class="hw-navbar__logo">
        <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-{postenbring}"></use>
        </svg>
      </a>
      <nav class="hw-navbar__menu">
        <button class="hw-navbar__menu-button" data-hw-toggle-menu><!--
          --><span class="hw-navbar__menu-button-label-menu">Menu</span><!--
          --><span class="hw-navbar__menu-button-label-close">Close</span><!--
          --><span class="fa-stack hw-navbar__menu-button-toggle">
              <i class="hw-navbar__bars far fa-bars fa-stack-2x"></i>
              <i class="hw-navbar__times far fa-times fa-stack-2x"></i>
        </button>
        <section class="hw-navbar__drawer" data-hw-menu-drawer>
          <div class="hw-navbar__drawer-content">
            <div class="hw-navbar__drawer-mobile">
              <ul class="hw-accordion hw-accordion--menu" data-hw-accordion="mobile-menu2" data-hw-accordion-allow-multiple>
                <li class="hw-accordion__item">
                    <button class="hw-accordion__trigger">
                        Sende
                        <div class="hw-accordion__arrow"></div>
                    </button>
                    <div class="hw-accordion__contents">
                        <ul class="hw-accordion__link-items">
                            <li class="hw-accordion__link-item">
                                <a class="hw-accordion__link" href="#">Post - like formater</a>
                            </li>
                            <li class="hw-accordion__link-item">
                                <a class="hw-accordion__link" href="#">Post - blandede formater</a>
                            </li>
                            <li class="hw-accordion__link-item">
                                <a class="hw-accordion__link" href="#" target="_blank">En ekstern lenke</a>
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
                                <a class="hw-accordion__link" href="#">Spore</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hw-accordion__item">
                    <button class="hw-accordion__trigger">
                        Kundeservice
                        <div class="hw-accordion__arrow"></div>
                    </button>
                    <div class="hw-accordion__contents">
                        <ul class="hw-accordion__link-items">
                            <li class="hw-accordion__link-item">
                                <a class="hw-accordion__link" href="#" target="_blank">Må ha en lenke ja</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hw-accordion__item">
                    <button class="hw-accordion__trigger">
                        Ekstra Kolonne
                        <div class="hw-accordion__arrow"></div>
                    </button>
                    <div class="hw-accordion__contents">
                        <ul class="hw-accordion__link-items">
                            <li class="hw-accordion__link-item">
                                <a class="hw-accordion__link" href="#" target="_blank">Hmm</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hw-accordion__item">
                    <a class="hw-accordion__link" href="#">Kundeservice</a>
                </li>
                <li class="hw-accordion__item">
                    <a class="hw-accordion__link" href="#" target="_blank">Tittel med passe lengde</a>
                </li>
                <li class="hw-accordion__item">
                    <a class="hw-accordion__link" href="#" target="_blank">Frimerker til samling</a>
                </li>
                <li class="hw-accordion__item">
                    <a class="hw-accordion__link" href="#">Adresseendring og oppbevaring</a>
                </li>
                <li class="hw-accordion__item">
                    <a class="hw-accordion__link" href="#" target="_blank">Femte</a>
                </li>
              </ul>
            </div>
            <div class="hw-navbar__drawer-desktop">
              <div class="hw-flex hw-flex--fourths hw-flex--gutter-large-desktop">
                <div>
                  <h5>Sende</h5>
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
                </div>
                <div>
                  <h5>Motta</h5>
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
                </div>
                <div>
                  <h5>Rådgivning</h5>
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
                </div>
                <div>
                  <h5>Kundeservice</h5>
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
      </nav>
    </div>
  </div>
</header>
```




### Navbar without menu

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">

    <div class="hw-navbar__top">
      <a href="#" class="hw-navbar__logo">
        <svg class="hw-navbar__logo-standard" aria-labelledby="Logo" role="img">
          <title id="Logo">Go to homepage</title>
          <use xlink:href="#logo-{postenbring}"></use>
        </svg>
      </a>
    </div>
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
          <use xlink:href="#logo-{postenbring}"></use>
        </svg>
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
```

### Navbar with text logo

```html
<header class="hw-navbar">
  <div class="hw-navbar__content">
    <div class="hw-navbar__top">
      <a href="#" class="hw-navbar__logo">
        <h1 class="hw-color-primary hw-h1 hw-navbar__logo-text">Kundeservice</h1>
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
```




# Design guidelines


{bring}
> The navbar is the container for primary navigation of Bring’s website. The navbar is placed at the top of every page of the website.

> The navbar contains Bring’s logo on the left side, and three navigation links on the right side. Click on Search to activate the global search field. Sign in lets users sign in to a personal area of the website. Click on Menu to open up the full menu.
{/bring}

{posten}
> The navbar is the container for primary navigation of Posten’s website. The navbar is placed at the top of every page of the website.

> The navbar contains Posten’s logo on the left side, and three navigation links on the right side. Click on Search to activate the global search field. Sign in lets users sign in to a personal area of the website. Click on Menu to open up the full menu.
{/posten}



```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-0.png"
title: "Default navbar"
```

```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-1.png"
title: "Menu opened"
```

**1. Navbar**
This is the default navbar and should not be edited or customized.

**2. Primary menu items**
Primary menu items are listed at the top and styled with an icon prior to the link text. These should reflect the most popular services users use on the website.

**3. Secondary menu items**
Secondary menu items are listed below the primary menu items. Menu items should be sorted together in columns by category.



#### Navbar on mobile

On small screens the logo takes the center stage, with the search icon residing on the left side and the menu icon residing on the right side.

Primary menu items are listed at the top, with the secondary menu items listed as an accordion beneath.


```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-2.png"
title: "Navbar on mobile"
```

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-3.png"
title: "Navbar opened on mobile"
```



#### Search field in navbar

Clicking on Search in the navbar activates a global search field for users to search through Bring’s entire website.

As users start to type in keywords, a dropdown with suggestions appear.


```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-4.png"
title: "Activated search field in the navbar"
```

```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-5.png"
title: "Activated search field in the navbar"
```
