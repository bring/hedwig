

{navigation}



### Markup
```code
[Base]                  .hw-message

Elements:
[Icon]                  .hw-message__icon
[Title]                 .hw-message__title
[Text]                  .hw-message__text
[Link]                  .hw-link

Modifiers:
[Error message]         .hw-message--error
[Subtle message]        .hw-message--subtle
[Subtle message light]  .hw-message--subtle-light
```

### Basic

```html|plain,light
<div class="hw-message">
  <div>
    <h3 class="hw-message__title">Title</h3>
    <p class="hw-message__text">The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

### Basic - with icon

```html|plain,light
<div class="hw-message">
  <i class="fas fa-lg fa-info-square hw-message__icon"></i>
  <div>
    <h3 class="hw-message__title">Title</h3>
    <p class="hw-message__text">The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

## Subtle

```html|plain,light
<div class="hw-message hw-message--subtle">
  <i class="fas fa-lg fa-info-square hw-message__icon"></i>
  <p>The body text is here. Should not be very long</p>
</div>
```

## Subtle - light

```html|plain,dark
<div class="hw-message hw-message--subtle-light">
  <i class="fas fa-lg fa-info-square hw-message__icon"></i>
  <p>The body text is here. Should not be very long</p>
</div>
```


## Error

```html|plain,light
<div class="hw-message hw-message--error">
  <div>
    <h3 class="hw-message__title">Title</h3>
    <p class="hw-message__text">The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```
## Error - with icon

```html|plain,light
<div class="hw-message hw-message--error">
  <i class="fas fa-lg fa-exclamation-triangle hw-message__icon"></i>
  <div>
    <h3 class="hw-message__title">Title</h3>
    <p class="hw-message__text">The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```
