## Input fields

All inputs are block elements. For layout, use [grid]('/Grid').

```html
<label>
  Label
  <input type="text" />
</label>
<label disabled>
  Label
  <input type="text" disabled />
</label>
<label class="hw-input-error">
  Label
  <div class="hw-input-error__message">E-postadressen er ugyldig</div>
  <input type="text"/>
</label>
```

```code
Base                  input
Class (same as base)  .hw-input
Error                 .hw-input-error
```

```html
<div class="hw-error-summary">
  <h2>Brukerprofilen din ble ikke opprettet fordi</h2>
  <ul>
    <li>E-postadressen er ugyldig</li>
    <li>Mobilnummeret må inneholde 8 tall</li>
    <li>Passordet er ikke godkjent</li>
  </ul>
</div>
```
```code
Error summary         .hw-error-summary
```

## Validation
For inline validation we use:

```html
<label data-hw-validate="text">
  Label
  <div class="hw-input-error__message hw-input-error--is-hidden" data-hw-error-message>E-postadressen er ugyldig</div>
  <input type="text" placeholder="Type 4 letters to test validation" />
</label>
```
```hint|neutral
Validation test
```
