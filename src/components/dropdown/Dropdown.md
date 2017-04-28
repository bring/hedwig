## Dropdowns

Custom dropdown list

### Attributes

```code
Required:

[data-hw-dropdown]                    name of dropdown list
[data-hw-dropdown-placeholder]        placeholder to display when no option chosen

Optional:

[data-hw-dropdown-default-selected]   Value of option that should be selected by default

```

```html
<label class="hw-label">
  Choose country
  <div class="hw-dropdown" data-hw-dropdown="countries" data-hw-dropdown-placeholder="Choose option">
    <div class="hw-dropdown__inner">
      <div class="hw-dropdown__placeholder"></div>
      <div class="hw-dropdown__arrow"></div>
      <ul class="hw-dropdown__options">
        <li class="hw-dropdown__option" data-hw-dropdown-value="1">Afghanistan</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="2">Algerie</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="3">Antarctica</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="4">Australia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="5">Bolivia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="6">Bosnia</li>
      </ul>
    </div>
  </div>
</label>
```


### Dropdown with default option selected

```html
<label class="hw-label">
  Choose character
  <div class="hw-dropdown"
    data-hw-dropdown="characters"
    data-hw-dropdown-placeholder="Choose option"
    data-hw-dropdown-default-selected="2"
  >
    <div class="hw-dropdown__inner">
      <div class="hw-dropdown__placeholder"></div>
      <div class="hw-dropdown__arrow"></div>
      <ul class="hw-dropdown__options">
        <li class="hw-dropdown__option" data-hw-dropdown-value="1">Harry</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="2">Hedwig</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="3">Fredrik</li>
      </ul>
    </div>
  </div>
</label>
```

### Dropdown with list too long for the screen

```html
<label class="hw-label">
  Choose country
  <div class="hw-dropdown" data-hw-dropdown="longContries" data-hw-dropdown-placeholder="Choose option">
    <div class="hw-dropdown__inner">
      <div class="hw-dropdown__placeholder"></div>
      <div class="hw-dropdown__arrow"></div>
      <ul class="hw-dropdown__options">
        <li class="hw-dropdown__option" data-hw-dropdown-value="1">Afghanistan</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="2">Albania</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="3">Algeria</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="4">Andorra</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="5">Angola</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="6">Antigua and Barbuda</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="7">Argentina</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="8">Armenia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="9">Aruba</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="10">Australia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="11">Austria</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="12">Azerbaijan</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="13">Bahamas, The</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="14">Bahrain</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="15">Bangladesh</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="16">Barbados</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="17">Belarus</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="18">Belgium</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="19">Belize</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="20">Benin</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="21">Bhutan</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="22">Bolivia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="23">Bosnia and Herzegovina</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="24">Botswana</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="25">Brazil</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="26">Brunei</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="27">Bulgaria</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="28">Burkina Faso</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="29">Burma</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="30">Burundi</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="31">Cambodia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="32">Cameroon</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="33">Canada</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="34">Cabo Verde</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="35">Central African Republic</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="36">Chad</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="37">Chile</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="38">China</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="39">Colombia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="40">Comoros</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="41">Congo, Democratic Republic of the</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="42">Congo, Republic of the</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="43">Costa Rica</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="44">Cote d'Ivoire</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="45">Croatia</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="46">Cuba</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="47">Curacao</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="48">Cyprus</li>
        <li class="hw-dropdown__option" data-hw-dropdown-value="49">Czechia</li>
      </ul>
    </div>
  </div>
</label>
```
