## Datepicker

To use a datepicker you need to include [Pikaday](https://github.com/dbushell/Pikaday) in your application.
It's up to you to define the settings and localization. 
Hedwig will automatically style the datepicker with custom styles.

```code
[Datepicker]           .hw-datepicker
```

### Default calendar

```html|span-3
  <label id="datepicker-ajsd4ks8" class="hw-datepicker">
    <p class="hw-text-small">Tidspunkt for levering</p>
    <input type="text" readonly="readonly" class="hw-input" placeholder="Velg en dato" />
    <span class="hw-datepicker__icon">
      <svg class="hw-icon">
        <use xlink:href="#calendar"></use>
      </svg>
    </span>
  </label>
```

### Example javascript

```
const datepickerWrapper = document.getElementById('datepicker-ajsd4ks8');
var picker = new Pikaday({ 
  container: datepickerWrapper,
  field: datepickerWrapper.querySelector('input'), 
});
```

