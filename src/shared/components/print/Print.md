## Print

How components and elements will be presented and work in print view

The following original classes are affected by default for the print view 
```code
nav                       Hidden
.hw-navbar                Hidden
.hw-footer__desktop       Hidden
.hw-footer__mobile        Hidden
.hw-mobile-only           Hidden
.hw-desktop-only          Hidden
.hw-button                Hidden
.hw-list                  Default view
.hw-accordion__item       Expanded
```

### Utilities

There are some new [Utilities](/Utilities) available
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

### Navbar

The [Navbar](/Navbar), as well as `<nav>` elements will be hidden by default in print mode.
This is due to them being set to `display: hidden` in the print view, as a navigation is deemed
useless on a printed page.

### Footer

The [Footer](/Footer) will be partially hidden by default in print mode.
This is due to `hw-footer__desktop` and `hw-footer__mobile` being set to `display: hidden` in the
print view, as they are deemed to serve no purpose on a printed page, but the copyright segment
should still be visible.

### Buttons

[Buttons](/Buttons) will be hidden by default in print view, as they lack functionality on a printed
page.

### Lists

[List](/List) elements will look slightly different in print view. This is due to image-base list
icons not being supported by print view by default. So lists will be displayed with the default
disc mode in print view.

### Accordions

[Accordion](/Accordion) components will be expanded by default, so that all data and/or information
inside will be visible, and not obscured, in print view. 

#### Example

```html|span-6
  <ul class="hw-accordion" data-hw-accordion>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Try viewing this in print as both opened and closed.
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>You will notice that even when closed, this line will be visible in print view.</p>
      </div>
    </div>
    </li>
  </ul>
```
