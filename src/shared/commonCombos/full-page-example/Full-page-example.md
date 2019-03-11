### Form examples

```html
<div class="hw-container hw-container--mt hw-container--mb">
  <div class="hw-block">
    <h1><i class="fas fa-1x fa-user"></i> Mine adresser</h1>
  </div>
  <div class="hw-block hw-block--pt-smaller">
    <hr class="hw-hr hw-hr--full"/>
  </div>
  <div class="hw-block hw-block--mt hw-block--mb">
    Du er logget inn som Per Person
  </div>

  <div class="hw-grid"><!--
  --><div class="hw-grid__item hw-large--two-thirds">
    <div class="hw-block hw-block--pt hw-block--pb hw-block--px-fluid hw-block--mb hw-background-color-gray-lighter">
      <h3 class="">Hovedadresse</h3>
      <div class="hw-block hw-block--mt-smaller hw-block--mb">
        <div class="hw-hr hw-hr--full hw-hr--gray-lightest"></div>
      </div>
      <div class="hw-block">
        Drammensveien 1,
      </div>
      <div class="hw-block hw-block--mb">
        0461 Oslo
      </div>
      <div class="hw-block hw-block--mb-smallest">
        I samme postkasse
      </div>
      <div class="hw-block">
        <i class="fas fa-1x fa-user"></i> Justin Case
      </div>
      <div class="hw-block">
        <i class="fas fa-1x fa-user"></i> Rita Book
      </div>
      <div class="hw-block hw-block--mb">
        <i class="fas fa-1x fa-user"></i> Amy Stake
      </div>
      <div class="hw-block hw-block--mb">
        <ul class="hw-linklist">
          <li><a href="">Meld feil</a></li>
          <li><a href="">Legg til personer fra samme adresse</a></li>
        </ul>       
      </div>
      <div class="hw-block">
        <button class="hw-button hw-button--secondary">Meld flytting</button>
        <button class="hw-button hw-button--outline">Legg til annen adresse</button>
      </div>
    </div>

    <div class="hw-block hw-block--pt hw-block--pb hw-block--px-fluid hw-block--mb hw-background-color-gray-lighter">
      <h3 class="">Adresse 2</h3>
      <div class="hw-block hw-block--mt-smaller hw-block--mb">
        <div class="hw-hr hw-hr--full hw-hr--gray-lightest"></div>
      </div>
      <div class="hw-block">
        Skaugumveien 1
      </div>
      <div class="hw-block hw-block--mb">
        3600 Asker
      </div>
      <div class="hw-block hw-block--mb">
        <a href="" class="hw-link">Legg til personer fra samme adresse</a>
      </div>
      <div class="hw-block">
        <button class="hw-button hw-button--secondary">Velg som hovedadresse</button>
        <button class="hw-button hw-button--outline">Legg til annen adresse</button>
        <button class="hw-button hw-button--outline">Fjern</button>
      </div>
    </div>

    <div class="hw-block hw-block--pt hw-block--pb hw-block--px-fluid hw-block--mb hw-background-color-gray-lighter">
      <h3 class="">Min kontaktinformasjon</h3>
      <div class="hw-block hw-block--mt-smaller hw-block--mb">
        <div class="hw-hr hw-hr--full hw-hr--gray-lightest"></div>
      </div>
      <form>
        <div class="hw-block hw-block--mb">
          <div class="hw-phone-input">
            <label class="hw-phone-input__label">Mobilnummer
              <div class="hw-phone-input__group">
                <select data-hw-dropdown="numbers" data-hw-dropdown-small>
                  <option data-hw-dropdown-placeholder="+47" value="1">+47 Norge</option>
                  <option data-hw-dropdown-placeholder="+48" value="2">+48 Sverige</option>
                  <option data-hw-dropdown-placeholder="+49" value="3">+49 Finland</option>
                  <option data-hw-dropdown-placeholder="+498" value="4">+498 USA</option>
                  <option data-hw-dropdown-placeholder="+47" value="5">+47 Norge</option>
                  <option data-hw-dropdown-placeholder="+48" value="6">+48 Sverige</option>
                  <option data-hw-dropdown-placeholder="+49" value="7">+49 Finland</option>
                  <option data-hw-dropdown-placeholder="+498" value="8">+498 USA</option>
                  <option data-hw-dropdown-placeholder="+483" value="8">+48 Sverige</option>
                  <option data-hw-dropdown-placeholder="+49" value="10">+49 Finland</option>
                  <option data-hw-dropdown-placeholder="+498" value="11">+498 USA</option>
                </select>
                <input class="hw-input" type="tel" value="41 41 41 41"/>
              </div>
            </label>
          </div>
        </div>
        <div class="hw-block hw-block--mb">
          <label class="hw-label">
            E-postadresse
            <input class="hw-input" type="text" value="epostadresse@epostadresse.no" />
          </label>
        </div> 
        <div class="hw-block hw-block--mb">
          <label class="hw-checkbox">
            <p class="hw-text-small">Bruk denne kontaktinformasjonen til å varsle meg om postsendinger.</p>
            <input type="checkbox" checked />
            <i class="hw-checkbox__indicator"></i>
          </label>
        </div>
        <div class="hw-block">
          <button class="hw-button hw-button--secondary">Lagre</button>
        </div>
      </form>
    </div>

    <div class="hw-block hw-block--pt hw-block--pb hw-block--px-fluid hw-block--mb hw-background-color-gray-lighter">
      <h3 class="">Videresending eller oppbevaring av post</h3>
      <div class="hw-block hw-block--mt-smaller hw-block--mb">
        <div class="hw-hr hw-hr--full hw-hr--gray-lightest"></div>
      </div>
      <div class="hw-block hw-block--mb">
        Skal du være borte en stund og vil lese posten din der du er? Da videresender vi posten til deg.
        For at du skal slippe å tenke på at postkassen blir full når du er på ferie, oppbevarer vi posten din til du er tilbake.
      </div>
      <div class="hw-block">
        <button class="hw-button hw-button--secondary">Bestill videresending</button>
        <button class="hw-button hw-button--outline">Bestill oppbevaring</button>
      </div>
    </div>

    </div><!--
  --><div class="hw-grid__item hw-large--one-third">
    <div class="hw-block hw-block--pt hw-block--pb hw-block--px hw-block--bordered hw-background-color-white">
      <h3>Oppbevaring av post</h3>
      <div class="hw-block hw-block--mt-smaller hw-block--mb">
        <div class="hw-hr hw-hr--full hw-hr--gray-lightest"></div>
      </div>
      <div class="hw-block hw-block--mb">
        Drammensveien 1, 0461 Oslo
      </div>
      <div class="hw-block hw-block--mb">
        <h5 class="hw-text-bold">Gjelder fra 01.05.19</h5>
        Postlevering til fast adresse fra 01.06.19
      </div>
      <div class="hw-block">
        <ul class="hw-linklist">
          <li><a href="#">Endre denne bestillingen</a></li>
          <li><a href="#">Bestill utlevering</a></li>
          <li><a href="#">Avslutt bestilling</a></li>
        </ul>
      </div>
    </div>
  </div>

</div>


</div>

```
