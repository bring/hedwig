## Card (Future version - WIP)

Styling for cards.

```code
[Base]           .hw-card-new

[Dark]           .hw-card-new--dark
```

### Regular card

```html|span-6
  <article class="hw-card-new">
    <div class="hw-card-new__contents">
      <div class="hw-card-new__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card-new__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-new__media">
      <div class="hw-card-new__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
  </article>
```


### Half cards

```html|span-3
  <article class="hw-card-new hw-card-new--half">
    <div class="hw-card-new__contents">
      <div class="hw-card-new__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card-new__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-new__media">
      <div class="hw-card-new__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
  </article>
```
```html|span-3
  <article class="hw-card-new hw-card-new--half">
    <div class="hw-card-new__contents">
      <div class="hw-card-new__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr" />
      <div class="hw-card-new__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-new__media">
      <div class="hw-card-new__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
  </article>
```

### Dark card

```html|span-6
  <article class="hw-card-new hw-card-new--dark">
    <div class="hw-card-new__contents">
      <div class="hw-card-new__header">
        <h2>Card Title</h2>
      </div>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card-new__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
      </div>
    </div>
    <div class="hw-card-new__media">
      <div class="hw-card-new__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-2.png');"></div>
    </div>
  </article>
```
