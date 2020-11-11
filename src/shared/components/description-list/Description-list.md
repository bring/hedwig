

{navigation}
    

> Use a description list when there is a list of information with key-value pairs.

### Markup
```code
[Base]                 .hw-description-list

Modifiers:
[Horizontal]           .hw-description-list--horizontal
```

## Basic
```html|plain,light
<dl class="hw-description-list">
    <dt>Jon Snow</dt>
    <dd>Lord Commander of the Night's Watch</dd>
    <dt>Ser Jorah Mormont</dt>
    <dd>Exiled northern lord from Westeros</dd>
    <dt>Bran Stark</dt>
    <dd>The three-eyed raven</dd>
    <dt>Petyr Baelish</dt>
    <dd>Master of Coin on the small council</dd>
</dl>
```

## Horizontal
```html|plain,light
<dl class="hw-description-list hw-description-list--horizontal">
    <dt>Tracking number:</dt>
    <dd>123456789</dd>
    <dt>Weight:</dt>
    <dd>3,5 kg</dd>
    <dt>Size:</dt>
    <dd>3,3 cm x 6 cm x 1 cm</dd>
    <dt>Color:</dt>
    <dd>Red</dd>
</dl>
```


# Design guidelines

> The HTML <dl> element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).



### {title} styles
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-basic.png"
title: "Description list"
description: "Description list which is stacked vertically. This is the HTML standard."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-horizontal.png"
title: "Description list horizontal"
description: "Description list where the key-value pairs is stacked horizontally. The colon (:) is not a part of the component itself, but you should always consider adding it when using the horizontal variant."
```



## Best practices

#### Do this

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-basic.png"
description: "Use the description list when there are 2 or more key-value items"
```
#### Do not do this
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don’t use description list on a single key-value pair"
```
