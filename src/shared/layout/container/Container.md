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
    <div class="hw-container hw-container--narrow">
      <p>narrow container</p>
    </div>
  </div>
```

### Container modifiers
```code
[Narrow]                      .hw-container--narrow
[Wide]                        .hw-container--wide
[Padding top]                 .hw-container--pt-[size]
[Padding bottom]              .hw-container--pb-[size]
```

```html
<div class="hw-helpers-margin-highlighter">
  <div class="hw-container hw-container--pt hw-container--pb">
    <p>container with standard padding on top and bottom</p>
  </div>
</div>

<div class="hw-helpers-margin-highlighter">
  <div class="hw-container hw-container--pt-large hw-container--pb">
    <p>container with large padding top and standard padding bottom</p>
  </div>
</div>
```

### Responsive classes for spacing
```code
[Small]           .hw-container-small--[modifier and size]
[Medium]          .hw-container-medium--[modifier and size]
[Large]           .hw-container-large--[modifier and size]
[XLarge]          .hw-container-larger--[modifier and size]
```

```html|span-6,responsive
<div class="hw-helpers-margin-highlighter">
  <div class="hw-container hw-container--pt-larger hw-container--pb-larger hw-container-small--pt hw-container-small--pb">
    <p>container with the largest padding, but standard padding on small viewports</p>
  </div>
</div>

<div class="hw-helpers-margin-highlighter">
  <div class="hw-container hw-container--pt hw-container--pb hw-container-small--pt-none hw-container-small--pb-none">
    <p>container with standard padding on all viewports but no padding on small</p>
  </div>
</div>

```
