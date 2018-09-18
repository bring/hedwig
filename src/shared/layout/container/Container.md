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
      <p>Default container, max width 690px</p>
    </div>
  </div>
```



### Container modifiers
```code
[Narrow]                      .hw-container--narrow
[Slim]                        .hw-container--slim
[Wide]                        .hw-container--wide
[Padding top]                 .hw-container--pt-[size]
[Padding bottom]              .hw-container--pb-[size]
[Padding left and right]      .hw-container-px

Usage:
.hw-container--pt-small will add a 18px top padding to the container
.hw-container--slim will make the container have a max width of 510px
```

### Container sizes (with margins higlighted)

```html|span-6,plain,light
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--narrow">
      <p>Narrow container, max width 300px</p>
    </div>
  </div>

  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--slim">
      <p>Slim container, max width 510px</p>
    </div>
  </div>

  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container">
      <p>Default container, max width 690px</p>
    </div>
  </div>

  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--wide">
      <p>Wide container, max width 1200px</p>
    </div>
  </div>
```

### Responsive classes for spacing
Responsive classes apply to its size and bigger (i.e medium applies to tablets and desktops)
```code
[Small]           .hw-container-small--[modifier and size]
[Medium]          .hw-container-medium--[modifier and size]
[Large]           .hw-container-large--[modifier and size]
[XLarge]          .hw-container-larger--[modifier and size]

Usage:
.hw-container-medium--pt-small will add an 18px(small) top padding on tablets and desktops
.hw-container-large--pb will add the default padding (24px) to the bottom of the container

```
### Examples of responsive classes
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

```html|span-6,responsive
<div class="hw-helpers-margin-highlighter">
  <div class="hw-container hw-container-small--pt-large hw-container-medium--pt hw-container-large--pt-small">
    <p>Container with less top padding on bigger viewports</p>
  </div>
</div>
```

### Padding left and right
```html|span-6,responsive
<div class="hw-helpers-margin-highlighter">
  <div class="hw-container hw-container--px">
    <p>Container with .hw-container--px, the padding will depend on the viewport (18px on mobile, 36px otherwise)</p>
  </div>
</div>
```


