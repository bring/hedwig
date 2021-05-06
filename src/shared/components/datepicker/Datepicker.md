

{navigation}


> To use a datepicker you need to include [Pikaday](https://github.com/dbushell/Pikaday) in your application.
> It's up to you to define the settings and localization. 
> Hedwig will automatically style the datepicker with custom styles.


### Markup
```code
[Base]           .hw-datepicker
```



## Filled

#### Default

```html|span-3,plain,light
  <label class="hw-label hw-datepicker">
    Date picker label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```

#### Error

```html|span-3,plain,light
  <label class="hw-label hw-datepicker">
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input hw-input--error" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
    </div>
    <div class="hw-error hw-error--align-left">You must select a date</div>
  </label>
```

#### Disabled

```html|span-3,plain,light
  <label class="hw-label hw-datepicker" disabled>
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" disabled />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```


## Line

#### Default

```html|span-3,plain,light
  <label class="hw-label hw-label--line hw-datepicker">
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```

#### Error

```html|span-3,plain,light
  <label class="hw-label hw-label--line hw-datepicker">
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input hw-input--error" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
    </div>
    <div class="hw-error hw-error--align-left">You must select a date</div>
  </label>
```

#### Disabled

```html|span-3,plain,light
  <label class="hw-label hw-label--line hw-datepicker" disabled>
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```

#### Native

```html|span-3,plain,light
<label class="hw-label hw-datepicker ">
    Date picker label
    <div class="hw-datepicker__inner hw-datepicker__native">
      <input type="date" class="hw-input" />
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```

## Example javascript

```
const datepickerWrapper = document.getElementById('datepicker-ajsd4ks8');
  var picker = new Pikaday({ 
  container: datepickerWrapper,
  field: datepickerWrapper.querySelector('input'), 
});
```








# Design guidelines

> Datepickers are used for users to select a single or a range of dates. Datepickers come in two styles: filled and lined version.

> Both types of text fields provide the same functionality, so the type of text field you can use depend on style alone.




### {title} styles
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-styles-1.png"
title: "Filled"
description: "Filled text fields have more visual emphasis than lined text fields, to stand out when surrounded by other content. It is recommended to use this style for standalone text fields, or just a few together."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-styles-2.png"
title: "Lined"
description: "Lined text fields are more subtle, with less visual emphasis than filled text fields. Use this in places like forms, where many text fields are placed together. Their subtle apperance helps simplify the layout."
```





### {title} types
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-1.png"
title: "Default"
description: "Used when the date is known by the user, and a calendar dropdown is not neccessary."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-2.png"
title: "Single with calendar"
description: "Single with calendar should be used when you need to select one date, accompanied by a calendar dropdown."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/{component}-types-3.png"
title: "Range with calendar"
description: "Range with calendar should be used when selecting a range of dates, accompanied by a calendar widget."
```








## Best practices

#### Do this

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Use placeholder text so users input the date in correct format."
```

#### Do not do this
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don't use a calendar with dropdown when asking for a date far back in time, e.g. a birth date. It is a hassle to go years back by clicking through all the months."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Do not mix styles within the same instance."
```