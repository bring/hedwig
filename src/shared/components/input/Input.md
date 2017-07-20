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

## Validation
For inline validation we use:
**data-hw-validate="type"**

```html
<label class="hw-label">
  Email
  <input type="text"
         class="hw-input"  
         data-hw-validate="email"
         placeholder="Type email for validation" />
  <div class="hw-error hw-error--is-hidden" data-hw-error-message>E-postadressen er ugyldig</div>
</label>
<label class="hw-label">
  Postal code
  <div class="hw-grid hw-grid--narrow">
    <div class="hw-grid__item hw-one-third">
      <input type="text"
             class="hw-input"  
             data-hw-validate="postal-code"
             data-hw-validate-country="NO"
             placeholder="Type postal code for validation" />
      <div class="hw-error hw-error--is-hidden" data-hw-error-message>Postnr er ugyldig</div>
    </div><!--
    --><div class="hw-grid__item hw-one-third">
      <input type="text"
             class="hw-input"
             disabled
             data-hw-validate-location
             placeholder="Poststed" />
      <div class="hw-error hw-error--is-hidden" data-hw-error-message>Postnr er ugyldig</div>
    </div>
  </div>

</label>
<label class="hw-label">
  Telefonnummer
  <div class="hw-grid hw-grid--narrow">
    <div class="hw-grid__item hw-one-third">
      <label class="hw-label">
        <select
          data-hw-dropdown="numbers"
          data-hw-dropdown-small>
          <option value="1">+47</option>
          <option value="2">+48</option>
          <option value="3">+49</option>
        </select>
      </label>
    </div><!--
    --><div class="hw-grid__item hw-two-thirds">
        <input class="hw-input"
               type="text"
               maxlength="8"
               data-hw-validate="phone-number"
               placeholder="00000000" />
        <div class="hw-error hw-error--is-hidden" data-hw-error-message>Telefonnummer må inneholde 8 nummber</div>
    </div>
  </div>
  <label class="hw-label">
    Visa Card (see other cards under)
    <input type="text"
           class="hw-input"  
           data-hw-validate="credit-card"
           data-hw-validate-card-type="Visa"
           placeholder="Type Visa card number for validation" />
    <div class="hw-error hw-error--is-hidden" data-hw-error-message>Kedittkortnummer er ugyldig</div>
  </label>
</label>
```

## Validators

```code
[Email]                [data-hw-validate="email"]
[Phone]                [data-hw-validate="phone-number"]
[Postal code]          [data-hw-validate="postal-code"]
[Card]                 [data-hw-validate="card"]
```

### Credit cards (combine with card validator)

```code
[Visa]                 [data-hw-validate-card-type="Visa"]
[Mastercard]           [data-hw-validate-card-type="MaterCard"]
[Diners Club]           [data-hw-validate-card-type="MasterCard"]
[American Express]     [data-hw-validate-card-type="AmEx"]
```
