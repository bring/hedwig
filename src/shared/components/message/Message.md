

{navigation}



### Markup
```code
[Base]                  .hw-message

Elements:
[Icon]                  .hw-message__icon
[Body]                  .hw-message__body
[Title]                 .hw-message__title

Modifiers:
[Subtle message]        .hw-message--subtle
[Subtle message light]  .hw-message--subtle-light
[Error message]         .hw-message--error
[Subtle message error]  .hw-message--subtle-error
```

### Basic

```html|plain,light
<div class="hw-message">
  <div class="hw-message__body">
    <h3 class="hw-message__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

### Basic - with icon

```html|plain,light
<div class="hw-message">
  <i class="fas fa-lg fa-info-square hw-message__icon"></i>
  <div class="hw-message__body">
    <h3 class="hw-message__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

## Subtle

```html|plain,light
<div class="hw-message hw-message--subtle">
  <i class="fas fa-info-square hw-message__icon"></i>
  <div class="hw-message__body">
    <span>The body text is here. Inline elements only.</span>
    <a href="#" class="hw-link">Click me</a>
  </div>
</div>
```

## Subtle light

```html|plain,dark
<div class="hw-message hw-message--subtle-light">
  <i class="fas fa-info-square hw-message__icon"></i>
  <div class="hw-message__body">
    <span>The body text is here. Inline elements only.</span>
  </div>
</div>
```

## Error

```html|plain,light
<div class="hw-message hw-message--error">
  <div class="hw-message__body">
    <h3 class="hw-message__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

## Error - with icon

```html|plain,light
<div class="hw-message hw-message--error">
  <i class="fas fa-lg fa-exclamation-triangle hw-message__icon"></i>
  <div class="hw-message__body">
    <h3 class="hw-message__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

## Subtle error

```html|plain,light
<div class="hw-message hw-message--subtle-error">
  <div class="hw-message__body">
    <span>The body text is here. Inline elements only.</span>
  </div>
</div>
```

## Subtle error - with icon

```html|plain,light
<div class="hw-message hw-message--subtle-error">
  <i class="fas fa-exclamation-triangle hw-message__icon"></i>
  <div class="hw-message__body">
    <span>The body text is here. Inline elements only.</span>
  </div>
</div>
```
