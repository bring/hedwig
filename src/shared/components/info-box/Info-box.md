

{navigation}



### Markup
```code
[Base]                  .hw-info-box

Elements:
[Icon]                  .hw-info-box__icon
[Body]                  .hw-info-box__body
[Title]                 .hw-info-box__title

```

### Info box

```html|plain,light
<div class="hw-info-box">
  <i class="fas fa-lg fa-info-square hw-info-box__icon"></i>
  <div class="hw-info-box__body">
    <h3 class="hw-info-box__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

### Info box - no icon

```html|plain,light
<div class="hw-info-box">
  <div class="hw-info-box__body">
    <h3 class="hw-info-box__title">Title</h3>
    <p>The body text is here. Should not be very long</p>
    <a class="hw-link" href="#">Click me</a>
  </div>
</div>
```

