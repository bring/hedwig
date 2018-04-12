# Fieldset

The <fieldset> tag is used to group related elements in a form.
The <legend> tag defines a caption for the <fieldset> element.

```
.hw--fieldset
```

## Example 

```html
<fieldset class="hw-fieldset">
  <legend class="hw-fieldset__legend">
    Hvilke av følgende områder er du interessert i?
  </legend>

  <div class="hw-fieldset__content">
    <div class="hw-grid">
      <div class="hw-grid__item hw-medium--one-half">
        <div class="hw-block hw-block--full hw-block--mb-smaller">
          <label class="hw-checkbox">
            Post/adresser
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox">
            Reklame
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox">
            Nasjonal transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox">
            Netthandel
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>
        </div>

      </div><!--
      --><div class="hw-grid__item hw-medium--one-half">
        <div class="hw-block hw-block--full">

          <label class="hw-checkbox">
            Internasjonal transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox">
            Express/budtjenester
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox">
            Temperaturregulert transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox">
            Lager
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>
        </div>

      </div>
    </div>
  </div>
</fieldset>
```
