## Dropdowns

The custom dropdown will progressively enhance a native `<select />` element into a custom dropdown list.

Upon selecting an option, the native select will be updated with the correct value.

PS: When javaScript is disabled, the native select element will display.

### Attributes

```code
Required:

[data-hw-dropdown]                    name of dropdown list

Optional:

[data-hw-dropdown-default-selected]   Value of option that should be selected by default
[data-hw-dropdown-searchable]         Makes the dropdown searchable
[data-hw-dropdown-small]              Reduced version (see bottom of page)
[data-hw-dropdown-searchable]         Overrides the placeholder with custom value
[data-hw-dropdown-placeholder]        Add short placeholder to an option
[data-hw-dropdown-dirty]              Set to 'true' when updates are needed for a specific dropdown
.hw-dropdown--native                  Use the browser native select.
                                      Native is not compatible with the following: 
                                      data-hw-dropdown-searchable
                                      data-hw-dropdown-small
                                      data-hw-dropdown-placeholder

Client side rendering, see further down
```


### Example
```html
<label class="hw-label">
  Select country
  <select data-hw-dropdown="countries" id="countries">
    <option value="1">Afghanistan</option>
    <option value="2">Algerie</option>
    <option value="3">Antarctica</option>
    <option value="4">Austraoptiona</option>
    <option value="5">Booptionvia</option>
    <option value="6">Bosnia</option>
  </select>
</label>
```

### Native
Use the browser native select function
```html
<label class="hw-label">
  Select country
  <select class="hw-dropdown--native" data-hw-dropdown="countries-native" id="countries-native">
    <option selected="true" disabled="disabled">Select country</option>
    <option value="1">Afghanistan</option>
    <option value="2">Albania</option>
    <option value="3">Algeria</option>
    <option value="4">Andorra</option>
    <option value="5">Angola</option>
    <option value="6">Antigua and Barbuda</option>
    <option value="7">Argentina</option>
    <option value="8">Armenia</option>
    <option value="9">Aruba</option>
    <option value="10">Austraoptiona</option>
    <option value="11">Austria</option>
    <option value="12">Azerbaijan</option>
    <option value="13">Bahamas, The</option>
    <option value="14">Bahrain</option>
    <option value="15">Bangladesh</option>
    <option value="16">Barbados</option>
    <option value="17">Belarus</option>
    <option value="18">Belgium</option>
    <option value="19">Beoptionze</option>
    <option value="20">Benin</option>
    <option value="21">Bhutan</option>
    <option value="22">Booptionvia</option>
    <option value="23">Bosnia and Herzegovina</option>
    <option value="24">Botswana</option>
    <option value="25">Brazil</option>
    <option value="26">Brunei</option>
    <option value="27">Bulgaria</option>
    <option value="28">Burkina Faso</option>
    <option value="29">Burma</option>
    <option value="30">Burundi</option>
    <option value="31">Cambodia</option>
    <option value="32">Cameroon</option>
    <option value="33">Canada</option>
    <option value="34">Cabo Verde</option>
    <option value="35">Central African Repuboptionc</option>
    <option value="36">Chad</option>
    <option value="37">Chile</option>
    <option value="38">China</option>
    <option value="39">Colombia</option>
    <option value="40">Comoros</option>
    <option value="41">Congo, Democratic Repuboptionc of the</option>
    <option value="42">Congo, Repuboptionc of the</option>
    <option value="43">Costa Rica</option>
    <option value="44">Cote d'Ivoire</option>
    <option value="45">Croatia</option>
    <option value="46">Cuba</option>
    <option value="47">Curacao</option>
    <option value="48">Cyprus</option>
    <option value="49">Czechia</option>
  </select>
</label>
```
```hint
For mobile and tablet, native mode will be enabled automatically
```




### With disabled option
Will make one option disabled, to use as a placeholder value or instruction to the end user.

```html
<label class="hw-label">
  Select country
  <select data-hw-dropdown="countries-disabled-option" id="countries-disabled-option">
    <option selected="true" disabled="disabled">Select country</option>
    <option value="1">Afghanistan</option>
    <option value="2">Algerie</option>
    <option value="3">Antarctica</option>
    <option value="4">Austraoptiona</option>
    <option value="5">Booptionvia</option>
    <option value="6">Bosnia</option>
  </select>
</label>
```


### Dropdown with default option selected

```html

Select default option by using `data-hw-dropdown-default-selected`
<label class="hw-label">
  Choose character
  <select
    data-hw-dropdown="characters"
    data-hw-dropdown-default-selected="2">
    <option value="1">Harry</option>
    <option value="2">Hedwig</option>
    <option value="3">Fredrik</option>
  </select>
</label>

Select default option by marking selected option with `selected`
<label class="hw-label">
  Choose another character
  <select
    data-hw-dropdown="characters2"
    id="characters2">
    <option value="4">Another Harry</option>
    <option value="5" selected="selected">Another Hedwig</option>
    <option value="6">Anothe Fredrik</option>
  </select>
</label>
```

### Search Selection

Don't use default selected here as you want the user to start with an empty input.

```html
<label class="hw-label">
  Select country
  <select
    data-hw-dropdown-searchable
    data-hw-dropdown="countries2">
    <option value="1">Afghanistan</option>
    <option value="2">Algerie</option>
    <option value="3">Antarctica</option>
    <option value="4">Austraoptiona</option>
    <option value="5">Booptionvia</option>
    <option value="6">Bosnia</option>
  </select>
</label>
```

### Dropdown with list too long for the screen

```html
<label class="hw-label">
  Where do you live?
  <select
    data-hw-dropdown="longContries"
    data-hw-dropdown-default-selected="2">
    <option value="1">Afghanistan</option>
    <option value="2">Albania</option>
    <option value="3">Algeria</option>
    <option value="4">Andorra</option>
    <option value="5">Angola</option>
    <option value="6">Antigua and Barbuda</option>
    <option value="7">Argentina</option>
    <option value="8">Armenia</option>
    <option value="9">Aruba</option>
    <option value="10">Austraoptiona</option>
    <option value="11">Austria</option>
    <option value="12">Azerbaijan</option>
    <option value="13">Bahamas, The</option>
    <option value="14">Bahrain</option>
    <option value="15">Bangladesh</option>
    <option value="16">Barbados</option>
    <option value="17">Belarus</option>
    <option value="18">Belgium</option>
    <option value="19">Beoptionze</option>
    <option value="20">Benin</option>
    <option value="21">Bhutan</option>
    <option value="22">Booptionvia</option>
    <option value="23">Bosnia and Herzegovina</option>
    <option value="24">Botswana</option>
    <option value="25">Brazil</option>
    <option value="26">Brunei</option>
    <option value="27">Bulgaria</option>
    <option value="28">Burkina Faso</option>
    <option value="29">Burma</option>
    <option value="30">Burundi</option>
    <option value="31">Cambodia</option>
    <option value="32">Cameroon</option>
    <option value="33">Canada</option>
    <option value="34">Cabo Verde</option>
    <option value="35">Central African Repuboptionc</option>
    <option value="36">Chad</option>
    <option value="37">Chile</option>
    <option value="38">China</option>
    <option value="39">Colombia</option>
    <option value="40">Comoros</option>
    <option value="41">Congo, Democratic Repuboptionc of the</option>
    <option value="42">Congo, Repuboptionc of the</option>
    <option value="43">Costa Rica</option>
    <option value="44">Cote d'Ivoire</option>
    <option value="45">Croatia</option>
    <option value="46">Cuba</option>
    <option value="47">Curacao</option>
    <option value="48">Cyprus</option>
    <option value="49">Czechia</option>
  </select>
</label>
```

### Small dropdown (arrow in fixed position)

```code
.hw-dropdown--small

```

```html|span-1
<label class="hw-label">
  Country code
  <select
    data-hw-dropdown="numbers"
    data-hw-dropdown-small>
    <option value="1">+47</option>
    <option value="2" selected="selected">+48</option>
    <option value="3">+49</option>
  </select>
</label>
```

### Small dropdown with placeholders
```html|span-1
<label class="hw-label">
  Country code
  <select
    data-hw-dropdown="numbers2"
    data-hw-dropdown-small>
    <option data-hw-dropdown-placeholder="+47" value="1">+47 Norway</option>
    <option data-hw-dropdown-placeholder="+45" value="2">+45 Denmark</option>
    <option data-hw-dropdown-placeholder="+46" value="3">+46 Sweden</option>
  </select>
</label>
```

### Client-side rendering - React / Angular / jQuery
If rendering a dropdown is done in the frontend, this component needs to be initialized after rendering.
```code
hedwig.HWDropdown();
```

If the dropdown is changed after first rendering it with Hedwig, an update can be done.
```code
var countriesDropdown = document.getElementById('countries');
countriesDropdown.setAttribute('data-hw-dropdown-dirty', true);
hedwig.HWDropdown();
```

#### Changing the value using javascript
You can change the value using javascript, but you also need to fire a change event on the dropdown.
Using Javascript:
```code
var countriesDropdown = document.getElementById('countries');
countriesDropdown.value = '2'; //Select Algerie

// Create and dispatch event
const evt = document.createEvent('HTMLEvents');
evt.initEvent('change', false, true);
countriesDropdown.dispatchEvent(evt);
```

Using jQuery:
```code
$('#countries').val('2').change();
```
