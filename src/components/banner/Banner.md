## Information Banner

Used for the interactive information banner at the top of the page

```code
Required:

[data-hw-banner="name"]   name of toggle (must be unique, used for aria-roles)

```

### Example banner

```html|span-6
  <section class="hw-banner" data-hw-banner="example1">
      <button class="hw-banner__trigger">
        <span class="hw-banner__text">
          All traffic in Norway is on hold due to the heat wave
        </span>
        <svg class="hw-icon">
          <use xlink:href="#caret-down"></use>
        </svg>
      </button>
      <div class="hw-banner__contents">
        <div class="hw-block hw-block--full hw-block--padding-top">
          <button class="hw-banner__trigger-close">
            <svg class="hw-icon">
              <use xlink:href="#caret-up"></use>
            </svg>
          </button>
      </div>
        <div class="hw-block hw-block--padding-top-half hw-block--limited-narrow">
          <h1>Hot! Hot! Hot!</h1>
          <div class="hw-block hw-block--full hw-block--padding-top-half">
            <time>24.09.76</time>|<time>17:45</time>
          </div>
          <div class="hw-block hw-block--full hw-block--padding-top-half hw-block--padding-bottom-double">
            <h3>Asfalten på veiene smelter og bilene våre kjører seg fast i kjukk olje. Droneleveransene våre går som normalt.</h3>
          </div>
      </div>
    </div>
  </section>
```
