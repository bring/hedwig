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
    <div class="hw-card__body">
      <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
        <h3 class="hw-card__title">Card Title</h3>
        <hr class="hw-hr" />
        <div class="hw-card__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
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
        <div class="hw-card__body">
          <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
            <h3 class="hw-card__title">Card Title</h3>
            <hr class="hw-hr" />
            <div class="hw-card__text">
              (This text is too long and will be trimmed) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
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
        <div class="hw-card__body">
          <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
            <h3 class="hw-card__title">Card Title</h3>
            <hr class="hw-hr" />
            <div class="hw-card__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
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
        <div class="hw-card__body">
          <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
            <h3 class="hw-card__title">Card Title</h3>
            <hr class="hw-hr" />
            <div class="hw-card__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
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
    <div class="hw-card__body">
      <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
        <h3 class="hw-card__title">Card Title</h3>
        <hr class="hw-hr hw-hr--white" />
        <div class="hw-card__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
        </div>
      </div>
    </div>
  </a>
```

### Card with actions bar

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__actions">
      <button class="hw-card__tag-button">Tag it</button>
      <div class="hw-card__date">
        <svg class="hw-icon">
          <use xlink:href="#clock"></use>
        </svg>
        <time>18. Apr</time>
      </div>
    </div>
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <div class="hw-block hw-block--margin-top hw-block--margin-bottom">
        <h3 class="hw-card__title">Card Title</h3>
        <hr class="hw-hr" />
        <div class="hw-card__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
        </div>
      </div>
    </div>
  </a>
```
