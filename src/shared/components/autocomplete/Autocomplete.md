# Work in progress

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
      placeholder="Placeholder"
    />
    <span class="hw-autocomplete__input-remove">
      <svg class="hw-icon">
        <use xlink:href="#remove"></use>
      </svg>
    </span>
  </div>

  <ul id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
    <li class="hw-autocomplete__suggestion" role="option" hw-data-autosuggestion-selection>
      <span class="hw-autocomplete__suggestion-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </span>
    </li>
    <li class="hw-autocomplete__suggestion" role="option" hw-data-autosuggestion-selection>
      <span class="hw-autocomplete__suggestion-text">Two</span>
    </li>
  </ul>

</div>
```

## Active autocomplete

```html
<label for="autcomplete">Your address</label>

<div class="hw-autocomplete hw-autocomplete--active" data-hw-autocomplete>

  <div class="hw-autocomplete__input-wrapper">
    <input
      type="text"
      id="autcomplete"
      data-hw-autocomplete-input
      class="hw-autocomplete__input"
      role=”combobox”
      value="Search value"
      aria-owns="suggestions"
      placeholder="Placeholder"
    />
    <button tabindex="-1" class="hw-autocomplete__input-remove">
      <svg class="hw-icon hw-icon--small">
        <use xlink:href="#remove"></use>
      </svg>
    </button>
  </div>

  <ul id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
    <li class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion data-hw-autocomplete-value="One">
      <span class="hw-autocomplete__suggestion-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </span>
    </li>
    <li class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion data-hw-autocomplete-value="Two">
      <span class="hw-autocomplete__suggestion-text">Two</span>
    </li>
  </ul>

</div>
```
