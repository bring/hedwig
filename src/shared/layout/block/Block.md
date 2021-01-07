## Block

```hint|warning
IMPORTANT! Block sizes was updated as part of Hedwig 11, and some modifiers have been deprecated, please make sure to only use the valid modifiers listed below
```

This is the most commonly used component.

The purpose of the Block component is to apply margin, padding and background-colors to all components.

In an ideal scenario, there is no margin/padding applied to any other component, instead wrap the element in Block and use this to generate the required margin/padding.

The only exception to this rule is "rich text" areas from the CMS, for this case, use the [Wysiwyg Container](/Wysiwyg).

**NB:** Do not to use blocks inside reusable components, as it will be difficult to apply style changes to all components at a later point.

**NB:** Backgroundcolors on blocks are deprecated. Please use hw-background-color instead

```code
<div class="hw-block">...</div>
```

### Block modifiers (margin & padding)

```code
Padding
[Padding sides]                                   .hw-block--px
[Responsive Padding sides]                        .hw-block--px-responsive
[Mobile only Padding sides]                       .hw-block--px-mobile
[Padding top and bottom]                          .hw-block--py
[Responsive Padding top and bottom]               .hw-block--py-responsive

Margins
[Margin top/bottom] default                       .hw-block--[mt/mb]
[Margin top/bottom [size][responsive]]            .hw-block--[mt/mb]-[size]-responsive
[Margin top/bottom [size]]                        .hw-block--[mt/mb]-[size]
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

### Example code

```code
<div class="hw-block hw-block--mt-small-4 hw-block--mb-small-4">
  <p>Block with small top and bottom margins</p>
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
    <div class="hw-block hw-block--px">
      <p>Block with default horizontal padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--py">
      <p>Block with default top anb bottom padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--mt hw-block--mb">
      <p>Block with default top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--mt-small-4 hw-block--mb-small-4">
      <p>Block with small top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--mt-large-1 hw-block--mb-large-1">
      <p>Block with large top and bottom margins</p>
    </div>
  </div>
```

### Responsive spacing (with margins & padding higlighted)
The values are one level down when screen is less than and equal to 720px

```html|span-6,responsive
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--px-responsive">
      <p>Block with responsive horisontal padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--py-responsive">
      <p>Block with responsive top and bottom padding</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--px-mobile">
      <p>Block with padding only on mobile</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-block hw-block--mb-medium-1--responsive hw-block--mt-medium-1--responsive">
      <p>Block with responsive spacing top and bottom margins</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
     <div class="hw-block hw-block--mb-medium-2--responsive hw-block--mt-medium-2--responsive">
      <p>Block with responsive spacing top and bottom margins</p>
    </div>
  </div>
   <div class="hw-helpers-margin-highlighter">
     <div class="hw-block hw-block--mb-medium-3--responsive hw-block--mt-medium-3--responsive">
      <p>Block with responsive spacing top and bottom margins</p>
    </div>
  </div>
  
```


