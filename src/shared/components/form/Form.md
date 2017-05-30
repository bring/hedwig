# Form

Example form (using other components)

```html|span-4,plain,light
 <form>
  <label class="hw-label">
    Select country
    <select data-hw-dropdown="countries">
      <option value="1">Afghanistan</option>
      <option value="2">Algerie</option>
      <option value="3">Antarctica</option>
      <option value="4">Austraoptiona</option>
      <option value="5">Booptionvia</option>
      <option value="6">Bosnia</option>
    </select>
  </label>
  <label class="hw-label">
    Fortell oss litt om hva vi kan hjelpe deg med
    <textarea class="hw-textarea" rows="4" cols="50" placeholder="Skriv tekst her"></textarea>
  </label>
  <div class="hw-block hw-block--full hw-block--padding-top-double hw-block--padding-bottom">
    <h2>Kontaktinformasjon</h2>
  </div>
  <label class="hw-label">
    Firmanavn
    <input class="hw-input" type="text" placeholder="Eks.: Posten Norge AS" />
  </label>
  <label class="hw-label">
    Navn
    <input class="hw-input" type="text" placeholder="Eks.: Navn Navnesen" />
  </label>
  <div class="hw-grid">
    <div class="hw-grid__item hw-one-half">
      <label class="hw-label">
        Postnummer
        <input class="hw-input" placeholder="000" type="text" />
      </label>
    </div><!--
    --><div class="hw-grid__item hw-one-half">
      <label class="hw-label">
        Telefonnummer
        <div class="hw-grid hw-grid--narrow">
          <div class="hw-grid__item hw-one-third">
            <label class="hw-label">
              <select
                data-hw-dropdown="numbers"
                data-hw-dropdown-small>
                <option value="1">+47</option>
                <option value="2">+48</option>
                <option value="3">+49</option>
              </select>
            </label>
          </div><!--
          --><div class="hw-grid__item hw-two-thirds">
              <input class="hw-input" type="text" placeholder="00000000" />
          </div>
        </div>
      </label>
    </div>
  </div>
  <label class="hw-label">
    E-postadresse
    <input class="hw-input" type="text" placeholder="F.eks.: ola@nordmann.no"/>
  </label>
  <div class="hw-block hw-block--full hw-block--margin-top">
    <label class="hw-checkbox">
      Ja takk, jeg ønsker at Posten Norge AS og dets datterselskaper bruker opplysningene jeg har oppgitt til å sende meg informasjon via epost og SMS som er relevant for min bedrift.
      <input type="checkbox" />
      <div class="hw-checkbox__indicator"></div>
    </label>
  </div>
  <div class="hw-block hw-block--full hw-block--margin-top-double">
    <button class="hw-button hw-button--primary">
      Send skjema
    </button>
  </div>
</form>
```
