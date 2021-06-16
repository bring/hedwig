

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
  --><button class="hw-tab__item">Item 1</button><!--
  --><button class="hw-tab__item">Item 2</button><!--
  --><button class="hw-tab__item hw-tab__item--selected">Item 3</button><!--
  --><button class="hw-tab__item">Item 4 longer</button><!--
  --><button class="hw-tab__item">Item 5<span class="hw-text-small"> (12)</span></button><!--
  --><button class="hw-tab__item">Item 6</button><!--
  --><div class="hw-tab__marker"></div>
</div>
```

### Regression

If using only styling from Hedwig, the marker `hw-tab__marker` will be ignored and the active item will be underlined.
This will not support sliding the marker between items.
Removing the marker element will achieve this.








# Design guidelines

> Tabs indicate menu items to aid navigation. We use the {Brand} signal {color} as an underline to indicate a selected menu item.




### {title} states
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-states-1.png"
title: "Active"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-states-2.png"
title: "Inactive"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-states-3.png"
title: "Hover"
```







## Best practices

#### Do this

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Use short titles for tab headings."
```



#### Do not do this
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don’t use dropdowns in tabs."
```