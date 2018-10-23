## Frame
A simple component for adding one or more pieces of content into a frame, with or without background color and spacing

```code
[Base]                    .hw-frame
[Child]                   .hw-frame__item
[Child with margin left]  .hw-frame__item--ml


```

## Background-colors


```code
[Primary]                 .hw-frame__item--bg-primary
[Primary lighter]         .hw-frame__item--bg-primary-lighter
[Gray]                    .hw-frame__item--bg-gray
[Gray light]              .hw-frame__item--bg-gray-light
[Gray lighter]            .hw-frame__item--bg-gray-lighter
[Gray lightest]           .hw-frame__item--bg-gray-lightest
[White]                   .hw-frame__item--bg-white

```

### Frame with one item

```html|span-6
  <div class="hw-frame">
    <div class="hw-frame__item">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3 class="hw-h3">First and only item</h3>
      </div>
    </div>
  </div>
```

### Frame with two items

```html|span-6
  <div class="hw-frame">
    <div class="hw-frame__item hw-frame__item--bg-gray-lighter">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3 class="hw-h3">First item</h3>
        some content
      </div>
    </div>
    <div class="hw-frame__item hw-frame__item--ml hw-frame__item--bg-gray-lighter">
      <div class="hw-block hw-block--pt hw-block--pb"> 
        <h3 class="hw-h3">Second item</h3>
        with margin left
      </div>
    </div>
  </div>
```

### Frame with three items 

```html|span-6
  <div class="hw-frame">
    <div class="hw-frame__item">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3>First item</h3>
        some content
      </div>
    </div>
    <div class="hw-frame__item hw-frame__item--bg-primary ">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3 class="hw-h3">Second item</h3>
        background primary
      </div>
    </div>
    <div class="hw-frame__item hw-frame__item--bg-gray-light">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3 class="hw-h3">Third item</h3>
        background 
      </div>
    </div>
  </div>
```

### Responsive example

```html|span-6,responsive
  <div class="hw-frame">
    <div class="hw-frame__item">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3>First item</h3>
        some content
      </div>
    </div>
    <div class="hw-frame__item hw-frame__item--bg-primary hw-frame__item--ml">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3 class="hw-h3">Second item</h3>
        background primary
      </div>
    </div>
    <div class="hw-frame__item hw-frame__item--bg-gray-light hw-frame__item--ml">
      <div class="hw-block hw-block--pt hw-block--pb">
        <h3 class="hw-h3">Third item</h3>
        background gray light<br>
        Lorem ipsum...
      </div>
    </div>
  </div>
```

