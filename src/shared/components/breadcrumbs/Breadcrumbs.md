## Breadcrumbs


```code
[Base]          .hw-breadcrumbs               Surrounding element
[Item]          .hw-breadcrumb                One breadcrumb
[Arrow mobile]  .hw-breadcrumb__arrow-mobile  Arrow shown on mobile, only required for the last hw-breadcrumb item
[Arrow]         .hw-breadcrumb__arrow         Arrow shown between hw-breadcrumb items on desktop
[Current]       .hw-breadcrumb__current       The page where we are currently at
```



### Single level

```html|plain,light
<div class="hw-breadcrumbs">
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  <span class="hw-breadcrumb__current">Start</span>
</div>
```

```code 
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Home</a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Level 2</a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">
      <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow-mobile"></i><!--
      -->Level 3
    </a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <span class="hw-breadcrumb__current">Current</span>
</div>
```




### Multi-level

```html|plain,light
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Home</a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Level 2</a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">
      <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow-mobile"></i><!--
      -->Level 3
    </a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <span class="hw-breadcrumb__current">Current</span>
</div>
```

```code 
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Home</a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">Level 2</a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <div class="hw-breadcrumb">
    <a class="hw-link" href="#">
      <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow-mobile"></i><!--
      -->Level 3
    </a>
  </div>
  <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
  
  <span class="hw-breadcrumb__current">Current</span>
</div>
```


