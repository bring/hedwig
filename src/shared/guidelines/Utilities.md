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

### Examples
```code
[Mobile/tablet]       .hw-mobile-only
[Desktop]             .hw-desktop-only
[Print]               .hw-print-only
[Screen]              .hw-screen-only
```

```html|span-6,responsive
  <div class="hw-block hw-block--mb hw-mobile-only">
    <p class="hw-helpers-highlight">Display only on mobile/tablet</p>
  </div>

  <div class="hw-block hw-desktop-only">
    <p class="hw-helpers-highlight">Display only on desktop</p>
  </div>
  
  <div class="hw-block hw-print-only">
    <p class="hw-helpers-highlight">Display only on print, not on screen</p>
  </div>
  
  <div class="hw-block hw-screen-only">
    <p class="hw-helpers-highlight">Display only on screens, not in print</p>
  </div>
  
```

## Print

### Print view utilities

There are a few utilities to help shape and tweak the print view for a page. They range from hiding
elements from view, to fixing where the is a page break when printing

```code
[Hidden in print]                 .hw-print-hidden
[Show as block in print]          .hw-print-show-block
[Show as inline in print]         .hw-print-show-inline
[Show as flex in print]           .hw-print-show-flex
[Show as inline-block in print]   .hw-print-show-inline-block { display: inline-block; }

[Page break before element]        .hw-print-break-before
[Page break after element]         .hw-print-break-after
[Do not page break around element] .hw-print-no-break

```
