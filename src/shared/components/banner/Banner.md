## Information Banner

Used for the interactive information banner at the top of the page

```code
Required:

[data-hw-banner="name"]   name of toggle (must be unique, used for aria-roles)

```

### Example banner

```html
  <section class="hw-banner" data-hw-banner="example1">
      <button class="hw-banner__trigger">
        <span class="hw-banner__text">
          All traffic in Norway is on hold due to the heat wave
        </span>
        <svg class="hw-icon" aria-labelledby="arrow-down" role="img">
          <title id="arrow-down">Open banner information</title>
          <use xlink:href="#caret-down"></use>
        </svg>
      </button>
      <div class="hw-banner__contents">
        <button class="hw-banner__trigger-close">
          <svg class="hw-icon" aria-labelledby="arrow-up" role="img">
            <title id="arrow-up">Close banner information</title>
            <use xlink:href="#caret-up"></use>
          </svg>
        </button>
        <div class="hw-banner__title">Hot! Hot! Hot!</div>
        <div class="hw-banner__time">
          <time>24.09.76</time>|<time>17:45</time>
        </div>
        <div class="hw-banner__subtitle">
          Asfalten på veiene smelter og bilene våre kjører seg fast i tjukk olje. Droneleveransene våre går som normalt.
        </div>
        <a href="#" class="hw-banner__read-more-link">Read more</a>
    </div>
  </section>
```

### Banner with read more

```html
  <section class="hw-banner" data-hw-banner="example2">
      <button class="hw-banner__trigger">
        <span class="hw-banner__text">
          Snow storm causes delays
        </span>
        <svg class="hw-icon" aria-labelledby="arrow-down" role="img">
          <title id="arrow-down">Open banner information</title>
          <use xlink:href="#caret-down"></use>
        </svg>
      </button>
      <div class="hw-banner__contents">
        <button class="hw-banner__trigger-close">
          <svg class="hw-icon" aria-labelledby="arrow-up" role="img">
            <title id="arrow-up">Close banner information</title>
            <use xlink:href="#caret-up"></use>
          </svg>
        </button>
        <div class="hw-banner__title">14 Meters of snow expected</div>
        <div class="hw-banner__time">
          <time>24.09.76</time>|<time>17:45</time>
        </div>
        <div class="hw-banner__subtitle">
          The blizzard is causing delays across the Oslo region.
        </div>
        <a href="#" class="hw-banner__read-more-link">Read more</a>
        <button class="hw-banner__read-more-button">
            <svg class="hw-icon">
              <use xlink:href="#caret-down"></use>
            </svg>
        </button>
      </div>
      <div class="hw-banner__read-more-contents">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
  </section>
```
