## Block

This is the most commonly used component.

The purpose of the Block component is to apply margin and padding to all components, as well as apply max-widths and background-colors.

In an ideal scenario, there is no margin/padding applied to any other component, instead wrap the element in Block and use this to generate the required margin/padding.

The only exception to this rule is "rich text" areas from the CMS, for this case, use the [Wysiwyg Container](/Wysiwyg).

```code
<div class="hw-block">...</div>
```

### Example blocks

```html|span-4,plain,light
  <div class="hw-block">
    <p>Default block</p>
  </div>
```

### Variants (with margins & padding higlighted)

```html|span-4,plain,light
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block">
      <p>Default block</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--full">
      <p>Block with no side padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--half">
      <p>Block with half side padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--double">
      <p>Block with double side padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
      <p>Block with top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--margin-top-half hw-block--margin-bottom-half">
      <p>Block with half top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--margin-top-double hw-block--margin-bottom-double">
      <p>Block with double top and bottom margins</p>
    </div>
  </div>
```

### Block modifiers (margin & padding)
```code
[Full]                    .hw-block--full (no side paddings)
[Half]                    .hw-block--half (half side paddings)
[Margin top]              .hw-block--margin-top
[Half margin top]         .hw-block--margin-top-half
[Double margin top]       .hw-block--margin-top-double
[Margin bottom]           .hw-block--margin-bottom
[Half margin bottom]      .hw-block--margin-bottom-half
[Double margin bottom]    .hw-block--margin-bottom-double
[Padding top]             .hw-block--padding-top
[Half padding top]        .hw-block--padding-top-half
[Double padding top]      .hw-block--padding-top-double
[Padding bottom]          .hw-block--padding-bottom
[Half padding bottom]     .hw-block--padding-bottom-half
[Double padding bottom]   .hw-block--padding-bottom-double
```

### Block modifiers (max-widths)
```code
[Limited]                 .hw-block--limited (default site width)
[Narrow]                  .hw-block--limited-narrow
[Wide]                    .hw-block--limited-wide
[Text]                    .hw-block--limited-text
```

### Block modifiers (colors)
```code
[Primary]                 .hw-block--col-primary
[Gray]                    .hw-block--col-gray
[White]                   .hw-block--col-white
```
