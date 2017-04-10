## Dropdowns

All inputs are block elements. For layout, use [grid]('/Grid').

```html
<div class="hw-dropdown" data-hw-dropdown="countries">
  <span class="hw-dropdown__button">Choose country</span>
  <div class="hw-dropdown__list" data-hw-dropdown-options>
    <ul>
      <li>Alaska</li>
      <li>Africa</li>
      <li>Algerie</li>
      <li>Antarctica</li>
      <li>Bolivia</li>
      <li>Bosnia</li>
    </ul>
  </div>
</select>
```

```html
<div class="hw-dropdown" data-hw-dropdown="characters">
  <span class="hw-dropdown__button">Choose character</span>
  <div class="hw-dropdown__list" data-hw-dropdown-options>
    <ul>
      <li>Harry</li>
      <li>Hedwig</li>
      <li>Fredrik</li>
    </ul>
  </div>
</select>
```

```code
Base                  input
Class (same as base)  .hw-input
Error                 .hw-input-error
```
