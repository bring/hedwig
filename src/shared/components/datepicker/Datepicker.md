## Datepicker

To use a datepicker you need to include [Pikaday](https://github.com/dbushell/Pikaday) in your application.
It's up to you to define the settings and localization. 
Hedwig will automatically style the datepicker with custom styles.

```code
[Datepicker]           .hw-datepicker
```

## Filled

#### Default

```html|span-2,plain,light
  <label class="hw-label hw-datepicker">
    Date picker label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
      <!-- Placeholder when native datepicker is used -->
      <span class="hw-placeholder">Select a date</span>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```

#### Error

```html|span-2,plain,light
  <label class="hw-label hw-datepicker">
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input hw-input--error" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
      <!-- Placeholder when native datepicker is used -->
      <span class="hw-placeholder">Select a date</span>
    </div>
    <div class="hw-error hw-error--align-left">You must select a date</div>
  </label>
```

#### Disabled

```html|span-2,plain,light
  <label class="hw-label hw-datepicker" disabled>
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" disabled />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
      <!-- Placeholder when native datepicker is used -->
      <span class="hw-placeholder">Select a date</span>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```


## Line

#### Default

```html|span-2,plain,light
  <label class="hw-label hw-label--line hw-datepicker">
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
      <!-- Placeholder when native datepicker is used -->
      <span class="hw-placeholder">Select a date</span>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```

#### Error

```html|span-2,plain,light
  <label class="hw-label hw-label--line hw-datepicker">
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input hw-input--error" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
      <!-- Placeholder when native datepicker is used -->
      <span class="hw-placeholder">Select a date</span>
    </div>
    <div class="hw-error hw-error--align-left">You must select a date</div>
  </label>
```

#### Disabled

```html|span-2,plain,light
  <label class="hw-label hw-label--line hw-datepicker" disabled>
    Label
    <div class="hw-datepicker__inner">
      <input type="text" readonly="readonly" class="hw-input" placeholder="Select a date" />
      <i class="hw-datepicker__icon fas fa-calendar-alt"></i>
      <!-- Placeholder when native datepicker is used -->
      <span class="hw-placeholder">Select a date</span>
    </div>
    <div class="hw-error hw-error--align-left hw-error--is-hidden">You must select a date</div>
  </label>
```



## Example javascript

```
const datepickerWrapper = document.getElementById('datepicker-ajsd4ks8');
  var picker = new Pikaday({ 
  container: datepickerWrapper,
  field: datepickerWrapper.querySelector('input'), 
});
```