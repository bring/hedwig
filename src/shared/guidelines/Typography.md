{navigation}


# Fonts

> Our font is Posten Sans.
> The font size on H-tags are responsive on viewports between 300 - 1200px, and static on viewports smaller and bigger viewports

```code
[h1]             h1 font size 32 - 48px
[h2]             h2 font size 28 - 44px
[h3]             h3 font size 22 - 28px
[h4]             h4 font size 18 - 22px
[h5]             h5 font size 16 - 20px
[p]              p

[.hw-h1-display]     font size 40 - 80px
[.hw-h1]             font size 32 - 48px
[.hw-h2]             font size 28 - 44px
[.hw-h3]             font size 22 - 28px
[.hw-h4]             font size 18 - 22px
[.hw-h5]             font size 16 - 20px


[Small]            hw-text-small
[Smaller]          hw-text-smaller
[Uppercase]        hw-text-uppercase
[Center]           hw-text-center
[Right]            hw-text-right

[Color primary]       hw-color-primary
[Color primary dark]  hw-color-primary-dark
```




[Example article](https://www.bring.no/test/articles/designsystems) showing typography in use.
 
### Headers

```html|responsive,plain,light
  <h1 class="hw-h1-display">H1 Headline Display example</h1>
  <h1>H1 Headline example</h1>
  <h2>H2 Headline example</h2>
  <h3>H3 Headline example</h3>
  <h4>H4 Headline example</h4>
  <h5>H5 Headline example</h5>
```

### Paragraph

```html|span-4,plain,light
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

### Small
```html|span-4,plain,light
  <p class="hw-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

### Smaller
```html|span-4,plain,light
  <p class="hw-text-smaller">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```


### Uppercase
```html|span-4,plain,light
  <p class="hw-text-uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

### Text align
```html|span-4,plain,light
  <p>Default (left aligned)</p>
  <p class="hw-text-center">Center aligned</p>
  <p class="hw-text-right">Right aligned</p>

```







# Design guidelines

> Typography help create clear hierarchies, organize information, and guide users through the content.







### Font weights
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-weights-1.png"
title: "Posten Sans Light"
description: "Posten Sans Light is used for the top two heading styles; Display and H1."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-weights-2.png"
title: "Posten Sans Regular"
description: "Posten Sans Regular is the default weight for text, and is used in body copy and the majority of
components."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-weights-3.png"
title: "Posten Sans Medium"
description: "Posten Sans Medium is used for the smaller heading styles, for emphasis and in some components, as buttons for instance."
```




### Heading styles
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-styles-1.png"
title: "Bring Display"
description: "The largest heading style. Used sparingly for really big headings, 
e.g. on the front page."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-styles-2.png"
title: "Bring H1"
description: "Used for the main heading at the top of the page."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-styles-3.png"
title: "Bring H2"
description: "Used for secondary headings to mark new sections within a page. Can be used as a secondary title 
to support H1."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-styles-4.png"
title: "Bring H3 Title + Bring H3"
description: "The H3 style comes in two weights; medium and regular. These can be used for smaller headings or large introductory texts."
```





### Body copy
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-bodycopy-1.png"
title: "Body Title + Body"
description: "Body is used for all main body copy, with Body Title for subheadings. Body Title is also the style used for text in buttons."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-bodycopy-2.png"
title: "Body Textlink"
description: "Used for inline links in text. This is the same as the Body style, but with an underline to indicate that it is a link."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-bodycopy-3.png"
title: "Body Small Title + Body Small"
description: "Used for secondary body copy, e.g. text in a sidebar, or text within an accordion or table. Body Small Title can be used for subheadings."
```








### Other
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-other-1.png"
title: "Technical Title + Technical"
description: "Used for smaller texts and descriptions, and for inline text in some components. Technical Title can be used for emphasis."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-other-2.png"
title: "Caption Title + Caption"
description: "Used for smaller texts and descriptions, and for inline text in some components. Caption Title can be used for emphasis."
```






Fluid typography

In code fluid typography is defined, with sizes for all text styles ranging from a minimum size to a maximum size, scaling dynamically responsive to the viewport.

In Figma we have to design with static sizes, so all text styles are defined in two base sizes; the default style for use in desktop, and a mobile style for designing for smaller screens.


```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-fluid-1.png"
title: "Bring H2"
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-fluid-2.png"
title: "Mobile – Bring H2"
```









## Best practices

#### Do this

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Use black colour for running text to keep it on a informative level, and to ensure it is easy to read with high legibility."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "Type colour should be of high contrast to the background colour, and validate WCAG’s requirements for universal design."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-do-3.png"
description: "Use text styles according to it’s purpose to create a good hiearchy of the content, making it easy for users to read and navigate through the information."
```

#### Do not do this
  
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Colours are not for decoration, and should therefore not be applied to text unless it has 
a defined function, specified in these guidelines."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Do not use type colour of low contrast to the background as it is bad for legibility, and does not meet the requirements for universal design."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-dont-3.png"
description: "Do not mix text styles together, create hybrid text styles, nor use the defined text styles outside it’s intended purpose. "
```



