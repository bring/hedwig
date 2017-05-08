## Password input field

Input field with password strength indicator

```code
[data-hw-password]                        Attach js functionality
[data-hw-password-min-length=8]           Minimum length
[data-hw-password-caps-required=true]     Capital character required (true/false)
[data-hw-password-special-required=true]  Special characters required (true/false)
```

## Default validation rules

- At least 8 signs
- At leat 1 capital letter
- Must include a number or a special character

## Default password entry field

```html|span-3
<label class="hw-label">
  Create a password
  <div class="hw-password" data-hw-password>
    <input class="hw-password__input" type="password" placeholder="Start typing" />
    <div class="hw-password__bar-container">
      <span class="hw-password__bar" />
    </div>
  </div>
</label>
```

## Password entry with custom validation rules

```html|span-3
<label class="hw-label">
  Create a password
  <div class="hw-password"
    data-hw-password
    data-hw-password-min-length=4
    data-hw-password-caps-required=false
    data-hw-password-special-required=false
  >
    <input class="hw-password__input" type="password" placeholder="Start typing" />
    <div class="hw-password__bar-container">
      <span class="hw-password__bar" />
    </div>
  </div>
</label>
```

## Default validation rules

- At least 8 signs
- At leat 1 capital letter
- Must include a number or a special character
