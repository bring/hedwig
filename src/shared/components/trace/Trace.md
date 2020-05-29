
{navigation}


> The trace field is simular to the [Search](/Search) field and contains a rotating placeholder when the field is not populated.




### Data attributes
```code
Required:
[data-hw-trace]                Attaches functionality
[data-hw-trace-placeholders]   Array of placeholders
```


### Primary

```html|light,plain,span-4
<div class="hw-trace hw-trace--no-break" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--primary hw-trace__button">Trace</button>
</div>
```

### Secondary

```html|light,plain,span-4
<div class="hw-trace hw-trace--no-break" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--secondary hw-trace__button">Trace</button>
</div>
```

### Primary Stacked

```html|light,plain,span-4
<div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--primary hw-trace__button">Trace</button>
</div>
```

### Secondary Stacked

```html|light,plain,span-4
<div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--secondary hw-trace__button">Trace</button>
</div>
```




```html|span-6,responsive,light,plain
<div class="hw-block hw-block--mt hw-block--mb hw-block--px">
  <div class="hw-trace" 
    data-hw-trace 
    data-hw-trace-placeholders='["Placeholder", "Another one"]'>
    <div class="hw-trace__inner">
      <input class="hw-trace__input" type="text" data-hw-trace-input />
      <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
      <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
    </div>
      <button type="submit" class="hw-button hw-button--primary hw-trace__button">Trace</button>
  </div>
</div>

<div class="hw-block hw-block--pt hw-block--pb hw-block--px">
  <div class="hw-trace hw-trace--borders" 
    data-hw-trace 
    data-hw-trace-placeholders='["One placeholder"]'>
    <div class="hw-trace__inner">
      <input class="hw-trace__input" type="text" data-hw-trace-input />
      <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
      <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
    </div>
      <button type="submit" class="hw-button hw-button--secondary hw-trace__button">Trace</button>
  </div>
</div>

```











# Design guidelines

> A trace field looks similar to a search field, but rather than searching through content, the trace enables users to track their packages currently in transit.





### {title} types
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-types-1.png"
title: "Primary"
description: "Primary trace field is used where tracing is the primary action within 
a page."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-types-2.png"
title: "Secondary"
description: "Secondary trace field is used where tracing is a secondary action within 
a page."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-types-3.png"
title: "Stacked Primary"
description: "Stacked Primary is a compressed component of the primary trace, where the input field and button are stacked on top of each other. This can be used when space is luxury."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-types-4.png"
title: "Stacked Secondary"
description: "Stacked Secondary is a compressed component of the secondary trace, where the input field and button are stacked on top of each other. This can be used when space is luxury."
```





## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-do-1.png"
description: "Use primary trace when tracing is the main action of the page."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-do-2.png"
description: "Use secondary trace when tracing is a secondary action in the sidebar."
```

### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-dont-1.png"
description: "Dont use multiple trace fields on the same page."
```









> {title} is a variation of Input and Search.

> See [Input](/Input#design-guidelines) and [Search](/Search#design-guidelines) for more guidelines and best practices regarding input fields and search fields.

