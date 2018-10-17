## Flex

Flexible card grid

```code
[Flex]           .hw-flex
[Responsive]     .hw-flex--responsive
[Guttered]       .hw-flex--guttered - Gives a margin between elements
```

### Default flex

```html|span-6
  <section class="hw-flex hw-flex--guttered">
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
  </section>
```

### Responsive flex

```html|span-6
  <section class="hw-flex hw-flex--guttered hw-flex--responsive">
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
  </section>
```
