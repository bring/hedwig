## Input fields

All inputs are block elements. For layout, use [grid]('/Grid').

```html
<label class="hw-label">
  Label
  <input class="hw-input" type="text" placeholder="Placeholder" />
</label>
<label class="hw-label" disabled>
  Label
  <input class="hw-input" type="text" disabled />
</label>
<label  class="hw-label">
  Label
  <input class="hw-input hw-input--error" type="text"/>
  <div class="hw-error">E-postadressen er ugyldig</div>
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