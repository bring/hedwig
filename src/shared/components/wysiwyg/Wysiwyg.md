
{navigation}


> This component is used to wrap "rich text" regions, typically for article pages that are populated from a CMS.

> It will apply the correct margins/paddings and vertical rythm for headlines, paragraphs and images.

### Example

```html|span-6,plain,light
<div class="hw-wysiwyg">
  <h1>H1 Winged menace causes havoc at Hogwarts event</h1>
  <h2>H2 Winged menace causes havoc at Hogwarts event</h2>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat est gravida venenatis rutrum. Maecenas consequat mauris ipsum. In varius convallis hendrerit. Ut gravida luctus pretium. Nam sit amet mattis odio. Suspendisse vulputate in enim ac rhoncus. Ut viverra et lectus et feugiat. Nulla non aliquam nisi, nec bibendum urna. Nunc interdum orci ac ultrices pulvinar. In hac habitasse platea dictumst. Nulla rutrum, arcu in pulvinar efficitur, odio dolor consectetur urna, vel dictum ex erat semper tellus. In hac habitasse platea dictumst. Nam a hendrerit quam, vitae lobortis dui. Integer rhoncus condimentum pretium. Mauris ac enim auctor, iaculis elit id, pellentesque velit.</p>

  <p>Fusce ac nibh sagittis, mattis libero vitae, tincidunt lacus. Nulla pretium justo metus, non viverra lorem consectetur et. Aenean odio mi, placerat eget suscipit in, molestie blandit mi. Phasellus sit amet felis sed ante placerat pharetra non euismod diam. Nullam aliquam metus id purus varius, vel mollis nulla lobortis. Pellentesque vehicula dignissim magna, in faucibus tortor scelerisque rutrum. Aenean ac turpis id turpis congue cursus. Aliquam hendrerit egestas nulla, ac aliquam ex accumsan vel.</p>

  <h3 class="hw-text-title">Subtitle</h3>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat est gravida venenatis rutrum. Maecenas consequat mauris ipsum. In varius convallis hendrerit. Ut gravida luctus pretium. Nam sit amet mattis odio. Suspendisse vulputate in enim ac rhoncus. Ut viverra et lectus et feugiat.</p>

  <h3 class="hw-text-title">Subtitle</h3>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat est gravida venenatis rutrum. Maecenas consequat mauris ipsum. In varius convallis hendrerit. Ut gravida luctus pretium. Nam sit amet mattis odio. Suspendisse vulputate in enim ac rhoncus. Ut viverra et lectus et feugiat.</p>

  <figure>
    <img alt="Picture of happy people" src="{assets}/img/{postenbring}/{component}-image.jpg">
    <figcaption>
      That's not just a broomstick, Harry! That's a Nimbus 2000!
    </figcaption>
  </figure>

  <h2>H2 Title</h3>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat est gravida venenatis rutrum. Maecenas consequat mauris ipsum. In varius convallis hendrerit. Ut gravida luctus pretium. Nam sit amet mattis odio. Suspendisse vulputate in enim ac rhoncus. Ut viverra et lectus et feugiat. Nulla non aliquam nisi, nec bibendum urna. Nunc interdum orci ac ultrices pulvinar. In hac habitasse platea dictumst. Nulla rutrum, arcu in pulvinar efficitur, odio dolor consectetur urna, vel dictum ex erat semper tellus. In hac habitasse platea dictumst. Nam a hendrerit quam, vitae lobortis dui. Integer rhoncus condimentum pretium. Mauris ac enim auctor, iaculis elit id, pellentesque velit.</p>

  <p>Fusce ac nibh sagittis, mattis libero vitae, tincidunt lacus. Nulla pretium justo metus, non viverra lorem consectetur et. Aenean odio mi, placerat eget suscipit in, molestie blandit mi. Phasellus sit amet felis sed ante placerat pharetra non euismod diam. Nullam aliquam metus id purus varius, vel mollis nulla lobortis. Pellentesque vehicula dignissim magna, in faucibus tortor scelerisque rutrum. Aenean ac turpis id turpis congue cursus. Aliquam hendrerit egestas nulla, ac aliquam ex accumsan vel.</p>

  <h2>H2 Title</h3>

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

  <h3 class="hw-text-title">Subtitle</h3>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat est gravida venenatis rutrum. Maecenas consequat mauris ipsum. In varius convallis hendrerit. Ut gravida luctus pretium. Nam sit amet mattis odio. Suspendisse vulputate in enim ac rhoncus. Ut viverra et lectus et feugiat. Nulla non aliquam nisi, nec bibendum urna. Nunc interdum orci ac ultrices pulvinar. In hac habitasse platea dictumst. Nulla rutrum, arcu in pulvinar efficitur, odio dolor consectetur urna, vel dictum ex erat semper tellus. In hac habitasse platea dictumst. Nam a hendrerit quam, vitae lobortis dui. Integer rhoncus condimentum pretium. Mauris ac enim auctor, iaculis elit id, pellentesque velit.</p>

  <p>Fusce ac nibh sagittis, mattis libero vitae, tincidunt lacus. Nulla pretium justo metus, non viverra lorem consectetur et. Aenean odio mi, placerat eget suscipit in, molestie blandit mi. Phasellus sit amet felis sed ante placerat pharetra non euismod diam. Nullam aliquam metus id purus varius, vel mollis nulla lobortis. Pellentesque vehicula dignissim magna, in faucibus tortor scelerisque rutrum. Aenean ac turpis id turpis congue cursus. Aliquam hendrerit egestas nulla, ac aliquam ex accumsan vel.</p>

</div>
```