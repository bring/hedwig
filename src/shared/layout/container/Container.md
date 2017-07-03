## Container

The container limits the width of it's wrapped contents. It is only used to limit content width, and does not have any inherent padding or margin. Use blocks to determine padding, margin and background color for sections.


Standard container is used for article content, and other standard page content.

Wide container is used for all content that is supposed to be as wide as the max-width of the site (like the header and footer).

Narrow container is available if you want to center content to a smaller max-width without using the grid.


```code
<div class="hw-container">...</div>
```

### Example container

```html|span-6,plain,light
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container">
      <p>Default container</p>
    </div>
  </div>
```

### Variants (with margins & padding higlighted)

```html|span-6,plain,light
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--wide">
      <p>Wide container</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-container
      hw-container--narrow
    ">
      <p>narrow container</p>
    </div>
  </div>
```

### container modifiers
```code
[Narrow]                      .hw-container--narrow
[Wide]                        .hw-container--wide
```
