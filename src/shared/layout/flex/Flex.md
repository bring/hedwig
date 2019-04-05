# Flex

Flexible grid with 3px gutters

```code
[Flex]                  .hw-flex
[Twos]                  .hw-flex--twos                  - Wraps after two items
[Thirds]                .hw-flex--thirds                - Wraps after three items
[Fourths]               .hw-flex--fourths               - Wraps after four items
[Medium gutter desktop] .hw-flex--gutter-medium-desktop - Gives a medium margin between elements on desktop
[Large gutter desktop]  .hw-flex--gutter-large-desktop  - Gives a large margin between elements on desktop
[Variable height]       .hw-flex--variable-height       - Don't force same height for items in flex
```

## Example

```html
<div class="hw-flex">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Variable height

```html
<div class="hw-flex hw-flex--variable-height">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```


## Example with large gutter desktop

```html
<div class="hw-flex hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```


## Example with fourths

```html
<div class="hw-flex hw-flex--fourths">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with thirds

```html
<div class="hw-flex hw-flex--thirds">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with twos

```html
<div class="hw-flex hw-flex--twos">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with twos and large gutter desktop

```html
<div class="hw-flex hw-flex--twos hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with thirds and large gutter desktop

```html
<div class="hw-flex hw-flex--thirds hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with fourths and large gutter desktop

```html
<div class="hw-flex hw-flex--fourths hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>

```
## Example with twos and medium gutter desktop

```html
<div class="hw-flex hw-flex--twos hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with thirds and medium gutter desktop

```html
<div class="hw-flex hw-flex--thirds hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with fourths and medium gutter desktop

```html
<div class="hw-flex hw-flex--fourths hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>

```


### Default flex with cards

```html
  <div class="hw-flex">
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
  </div>
```

### Large gutter on desktop with wrap after three items

```html|span-6
  <div class="hw-flex hw-flex--gutter-large-desktop hw-flex--thirds">
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
  </div>
```
