{navigation}



> Styling for cards.




### Markup
```code
[Base]           .hw-card

Modifiers:
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








# Design guidelines

> Cards contain content and actions about a single subject, and are easy for users to scan for relevant and actionable information.



### {title} anatomy
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-1.png"
title: "Anatomy"
```

1. Surface (required)
The surface is the background and container, holding all other elements within the card.

2. Title block (required)
The title block is the primary heading of the card. It can be a standalone heading, a heading with subtitle or overline text, or be accompanied by
an icon image.

3. Description (optional)
A description can be added as supportive text to further describe what the card is about.

4. Action (optional)
A card can include buttons for actions if there are mulitple actions to choose within the card. Actions should always be placed at the bottom.

5. Media (optional)
Media can be added to the top of a card if this is wanted.


> Cards are assembled by element components. The surface and description text has a single defined style, but title blocks, actions and media comes in a few variations for you to customize a card according to your needs.

> A card should never contain more than one instance of each element.






### Block types
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-block-1.png"
title: "Standalone heading"
description: "This is the default heading of a card, and is the minimum requirement for all cards. A heading should not exceed two lines."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-block-2.png"
title: "Heading with subtitle"
description: "Use this if the heading is long and you need to split it, or you want to add a secondary text to further specify the heading."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-block-3.png"
title: "Heading with overline text"
description: "This adds an overline text above the heading, and can be used as a tag or descriptor of the card."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-block-4.png"
title: "Heading with icon"
description: "An icon can be added to all title block types if you want to display an icon or image next to the heading."
```








### Action types
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-action-1.png"
title: "One-style buttons"
description: "Plain links in dark green colour, with underline on hover."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-action-2.png"
title: "One-style buttons with HR"
description: "A ruler can be added above the action links as a separator from the content further above."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-action-3.png"
title: "Two-style buttons"
description: "The primary action is displayed as a button, while secondary actions are plain links."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-action-4.png"
title: "Two-style buttons with HR"
description: "A ruler can be added above the action links as a separator from the content further above."
```





### Media types
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-media-1.png"
title: "16:9"
description: "Add an image in 16:9 dimension."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-media-2.png"
title: "4:3"
description: "Add an image in 4:3 dimension."
```



## Compressed cards

> Compressed cards are denser than regular cards, with less padding and the heading size set to the min-size of the fluid typography scale. Compressed cards can be used for mobile, or in case you have four cards side by side in 
a layout.

> The same guidelines applies for compressed cards as for regular cards.






### Card anatomy
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-anatomy-1.png"
title: "Compressed card"
```





## Specifications
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-specifications-1.png"
title: "Card"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-specifications-2.png"
title: "Compressed card"
```








## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "The tallest card in a row defines the height of
the cards."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "Keep headings and texts short and clear. A card is just the entrance or action to a destination of thorough information."
```

### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Cards placed in a row should not be of different heights, making a messy appearance."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Headings should not exceed two lines."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-3.png"
description: "Do not build cards in another order than specified in this guideline."
```