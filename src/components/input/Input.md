## Input fields

All inputs are block elements. For layout, use [grid]('/Grid').

```html
<label class="hw-label">
  Label
  <input class="hw-input" type="text" />
</label>
<label class="hw-label" disabled>
  Label
  <input class="hw-input" type="text" disabled />
</label>
<label  class="hw-label">
  Label
  <div class="hw-error">E-postadressen er ugyldig</div>
  <input class="hw-input hw-input--error" type="text"/>
</label>
```

```code
[Label]                .hw-label
[Input]                .hw-input
[Input error]          .hw-input--error
[Error]                .hw-error
[Error summary]          .hw-error-summary
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

## Validation
For inline validation we use:

```html
<label class="hw-label">
  Label
  <div class="hw-error hw-error--is-hidden" data-hw-error-message>E-postadressen er ugyldig</div>
  <input type="text" class="hw-input"  data-hw-validate="text" placeholder="Type 4 letters to test validation" />
</label>
```
```hint|neutral
Validation test
```
