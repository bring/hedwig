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
  Bank account number
  <input type="text"
         class="hw-input"  
         data-hw-validate="bank-account"
         placeholder="0000 00 00000" />
  <div class="hw-error hw-error--is-hidden" data-hw-error-message>Ugyldig kontonummer</div>
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
               placeholder="000 00 000" />
        <div class="hw-error hw-error--is-hidden" data-hw-error-message>Telefonnummer må inneholde 8 nummber</div>
    </div>
  </div>
</label>
<label class="hw-label">
  Visa Card (see other cards under)
  <input type="text"
         class="hw-input"  
         data-hw-validate="credit-card"
         data-hw-validate-card-type="Visa"
         placeholder="4242 4242 4242 4242" />
  <div class="hw-error hw-error--is-hidden" data-hw-error-message>Kedittkortnummer er ugyldig</div>
</label>
<label class="hw-label">
  Regex
  <input type="text"
         class="hw-input"  
         data-hw-validate="regex"
         data-hw-regex="/e/"
         placeholder="Write something with an e in" />
  <div class="hw-error hw-error--is-hidden" data-hw-error-message>
    Du må skrive bokstaven e.</div>
</label>
```

## Validators

```code
[Email]                [data-hw-validate="email"]
[Phone]                [data-hw-validate="phone-number"]
[Postal code]          [data-hw-validate="postal-code"]
[Card]                 [data-hw-validate="card"]
```

### Regex

```code
[Regex]                [data-hw-validate="regex"]
[Expression]           [data-hw-regex="/example/"]
```

### Credit cards (combine with card validator)

```code
[Visa]                 [data-hw-validate-card-type="Visa"]
[Mastercard]           [data-hw-validate-card-type="MaterCard"]
[Diners Club]           [data-hw-validate-card-type="MasterCard"]
[American Express]     [data-hw-validate-card-type="AmEx"]
```
