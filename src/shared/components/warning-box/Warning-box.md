

{navigation}



### Markup
```code
[Base]                  .hw-warning-box

Elements:
[Icon]                  .hw-warning-box__icon
[Body]                  .hw-warning-box__body
[Title]                 .hw-warning-box__title

```

### Warning box

```html|plain,light
<div class="hw-warning-box">
  <i class="fas fa-lg fa-info-square hw-warning-box__icon"></i>
  <div class="hw-warning-box__body">
    <h3 class="hw-warning-box__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link hw-link--solid" href="#">Click me</a>
  </div>
</div>
```

### Warning box - no icon

```html|plain,light
<div class="hw-warning-box">
  <div class="hw-warning-box__body">
    <h3 class="hw-warning-box__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link hw-link--solid" href="#">Click me</a>
  </div>
</div>
```

