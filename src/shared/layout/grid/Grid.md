## Grid

We use the [Csswizandry grids](https://github.com/csswizardry/csswizardry-grids).

```code
<div class="hw-grid [grid-modifiers]">
  <div class="hw-grid__item [size modifiers]">...</div>
  <div class="hw-grid__item [size modifiers]">...</div>
  <div class="hw-grid__item [size modifiers]">...</div>
</div>
```

### Example grids

```html|span-6
  <div class="hw-grid">
    <div class="hw-grid__item hw-one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div><!--
    --><div class="hw-grid__item hw-one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div>
  </div>
```

```html|span-6
  <div class="hw-grid">
    <div class="hw-grid__item hw-one-quarter">
      <p class="hw-helpers-highlight">one-quarter</p>
    </div><!--
    --><div class="hw-grid__item hw-three-quarters">
      <p class="hw-helpers-highlight">three-quarters</p>
    </div>
  </div>
```

```html|span-6
  <div class="hw-grid">
    <div class="hw-grid__item hw-one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item hw-one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item hw-one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item hw-one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item hw-one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item hw-one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div>
  </div>
```

### Grid modifiers
```code
[Reverse]         .hw-grid--rev
[Full]            .hw-grid--full
[Right]           .hw-grid--right
[Center]          .hw-grid--center
[Middle]          .hw-grid--middle
[Bottom]          .hw-grid--bottom
[Narrow]          .hw-grid--narrow
[Wide]            .hw-grid--wide
```

### Size modifiers
```code
[Whole]           .hw-one-whole
[Half]            .hw-one-half,
[One third]       .hw-one-third
[Two third]       .hw-two-thirds
[One quarter]     .hw-one-quarter
[Three quarters]  .hw-three-quarters
[One fifth]       .hw-one-fifth
[Two fifths]      .hw-two-fifths
[Three fifts]     .hw-three-fifths
[Four fifths]     .hw-four-fifths
[One sixth]       .hw-one-sixth
[Five sixths]     .hw-five-sixths
[One eight]       .hw-one-eighth
[Three eights]    .hw-three-eighths
[Five eights]     .hw-five-eighths
[Seven eights]    .hw-seven-eighths
[One tenth]       .hw-one-tenth
[Three tenths]    .hw-three-tenths
[Seven tenths]    .hw-seven-tenths
[Nine tenths]     .hw-nine-tenths
[One twelfth]     .hw-one-twelfth
[Five twlefths]   .hw-five-twelfths
[Seven twelfths]  .hw-seven-twelfths
[Eleven twelfths] .hw-eleven-twelfths
```

### Responsive classes
```code
[Small]           .hw-small--[size]
[Medium]          .hw-medium--[size]
[Large]           .hw-large--[size]
[XLarge]          .hw-xlarge--[size]
```

Example
```code
.hw-medium--one-whole
.hw-medium--one-half
.hw-medium--one-third
.hw-medium--two-third
.hw-medium--one-quarter
.hw-medium--three-quarters
.hw-medium--one-fifth
.hw-medium--two-fifths
.hw-medium--three-fifths
.hw-medium--four-fifths
...
.hw-medium--eleven-twelfths
```

### Responsive hide-classes

This will hide the grid item on a set screen size (only until the next breakpoint)


```code
[Base]            .hw-none
[Small]           .hw-small--none
[Medium]          .hw-medium--none
[Large]           .hw-large--none
[XLarge]          .hw-xlarge--none
```

Example
```code
.hw-small--none
.hw-medium--none
.hw-large--none
```

### Responsive example

```html|span-6,responsive
  <div class="hw-grid">
    <div class="hw-grid__item hw-medium--one-quarter">
      <p class="hw-helpers-highlight">medium-one-quarter</p>
    </div><!--
    --><div class="hw-grid__item hw-medium--three-quarters">
      <p class="hw-helpers-highlight">medium-three-quarters</p>
    </div>
  </div>
```

### Narrow grid gutters

```html|span-6
  <div class="hw-grid hw-grid--narrow">
    <div class="hw-grid__item hw-one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div><!--
    --><div class="hw-grid__item hw-one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div>
  </div>
```

### Push classes

To offset grid items, push and pull classes are available:

```code
.hw-push--[size]
.hw-push--[breakpoint]--[size] (responsive version)
```

Example:
```html|span-6
  <div class="hw-grid hw-grid--wide">
    <div class="hw-grid__item hw-one-half hw-push--one-third">
      <p class="hw-helpers-highlight">one-half, hw-push--one-third</p>
    </div>
  </div>
```


### Wide grid gutters

```html|span-6
  <div class="hw-grid hw-grid--wide">
    <div class="hw-grid__item hw-one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div><!--
    --><div class="hw-grid__item hw-one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div>
  </div>
```
