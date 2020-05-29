



{navigation}




```code
[Base]            .hw-checkbox

Modifiers:
[Horisontal]      .hw-checkbox--horisontal
[Error]           .hw-checkbox--error
```

### Normal checkbox

```html|plain,light
<form>
  <label class="hw-checkbox">
    Checkbox
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox">
    <p class="hw-text-small">Checked</p>
    <input type="checkbox" checked />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox" disabled>
    <p class="hw-text-small">Disabled</p>
    <input type="checkbox" disabled />
    <i class="hw-checkbox__indicator"></i>
  </label>
</form>
```

### Horizontal checkboxes

```html|plain,light
<form>
  <label class="hw-checkbox hw-checkbox--horisontal">
    <p class="hw-text-small">Checkbox</p>
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox hw-checkbox--horisontal">
    <p class="hw-text-small">Checked</p>
    <input type="checkbox" checked />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox hw-checkbox--horisontal" disabled>
    <p class="hw-text-small">Disabled</p>
    <input type="checkbox" disabled />
    <i class="hw-checkbox__indicator"></i>
  </label>
</form>
```

### Checkbox with error

```html|plain,light
<form>
  <label class="hw-checkbox hw-checkbox--error">
    <p class="hw-text-small">Checkbox</p>
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>
  <div class="hw-error-simple hw-error--align-left">Error message!</div>
</form>
```

### With bounding box

```html|plain,light
<form>
  <label class="hw-checkbox hw-checkbox--bounding">
    Checkbox
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox hw-checkbox--bounding">
    <p class="hw-text-small">Checked</p>
    <input type="checkbox" checked />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox hw-checkbox--bounding" disabled>
    <p class="hw-text-small">Disabled</p>
    <input type="checkbox" disabled />
    <i class="hw-checkbox__indicator"></i>
  </label>
</form>
```

### With bounding box full width

```html|span-3,plain,light
<form>
  <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
    Checkbox
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
    <p class="hw-text-small">Checked</p>
    <input type="checkbox" checked />
    <i class="hw-checkbox__indicator"></i>
  </label>

  <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full" disabled>
    <p class="hw-text-small">Disabled</p>
    <input type="checkbox" disabled />
    <i class="hw-checkbox__indicator"></i>
  </label>
</form>
```

### Checkbox with bounding box and error

```html|plain,light
<form>
  <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--error">
    <p class="hw-text-small">Checkbox</p>
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>
  <div class="hw-error-simple hw-error--align-left">Error message!</div>
</form>
```




# Design guidelines

> {title} is a kind of selection control.

> See [Selection-controls](/Selection-controls#design-guidelines) for guidelines and best practices.


