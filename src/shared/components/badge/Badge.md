



> Badges are used to label, categorize or organize items using keywords to describe them.



### Markup
```code
[Base]          .hw-badge

Modifiers size:
[Smaller]       .hw-badge--smaller
[Small]         .hw-badge--small
[Large]         .hw-badge--large
[Larger]        .hw-badge--larger

Modifiers color:
[Primary]       .hw-badge--primary
[Dark]          .hw-badge--dark
[White]         .hw-badge--white
[Warning]       .hw-badge--warning
```

```hint|neutral
The badge will have a size 75% of surrounding content unless size modifiers are used.
```





### Examples

### Primary
Dark green badges should be used for lighter green backgrounds, and in need of a high contrast badge for light backgrounds.
```html|span-2,plain,light
<div class="hw-badge">
  Badge
</div>
```

### Dark green
Dark green badges should be used for lighter green backgrounds, and in need of a high contrast badge for light backgrounds.
```html|span-2,plain,light
<div class="hw-badge hw-badge--dark">
  Badge
</div>
```
### Light green
Dark green badges should be used for lighter green backgrounds, and in need of a high contrast badge for light backgrounds.
```html|span-2,plain,dark
<div class="hw-badge hw-badge--white">
  Badge
</div>
```


### Variations
###### Primary

```html|plain,light
<div class="hw-badge hw-badge--smaller">
  Badge
</div>

<div class="hw-badge hw-badge--small">
  Badge
</div>

<div class="hw-badge hw-badge--large">
  Badge
</div>

<div class="hw-badge hw-badge--larger">
  Badge
</div>
```


###### Dark

```html|plain,light
<div class="hw-badge hw-badge--smaller hw-badge--dark">
  Badge
</div>

<div class="hw-badge hw-badge--small hw-badge--dark">
  Badge
</div>

<div class="hw-badge hw-badge--large hw-badge--dark">
  Badge
</div>

<div class="hw-badge hw-badge--larger hw-badge--dark">
  Badge
</div>
```


###### White

```html|plain,dark
<div class="hw-badge hw-badge--smaller hw-badge--white">
  Badge
</div>

<div class="hw-badge hw-badge--small hw-badge--white">
  Badge
</div>

<div class="hw-badge hw-badge--large hw-badge--white">
  Badge
</div>

<div class="hw-badge hw-badge--larger hw-badge--white">
  Badge
</div>
```


###### Warning

```html|plain,light
<div class="hw-badge hw-badge--smaller hw-badge--warning">
  Badge
</div>

<div class="hw-badge hw-badge--small hw-badge--warning">
  Badge
</div>

<div class="hw-badge hw-badge--large hw-badge--warning">
  Badge
</div>

<div class="hw-badge hw-badge--larger hw-badge--warning">
  Badge
</div>
```












# Design guidelines

> Badges are used to label, categorize or organize items using keywords to describe them.



### Badge types

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-1-1.png"

{bring}
title: "Darker green"
description: "Dark green badges should be used for lighter green backgrounds, and in need of a high contrast badge for light backgrounds."
{/bring}

{posten}
title: "Darker red"
description: "Darker red badges should be used for lighter red backgrounds, and in need of a high contrast badge for light backgrounds."
{/posten}
```
  
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-1-2.png"

{bring}
title: "Lighter green"
description: "Lighter green badges should be used for white backgrounds for a subtle expression, or if a badge is needed on a dark background."
{/bring}

{posten}
title: "Lighter red"
description: "Lighter red badges should be used for white backgrounds for a subtle expression, or if a badge is needed on a dark background."
{/posten}
```

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-1-3.png"

{bring}
title: "White"
description: "White badges should be used for lighter green backgrounds for a subtle expression, or on dark backgrounds for extra high contrast."
{/bring}

{posten}
title: "White"
description: "White badges should be used for lighter red backgrounds for a subtle expression, or on dark backgrounds for extra high contrast."
{/posten}
```

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-1-4.png"

{bring}
title: "Yellow"
description: "Yellow badges should only be used in case of alerts and warnings, or unexpected events."
{/bring}

{posten}
title: "Yellow"
description: "Yellow badges should only be used in case of alerts and warnings, or unexpected events."
{/posten}
```



### Badge sizes
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-2-1.png"
title: "Smaller"
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-2-2.png"
title: "Small"
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-2-3.png"
title: "Medium"
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-2-4.png"
title: "Large"
```


## Best practices

#### Do
  
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-3-1.png"
description: "Keep the descriptions short and clear, preferably just one word."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-4-1.png"
description: "When an item has multiple badges inherit, the badges should be placed with 8px space between them."
```




#### Don't

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-4-2.png"
description: "Don’t misuse yellow badge for items that are not an alert or a warning."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/badges-3-2.png"
description: "Don’t write long, complex descriptions."
```

