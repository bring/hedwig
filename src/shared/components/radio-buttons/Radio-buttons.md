# Radio buttons

```code
[Base]                  .hw-radio-button
[Error version]         .hw-radio-button--error
```

### Default version

```html
<label class="hw-radio-button">
  One
  <input type="radio" name="hedwdig" value="one" />
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  Two
  <input type="radio" name="hedwdig" value="two" />
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  Three
  <input type="radio" name="hedwdig" value="three" />
  <i class="hw-radio-button__indicator"></i>
</label>
```

### Version with error

```html
<label class="hw-radio-button hw-radio-button--error">
  One
  <input type="radio" name="hedwdig" value="one" />
  <i class="hw-radio-button__indicator"></i>
</label>
<div class="hw-error-simple hw-error--align-left">Error message!</div>
```
