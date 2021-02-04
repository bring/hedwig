## Container

The container limits the width of it's wrapped contents and applies default side gutters. Containers are "root" components. You can have multiple containers following each others on the same page, but containers should never be nested or used inside other layout components such as blocks.

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

### Container overview

```table
span: 5
rows:
  - Name: default
    320px: 12px gutters
    460px: '-'
    720px: max-width 590px
    940px: max-width 1200px, 36px gutters
    1200px: '-'
  - Name: slim
    320px: 12px gutters
    460px: '-'
    720px: max-width 590px
    940px: max-width 762px, 36px gutters
    1200px: '-'
  - Name: pt
    320px: 12px padding
    460px: '-'
    720px: 36px padding
    940px: '-'
    1200px: 48px padding
  - Name: pb
    320px: 48px padding
    460px: '-'
    720px: '-'
    940px: '-'
    1200px: '-'
```

### Container variants

```code
[Default]                     .hw-container
[Slim]                        .hw-container--slim

[Responsive padding top]      .hw-container--pt
[Responsive padding bottom]   .hw-container--pb
```

### Example

```html|span-6,responsive
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container">
      <p>Default container</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--slim">
      <p>Slim container</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--pt">
      <p>Padding top container</p>
    </div>
  </div>
  <div class="hw-helpers-margin-highlighter">
    <div class="hw-container hw-container--pb">
      <p>Padding bottom container</p>
    </div>
  </div>
```
