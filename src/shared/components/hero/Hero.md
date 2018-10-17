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

### Hero small (35vh)
```hint
Changed from 20vh to 35vh in version 6.1.4
```

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

### Hero large with several images for breakpoints (prevent loading of big images on mobile)

```html|span-6
  <div class="hw-hero" data-hw-hero data-hw-hero-images='{"small": "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png", "large": "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-2.png"}'>
    <div class="hw-hero__image"></div>
  </div>
```

### Hero with content
Content can be placed on top of the hero image and positioned right, left or center, and top, bottom or middle

```code
[Top]           .hw-hero__content--top
[Bottom]        .hw-hero__content--bottom
[Middle]        .hw-hero__content--middle
[Left]          .hw-hero__content--left
[Right]         .hw-hero__content--right
[Center]        .hw-hero__content--center

```

```html|span-6
  
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"/>
    <div class="hw-hero__overlay hw-background-color-primary">
      <div class="hw-hero__content hw-hero__content--center hw-hero__content--middle">
        <div class="hw-block">
          <p class="hw-color-white">Hero with overlay and some white content (center and middle)</p>
        </div>
      </div>
      </div>
  </div>

```
