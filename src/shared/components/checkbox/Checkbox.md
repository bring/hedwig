## Checkbox

```code
[Normal]          .hw-checkbox
[Horisontal]      .hw-checkbox--horisontal
[Error]           .hw-checkbox--error
```

### Normal checkbox

```html
light: true,
plain: true
---
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

```html
light: true,
plain: true
---
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

### With bounding box

```html
dark: true,
plain: true
---
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

### Checkbox with error

```html
light: true,
plain: true
---
<form>
  <label class="hw-checkbox hw-checkbox--error">
    <p class="hw-text-small">Checkbox</p>
    <input type="checkbox" />
    <i class="hw-checkbox__indicator"></i>
  </label>
  <div class="hw-error-simple hw-error--align-left">Error message!</div>
</form>
```
