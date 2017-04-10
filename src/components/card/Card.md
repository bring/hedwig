## Card

Styling for cards.

```code
[Base]           .hw-card

[Dark]           .hw-card--dark
```

### Regular card

```html|span-6,plain,light
  <article class="hw-card">
    <div class="hw-card__contents">
      <div class="hw-card__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
  </article>
```


### Half cards

```html|span-3,plain,light
  <article class="hw-card hw-card--half">
    <div class="hw-card__contents">
      <div class="hw-card__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
  </article>
```
```html|span-3,plain,light
  <article class="hw-card hw-card--half">
    <div class="hw-card__contents">
      <div class="hw-card__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
  </article>
```

### Dark card

```html|span-6,plain,light
  <article class="hw-card hw-card--dark">
    <div class="hw-card__contents">
      <div class="hw-card__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card__media" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-2.png');"></div>
  </article>
```
