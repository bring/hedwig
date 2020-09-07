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

```html|span-4,plain,light,no-source
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block">
      <p>Default block</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block-px">
      <p>Block with horizontal padding</p>
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

### Responsive block (px)

```html|span-6,responsive
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--px">
      <p>Default px block</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--px-fluid">
      <p>Fluid px block</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--px-mobile">
      <p>Mobile px block</p>
    </div>
  </div>
```

### Responsive spacing (with margins & padding higlighted)
The values are one level down when screen is less than and equal to 720px

```html|span-4,plain,light,no-source
  
  <div class="hw-helpers-margin-highlighter">
    <div class="
      hw-block
      hw-block--mb-small-2--responsive
      hw-block--mt-small-2--responsive
    ">
      <p>Block with responsive spacing top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
     <div class="
      hw-block
      hw-block--mb-small-3--responsive
      hw-block--mt-small-3--responsive
    ">
      <p>Block with responsive spacing top and bottom margins</p>
    </div>
  </div>
   <div class="hw-helpers-margin-highlighter">
     <div class="
      hw-block
      hw-block--mb-small-4--responsive
      hw-block--mt-small-4--responsive
    ">
      <p>Block with responsive spacing top and bottom margins</p>
    </div>
  </div>
```


### Sizes

```code
small-1: 4px;
small-2: 8px;
small-3: 12px;
small-4: 16px;

medium-1: 20px;
medium-2: 24px;
medium-3: 32px;
medium-4: 40px;

large-1: 48px;
large-2: 64px;
large-3: 80px;
large-4: 120px;
large-5: 160px;
```


### Block modifiers (margin & padding)

```code
[Padding sides]                       .hw-block--px
[Fluid Padding sides]                 .hw-block--px-fluid
[Mobile Padding sides]                .hw-block--px-mobile
[Margin/Padding top/bottom] default   .hw-block--[mt/mb/pt/pb]
[Margin/Padding top/bottom [size]]    .hw-block--[mt/mb/pt/pb]-[size]
```

### Example
```code
<div class="hw-block hw-block--mb">
  <p>Block with standard margin bottom</p>
</div>
<div class="hw-block hw-block--pb-larger">
  <p>Block with larger padding bottom</p>
</div>
```
```html|span-3,no-source
<div class="hw-helpers-margin-highlighter">
  <div class="hw-block hw-block--mb">
    <p>Block with standard margin bottom</p>
  </div>
</div>
<div class="hw-helpers-margin-highlighter">
  <div class="hw-block hw-block--pb-larger">
    <p>Block with larger padding bottom</p>
  </div>
</div>
```


### Example targeted margin
```code
<div class="hw-block hw-block--mb-larger-mobile hw-block--mb-even-larger-desktop">
  <p>Block with larger margin bottom on mobile and even larger margin bottom on desktop</p>
</div>
```

```html|no-source,responsive
<div class="hw-helpers-margin-highlighter">
  <div class="hw-block hw-block--mb-larger-mobile hw-block--mb-even-larger-desktop">
    <p>Block with larger margin bottom on mobile and even larger margin bottom on desktop</p>
  </div>
</div>
```


### Block modifiers (colors)

```code
[Primary]                 .hw-block--bg-primary
[Gray]                    .hw-block--bg-gray
[Gray light]              .hw-block--bg-gray-light
[Gray lighter]            .hw-block--bg-gray-lighter
[Gray lightest]           .hw-block--bg-gray-lightest
[Yellow border]           .hw-block--bordered

[White]                   .hw-block--bg-white
[Alternating]             .hw-block--bg-alt
```
