# Trace field

The trace field is simular to the search field and contains a rotating placeholder when the field is not populated.


```code
[data-hw-trace]                Attaches functionality  (required)
[data-hw-trace-placeholders]   Array of placeholders   (required)
```
### Trace field

```html
<div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input type="text" />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--primary hw-trace__button">Trace</button>
</div>
```

### Trace field

```html
<div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input type="text" />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--secondary hw-trace__button">Trace</button>
</div>
```

```html|span-6,responsive
<div class="hw-block hw-block--pt hw-block--pb hw-block--px">
  <div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input type="text" />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
  <button type="submit" class="hw-button hw-button--secondary hw-trace__button">Trace</button>
</div>
</div>

<div class="hw-block hw-block--pt hw-block--pb hw-block--px">
  <div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["No break"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input type="text" />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--primary hw-trace__button">Trace</button>
</div>
</div>
```
