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
    <div class="
      hw-block 
      hw-block--full
    ">
      <p>Block with no side padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-block 
      hw-block--small
    ">
      <p>Block with small side padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-block 
      hw-block--large
    ">
      <p>Block with large side padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-block 
      hw-block--mt 
      hw-block--mb
    ">
      <p>Block with top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-block 
      hw-block--mt-small 
      hw-block--mb-small
    ">
      <p>Block with small top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-block 
      hw-block--mt-large 
      hw-block--mb-large
    ">
      <p>Block with large top and bottom margins</p>
    </div>
  </div>
```

### Block modifiers (margin & padding)
```code
[Full]                      .hw-block--full (no side paddings)
[Small]                     .hw-block--small (half side paddings)
[Large]                     .hw-block--large (large side paddings)
[Margin top]                .hw-block--mt
[Small margin top]          .hw-block--mt-small
[Large margin top]          .hw-block--mt-large
[Margin bottom]             .hw-block--mb
[Small margin bottom]       .hw-block--mb-small
[Large margin bottom]       .hw-block--mb-large
[Padding top]               .hw-block--pt
[Small padding top]         .hw-block--pt-small
[Large padding top]         .hw-block--pt-large
[Padding bottom]            .hw-block--pb
[Small padding bottom]      .hw-block--pb-small
[Large padding bottom]      .hw-block--pb-large
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
[Primary]                 .hw-block--bg-primary
[Gray]                    .hw-block--bg-gray
[White]                   .hw-block--bg-white
```
