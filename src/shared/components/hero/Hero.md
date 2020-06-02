


> Hero component

```code
[Base]           .hw-hero

Modifiers:
[Large]          .hw-hero--large
[Responsive]     .hw-hero--[mobile/desktop]-[size]
```



### Default Hero (55vh)

```html|span-6,light,plain
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"></div>
  </div>
```

### Hero small (35vh)
```hint
Changed from 20vh to 35vh in version 6.1.4
```

```html|span-6,light,plain
  <div class="hw-hero hw-hero--small">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"></div>
  </div>
```

### Hero full (100vh minus [height of navbar])
Together with navbar this will occupy full height of viewport

```html|span-6,light,plain
  <div class="hw-hero hw-hero--full">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');"></div>
  </div>
```

### Hero large with several images for breakpoints (prevent loading of big images on mobile)

```html|span-6,light,plain
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

```html|span-6,light,plain
  
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');">
    <div class="hw-hero__overlay hw-background-color-opaque-primary">
      <div class="hw-hero__content hw-hero__content--center hw-hero__content--middle">
        <div class="hw-block">
          <p class="hw-color-white">Hero with overlay and some white content (center and middle)</p>
        </div>
      </div>
      </div>
  </div>
</div>
```

### Responsive hero (default on desktop, small on mobile)

```html|span-6,light,plain
<div class="hw-hero hw-hero--mobile-small">
    <div class="hw-hero__image" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/hero-image-1.png');">
  </div>
</div>
```











# Design guidelines

> The hero component is placed at the top of the page, and contains an image or a video. The hero is full-width, with the height responsive to the height of the browser.



### {title} formats
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-formats-1.png"
title: "Default (55vh)"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-formats-2.png"
title: "Small (35vh)"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-formats-3.png"
title: "Full (100vh-navbar)"
```



### {title} mobile
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-mobile-1.png"
title: "Mobile – Default (55vh)"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-mobile-2.png"
title: "Mobile – Small (35vh)"
```







## Best practices

#### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Keep in mind how the image of your choice will crop when viewed in different viewport sizes. A centered motif will scale easier, with less disturbance."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "Keep in mind how the image of your choice will crop when viewed in different viewport sizes. A centered motif will scale easier, with less disturbance."
```

#### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Keep in mind how the image of your choice will crop when viewed in different viewport sizes. An image with the motif to one of the sides may crop off the edges in an unfortunate way."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Keep in mind how the image of your choice will crop when viewed in different viewport sizes. An image with the motif to one of the sides may crop off the edges in an unfortunate way."
```