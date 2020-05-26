# Fieldset

The <fieldset> tag is used to group related elements in a form.
The <legend> tag defines a caption for the <fieldset> element.

```
.hw--fieldset
```


## With title

```html|plain,light
<fieldset class="hw-fieldset">
  <legend class="hw-fieldset__legend">
    Hvilke av følgende områder er du interessert i?
  </legend>

  <div class="hw-fieldset__content">
    <div class="hw-grid">
      <div class="hw-grid__item hw-medium--one-half">
        <div class="hw-block hw-block--full hw-block--mb-smaller">
          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Post/adresser
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Reklame
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Nasjonal transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Netthandel
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>
        </div>

      </div><!--
      --><div class="hw-grid__item hw-medium--one-half">
        <div class="hw-block hw-block--full">

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Internasjonal transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Express/budtjenester
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Temperaturregulert transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
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

## Plain

```html|plain,light
<fieldset class="hw-fieldset">
  <div class="hw-fieldset__content">
    <div class="hw-grid">
      <div class="hw-grid__item hw-medium--one-half">
        <div class="hw-block hw-block--full hw-block--mb-smaller">
          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Post/adresser
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Reklame
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Nasjonal transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Netthandel
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>
        </div>

      </div><!--
      --><div class="hw-grid__item hw-medium--one-half">
        <div class="hw-block hw-block--full">

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Internasjonal transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Express/budtjenester
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
            Temperaturregulert transport
            <input type="checkbox">
            <div class="hw-checkbox__indicator"></div>
          </label>

          <label class="hw-checkbox hw-checkbox--bounding hw-checkbox--full">
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