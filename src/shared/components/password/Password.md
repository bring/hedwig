
{navigation}


> Input field with password strength indicator


### Data attributes
```code
[data-hw-password]                        Attach js functionality
[data-hw-password-min-length=8]           (optional) Minimum length
[data-hw-password-caps-required=true]     (optional) Capital character required
[data-hw-password-special-required=true]  (optional) Special characters required
```

## Default validation rules

- At least 8 signs
- At leat 1 capital letter
- Must include a number or a special character

## Default password entry field

```html|span-3,light,plain
<label class="hw-label">
  Create a password
  <div class="hw-password" data-hw-password>
    <input class="hw-password__input" type="password" placeholder="Start typing" />
    <div class="hw-password__bar-container">
      <span class="hw-password__bar" />
    </div>
    <div class="hw-password__feedback">
      <span class="hw-password__feedback-bad">
        <svg class="hw-icon">
          <use xlink:href="#alert"></use>
        </svg>
        <span>Ikke sikkert nok</span>
      </span>
      <span class="hw-password__feedback-ok">
        <svg class="hw-icon">
          <use xlink:href="#checkmark"></use>
        </svg>
        <span>Bra</span>
      </span>
      <span class="hw-password__feedback-good">
        <svg class="hw-icon">
          <use xlink:href="#star"></use>
        </svg>
        <span>Supersikkert</span>
      </span>
    </div>
  </div>
</label>
```


## Line

```html|span-3,light,plain
<label class="hw-label hw-label--line">
  Create a password
  <div class="hw-password" data-hw-password>
    <input class="hw-password__input" type="password" placeholder="Start typing" />
    <div class="hw-password__bar-container">
      <span class="hw-password__bar" />
    </div>
    <div class="hw-password__feedback">
      <span class="hw-password__feedback-bad">
        <svg class="hw-icon">
          <use xlink:href="#alert"></use>
        </svg>
        <span>Ikke sikkert nok</span>
      </span>
      <span class="hw-password__feedback-ok">
        <svg class="hw-icon">
          <use xlink:href="#checkmark"></use>
        </svg>
        <span>Bra</span>
      </span>
      <span class="hw-password__feedback-good">
        <svg class="hw-icon">
          <use xlink:href="#star"></use>
        </svg>
        <span>Supersikkert</span>
      </span>
    </div>
  </div>
</label>
```

## Password entry with custom validation rules

```html|span-3,light,plain
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
















# Design guidelines

> {title} is a variation of Input.

> See [Input](/Input#design-guidelines) for guidelines and best practices.



