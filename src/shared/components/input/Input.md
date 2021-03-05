{navigation}


> All inputs are block elements. For layout, use [grid](/Grid).

### Markup
```code
[Label]                .hw-label

[Input]                .hw-input
[Input error]          .hw-input--error
```



## Filled

#### Normal
```html|span-3,light,plain
<label class="hw-label">
  Label
  <input class="hw-input" type="text" placeholder="Placeholder" />
</label>
```

#### Disabled
```html|span-3,light,plain
<label class="hw-label" disabled>
  Label
  <input class="hw-input" type="text" placeholder="Placeholder" disabled />
</label>
```

#### Readonly
```html|span-3,light,plain
<label class="hw-label" readOnly>
  Label
  <input class="hw-input" type="text" placeholder="Placeholder" readOnly />
</label>
```

#### Error
```html|span-3,light,plain
<label  class="hw-label hw-label--error">
  Label
  <input class="hw-input hw-input--error" type="text" placeholder="Placeholder" />
  <div class="hw-error hw-error--align-left hw-error--indented">E-postadressen er ugyldig</div>
</label>
```

#### White background
```html|span-3,light,plain
<div class="hw-block hw-block--px hw-block--pt hw-block--pb hw-background-color-primary-lighter">
  <label class="hw-label">
    Label
    <input class="hw-input hw-input--white" type="text" placeholder="Placeholder" />
  </label>
</div>
```


## Line

#### Normal
```html|span-3,light,plain
<label class="hw-label hw-label--line">
  Label
  <input class="hw-input hw-input--line" type="text" placeholder="Placeholder" />
</label>
```

#### Disabled
```html|span-3,light,plain
<label class="hw-label hw-label--line" disabled>
  Label
  <input class="hw-input hw-input--line" type="text" placeholder="The disabled value" disabled />
</label>
```

#### Read only
```html|span-3,light,plain
<label class="hw-label hw-label--line" readonly>
  Label
  <input class="hw-input hw-input--line" type="text" placeholder="The read only value" readonly />
</label>
```

#### Error
```html|span-3,light,plain
<label  class="hw-label hw-label--line hw-label--error">
  Label
  <input class="hw-input hw-input--error hw-input--line" type="text" placeholder="Placeholder" />
  <div class="hw-error hw-error--align-left">E-postadressen er ugyldig</div>
</label>
```




# Design guidelines

> Text fields let users enter and edit text, usually used in forms. Text fields come in two styles: filled and lined version.

> Both types of text fields provide the same functionality, so the type of text field you can use depend on style alone.





### Text field styles
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-styles-1.png"
title: "Filled"
description: "Filled text fields have more visual emphasis than lined text fields, to stand out when surrounded by other content. It is recommended to use this style for standalone text fields, or just a few together."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-styles-2.png"
title: "Lined"
description: "Lined text fields are more subtle, with less visual emphasis than filled text fields. Use this in places like forms, where many text fields are placed together. Their subtle apperance helps simplify the layout."
```





### Text field types
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-1.png"
title: "Input"
description: "This is the default text field component, enabling users to enter a single line of plain text."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-2.png"
title: "Input with dropdown"
description: "This is an input field with a dropdown on either left or right side of the input text."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-3.png"
title: "Text area"
description: "Text area can contain multiple lines, or a paragraph of text. Use this when you expect input to exceed one line of text."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-4.png"
title: "Password"
description: "A password field shows an indicator of password strenght, responsive as users enters their chosen password."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-5.png"
title: "Autocomplete"
description: "Autocomplete displays
a dropdown of matching results as users type in their keywords."
```








## Best practices

#### Do this

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Labels should be short and informative."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "The width of the field should reflect the expected length of input data. Use half-width fields where short inputs are expected."
```

#### Do not do this
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Do not write long texts as the label."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Do not use default input fields for queries that may give you long answers in return. If long answers are expected, use a text area component instead."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-3.png"
description: "Do not mix text field styles within the same instance."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-4.png"
description: "Error message and helper text should never be displayed at the same time. If an error occurs, the error message replaces the helper text."
```

