## Toggle

Creates a show/hide toggle section

```code
Required:

[data-hw-toggle="name"]            name of toggle (must be unique, used for aria-roles)

```

### Example toggle

```html|span-6
  <section class="hw-toggle" data-hw-toggle="example1">
      <button class="hw-toggle__trigger">
        <span class="hw-toggle__text">Show more</span>
      </button>
      <div class="hw-toggle__contents">
        <div class="hw-block hw-block--full hw-block--mt hw-block--mb">
          <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.</p>
      </div>
    </div>
  </section>
```
