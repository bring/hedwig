# Radio buttons

```code
[Base]                  .hw-radio-button
[Error version]         .hw-radio-button--error
```

### Example code

```
<label class="hw-radio-button">
  <span class="hw-radio-button__label">The label</span>
  <input type="radio" name="hedwig" value="one" />
  <i class="hw-radio-button__indicator"></i>
</label>
```


### Default version

```html
<label class="hw-radio-button">
  <span class="hw-radio-button__label">One</span>
  <input type="radio" name="hedwig" value="one" />
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  <span class="hw-radio-button__label">Two</span>
  <input type="radio" name="hedwig" value="two" />
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  <span class="hw-radio-button__label">Three</span>
  <input type="radio" name="hedwig" value="three" />
  <i class="hw-radio-button__indicator"></i>
</label>
```

### Long label

```html|span-2
<label class="hw-radio-button">
  <span class="hw-radio-button__label">A very long label that will occupy more than one line for sure</span>
  <input type="radio" name="hedwig" value="one" />
  <i class="hw-radio-button__indicator"></i>
</label>
```

### Version with error

```html
<label class="hw-radio-button hw-radio-button--error">
  <span class="hw-radio-button__label">One</span>
  <input type="radio" name="hedwdig" value="one" />
  <i class="hw-radio-button__indicator"></i>
</label>
<div class="hw-error-simple hw-error--align-left">Error message!</div>
```
