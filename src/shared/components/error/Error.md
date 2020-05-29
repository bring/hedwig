{navigation}






> The buttons can be used either as `<button>`-tags or `<a>`-tags as needed


### Markup
```code   
[Base]                   .hw-error
  
Modifiers:
[Align left version]      .hw-error--align-left
[Hidden version]          .hw-error--is-hidden

Variants:
[Simple version]          .hw-error-simple      (no icon)
[Summary version]         .hw-error-summary     (Error detail box)
```



## Error message

Generic error message for input fields

```html
<input type="text" class="hw-input hw-input--error" />
<div class="hw-error">
  Error message
</div>
```


### Simple version

```html|plain,light
<input type="text" class="hw-input hw-input--error" />
<div class="hw-error-simple">
  Simple error message
</div>
```

### Error summary

```html|plain,light,span-4
<div class="hw-error-summary">
  <div class="hw-error-summary__title">
    <h3>Brukerprofilen din ble ikke opprettet fordi</h3>
  </div>
  <div class="hw-error-summary__contents">
    <ul class="hw-list hw-list--small">
      <li>E-postadressen er ugyldig</li>
      <li>Mobilnummeret må inneholde 8 tall</li>
      <li>Passordet er ikke godkjent</li>
    </ul>
  </div>
</div>
```







# Design guidelines

> An error message appear when a mistake has occured by the user or the system, or a task is not completed or done correctly.


```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/error-1.png"
title: "Appearance"
description: "When an error occurs, an error message of yellow background and black text should be displayed.

Use of yellow colour is the primary signal for marking when an error has occured, most often used as the background colour of a box displaying a message explaining the cause of error."
```


## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/error-do-1.png"
description: "Error message should appear if multiple mistakes or errors has occurred, to cleary explain what has happened and why."
```

### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/error-dont-1.png"
description: "Don’t apply the yellow colour to items which are not an error or warning of any kind. Do not misuse yellow to scream for attention."
```








