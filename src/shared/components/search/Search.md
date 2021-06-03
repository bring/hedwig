
{navigation}


> The search field displays results and a rotating placeholder when the field is not populated.

```hint|neutral
NB: The search field position and the opaque background overlay is not controlled by the search field code.
```

### Data attributes
```code
[data-hw-search]                Attaches functionality  (required)
[data-hw-search-placeholders]   Array of placeholders   (required)
```


## Standalone
### Standalone

```html|span-4,plain,light
<label class="hw-label">
  Label
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
</label>
```


### Standalone with primary button

```html|span-4,plain,light
<label class="hw-label">
  Label
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
</label>
```


### Standalone with secondary button

```html|span-4,plain,light
<label class="hw-label">
  Label
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
</label>
```
### White standalone

```html|span-4,light
<label class="hw-label">
  Label
  <div class="hw-search hw-search--standalone hw-search--white" data-hw-search data-hw-search-placeholders='["Hi!"]'>
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
</label>
```

### Standalone with suggestions

```html|span-4,plain,light
<label class="hw-label">
  Label
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
    <button type="submit" class="hw-button hw-button--primary hw-search__button">Search</button>
  </div>
</label>

<!-- Space added only for preview in Hedwig --><br><br><br><br><br><br><br><br><br><br><br><br>
```






### Default search

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


### Default search with button

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


### Search with suggestions

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


<!-- Space added only for preview in Hedwig --><br><br><br><br><br><br><br><br><br><br><br><br>
```


### Search with simple suggestions

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




<!-- Space added only for preview in Hedwig --><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
```








# Design guidelines

> A search field enables users to search for keywords to find relevant content to the information they are looking for.






### {title} types
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-1.png"
title: "Standalone"
description: "A plain search field to type in keywords and hit enter to search."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-2.png"
title: "Standalone with primary button"
description: "Search fields with primary button are used where searching is the primary action within a page."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-3.png"
title: "Standalone with secondary button"
description: "Search fields with secondary button are used when searching is the secondary action within a page, e.g. a search function in a sidebar of a page."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-types-4.png"
title: "Default search"
description: "This is a global search field placed in the navbar. As you start typing in keywords, a dropdown with suggestions appears."
```








## Best practices

#### Do this

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Search fields should always be relevant to the content of the page they are applied to. The search in the navbar is global, and should provide results from the entire site."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "If searching is the primary action of the page, one should use the search field with the primary button, and make it the main focus in the layout. If not, one should use the search field with the secondary button instead."
```

#### Do not do this
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Do not use the default search field outside the navbar."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Do not use a search field when you should be using a trace field."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-3.png"
description: "Don’t use multiple search fields on the same page."
```





> {title} is a variation of Input.

> See [Input](/Input#design-guidelines) for more guidelines and best practices regarding input fields.

