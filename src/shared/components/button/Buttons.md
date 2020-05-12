## Buttons

The buttons can be used either as `<button>`-tags or `<a>`-tags as needed

```code
[Base]           .hw-button

[Large]          .hw-button--large
[Small]          .hw-button--small
[Full]           .hw-button--full
[Responsive]     .hw-button--mobile-full   //Full size on mobile, default size on desktop

Colors
[Primary]        .hw-button--primary
[Secondary]      .hw-button--secondary
[Yellow]         .hw-button--picture-yellow
[Dark]           .hw-button--picture-dark

[Outline]        .hw-button--outline
[Outline white]  .hw-button--outline-white
[Outline dark]   .hw-button--outline-dark

```

### Sizes

```html|span-4,plain,light
  <button class="hw-button hw-button--primary hw-button--small">
    Small button
  </button><br>
  <button class="hw-button hw-button--primary hw-button--medium">
    Medium button
  </button><br>
  <button class="hw-button hw-button--primary hw-button--large">
    Large button
  </button>
  <button class="hw-button hw-button--primary hw-button--full">
    Full button
  </button>
  <button class="hw-button hw-button--primary hw-button--mobile-full">
    Responsive (full on mobile)
  </button>

```

### Default colors

```html|span-4,plain,light
  <button class="hw-button hw-button--primary">
    Primary button
  </button>
  <a class="hw-button hw-button--primary">
    Link styled as button
  </a>
  <button class="hw-button hw-button--secondary">
    Secondary button
  </button>
  <button class="hw-button hw-button--primary" disabled>
    Disabled button
  </button>
```

### Alternative colors
Alternative colored buttons can be used where extra contrast is needed ie. when the background is a picture

```html|span-6
light: true,
plain: true
---
  <button class="hw-button hw-button--picture-dark">
    Dark button
  </button>
```

### Outlined button

```html|span-4,plain,light
  <button class="hw-button hw-button--outline">
    Primary button
  </button>
  <button class="hw-button hw-button--outline" disabled>
    Disabled
  </button>
```

### Outlined button light

```html|span-4,plain,dark
  <button class="hw-button hw-button--outline-white">
    Primary button
  </button>
  <button class="hw-button hw-button--outline-white" disabled>
    Disabled
  </button>
```

### Button with icon

```html|span-4,plain,light
  <button class="hw-button hw-button--primary">
    <i class="fas fa-globe"></i>
    Button with icon
  </button>
```

### Chat button

```html|span-4,plain,light
  <button class="hw-button hw-button--chat">
    <i class="fas fa-2x fa-comments-alt" title="Chat button"></i>
  </button>
  <button class="hw-button hw-button--chat-fixed">
    <i class="fas fa-2x fa-comments-alt" title="Chat button"></i>
  </button>
```

```code
[chat]        .hw-button--chat
[chat-fixed]  .hw-button--chat-fixed (Preview is in the bottom-right corner of this page)
```
