{navigation}





> Creates interactive accordion from `<ul>`
> In these examples, the contents are wrapped in the [Wysiwyg Container](/Wysiwyg) component, but this is optional.


### Markup
```code
[Base]                .hw-accordion

Modifiers:
[Menu]                 .hw-accordion--menu

Elements:
[Item]                 .hw-accordion__item
[Trigger]              .hw-accordion__trigger
[Arrow]                .hw-accordion__arrow
[Contents]             .hw-accordion__contents
[Item Expanded]        .hw-accordion__item-expanded
```



### Data attributes
```code
Required:
[data-hw-accordion]

Optional:
[data-hw-accordion-allow-multiple]    Allow multiple items to be open at once
[data-hw-accordion-default-expanded]  Item to be open by default (added to li/item)

```


### Examples

#### Default

```html|span-6,plain,light
  <ul class="hw-accordion" data-hw-accordion>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvordan finner jeg hvilket hentested som tilhører min adresse?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.
          </p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hva er hentefristen på sendinger jeg må hente på Posten?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Fristen for å hente pakker og andre sendinger på postkontorene er 14 dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen returnert til avsender.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvilke regler gjelder når jeg skal motta en sending fra utlandet?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Alle sendinger fra utlandet og som kan ha tollpliktig innhold vil bli tollbehandlet/tollvurdert.</p>
          <p>Private gaver med verdi inntil kr 1000 er som oftest toll og avgiftsfrie så fremt de ikke inneholder eks alkohol og tobakksvarer</p>
          <p>For all annen import hvor verdien er kr 350 (inkludert frakt og forsikring) eller mer må du som oftest betale mva (ev andre avgifter) til staten. Posten fortoller sendingen for deg mot betaling av tollklaring.</p>
        </div>
      </div>
    </li>
  </ul>
```


#### Accordion with default opened item

```html|span-6,plain,light
  <ul class="hw-accordion" data-hw-accordion>
    <li class="hw-accordion__item" data-hw-accordion-default-expanded>
      <button class="hw-accordion__trigger">
        Hva er hentefristen på sendinger jeg må hente på Posten?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Fristen for å hente pakker og andre sendinger på postkontorene er 14 dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen returnert til avsender.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvordan finner jeg hvilket hentested som tilhører min adresse?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.</p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvilke regler gjelder når jeg skal motta en sending fra utlandet?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Alle sendinger fra utlandet og som kan ha tollpliktig innhold vil bli tollbehandlet/tollvurdert.</p>
          <p>Private gaver med verdi inntil kr 1000 er som oftest toll og avgiftsfrie så fremt de ikke inneholder eks alkohol og tobakksvarer</p>
          <p>For all annen import hvor verdien er kr 350 (inkludert frakt og forsikring) eller mer må du som oftest betale mva (ev andre avgifter) til staten. Posten fortoller sendingen for deg mot betaling av tollklaring.</p>
        </div>
      </div>
    </li>
  </ul>
```


#### Accordion that allows multiple items to be open at once

```html|span-6,plain,light
  <ul class="hw-accordion" data-hw-accordion data-hw-accordion-allow-multiple>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hva er hentefristen på sendinger jeg må hente på Posten?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Fristen for å hente pakker og andre sendinger på postkontorene er 14 dager. Dersom du ikke henter sendingen innen 14 dager blir sendingen returnert til avsender.</p>
          <p>Vi sender ut to varsler. Hentemelding ved ankomst og en påminnelse. På mange av våre sendinger vil du bli varslet på SMS, epost eller i Digipost. Dersom sender har valgt flere varslinger kan du få flere varsler underveis fra pakken er innlevert. I forbindelse med julehøytiden tar vi hensyn til de mange høytidsdagene og gir sendingen noen ekstra dager. Avsender eier sendingen til den er utlevert og har krav på å få den tilbake hvis den ikke er hentet innen fristen på 14 dager. Postkontorene trenger også plassen til andre pakker og brev som hele tiden ankommer.</p>
        </div>
      </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvordan finner jeg hvilket hentested som tilhører min adresse?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>I vårt Adressesøk kan du finne hvilket hentested som er knyttet til adressen din. I søket får du listet opp alle adressene inkludert husnummer og tilhørende postnummer. Holder du markøren over adressen vil du se hentested (for pakker og store sendinger). Du kan ved å klikke på husnummeret gå til kartløsningen, som vil vise deg mer informasjon om hentestedet.</p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Hvilke regler gjelder når jeg skal motta en sending fra utlandet?
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Alle sendinger fra utlandet og som kan ha tollpliktig innhold vil bli tollbehandlet/tollvurdert.</p>
          <p>Private gaver med verdi inntil kr 1000 er som oftest toll og avgiftsfrie så fremt de ikke inneholder eks alkohol og tobakksvarer</p>
          <p>For all annen import hvor verdien er kr 350 (inkludert frakt og forsikring) eller mer må du som oftest betale mva (ev andre avgifter) til staten. Posten fortoller sendingen for deg mot betaling av tollklaring.</p>
        </div>
      </div>
    </li>
  </ul>
```

#### Menu accordion

This version is used in the menu on mobile

```html|span-4,plain,light
  <ul class="hw-accordion hw-accordion--menu" data-hw-accordion data-hw-accordion-allow-multiple>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Kundeservice
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
      <ul class="hw-accordion__link-items">
        <li class="hw-accordion__link-item">
          <a href="#" class="hw-accordion__link">Lenke</a>
        </li>
        <li class="hw-accordion__link-item">
          <a href="#" class="hw-accordion__link">Lenke</a>
        </li>
      </ul>
      </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Våre tjenester
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <ul class="hw-accordion__link-items">
          <li class="hw-accordion__link-item">
            <a href="#" class="hw-accordion__link">Lenke</a>
          </li>
          <li class="hw-accordion__link-item">
            <a href="#" class="hw-accordion__link">Lenke</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Søk etter
        <div class="hw-accordion__arrow"></div>
      </button>
      <div class="hw-accordion__contents">
        <ul class="hw-accordion__link-items">
          <li class="hw-accordion__link-item">
            <a href="#" class="hw-accordion__link">Lenke</a>
          </li>
          <li class="hw-accordion__link-item">
            <a href="#" class="hw-accordion__link">Lenke</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="hw-accordion__item">
      <a class="hw-accordion__link" href="#">Lenke</a>
    </li>
    <li class="hw-accordion__item">
      <a class="hw-accordion__link" href="#">Lenke</a>
    </li>
  </ul>
```


# Design guidelines

> Accordions are vertically stacked lists of headers that reveal and hide associated sections of content. 



```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/accordions-1-1.png"
title: "Use of accordions"
description: "We use accordions to show large amounts of content in a small space through progressive disclosure. The section header gives an overview of the content, allowing the user to decide which sections to read."
```
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/accordions-1-2.png"
```


  
## Best practices

### Do
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/accordions-do-1.png"
description: "Use headings to divide content if you have multiple subtopics within a section."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/accordions-do-2.png"
description: "Don’t use accordions for important information. Accordions hides content from users, and it is important to account for a user not noticing or reading all of the included content. If the information is important for everyone to read, place it in a full scrolling page with normal headers."
```

### Don't

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/accordions-dont-1.png"
description: "Use accordion to help make it easier for users to navigate through loads of information to find what they are looking for."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/accordions-dont-2.png"
description: "Don’t nest accordions inside other accordions. For subtopics, use headers to divide the content."
```
