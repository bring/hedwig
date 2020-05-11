## Card

Styling for cards.

```code
[Base]           .hw-card

[Dark]           .hw-card--dark
```


### Simple card

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <h5 class="hw-card__subtitle">Secondary title</h5>
    </div>
  </a>
```

### Simple card with description

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <p class="hw-card__description">
        Accio funnunculus avada lumos kedavra. Impedimenta sonorus me.
      </p>
    </div>
  </a>
```

### Simple card with description and subtitle

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <h5 class="hw-card__subtitle">Secondary title</h5>
      <p class="hw-card__description">
        Accio funnunculus avada lumos kedavra. Impedimenta sonorus me.
      </p>
    </div>
  </a>
```

### Simple card with overline text

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__body">
      <h5 class="hw-card__overline">Overline text</h5>
      <h3 class="hw-card__title">Card Title</h3>
      <p class="hw-card__description">
        Accio funnunculus avada lumos kedavra. Impedimenta sonorus me.
      </p>
    </div>
  </a>
```



### Regular card

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <hr class="hw-hr" />
      <div class="hw-card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
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
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
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
      <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
```

### Dark cards in flex

```html|plain,light
<div class="hw-flex hw-flex--gutter-large-desktop hw-flex--gutter-large-mobile">
  <a href="#" class="hw-card hw-card--dark">
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
  <a href="#" class="hw-card hw-card--dark">
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card__text">
        One line only
      </div>
    </div>
  </a>
  <a href="#" class="hw-card hw-card--dark">
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <hr class="hw-hr hw-hr--white" />
      <div class="hw-card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
</div>
```

### Card with actions bar

```html|span-3,plain,light
  <a href="#" class="hw-card">
    <div class="hw-card__actions">
      <div class="hw-card__tag">Tag it</div>
      <div class="hw-card__date">
        <i class="fas fa-clock"></i>
        <time>18. Apr</time>
      </div>
    </div>
    <div class="hw-card__media">
      <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card__body">
      <h3 class="hw-card__title">Card Title</h3>
      <hr class="hw-hr" />
      <div class="hw-card__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
```
