## Hero

Hero component

```code
[Base]           .hw-hero

[Large]          .hw-hero--large
```

### Default Hero (55vh)

```html|span-6
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Hero with no border

```html|span-6
  <div class="hw-hero hw-hero--no-border">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Hero small (20vh)

```html|span-6
  <div class="hw-hero hw-hero--small">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Hero full (100vh)

```html|span-6
  <div class="hw-hero hw-hero--full">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Hero large with serveral images for breakpoints (prevent loading of big images on mobile)

```html|span-6
  <div class="hw-hero" data-hw-hero data-hw-hero-images='{"small": "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png", "large": "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-2.png"}'>
    <div class="hw-hero__image"></div>
  </div>
```
