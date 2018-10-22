
# Search field

The search field displays results and a rotating placeholder when the field is not populated.

NB: The search field position and the opaque background overlay is not controlled by the search field code.

```code
[data-hw-search]                Attaches functionality  (required)
[data-hw-search-placeholders]   Array of placeholders   (required)
```

### Standalone

```html
<div class="hw-search hw-search--standalone" 
  data-hw-search 
  data-hw-search-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-search__inner">
    <input class="hw-search__input" type="text" data-hw-search-input type="text" />
    <i class="far fa-search hw-search__icon"></i>
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
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
  <button type="submit" class="hw-button hw-button--primary hw-search__button">Search</button>
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
    <i class="far fa-search hw-search__icon"></i>
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
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
</div>
```

### Search with button inside

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
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
    <button class="hw-search__button-inside" data-hw-search-reset><i class="fas fa-times-circle"></i></button>
  </div>
</div>
```


### Search with suggestions

```html|span-4
<!-- Some space to get past the suggestions -->






<div class="hw-search"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
  <ul class="hw-search__suggestions">
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Flyttetips</p>
        <p class="hw-search__suggestion-extra">Innhold</p>
      </a>
    </li>
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Oslo Sentrum bedriftssenter</p>
        <p class="hw-search__suggestion-extra">Postkontor</p>
      </a>
    </li>
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Digitalt frimerke <span class="hw-badge hw-badge--smaller">Pdf</span></p>
        <p class="hw-search__suggestion-extra">Innhold</p>
      </a>
    </li>
  </ul>
</div>
```

.
.
.
.
.
.



### Search with simple suggestions

```html|span-4
<!-- Some space to get past the suggestions -->






<div class="hw-search"
  data-hw-search
  data-hw-search-placeholders='["Hi!"]'
>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
  <ul class="hw-search__suggestions hw-search__suggestions--simple">
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Spore pakker</p>
      </a>
    </li>
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Sende Norgespakke</p>
      </a>
    </li>
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Sende Brev</p>
      </a>
    </li>
    <li class="hw-search__suggestion" data-hw-search-suggestion>
      <a class="hw-search__suggestion-link" tabindex="-1" href="#">
        <p class="hw-search__suggestion-title">Melde adresseendring</p>
      </a>
    </li>
  </ul>
</div>
```

.
.
.
.
.
.

### Search with button

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
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
  </div>
  <button type="submit" class="hw-button hw-button--primary hw-search__button">Search</button>
</div>
```
