## Hero

Hero component

```code
[Base]           .hw-hero

[Large]          .hw-hero--large
[Full]           .hw-hero--full
```

### Default Hero

```html|span-6
  <div class="hw-hero rellax">
    <div class="hw-hero__image" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero-image-1.png');" />
  </div>
```

### Large hero with Headline

```html|span-6
  <div class="hw-hero hw-hero--large rellax">
    <div class="hw-hero__image rellax" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero-image-1.png');"
    data-rellax-speed="-4"></div>
    <div class="hw-hero__overlay"></div>
    <div class="hw-hero__contents">
      <h1>Headline</h1>
    </div>
  </div>
```

### Large hero with angled overlay and search

```html|span-6
  <div class="hw-hero hw-hero--large rellax">
    <div class="hw-hero__image rellax" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero-image-1.png');"
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
```

### Full

```html|span-6
<div class="hw-hero hw-hero--full rellax">
  <div class="hw-hero__image" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero-image-1.png');"></div>
  <div class="hw-hero__overlay"></div>
  <div class="hw-hero__contents">
    <h1>Headline</h1>
  </div>
</div>
```
