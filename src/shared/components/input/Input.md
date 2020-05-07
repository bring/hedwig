## Input fields

All inputs are block elements. For layout, use [grid](/Grid).


```code
[Label]                .hw-label
[Input]                .hw-input
[Input error]          .hw-input--error
```



### Filled

#### Normal
```html|span-3,light,plain
<label class="hw-label">
  Label
  <input class="hw-input" type="text" placeholder="Placeholder" />
</label>
```

#### Disabled
```html|span-3,light,plain
<label class="hw-label" disabled>
  Label
  <input class="hw-input" type="text" placeholder="Placeholder" disabled />
</label>
```

#### Error
```html|span-3,light,plain
<label  class="hw-label">
  Label
  <input class="hw-input hw-input--error" type="text" placeholder="Placeholder" />
  <div class="hw-error hw-error--align-left">E-postadressen er ugyldig</div>
</label>
```



### Line

#### Normal
```html|span-3,light,plain
<label class="hw-label">
  Label
  <input class="hw-input hw-input--line" type="text" placeholder="Placeholder" />
</label>
```

#### Disabled
```html|span-3,light,plain
<label class="hw-label" disabled>
  Label
  <input class="hw-input hw-input--line" type="text" placeholder="Placeholder" disabled />
</label>
```

#### Error
```html|span-3,light,plain
<label  class="hw-label">
  Label
  <input class="hw-input hw-input--error hw-input--line" type="text" placeholder="Placeholder" />
  <div class="hw-error hw-error--align-left">E-postadressen er ugyldig</div>
</label>
```

