{navigation}






> Used for the interactive information banner at the top of the page


### Markup
```code   
[Base]               .hw-warning-banner;

Modifiers:
[Expanded]            .hw-warning-banner--expanded;
```

### Data attributes
```code
Required:
[data-hw-warning-banner="name"]   name of toggle (must be unique, used for aria-roles)

```





### Warning Banner

```html|plain,light
  <section class="hw-warning-banner" data-hw-warning-banner="example1">
    <button class="hw-warning-banner__trigger">
      <span class="hw-warning-banner__text">
        All traffic in Norway is on hold due to the heat wave
      </span>
      <i class="fas fa-chevron-down" data-fa-transform="down-2" title="Open warning-banner information"></i>
    </button>
    <div class="hw-warning-banner__contents">
      The asphalt on the roads is melting and our vehicles are stuck in thick oil. Drone deliveries operating as normal.
      <a href="#" class="hw-warning-banner__read-more-link">Read more</a>
    </div>
  </section>
```



### Warning Banner with no expand section
#### Plain text
```html|plain,light
<section class="hw-warning-banner" data-hw-warning-banner="example1">
  <span class="hw-warning-banner__text">
    All traffic in Norway is on hold due to the heat wave
  </span>
</section>
```

#### Link
```html|plain,light
<section class="hw-warning-banner" data-hw-warning-banner="example1">
  <span class="hw-warning-banner__text">
    <a href="https://example.com">All traffic in Norway is on hold due to the heat wave</a>
  </span>
</section>
```

#### Inline link
```html|plain,light
<section class="hw-warning-banner" data-hw-warning-banner="example1">
  <span class="hw-warning-banner__text">
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
src: "{assets}/img/{postenbring}/warning-banner-types-1.png"
title: "Expand"
description: "This banner shows a one-line heading by default, and expands when clicked, showing a short paragraph with information of the occurred event or subject. The expanded section can contain a link to a page for further reading."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/warning-banner-types-2.png"
title: "No expand"
description: "This banner shows a short sentence of information on one line, with no option to expand. The banner can be static or contain links for further reading."
```


## Best practices

#### Do this

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/warning-banner-do-1.png"
description: "Keep the information short and clear, and include a link to a separate page with all the information and details for users to read."
```

#### Do not do this
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/warning-banner-dont-1.png"
description: "Do not add multiple levels of nested expanding sections in a banner."
```
