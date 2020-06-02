

{navigation}






> Various list styles




### Markup
```code
[Base]                 .hw-list

Modifiers:
[Large list]           .hw-list--large
[Small list]           .hw-list--small
[Numbered]             .hw-list--numbered
[No bullets]           .hw-list--no-bullets
```



## Basic

```html|plain,light
<ul class="hw-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Large List
This is a list with lead style.
```html|plain,light
<ul class="hw-list hw-list--large">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```


## Small List

```html|plain,light
<ul class="hw-list hw-list--small">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Numbered List

```html|plain,light
<ol class="hw-list hw-list--numbered">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ol>
```

## No bullet List

```html|plain,light
<ul class="hw-list hw-list--no-bullets">
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```







# Design guidelines

> Lists organize content by grouping it together vertically. 

> When all items are equally important, with no need to convey a specific order for list items, use bulleted lists.

> When the order of the list items are important; if there is a priority, hierarchy or sequence between them, use numbered lists.




### {title} styles
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-styles-1.png"
title: "List"
description: "Unordered list with bullets is the deafult list style. Use this to present content of equal status or value."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-styles-2.png"
title: "Numbered list"
description: "Numbered list imply a sequence, and the order they are listed should have a reason. This is commonly used when giving a set of instructions."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-styles-3.png"
title: "No bullet list"
description: "A plain text list with no bullets or numbers. Avoid using this for long lists as it can be harder to scan."
```





### {title} sizes
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-sizes-1.png"
title: "Small list"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-sizes-2.png"
title: "Default list"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-sizes-3.png"
title: "Large list"
```








## Best practices

#### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Keep it short and clear."
```
#### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don’t use numbered lists if the order is irrelevant."
```