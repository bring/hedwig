# Autocomplete - Styling only - WORK IN PROGRESS

This component is meant to be used when searching up something with an API.
Use your own javascript to toggle the active class, reset, and to bind the selected value to the input field.

### Available classes
```code
[Base]           .hw-autocomplete
[Active]         .hw-autocomplete--active

[Error]          .hw-input--error (on the input field)
```

### Available attributes
``` code
data-hw-autocomplete-reset-visible=true       Show reset button
``` 


## Closed autocomplete

```html|plain,light
<label class="hw-label">Your address

  <div class="hw-autocomplete" data-hw-autocomplete>

    <div class="hw-autocomplete__input-wrapper">
      <input
        type="text"
        data-hw-autocomplete-input
        id="autcomplete"
        class="hw-autocomplete__input"
        role=”combobox”
        aria-owns="suggestions"
        placeholder="Placeholder"
      />
      <button data-hw-autocomplete-reset class="hw-autocomplete__input-reset">
        <i class="fa-sm fas fa-times-circle"></i>
      </button>

    </div>

    <div id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="one" />
        <span class="hw-autocomplete__suggestion-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Two</span>
      </label>
    </div>

  </div>
</label>
```

## Autocomplete with reset button visible
Use the attribute `data-hw-autocomplete-reset-visible=true` to display the reset button 

```html|plain,light
<label class="hw-label">Your address

  <div class="hw-autocomplete" data-hw-autocomplete-reset-visible=true data-hw-autocomplete>

    <div class="hw-autocomplete__input-wrapper">
      <input
        type="text"
        data-hw-autocomplete-input
        id="autcomplete"
        class="hw-autocomplete__input"
        role=”combobox”
        aria-owns="suggestions"
        placeholder="Placeholder"
      />
      <button data-hw-autocomplete-reset class="hw-autocomplete__input-reset">
        <i class="fa-sm fas fa-times-circle"></i>
      </button>

    </div>

    <div id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="one" />
        <span class="hw-autocomplete__suggestion-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Two</span>
      </label>
    </div>

  </div>
</label>
```

## Closed autocomplete with error

```html|plain,light
<label class="hw-label">Your address

  <div class="hw-autocomplete" data-hw-autocomplete>

    <div class="hw-autocomplete__input-wrapper">
      <input
        type="text"
        data-hw-autocomplete-input
        id="autcomplete"
        class="hw-autocomplete__input hw-input--error"
        role=”combobox”
        aria-owns="suggestions"
        placeholder="Placeholder"
      />
      <button data-hw-autocomplete-reset class="hw-autocomplete__input-reset">
        <i class="fa-sm fas fa-times-circle"></i>
      </button>

    </div>

    <div class="hw-error">No results found</div>

    <div id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="one" />
        <span class="hw-autocomplete__suggestion-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Two</span>
      </label>
    </div>

  </div>
</label>
```

## Active autocomplete

```html|plain,light
<label class="hw-label">Your address
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

      <button data-hw-autocomplete-reset class="hw-autocomplete__input-reset">
        <i class="fa-sm fas fa-times-circle"></i>
      </button>
    </div>

    <div id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="one" />
        <span class="hw-autocomplete__suggestion-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </span>
      </label>
    </div>

  </div>
</label>
```

.
.
.

## Active autocomplete with lots of suggestions

```html|plain,light
<label class="hw-label">Your address
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

      <button data-hw-autocomplete-reset class="hw-autocomplete__input-reset">
        <i class="fa-sm fas fa-times-circle"></i>
      </button>
    </div>

    <div id="suggestions" class="hw-autocomplete__suggestions" role="listbox">
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="one" />
        <span class="hw-autocomplete__suggestion-text">
          Suggestion.
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion</span>
      </label>
    </div>

  </div>
</label>
```
