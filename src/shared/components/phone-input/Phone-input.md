# Phone Input

```hint
Available in version 6.1.2
```

PS: This component is dependent on the dropdown component.

```hint
The label for phone input must be a <fieldset> to be valid.
This is because this is technically two form fields.
```

## Example
```html
<div class="hw-phone-input">
  <fieldset class="hw-phone-input__label">Telefonnummer
    <div class="hw-phone-input__group">
      <select data-hw-dropdown="numbers2" data-hw-dropdown-small>
        <option data-hw-dropdown-placeholder="+47" value="1">+47 Norge</option>
        <option data-hw-dropdown-placeholder="+48" value="2">+48 Sverige</option>
        <option data-hw-dropdown-placeholder="+49" value="3">+49 Finland</option>
        <option data-hw-dropdown-placeholder="+498" value="4">+498 USA</option>
        <option data-hw-dropdown-placeholder="+47" value="5">+47 Norge</option>
        <option data-hw-dropdown-placeholder="+48" value="6">+48 Sverige</option>
        <option data-hw-dropdown-placeholder="+49" value="7">+49 Finland</option>
        <option data-hw-dropdown-placeholder="+498" value="8">+498 USA</option>
        <option data-hw-dropdown-placeholder="+483" value="8">+48 Sverige</option>
        <option data-hw-dropdown-placeholder="+49" value="10">+49 Finland</option>
        <option data-hw-dropdown-placeholder="+498" value="11">+498 USA</option>
        <option data-hw-dropdown-placeholder="+4981" value="12">+4981 Narnia</option>
      </select>
      <input class="hw-input" type="tel" />
    </div>
  </label>
</div>
```


## Example with native dropdown
```html
<div class="hw-phone-input">
  <fieldset class="hw-phone-input__label">Telefonnummer
    <div class="hw-phone-input__group">
      <select data-hw-dropdown="numbers3" class="hw-dropdown--native" data-hw-dropdown-small>
        <option data-hw-dropdown-placeholder="+47" value="1">+47 Norge</option>
        <option data-hw-dropdown-placeholder="+48" value="2">+48 Sverige</option>
        <option data-hw-dropdown-placeholder="+49" value="3">+49 Finland</option>
        <option data-hw-dropdown-placeholder="+498" value="4">+498 USA</option>
        <option data-hw-dropdown-placeholder="+47" value="5">+47 Norge</option>
        <option data-hw-dropdown-placeholder="+48" value="6">+48 Sverige</option>
        <option data-hw-dropdown-placeholder="+49" value="7">+49 Finland</option>
        <option data-hw-dropdown-placeholder="+498" value="8">+498 USA</option>
        <option data-hw-dropdown-placeholder="+483" value="8">+48 Sverige</option>
        <option data-hw-dropdown-placeholder="+49" value="10">+49 Finland</option>
        <option data-hw-dropdown-placeholder="+498" value="11">+498 USA</option>
        <option data-hw-dropdown-placeholder="+4981" value="12">+4981 Narnia</option>
      </select>
      <input class="hw-input" type="tel" />
    </div>
  </label>
</div>
```

```hint
For mobile and tablet, native mode will be enabled automatically
```
