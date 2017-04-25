## Card

Styling for cards.

```code
[Base]           .hw-card

[Dark]           .hw-card--dark
```

### Regular card

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__contents">
      <div class="hw-block hw-block--margin-top">
        <h3>Card Title</h3>
      </div>
      <div class="hw-block hw-block--margin-top-half">
        <hr class="hw-hr" />
      </div>
      <div class="hw-block hw-block--margin-top-half hw-block--margin-bottom">
        <div class="hw-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
        </div>
      </div>
    </div>
  </a>
```

### Cards in grid

```html|span-6,plain,light
  <div class="hw-grid">
    <div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__contents">
          <div class="hw-block hw-block--margin-top">
            <h3>Card Title</h3>
          </div>
          <div class="hw-block hw-block--margin-top-half">
            <hr class="hw-hr" />
          </div>
          <div class="hw-block hw-block--margin-top-half hw-block--margin-bottom">
            <div class="hw-card__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
            </div>
          </div>
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__contents">
          <div class="hw-block hw-block--margin-top">
            <h3>Card Title</h3>
          </div>
          <div class="hw-block hw-block--margin-top-half">
            <hr class="hw-hr" />
          </div>
          <div class="hw-block hw-block--margin-top-half hw-block--margin-bottom">
            <div class="hw-card__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
            </div>
          </div>
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__contents">
          <div class="hw-block hw-block--margin-top">
            <h3>Card Title</h3>
          </div>
          <div class="hw-block hw-block--margin-top-half">
            <hr class="hw-hr" />
          </div>
          <div class="hw-block hw-block--margin-top-half hw-block--margin-bottom">
            <div class="hw-card__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
```

### Dark card

```html|span-3,plain,light
  <a href="#" class="hw-card hw-card--dark">
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__contents">
      <div class="hw-block hw-block--margin-top">
        <h3>Card Title</h3>
      </div>
      <div class="hw-block hw-block--margin-top-half">
        <hr class="hw-hr hw-hr--white" />
      </div>
      <div class="hw-block hw-block--margin-top-half hw-block--margin-bottom">
        <div class="hw-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.</p>
        </div>
      </div>
    </div>
  </a>
```
