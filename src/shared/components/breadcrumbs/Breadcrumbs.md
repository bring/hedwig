{navigation}

 







```code
[Base]         .hw-breadcrumbs               Surrounding element
[Item]          .hw-breadcrumb                One breadcrumb

Elements:
[Arrow mobile]  .hw-breadcrumb__arrow-mobile  Arrow shown on mobile, only required for the last hw-breadcrumb item
[Arrow]         .hw-breadcrumb__arrow         Arrow shown between hw-breadcrumb items on desktop
[Current]       .hw-breadcrumb__current       The page where we are currently at
```





### Single level

```html|plain,light
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb hw-breadcrumb--single">
    <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
    <i class="fas fa-arrow-left fa-xs hw-breadcrumb__arrow-hover"></i>
    <a class="hw-link" href="#">Start</a>
  </div>
</div>
```


```code
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb hw-breadcrumb--single">
    <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
    <i class="fas fa-arrow-left fa-xs hw-breadcrumb__arrow-hover"></i>
    <a class="hw-link" href="#">Start</a>
  </div>
</div>
```



### Multi-level

```html|plain,light
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Home</a>
  </div>
  <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Level 2</a>
  </div>
  <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">
      <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow-mobile"></i><!--
      -->Level 3
    </a>
  </div>
  <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
  
  <span class="hw-breadcrumb__current">Current content</span>
</div>
```

```code 
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Home</a>
  </div>
  <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Level 2</a>
  </div>
  <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">
      <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow-mobile"></i><!--
      -->Level 3
    </a>
  </div>
  <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
  
  <span class="hw-breadcrumb__current">Current content</span>
</div>
```








# Design guidelines

> Breadcrumbs show users their current level, relative to the page hierarchy. Breadcrumbs makes it easy for users to quickly move up to a parent level or to a previous step.


### Types

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/breadcrumbs-types-1.png"
title: "One level"
description: "This takes you one step back, up to the parent level of the page you’re currently viewing."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/breadcrumbs-types-2.png"
title: "Multi-level"
description: "This shows the nested levels within the hierarchy down to your current location."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/breadcrumbs-types-3.png"
title: "Multi-level (more than 3 levels)"
description: "For breadcrumbs of more than three levels, the middle steps are compressed, and shown as a dropdown list when hovered."
```



## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/breadcrumbs-do-1.png"
description: "Use just one instance of breadcrumbs on a single page. Place it at the top
of the page, below the navbar."
```

### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/breadcrumbs-dont-1.png"
description: "Don’t expose too many breadcrumb levels. For instances of more than three levels, compress the middle steps and reaveal them in a dropdown on hover."
```







