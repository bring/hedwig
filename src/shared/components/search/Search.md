
# Search field

The search field displays results and a rotating placeholder when the field is not populated.

NB: The search field position and the opaque background overlay is not controlled by the search field code.

```code
[data-hw-search]                Attaches functionality  (required)
[data-hw-search-placeholders]   Array of placeholders   (required)
```

### Standalone version with icon

```html
<div class="hw-search hw-search--standalone"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <svg class="hw-search__icon">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
    </svg>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```


### Standalone version with button

```html
<div class="hw-search hw-search--standalone"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
  <button type="submit" class="hw-button hw-button--primary">Search</button>
</div>
```

### Default search

```html
<div class="hw-search"
  data-hw-search
  data-hw-search-placeholders='["Søk etter pakke", "Eks.: 1212012381238123", "Eller på nettstedet", "Eks.: Bedriftspakke"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <svg class="hw-search__icon">
      <use xlink:href="#search"></use>
    </svg>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```

### Search with single placeholder (no rotation)

```html
<div class="hw-search"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <svg class="hw-search__icon">
      <use xlink:href="#search"></use>
    </svg>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```

### Larger version (for navbar version)

```html
<div class="hw-search hw-search--large"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <svg class="hw-search__icon">
      <use xlink:href="#search"></use>
    </svg>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```
