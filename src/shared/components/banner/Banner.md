## Information Banner

Used for the interactive information banner at the top of the page

```code
Required:

[data-hw-banner="name"]   name of toggle (must be unique, used for aria-roles)

```


### Example banner

```html
light: true,
plain: true
---
  <section class="hw-banner" data-hw-banner="example1">
    <button class="hw-banner__trigger">
      <span class="hw-banner__text">
        All traffic in Norway is on hold due to the heat wave
      </span>
      <i class="fas fa-chevron-down" data-fa-transform="down-2" title="Open banner information"></i>
    </button>
    <div class="hw-banner__contents">
      The asphalt on the roads is melting and our vehicles are stuck in thick oil. Drone deliveries operating as normal.
      <a href="#" class="hw-banner__read-more-link">Read more</a>
    </div>
  </section>
```


### Example banner OLD

```html
light: true,
plain: true
---
  <section class="hw-banner" data-hw-banner="example1">
      <button class="hw-banner__trigger">
        <span class="hw-banner__text">
          All traffic in Norway is on hold due to the heat wave
        </span>
        <i class="fas fa-chevron-down" data-fa-transform="down-2" title="Open banner information"></i>
      </button>
      <div class="hw-banner__contents">
        <button class="hw-banner__trigger-close">
          <i class="fas fa-lg fa-chevron-up" title="Close banner information"></i>
        </button>
        <div class="hw-banner__title" role="heading" aria-level="2">Hot! Hot! Hot!</div>
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


### Banner with no expand section
###### Plain text
```html
light: true,
plain: true
---
<section class="hw-banner" data-hw-banner="example1">
  <span class="hw-banner__text">
    All traffic in Norway is on hold due to the heat wave
  </span>
</section>
```

###### Link
```html
light: true,
plain: true
---
<section class="hw-banner" data-hw-banner="example1">
  <span class="hw-banner__text">
    <a href="https://example.com">All traffic in Norway is on hold due to the heat wave</a>
  </span>
</section>
```

###### Inline link
```html
light: true,
plain: true
---
<section class="hw-banner" data-hw-banner="example1">
  <span class="hw-banner__text">
    All traffic in Norway is on hold due to the heat wave. <a href="https://example.com">Read more</a>
  </span>
</section>
```