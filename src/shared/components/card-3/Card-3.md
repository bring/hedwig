# Card 3 (Deprecated)

Used on the home pages.
This intro is for the whole component. Not only design or development.

```html|span-6,light,plain,noSource
<button class="hw-button hw-button--primary" onclick="window.scrollToDesignGuidelines()">Design guidelines</button>
<button class="hw-button hw-button--secondary" onclick="window.scrollToDevelopmentGuidelines()">Development guidelines</button>
```


---



## Development guidelines


```code
[Base]           .hw-card-3
```

### Cards in grid

```html|span-2,light,plain
<div class="hw-block hw-background-color-gray-lightest">
   <a class="hw-card-3" href="https://www.bring.no/">
      <p class="hw-text-uppercase hw-color-gray hw-text-smaller">Nunc Et Aliqet</p>
      <h4 class="hw-card-3__title">In rutrum dolor</h4>
      <svg class="hw-icon hw-card-3__icon">
        <use xlink:href="#innenfordoeren"></use>
      </svg>
      <div class="hw-card-3__text hw-text-less-line-height">
        Blandit sit amen. In volutpat scelerisque ipsum.
      </div>
      <hr class="hw-hr hw-hr--centered" />
   </a>
</div>
<div class="hw-block hw-background-color-gray-lightest">
   <a class="hw-card-3" href="https://www.bring.no/">
      <p class="hw-text-uppercase hw-text-smaller">Nunc Et Aliqet</p>
      <h4 class="hw-card-3__title">In rutrum dolor</h4>
      <img class="hw-card-3__media" src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png" />
      <div class="hw-card-3__text hw-text-less-line-height">
        Blandit sit amen. In volutpat scelerisque ipsum.
      </div>
      <hr class="hw-hr hw-hr--centered" />
   </a>
</div>
```


---
***


## Design guidelines

#### Image

```hint|directive,span-3
Do this
```
```hint|warning,span-3
Do not do this.
```


```html|span-3,light,plain,noSource
<h5>Do this</h5>
```
```html|span-3,light,plain,noSource
<h4>Do not do this</h4>
```


```image
plain: true
span: 3
src: "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png"
title: "Do"
description: "You can do this. It is good."
```
```image
plain: true
span: 3
src: "https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png"
title: "Don't"
description: "Do not do this thing right here. It does not look good."
```


```hint
neutral: true
span: 3
---
Do
Use Show more on content-heavy pages to enable users the option to click to see more content, or scroll beyond. Show more can also be used at the bottom of a search page to load more results for instance.
```
```hint
neutral: true
span: 3
---
Don’t
Show more shares a few similarities with an accordion, in that it can hide and reveal more content. But where an accordion usually holds text, Show more is intended for heavier, more complex content load, like images, cards and so forth. Therefore do not use a Show more light-weight content that an accordion is better suited for. Avoid making up custom hybrid components.

```

```html|span-3,light,plain,noSource
<h5>Do</h5>
Use Show more on content-heavy pages to enable users the option to click to see more content, or scroll beyond. Show more can also be used at the bottom of a search page to load more results for instance.
```
```html|span-3,light,plain,noSource
<h4>Don't</h4>
Show more shares a few similarities with an accordion, in that it can hide and reveal more content. But where an accordion usually holds text, Show more is intended for heavier, more complex content load, like images, cards and so forth. Therefore do not use a Show more light-weight content that an accordion is better suited for. Avoid making up custom hybrid components.
```

```html|span-3,light,plain,noSource
<h3>Do this</h3>

<img src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png" />

<h5>Do</h5>
Use Show more on content-heavy pages to enable users the option to click to see more content, or scroll beyond. Show more can also be used at the bottom of a search page to load more results for instance.
```
```html|span-3,light,plain,noSource
<h4>Don't</h4>
<img src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png" />
Show more shares a few similarities with an accordion, in that it can hide and reveal more content. But where an accordion usually holds text, Show more is intended for heavier, more complex content load, like images, cards and so forth. Therefore do not use a Show more light-weight content that an accordion is better suited for. Avoid making up custom hybrid components.
```