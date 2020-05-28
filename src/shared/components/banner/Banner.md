{navigation}






> Used for the interactive information banner at the top of the page


### Markup
```code   
[Base]               .hw-banner;

Modifiers:
[Expanded]            .hw-banner--expanded;
```

### Data properties
```code
Required:
[data-hw-banner="name"]   name of toggle (must be unique, used for aria-roles)

```





### Banner

```html|plain,light
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



### Banner with no expand section
#### Plain text
```html|plain,light
<section class="hw-banner" data-hw-banner="example1">
  <span class="hw-banner__text">
    All traffic in Norway is on hold due to the heat wave
  </span>
</section>
```

#### Link
```html|plain,light
<section class="hw-banner" data-hw-banner="example1">
  <span class="hw-banner__text">
    <a href="https://example.com">All traffic in Norway is on hold due to the heat wave</a>
  </span>
</section>
```

#### Inline link
```html|plain,light
<section class="hw-banner" data-hw-banner="example1">
  <span class="hw-banner__text">
    All traffic in Norway is on hold due to the heat wave. <a href="https://example.com">Read more</a>
  </span>
</section>
```











# Design guidelines

> Banners are prominent messages displayed full-width at the top of the page, below the navbar. Banners are used in case of emergency or special circumstances to inform about an event or situation that has occured.



### Banner types
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/banner-types-1.png"
title: "Expand"
description: "This banner shows a one-line heading by default, and expands when clicked, showing a short paragraph with information of the occurred event or subject. The expanded section can contain a link to a page for further reading."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/banner-types-2.png"
title: "No expand"
description: "This banner shows a short sentence of information on one line, with no option to expand. The banner can be static or contain links for further reading."
```


## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/banner-do-1.png"
description: "Do use a solid button for main option, and outlined buttons for other options."
```

### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/banner-dont-1.png"
description: "Don’t use multiple solid buttons together."
```
