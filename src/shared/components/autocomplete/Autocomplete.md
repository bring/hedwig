{navigation}


```hint
Styling only - WORK IN PROGRESS
```

> This component is meant to be used when searching up something with an API.
> Use your own javascript to toggle the active class, reset, and to bind the selected value to the input field.


### markup
```code
[Base]           .hw-autocomplete

Modifiers:
[Active]         .hw-autocomplete--active
[Error]          .hw-input--error (on the input field)
```

### Data attributes
``` code
data-hw-autocomplete-reset-visible=true       Show reset button
``` 


## Closed autocomplete

```html|span-3,plain,light
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

## Line

```html|span-3,plain,light
<label class="hw-label hw-label--line">Your address

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
Use the attribute `data-hw-autocomplete-reset-visible=true` to display the reset button. Reset button appears when text has been filled.

```html|span-3,plain,light
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
          This is the first suggestion
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

```html|span-3,plain,light
<label class="hw-label hw-label--error">Your address

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
          This is the first suggestion
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

```html|span-3,plain,light
<label class="hw-label">Your address
  <div class="hw-autocomplete hw-autocomplete--active" data-hw-autocomplete>

    <div class="hw-autocomplete__input-wrapper">
      <input
        type="text"
        id="autcomplete"
        data-hw-autocomplete-input
        class="hw-autocomplete__input"
        role=”combobox”
        value="Thi"
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
          This is the first suggestion
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">
          This is the second suggestion
        </span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">
          Third suggesiton comes here
        </span>
      </label>
    </div>

  </div>
</label>
```




## Active autocomplete with lots of suggestions

```html|span-3,plain,light
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
          Suggestion
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







# Design guidelines

> {title} is a variation of Input.

> See [Input](/Input#design-guidelines) for guidelines and best practices.

