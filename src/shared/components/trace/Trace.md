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
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--picture-yellow hw-trace__button">Trace</button>
</div>
```

### Trace field with borders

```html
<div class="hw-trace hw-trace--borders" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--picture-dark hw-trace__button">Trace</button>
</div>
```

```html|span-6,responsive
<div class="hw-block hw-block--mt hw-block--mb hw-block--px">
<div class="hw-trace" 
  data-hw-trace 
  data-hw-trace-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-trace__inner">
    <input class="hw-trace__input" type="text" data-hw-trace-input />
    <span class="hw-trace__placeholder" data-hw-trace-placeholder></span>
    <button type="button" class="hw-trace__button-inside" data-hw-trace-reset><i class="fas fa-times-circle"></i></button>
  </div>
    <button type="submit" class="hw-button hw-button--picture-yellow hw-trace__button">Trace</button>
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
    <button type="submit" class="hw-button hw-button--picture-dark hw-trace__button">Trace</button>
</div>
</div>
```
