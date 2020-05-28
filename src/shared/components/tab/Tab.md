

{navigation}






> Styling for tab.

> Provides styling for sliding a marker between selected tabs



### Markup
```code
[Base]           .hw-tab

Modifiers:
[Selected Item]  .hw-tab__item--selected

Elements:
[Item]           .hw-tab__item
[Marker]         .hw-tab__marker
```

### Primary

```html|span-4,plain,light
<div class="hw-tab"><!--
  --><a href="#/Tab#item-1" class="hw-tab__item">Item 1</a><!--
  --><a href="#/Tab#item-2" class="hw-tab__item">Item 2</a><!--
  --><a href="#/Tab#item-3" class="hw-tab__item hw-tab__item--selected">Item 3</a><!--
  --><a href="#/Tab#item-4" class="hw-tab__item">Item 4 longer</a><!--
  --><a href="#/Tab#item-5" class="hw-tab__item">Item 5<span class="hw-text-small"> (12)</span></a><!--
  --><a href="#/Tab#item-6" class="hw-tab__item">Item 6</a><!--
  --><div class="hw-tab__marker"></div>
</div>
```

### Regression

If using only styling from Hedwig, the marker `hw-tab__marker` will be ignored and the active item will be underlined.
This will not support sliding the marker between items.
Removing the marker element will achieve this.








# Design guidelines

> Tabs indicate menu items to aid navigation. We use the Bring signal green as an underline to indicate a selected menu item.




### {title} states
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-states-1.png"
title: "Active"
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-states-2.png"
title: "Inactive"
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-states-3.png"
title: "Hover"
```







## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-do-1.png"
description: "Use short titles for tab headings."
```



### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-dont-1.png"
description: "Don’t use dropdowns in tabs."
```