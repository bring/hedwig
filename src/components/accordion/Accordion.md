## Accordion

This is the most commonly used component.

The purpose of the Block component is to apply margin and padding to all components, as well as apply max-widths and background-colors.

In an ideal scenario, there is no margin/padding applied to any other component, instead wrap the element in Block and use this to generate the required margin/padding.

The only exception to this rule is "rich text" areas from the CMS, for this case, use the [Wysiwyg Container](/Wysiwyg).

```code
<ul class="hw-accordion">...</ul>
```

### Example accorduob

```html|span-4,plain,light
  <ul class="hw-accordion" data-hw-accordion="faqs">
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">Hvordan finner jeg hvilket hentested som tilhører min adresse?</button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg">
          <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.</p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">Hva er hentefristen på sendinger jeg må hente på Posten?</button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg">
          <p>Fristen for å hente pakker og andre sendinger på postkontorene er 14 dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen returnert til avsender.</p>
          <p>Vi sender ut to varsler. Hentemelding ved ankomst og en påminnelse. På mange av våre sendinger vil du bli varslet på SMS, epost eller i Digipost. Dersom sender har valgt flere varslinger kan du få flere varsler underveis fra pakken er innlevert. I forbindelse med julehøytiden tar vi hensyn til de mange høytidsdagene og gir sendingen noen ekstra dager. Avsender eier sendingen til den er utlevert og har krav på å få den tilbake hvis den ikke er hentet innen fristen på 14 dager. Postkontorene trenger også plassen til andre pakker og brev som hele tiden ankommer.</p>
        </div>
      </div>
    </li>
  </ul>
```
