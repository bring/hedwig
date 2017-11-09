## Buttons

Styling for buttons.

```code
[Base]           .hw-button

[Large]          .hw-button--large
[Small]          .hw-button--small
[Full]           .hw-button--full
```

### Primary

```html|span-4
  <button class="hw-button hw-button--primary">
    Normal state
  </button>
  <button class="hw-button hw-button--primary" disabled>
    Disabled state
  </button>
```

```code
[Primary]        .hw-button--primary
```

### Secondary

```html|span-4
  <button class="hw-button hw-button--secondary">
    Normal state
  </button>
  <button class="hw-button hw-button--secondary" disabled>
    Disabled state
  </button>
```

```code
[Base]           .hw-button
```


### Outline

```html|span-4
  <button class="hw-button hw-button--outline">
    Normal state
  </button>
  <button class="hw-button hw-button--outline" disabled>
    Disabled state
  </button>
```

```code
[Outline]        .hw-button--outline
```

### Outline white

```html|span-4,plain,dark
  <button class="hw-button hw-button--outline-white">
    Normal state
  </button>
  <button class="hw-button hw-button--outline-white" disabled>
    Disabled state
  </button>
```

```code
[Outline white]        .hw-button--outline-white
```

### Button with icon

```html|span-4
  <button class="hw-button hw-button--primary">
    <svg class="hw-icon hw-icon--small">
      <use xlink:href="#globe"></use>
    </svg>
    Button with icon
  </button>
```

### Round button with icon

```html|span-4
  <button class="hw-button hw-button--round hw-button--primary">
    <svg class="hw-icon">
      <use xlink:href="#globe"></use>
    </svg>
  </button>
  <button class="hw-button hw-button--round hw-button--secondary">
    <svg class="hw-icon">
      <use xlink:href="#globe"></use>
    </svg>
  </button>
  <button class="hw-button hw-button--round hw-button--outline">
    <svg class="hw-icon">
      <use xlink:href="#globe"></use>
    </svg>
  </button>
  <button class="hw-button hw-button--round hw-button--stripped">
    <svg class="hw-icon">
      <use xlink:href="#globe"></use>
    </svg>
  </button>
  <button class="hw-button hw-button--round" disabled>
    <svg class="hw-icon">
      <use xlink:href="#globe"></use>
    </svg>
  </button>
```

```code
[Icon regular]        .hw-button--round
[Icon outline]        .hw-button--round-outline
[Icon stripped]       .hw-button--round-stripped
```

### Extra modifiers

```html|span-4
  <button class="hw-button hw-button--large">
    Large button
  </button>
  <button class="hw-button hw-button--small">
    Small button
  </button>
  <button class="hw-button hw-button--full">
    Full button
  </button>
```

```code
[Large]       .hw-button--large
[Small]       .hw-button--small
[Full]        .hw-button--full
```
