{navigation}






> Default link styles



### Markup
```code
[Base]           .hw-link

Modifiers:
[Small]          .hw-link--small
[Big]            .hw-link--big
[Inverted]       .hw-link--inverted
[No underline]   .hw-link--no-underline
```


### Examples

```html|span-6,plain,light
  <p>This is a <a href="#" class="hw-link">link</a> in a sentence.</p>
```

```html|span-6,plain,light
  <a href="#" class="hw-link hw-link--small">This is a small link on it's own</a>
```


```html|span-6,plain,light
<a href="#" class="hw-link">
  <i class="fas fa-cloud-download"></i>
  This is a link with an icon
</a>
```


```html|span-6,plain,light
  <a href="#" class="hw-link hw-link--big">This is a big link</a>
```

```html|span-6,plain,dark
  <a href="#" class="hw-link hw-link--inverted">This is an inverted link</a>
```

```html|span-6,plain,light
  <a href="#" class="hw-link hw-link--no-underline">This is a link without an underline until hovered</a>
```





# Design guidelines

> Links are our primary navigation asset. The green coloured underline indicate that a text is a clickable link. Links may appear on their own, within a sentence or within a larger component.




### Link types
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-1.png"
title: "Primary link"
description: "This is the default link type. They are used on their own, in lists, or directly following content."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-2.png"
title: "Primary link – inverted"
description: "This is the default link type displayed inverted, for use on dark backgrounds."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-3.png"
title: "Link with icon"
description: "A primary link can be paired up with an icon to further describe what the link is for."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-4.png"
title: "Text link"
description: "A text link is a link within a line of text. Text links are in darker green colour, and with an underline to differantiate from plain text."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-5.png"
title: "Without underline"
description: "Links without underline are only to be used within other components which are a link in itself, e.g. a card."
```


### Links sizes
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-sizes-1.png"
title: "Small"
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-sizes-2.png"
title: "Default"
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-sizes-3.png"
title: "Large"
```



## Best practices

#### Do

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Use labels which accurately reflect the content users will find at the link destination, and keep it short, with as few words as possible."
```

#### Don't
  
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don’t use labels that say nothing about what the link is about."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Don’t write long and complex labels. Links should be kept short and descriptive, and within one line."
```