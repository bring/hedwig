
{navigation}






> Show a text with an icon that shows a help text when clicked or hovered




```hint
The html code for this component needs an update. The previous version has been deprecated. Support for the previous format will be discontinued in Hedwig 11.
```



### Markup
```code
[Base] .hw-help-tip

Responsive modifiers:
Place the help bubble to the right, left or middle
[Left]              .hw-help-tip--left
[Right]             .hw-help-tip--right
[Small Left]        .hw-help-tip--small--left
[Small Middle]      .hw-help-tip--small--middle
[Small Right]       .hw-help-tip--small--right
[Medium Left]       .hw-help-tip--medium--left
[Medium Middle]     .hw-help-tip--medium--middle
[Medium Right]      .hw-help-tip--medium--right
[Large Left]        .hw-help-tip--large--left
[Large Middle]      .hw-help-tip--large--middle
[Large Right]       .hw-help-tip--large--right
[XLarge Left]       .hw-help-tip--xlarge--left
[XLarge Middle]     .hw-help-tip--xlarge--middle
[XLarge Right]      .hw-help-tip--xlarge--right
```



### Examples

```html|light,plain
<div class="hw-help-tip">
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer</div>
  </button>
</div>
```
```code
<div class="hw-help-tip">
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer</div>
  </button>
</div>
```






#### Middle
Default
```html|light,plain
<div class="hw-help-tip">
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer. Some more lines for this one I think</div>
  </button>
</div>
```

Default with title
```html|light,plain

<div class="hw-help-tip"> 
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content"> <h5 class="hw-help-tip__title">A title, should you need</h5>In need of help? Here is the answer. Some more lines for this one I think</div>
    </span>
  </button>
</div>
```

Multiple after eachother
```html|light,plain
<div class="hw-help-tip hw-help-tip--right">
  <button class="hw-help-tip__button">
    <span>EDI</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content"> <h5 class="hw-help-tip__title">Electronic data interchange</h5>The concept of businesses electronically communicating information that was traditionally communicated on paper, such as purchase orders and invoices. Technical standards for EDI exist to facilitate parties transacting such instruments without having to make special arrangements.</div>
    </span>
  </button>
</div>
<div class="hw-help-tip hw-help-tip--right">
  <button class="hw-help-tip__button">
    <span>API</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content"> <h5 class="hw-help-tip__title">Application Programming Interface</h5>In computer programming, an application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.</div>
    </span>
  </button>
</div>
<div class="hw-help-tip ">
  <button class="hw-help-tip__button">
    <span>TA-system</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content"> <h5 class="hw-help-tip__title">Transportation management system</h5>A transportation management system (TMS) is a subset of supply chain management concerning transportation operations and may be part of an enterprise resource planning system.</div>
    </span>
  </button>
</div>
```




#### Left

```html|light,plain
<div class="hw-help-tip hw-help-tip--left">
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer</div>
    </span>
  </button>
</div>
```


#### Right

```html|light,plain
<div class="hw-help-tip hw-help-tip--right">
  <button class="hw-help-tip__button">
    <span>Small Eg</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer</div>
    </span>
  </button>
</div>
```


#### Large Left

```html|light,plain
<div class="hw-help-tip hw-help-tip--large--left">
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer</div>
    </span>
  </button>
</div>
```

#### Responsive example
Help text is shown in three different places based on screen size
- Left side on small screens (and medium screens)
- Middle on large screens
- Right on xlarge screens

```html|light,plain
<div class="hw-help-tip hw-help-tip--small--left hw-help-tip--large--middle hw-help-tip--xlarge--right">
  <button class="hw-help-tip__button">
    <span>Some text in need of an explanation</span>
    <span class="hw-help-tip__wrapper">
      <i class="fas fa-question-circle"></i>
      <div class="hw-help-tip__content">In need of help? Here is the answer</div>
    </span>
  </button>
</div>
```













# Design guidelines

> Help tip shows a text when hovering or clicking the help-icon




### Help tip

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-1.png"
title: "Normal"
```
```image
plain: true
span: 4
src: "{assets}/img/{postenbring}/{component}-2.png"
title: "Hover / Click"
```







### Types of help tip boxes
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-1.png"
title: "Left-aligned arrow"
description: "The arrow points down on the left side of the box, with the help text growing from left to right."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-2.png"
title: "Center-aligned arrow"
description: "The arrow points down in the center of the box, with the help text growing from the middle and outwards."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-3.png"
title: "Right-aligned arrow"
description: "The arrow points down on the right side of the box, with the help text growing from right to left."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-3.png"
title: "With heading"
description: "You can add a heading to your text if you need to."
```








## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "If there are multiple phrases that need an explanation in the same sentence, combine these in one help tip if appropriate. Never combine more than three explanations as it gets too much."
```

### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Avoid placing a help tip icon in the middle of a sentence."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Avoid placing too many help tip icons in the same paragraph as it breaks the flow and rythm, and makes a messy appearance."
```