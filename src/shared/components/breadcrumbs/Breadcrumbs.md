{navigation}

```code
[Base]          .hw-breadcrumbs               Surrounding element
[Item]          .hw-breadcrumb                One breadcrumb

Elements:
[Previous]      .hw-breadcrumb__previous      The breadcrumb for the previous page
[Arrow mobile]  .hw-breadcrumb__arrow-mobile  Arrow shown on mobile, only required for the Previous element
[Arrow]         .hw-breadcrumb__arrow         Arrow shown between hw-breadcrumb items on desktop
[Current]       .hw-breadcrumb__current       The page where we are currently at
```



### Single level

```html|plain,light
<div class="hw-breadcrumbs">
  <div class="hw-breadcrumb hw-breadcrumb--single">
    <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow"></i>
    <a class="hw-link" href="#">    
      Back to start
    </a>
  </div>
</div>
```



### Multi-level

```html|plain,light
<nav class="hw-breadcrumbs" aria-label="Breadcrumb">
    <ol>
        <li class="hw-breadcrumb">
            <a class="hw-link" href="#">Home</a>
            <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
        </li>
        <li class="hw-breadcrumb">
            <a class="hw-link" href="#">Level 2</a>
            <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
        </li>
        <li class="hw-breadcrumb__previous">
            <i class="fas fa-chevron-left fa-xs hw-breadcrumb__arrow-mobile"></i>
            <a class="hw-link" href="#">Previous page</a>
            <i class="fas fa-chevron-right fa-xs hw-breadcrumb__arrow"></i>
        </li>
        <li class="hw-breadcrumb__current">
            Current page
        </li>
    </ol>
</nav>

```
