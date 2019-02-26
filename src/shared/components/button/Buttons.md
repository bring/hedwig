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

The buttons can be used either as `<button>`-tags or `<a>`-tags as needed

### Button using <a>-tag
```html|span-4
  <a class="hw-button hw-button--primary">
    Normal state
  </a>
  <a class="hw-button hw-button--primary" disabled>
    Disabled state
  </a>
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


### Picture button - Yellow, dark
These buttons are for use on top of images

```html|span-4
  <button class="hw-button hw-button--picture-yellow">
    Normal state  
  </button>
  <button class="hw-button hw-button--picture-yellow" disabled>
    Disabled state
  </button>
  <br>
  <button class="hw-button hw-button--picture-dark">
    Normal state
  </button>
  <button class="hw-button hw-button--picture-dark" disabled>
    Disabled state
  </button>
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

### Outline dark

```html|span-4
  <button class="hw-button hw-button--outline-dark">
    Normal state
  </button>
  <button class="hw-button hw-button--outline-dark" disabled>
    Disabled state
  </button>
```


```code
[Outline dark]        .hw-button--outline-dark
```


### Button with icon

```html|span-4
  <button class="hw-button hw-button--primary">
    <i class="fas fa-globe"></i>
    Button with icon
  </button>
```

### Chat button

```html|span-4
  <button class="hw-button hw-button--primary hw-button--chat">
    <i class="fas fa-2x fa-comments-alt" title="Chat button"></i>
  </button>
  <button class="hw-button hw-button--primary hw-button--chat-fixed">
    <i class="fas fa-2x fa-comments-alt" title="Chat button"></i>
  </button>
```

```code
[chat]        .hw-button--chat
[chat-fixed]  .hw-button--chat-fixed (Preview is in the bottom-right corner of this page)
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
