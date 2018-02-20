## Hero

Hero component

```code
[Base]           .hw-hero

[Large]          .hw-hero--large
```

### Default Hero

```html|span-6
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Hero large (40vh)

```html|span-6
  <div class="hw-hero hw-hero--large">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
  </div>
```

### Hero large with serveral images for breakpoints

```html|span-6
  <div class="hw-hero hw-hero--large" data-hw-hero data-hw-hero-images='{"small": "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png", "large": "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-2.png"}'>
    <div class="hw-hero__image"></div>
  </div>
```
