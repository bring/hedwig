```code
[Base]           .hw-autocomplete

[Active]         .hw-autocomplete--active
```


## Closed autocomplete

```html
<label for="autcomplete">Your address</label>

<div class="hw-autocomplete">

  <div class="hw-autocomplete__input-wrapper">
    <input
      type="text"
      id="autcomplete"
      class="hw-autocomplete__input"
      role=”combobox”
      aria-owns="suggestions"
      aria-activedescendant="suggestion-one"
      placeholder="Placeholder"
    />
    <span class="hw-autocomplete__input-remove">
      <svg class="hw-icon">
        <use xlink:href="#remove"></use>
      </svg>
    </span>
  </div>

  <ul id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
    <li class="hw-autocomplete__suggestion" role="option" tabindex="0">
      <span class="hw-autocomplete__suggestion-text">One</span>
    </li>
    <li class="hw-autocomplete__suggestion" role="option" tabindex="0">
      <span class="hw-autocomplete__suggestion-text">Two</span>
    </li>
  </ul>

</div>
```

## Active autocomplete

```html
<label for="autcomplete">Your address</label>

<div class="hw-autocomplete hw-autocomplete--active">

  <div class="hw-autocomplete__input-wrapper">
    <input
      type="text"
      id="autcomplete"
      class="hw-autocomplete__input"
      role=”combobox”
      value="Search value"
      aria-owns="suggestions"
      placeholder="Placeholder"
    />
    <button tabindex="-1" class="hw-autocomplete__input-remove">
      <svg class="hw-icon">
        <use xlink:href="#remove"></use>
      </svg>
    </button>
  </div>

  <ul id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
    <li class="hw-autocomplete__suggestion" role="option" tabindex="0">
      <span class="hw-autocomplete__suggestion-text">One</span>
    </li>
    <li class="hw-autocomplete__suggestion" role="option" tabindex="0">
      <span class="hw-autocomplete__suggestion-text">Two</span>
    </li>
  </ul>

</div>
```
