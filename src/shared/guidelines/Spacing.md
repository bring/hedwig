{navigation}



> Our design systems is based on a few number of spacings.

## Visual example

```html
plain: true
noSource: true
---
<div class="hw-helpers-margin-highlighter">

<div class="hw-block" style="margin-left: 4px;"><p>--hw-spacing-small-1</p></div>
<div class="hw-block" style="margin-left: 8px;"><p>--hw-spacing-small-2</p></div>
<div class="hw-block" style="margin-left: 12px;"><p>--hw-spacing-small-3</p></div>
<div class="hw-block" style="margin-left: 16px;"><p>--hw-spacing-small-4</p></div>
<div class="hw-block" style="margin-left: 20px;"><p>--hw-spacing-medium-1</p></div>
<div class="hw-block" style="margin-left: 24px;"><p>--hw-spacing-medium-2</p></div>
<div class="hw-block" style="margin-left: 32px;"><p>--hw-spacing-medium-3</p></div>
<div class="hw-block" style="margin-left: 40px;"><p>--hw-spacing-medium-4</p></div>
<div class="hw-block" style="margin-left: 48px;"><p>--hw-spacing-large-1</p></div>
<div class="hw-block" style="margin-left: 64px;"><p>--hw-spacing-large-2</p></div>
<div class="hw-block" style="margin-left: 80px;"><p>--hw-spacing-large-3</p></div>
<div class="hw-block" style="margin-left: 120px;"><p>--hw-spacing-large-4</p></div>

</div>
```

```code
  --hw-spacing-small-1: 4px;
  --hw-spacing-small-2: 8px;
  --hw-spacing-small-3: 12px;
  --hw-spacing-small-4: 16px;
  --hw-spacing-medium-2: 24px;
  --hw-spacing-medium-3: 32px;
  --hw-spacing-medium-4: 40px;
  --hw-spacing-large-1: 48px;
  --hw-spacing-large-2: 64px;
  --hw-spacing-large-3: 80px;
  --hw-spacing-large-4: 120px;
```



# Design guidelines

> Hedwig layout defines how to use spacing when making prototypes and new components.


## Spatial system

Hedwig uses a simple 8 px grid system for layout, typography and icons. It’s the core of all visual elements. The grid provides guidance when making new components aswell as keeping the style of Hedwig consistant across all products and web design.  

Smaller components, such as icons and type, can align to a 4 px grid.


```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-1.png"
```



#### Spatial system
```image
plain: true
light: true
span: 6
src: "{assets}/img/{postenbring}/{component}-2.png"
```


#### How to use spacing in Figma

The 8 px grid should be used when creating new components and layouts in Hedwig. Applying the spatial scale to your UI elements can come in the form of padding, margin, height, and width definitions.



#### Designing components

The 8 px grid should be used when creating new components and layouts in Hedwig. Within smaller components you can use the 4 px grid. 



```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-3.png"
title: "Primary button – Medium Outline"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-4.png"
title: "Text field – Filled"
```

```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-5.png"
title: "Accordions"
```


#### Responsive padding

When designing larger and more complex components, you apply more spacing to create a clearer and more visual appearence. When applying these components on moblie devices the spacing needs to be responsive and use less spacing.

A general guidance is that the spacing goes down one level on the spatial scale.


> 32 — 24
> 24 — 16
> 16 — 12


```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-6.png"
title: "Card on desktop"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-7.png"
title: "Card on mobile"
```


#### Designing page layouts

Most pages should be devided into sections and subsections. With using our spacing guides we accomplish a clear visual hiearchy. By seperating what content belongs together and use less spacing within a section and even less spacing within a subsection you achieve this. 

You should divide content within a section with 64 px.
You should divide sections with 120 px. 

```hint|neutral
Some pages have predefined page layouts that you can apply your content to.
```

```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-8.png"
```




#### Spacing within text page

To keep a consistent layout and have a good and clear vertical system, we incorporate the spatial system to the pages we design. The different text sizes have assigned spacing when setting up a text page, 

There is optional spacing when information is related.




```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-9.png"
title: "Bring H1"
description: "Used for the main heading at the top of the page. Uses 64 px spacing above. 32 px should be used if the page has breadcrumbs."
```



```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-10.png"
title: "H2"
description: "Used for secondary headings to mark new sections within a page. Can be used as a secondary title to support H1.
 
If used as a secondary heading, use 64 px. 
If used as a secondary title, use 32 px."
```




```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-11.png"
title: "H3"
description: "The H3 style comes in two weights; medium and regular. These can be used for smaller headings within a section of a text."
```


```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-11.png"
title: "Body"
description: "Body is used for all main body copy, and uses 24 px padding to its title."
```

```image
plain: true
span: 6
src: "{assets}/img/{postenbring}/{component}-12.png"
title: "Components"
description: "When inserting a component like an image, video, quote etc. the image gets a padding both over and under the component. 

You can releate the component to the text above by using 32 px instead of 64 px."
```







## Best practices

#### Do

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Use the 8 px spatial guidance."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "Create a visual hiearchy using sections and subsections."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-3.png"
description: "Create components that use the same spacing."
```

#### Don't
  
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don’t use random spacing properties with no clear vertical rythm."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Don't try to fit too much into a too small space. "
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-3.png"
description: "Don’t be unconsistent when making new components."
```











