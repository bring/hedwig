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

### Large hero with angled overlay

```html|span-6
  <div class="hw-hero hw-hero--large rellax">
    <div class="hw-hero__image rellax" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero-image-1.png');"
    data-rellax-speed="-4"></div>
    <div class="hw-hero__overlay-angle"></div>
    <div class="hw-hero__contents">
      <h1>Headline</h1>
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
