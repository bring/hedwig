
# Search field

The search field displays results and a rotating placeholder when the field is not populated.

NB: The search field position and the opaque background overlay is not controlled by the search field code.

```code
[data-hw-search]                Attaches functionality  (required)
[data-hw-search-placeholders]   Array of placeholders   (required)
```


## Standalone
#### Standalone

```html|span-4,plain,light
<div class="hw-search hw-search--standalone" 
  data-hw-search 
  data-hw-search-placeholders='["Placeholder", "Another one"]'>
  <div class="hw-search__inner">
    <input class="hw-search__input" type="text" data-hw-search-input />
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
    <button class="hw-search__button-inside" data-hw-search-reset><i class="fas fa-times-circle"></i></button>
  </div>
</div>
```


#### Standalone with primary button

```html|span-4,plain,light
<div class="hw-search hw-search--standalone" data-hw-search data-hw-search-placeholders='["Hi!"]'>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
    <button class="hw-search__button-inside" data-hw-search-reset><i class="fas fa-times-circle"></i></button>
  </div>
  <button type="submit" class="hw-button hw-button--primary hw-search__button">Search</button>
</div>
```


#### Standalone with secondary button

```html|span-4,plain,light
<div class="hw-search hw-search--standalone" data-hw-search data-hw-search-placeholders='["Hi!"]'>
  <div class="hw-search__inner">
    <input
      data-hw-search-input
      class="hw-search__input" type="text"
      aria-label="Search" />
    <i class="far fa-search hw-search__icon"></i>
    <span class="hw-search__placeholder" data-hw-search-placeholder></span>
    <button class="hw-search__button-inside" data-hw-search-reset><i class="fas fa-times-circle"></i></button>
  </div>
  <button type="submit" class="hw-button hw-button--secondary hw-search__button">Search</button>
</div>
```









#### Default search

```html|span-4,plain,dark
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


#### Default search with button

```html|span-4,plain,dark
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


#### Search with suggestions

```html|span-4,plain,dark
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


<!-- Space added only for preview in Hedwig --><br><br><br><br><br><br><br><br><br><br>
```


#### Search with simple suggestions

```html|span-4,plain,dark
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




<!-- Space added only for preview in Hedwig --><br><br><br><br><br><br><br><br><br><br><br><br><br>
```
