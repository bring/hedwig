## Help tip

Show a question mark icon that shows a help text when clicked or hovered



```code
<div class="hw-help-tip">
  <button class="hw-help-tip__button"><span>Some text in need of an explanation</span></button>
  <div class="hw-help-tip__content">In need of help? Here is the answer</div>
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
<div class="hw-help-tip hw-help-tip">
  <button class="hw-help-tip__button"><span>Some text in need of an explanation</span></button>
  <div class="hw-help-tip__content">In need of help? Here is the answer. Some more lines for this one I think</div>
</div>
```

Default with title
```html

<div class="hw-help-tip hw-help-tip"> 
  <button class="hw-help-tip__button"><span>Some text in need of an explanation</span></button>
  <div class="hw-help-tip__content"> <h5 class="hw-help-tip__title">A title, should you need</h5>In need of help? Here is the answer. Some more lines for this one I think</div>
</div>
```

#### Left

```html
<div class="hw-help-tip hw-help-tip--left">
  <button class="hw-help-tip__button"><span>Some text in need of an explanation</span></button>
  <div class="hw-help-tip__content">In need of help? Here is the answer</div>
</div>
```


#### Right

```html
<div class="hw-help-tip hw-help-tip--right">
  <button class="hw-help-tip__button"><span>Small Eg</span></button>
  <div class="hw-help-tip__content">In need of help? Here is the answer</div>
</div>
```


#### Large Left

```html
<div class="hw-help-tip hw-help-tip--large--left">
  <button class="hw-help-tip__button"><span>Some text in need of an explanation</span></button>
  <div class="hw-help-tip__content">In need of help? Here is the answer</div>
</div>
```

#### Responsive example
Help text is shown in three different places based on screen size
- Left side on small screens (and medium screens)
- Middle on large screens
- Right on xlarge screens

```html
<div class="hw-help-tip hw-help-tip--small--left hw-help-tip--large--middle hw-help-tip--xlarge--right">
  <button class="hw-help-tip__button"><span>Some text in need of an explanation</span></button>
  <div class="hw-help-tip__content">
    In need of help? Here is the answer</div>
</div>
```

