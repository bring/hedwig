## Help tip

Show a text with an icon that shows a help text when clicked or hovered

```hint
The html code for this component needs an update. The previous version has been deprecated. Support for the previous format will be discontinued in Hedwig 11.
```

```html
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


```code
[Base] .hw-help-tip
```

### Responsive classes
Place the help bubble to the right, left or middle
```code
[Left]          .hw-help-tip--left
[Right]         .hw-help-tip--right
[Small Left]    .hw-help-tip--small--left
[Small Middle]  .hw-help-tip--small--middle
[Small Right]   .hw-help-tip--small--right
[Medium Left]   .hw-help-tip--medium--left
[Medium Middle] .hw-help-tip--medium--middle
[Medium Right]  .hw-help-tip--medium--right
[Large Left]    .hw-help-tip--large--left
[Large Middle]  .hw-help-tip--large--middle
[Large Right]   .hw-help-tip--large--right
[XLarge Left]   .hw-help-tip--xlarge--left
[XLarge Middle] .hw-help-tip--xlarge--middle
[XLarge Right]  .hw-help-tip--xlarge--right
```


### Examples

#### Middle
Default
```html
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
```html

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
```html
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

```html
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

```html
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

```html
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

```html
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

