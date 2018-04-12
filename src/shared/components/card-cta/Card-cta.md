## Card - Call to Action

Used on the home page

```code
[Base]           .hw-card-cta
```

### Regular card

```html|span-3
  <a href="#" class="hw-card-cta">
    <h2 class="hw-card-cta__title">Sende</h2>
    <hr class="hw-card-cta__hr" />
    <p class="hw-card-cta__text">
      Finn riktig tjeneste og bestill
    </p>
  </a>
```

### Cards in grid

```html|span-6
  <div class="hw-grid">
    <div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card-cta">
        <h2 class="hw-card-cta__title">Sende</h2>
        <hr class="hw-card-cta__hr" />
        <p class="hw-card-cta__text">
          Finn riktig tjeneste og bestill
        </p>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card-cta">    
        <h2 class="hw-card-cta__title">Motta</h2>
        <hr class="hw-card-cta__hr" />
        <div class="hw-card-cta__text">
          Adresseendring og mottakkertjenester.
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card-cta">
        <h2 class="hw-card-cta__title">Mer om</h2>
        <hr class="hw-card-cta__hr" />
        <div class="hw-card-cta__text">
          Netthandel, kundedialog, adresser, transport, lagring og mer.
        </div>
      </a>
    </div>
  </div>
```


### Cards in flex

```html|span-6
  <section class="hw-flex hw-flex--guttered">
      <a href="#" class="hw-card-cta">
        <h2 class="hw-card-cta__title">Sende</h2>
        <hr class="hw-card-cta__hr" />
        <p class="hw-card-cta__text">
          Finn riktig tjeneste og bestill
        </p>
      </a>
      <a href="#" class="hw-card-cta">    
        <h2 class="hw-card-cta__title">Motta</h2>
        <hr class="hw-card-cta__hr" />
        <div class="hw-card-cta__text">
          Adresseendring og mottakkertjenester.
        </div>
      </a>
      <a href="#" class="hw-card-cta">
        <h2 class="hw-card-cta__title">Mer om</h2>
        <hr class="hw-card-cta__hr" />
        <div class="hw-card-cta__text">
          Netthandel, kundedialog, adresser, transport, lagring og mer.
        </div>
      </a>
  </section>
```
