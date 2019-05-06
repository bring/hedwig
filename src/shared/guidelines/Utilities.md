## Display utilities

Gives the set display properties on certain elements. Eg: hiding input fields in form submits.

**NB:** Be careful not to use these helpers in reusable components, as it will be difficult to apply style changes to all components at a later point.

```code
[Display none]            .hw-display-none
```


## Responsive

### Responsive hide classes
Responsive hide classes can be used to restrict the display of content to a certain viewport size.
The available sizes are mobile/tablet and desktop

### Exapmles
```code
[Mobile/tablet]       .hw-mobile-only
[Desktop]             .hw-desktop-only
```

```html|span-6,responsive
  <div class="hw-block hw-block--mb hw-mobile-only">
    
      <p class="hw-helpers-highlight">Display only on mobile/tablet</p>
    </div>

   <div class="hw-block hw-desktop-only">
      <p class="hw-helpers-highlight">Display only on desktop</p>
    </div>
  
```
