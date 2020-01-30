# Autocomplete - Styling only

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

```html
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
```html
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

```html
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

## Active autocomplete  (demonstrated over Lorem Ipsum)

```html
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada eros in cursus rhoncus. Nullam in varius lorem, sit amet accumsan elit. Aliquam a purus ut mauris viverra pharetra. Maecenas ante tellus, placerat varius velit eget, porttitor sagittis risus. In auctor, orci eget vulputate cursus, libero quam gravida purus, eu ultrices tortor arcu et lorem. Aenean sit amet auctor ligula. Suspendisse potenti. Donec egestas sapien blandit lacus rutrum, facilisis vulputate ipsum consectetur. Sed vulputate lacus in augue aliquam, et dignissim arcu auctor. Nulla ultricies commodo varius. Vivamus efficitur gravida leo quis ullamcorper.

## Active autocomplete with 12 suggestions (demonstrated over Lorem Ipsum)

```html
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
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 1</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 2</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 3</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 4</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 5</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 6</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 7</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 8</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 9</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 10</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 11</span>
      </label>
      <label class="hw-autocomplete__suggestion" role="option" data-hw-autocomplete-suggestion>
        <input type="radio" name="hedwig" value="two" />
        <span class="hw-autocomplete__suggestion-text">Suggestion 12</span>
      </label>
    </div>

  </div>
</label>
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada eros in cursus rhoncus. Nullam in varius lorem, sit amet accumsan elit. Aliquam a purus ut mauris viverra pharetra. Maecenas ante tellus, placerat varius velit eget, porttitor sagittis risus. In auctor, orci eget vulputate cursus, libero quam gravida purus, eu ultrices tortor arcu et lorem. Aenean sit amet auctor ligula. Suspendisse potenti. Donec egestas sapien blandit lacus rutrum, facilisis vulputate ipsum consectetur. Sed vulputate lacus in augue aliquam, et dignissim arcu auctor. Nulla ultricies commodo varius. Vivamus efficitur gravida leo quis ullamcorper.

Morbi rutrum lectus ipsum, id eleifend justo scelerisque et. Pellentesque rutrum sollicitudin nulla malesuada ornare. Aenean at arcu diam. Donec malesuada enim tellus, a vulputate velit dignissim et. Vestibulum rutrum eros enim, eget varius dui fringilla in. Sed dapibus, dolor in semper blandit, risus enim euismod sem, quis blandit lorem mauris ac est. Vestibulum lacinia nec nibh eu tempus.

Nulla ultrices hendrerit nulla, viverra rutrum risus porttitor eget. Integer a velit sed augue aliquam cursus quis non mi. Proin maximus malesuada sapien, ac interdum ex pulvinar in. Aenean ac ultrices nunc. In hac habitasse platea dictumst. Curabitur aliquet viverra erat, at mattis neque consectetur luctus. Etiam pulvinar mi ac mi pulvinar sagittis. Quisque congue molestie libero id volutpat. Nullam tincidunt augue arcu, vehicula convallis massa finibus eget. Nunc quis tincidunt risus, quis rhoncus odio. Integer sed nulla lorem. Aenean sit amet eros ipsum. Integer finibus mauris sem, at eleifend dolor suscipit a.

Quisque eget sapien lectus. Morbi ac tempus sem, ac sodales lacus. Curabitur nec ullamcorper orci. Suspendisse a maximus turpis. Vestibulum malesuada ante a odio euismod sollicitudin. Sed et erat pharetra, porttitor metus at, mollis neque. Ut rhoncus bibendum eleifend. Nunc non pharetra ante, dictum tristique tortor. Proin tortor enim, elementum ut sodales at, feugiat sit amet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel purus congue, varius massa eget, sodales risus. Cras vel metus at nulla egestas tincidunt sit amet et sapien.
