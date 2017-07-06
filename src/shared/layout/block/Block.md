## Block

This is the most commonly used component.

The purpose of the Block component is to apply margin, padding and background-colors to all components.

In an ideal scenario, there is no margin/padding applied to any other component, instead wrap the element in Block and use this to generate the required margin/padding.

The only exception to this rule is "rich text" areas from the CMS, for this case, use the [Wysiwyg Container](/Wysiwyg).

**NB:** Do not to use blocks inside reusable components, as it will be difficult to apply style changes to all components at a later point.

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

### Variants (Alternating)

```html|span-4,plain,light
    <div class="hw-block hw-block--bg-alt">
      <p>Default block</p>
    </div>
    <div class="hw-block hw-block--bg-alt">
      <p>Default block</p>
    </div>
    <div class="hw-block hw-block--bg-alt">
      <p>Default block</p>
    </div>
    <div class="hw-block hw-block--bg-alt">
      <p>Default block</p>
    </div>
```


### Block modifiers (margin & padding)
```code
[Full]                      .hw-block--full (no side paddings)
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

### Block modifiers (colors)
```code
[Primary]                 .hw-block--bg-primary
[Gray]                    .hw-block--bg-gray
[White]                   .hw-block--bg-white
[Alternating]             .hw-block--bg-alt
```
