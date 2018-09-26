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
[Simple version]         .hw-error--simple
```

```html
<input type="text" class="hw-input hw-input--error" />
<div class="hw-error hw-error--simple">
  Simple error message
</div>
```

```code
[Label]                 .hw-error
[Error summary]         .hw-error-summary
```

## Error summary

```html
<div class="hw-error-summary">
  <p class="hw-error-summary__title">
    Brukerprofilen din ble ikke opprettet fordi
  </p>
  <div class="hw-error-summary__contents">
    <ul class="hw-list hw-list--small">
      <li>E-postadressen er ugyldig</li>
      <li>Mobilnummeret må inneholde 8 tall</li>
      <li>Passordet er ikke godkjent</li>
    </ul>
  </div>
</div>
```
