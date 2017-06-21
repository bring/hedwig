## Hero

Hero component

```code
[Base]           .hw-hero

[Large]          .hw-hero--large
[Full]           .hw-hero--full
```

### Default Hero

```html|span-6
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Large hero with Headline and parallax effect

```html|span-6
  <div class="hw-hero hw-hero--large">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');" data-hw-parallax data-hw-parallax-amount="5" data-hw-parallax-start="1000"></div>
    <div class="hw-hero__overlay"></div>
    <div class="hw-hero__contents">
      <div class="hw-animate hw-animate--slide-in-bottom">
        <h1 class="hw-hero__title">Headline</h1>
      </div>
    </div>
  </div>
```

### Large hero with angled overlay and search


```code
[data-hw-hero-search]   Attaches interactivity (required)

```

```html|span-6
  <div class="hw-hero hw-hero--large" data-hw-hero>
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"></div>
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
<div class="hw-hero hw-hero--full">
  <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');" ></div>
  <div class="hw-hero__overlay"></div>
  <div class="hw-hero__contents">
    <div class="hw-animate hw-animate--slide-in-bottom">
      <h1 class="hw-hero__title">Headline</h1>
    </div>
  </div>
</div>
```
