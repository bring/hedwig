## Card (Future version - WIP)

Styling for cards.

```code
[Base]           .hw-card-v2

[Dark]           .hw-card-v2--dark
```

### Regular card

```html|span-6
  <article class="hw-card-v2">
    <div class="hw-card-v2__contents">
      <div class="hw-card-v2__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card-v2__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-v2__media">
      <div class="hw-card-v2__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
  </article>
```


### Half cards

```html|span-3
  <article class="hw-card-v2 hw-card-v2--half">
    <div class="hw-card-v2__contents">
      <div class="hw-card-v2__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card-v2__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-v2__media">
      <div class="hw-card-v2__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
  </article>
```
```html|span-3
  <article class="hw-card-v2 hw-card-v2--half">
    <div class="hw-card-v2__contents">
      <div class="hw-card-v2__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card-v2__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-v2__media">
      <div class="hw-card-v2__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
  </article>
```

### Dark card

```html|span-6
  <article class="hw-card-v2 hw-card-v2--dark">
    <div class="hw-card-v2__contents">
      <div class="hw-card-v2__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card-v2__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-v2__media">
      <div class="hw-card-v2__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-2.png');"></div>
    </div>
  </article>
```
