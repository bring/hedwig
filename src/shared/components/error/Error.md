## Error message

Generic error message for input fields

```html
<input type="text" class="hw-input hw-input--error" />
<div class="hw-error">
  Error message
</div>
```

### Modifiers

```code
[Align left version]      .hw-error--align-left
[Hidden version]          .hw-error--is-hidden
```

### Variants

```code
[Default error]           .hw-error
[Simple version]          .hw-error-simple      (no icon)
[Summary version]         .hw-error-summary     (Error detail box)
```

### Simple version

```html
<input type="text" class="hw-input hw-input--error" />
<div class="hw-error-simple">
  Simple error message
</div>
```

### Error summary

```html
<div class="hw-error-summary">
  <div class="hw-error-summary__title">
    <h3>Brukerprofilen din ble ikke opprettet fordi</h3>
  </div>
  <div class="hw-error-summary__contents">
    <ul class="hw-list hw-list--small">
      <li>E-postadressen er ugyldig</li>
      <li>Mobilnummeret må inneholde 8 tall</li>
      <li>Passordet er ikke godkjent</li>
    </ul>
  </div>
</div>
```
