

{navigation}




```code
[Base]                  .hw-radio-button

Modifiers:
[Error version]         .hw-radio-button--error
```

### Example code

```
<label class="hw-radio-button">
  <input type="radio" name="hedwig" value="one" />
  <span class="hw-radio-button__label">The label</span>
  <i class="hw-radio-button__indicator"></i>
</label>
```


### Default version

```html|plain,light
<label class="hw-radio-button">
  <input type="radio" name="hedwig" value="one" />
  <span class="hw-radio-button__label">One</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  <input type="radio" name="hedwig" value="two" />
  <span class="hw-radio-button__label">Two</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  <input type="radio" name="hedwig" value="three" />
  <span class="hw-radio-button__label">Three</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button">
  <input type="radio" name="hedwig" value="four" disabled />
  <span class="hw-radio-button__label">Disabled</span>
  <i class="hw-radio-button__indicator"></i>
</label>
```

### With bounding box

```html|plain,light
<label class="hw-radio-button hw-radio-button--bounding">
  <input type="radio" name="hedwig" value="one" />
  <span class="hw-radio-button__label">One</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button hw-radio-button--bounding">
  <input type="radio" name="hedwig" value="two" />
  <span class="hw-radio-button__label">Two</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button hw-radio-button--bounding">
  <input type="radio" name="hedwig" value="three" />
  <span class="hw-radio-button__label">Three</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button hw-radio-button--bounding" disabled>
  <input type="radio" name="hedwig" value="four" disabled />
  <span class="hw-radio-button__label">Disabled</span>
  <i class="hw-radio-button__indicator"></i>
</label>

<label class="hw-radio-button hw-radio-button--bounding hw-radio-button--error">
  <input type="radio" name="hedwig" value="four" />
  <span class="hw-radio-button__label">Error</span>
  <i class="hw-radio-button__indicator"></i>
</label>

```

### Bounding with error

```html|plain,light,span-2
<label class="hw-radio-button hw-radio-button--bounding hw-radio-button--error hw-radio-button--full">
  <input type="radio" name="hedwig" value="four" />
  <span class="hw-radio-button__label">Error</span>
  <i class="hw-radio-button__indicator"></i>
</label>
<div class="hw-error-simple hw-error--align-left">Error message!</div>

```

### Full width

```html|plain,light,span-3
<label class="hw-radio-button hw-radio-button--bounding hw-radio-button--full">
  <input type="radio" name="hedwig" value="one" />
  <span class="hw-radio-button__label">One</span>
  <i class="hw-radio-button__indicator"></i>
</label>
```



### Long label

```html|span-3,plain,light
<label class="hw-radio-button">
  <input type="radio" name="hedwig" value="one" />
  <span class="hw-radio-button__label">A very, very, very, very long label that will occupy more than one line for sure</span>
  <i class="hw-radio-button__indicator"></i>
</label>
```

### Version with error

```html|plain,light
<label class="hw-radio-button hw-radio-button--error">
  <input type="radio" name="hedwig" value="one" />
  <span class="hw-radio-button__label">One</span>
  <i class="hw-radio-button__indicator"></i>
</label>
<div class="hw-error-simple hw-error--align-left">Error message!</div>
```








# Design guidelines

> {title} are a kind of selection control.

> See [Selection-controls](/Selection-controls#design-guidelines) for guidelines and best practices.



