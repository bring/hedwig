# Example templates

Below are some page examples to play around with.

Copy any of the below code snippets into a `.html` file and play around.


### Blank page template

```
<html>
  <head>
    <title>Hedwig - blank page</title>
    <link href="https://hedwig-cdn.s3.amazonaws.com/hedwig/assets/fonts/fonts.css" rel="stylesheet"/>
    <link href="https://bring-hedwig.s3.amazonaws.com/hedwig/main.css"  rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  </head>
<body>

  <header>
    <div class="hw-hero">
      <div class="hw-hero__image" style="background-image: url('https://media.balls.ie/uploads/2015/08/05112820/Burrowing-Owls.jpg');">
    </div>
  </header>

  <main class="hw-block hw-block--full hw-block--limited-text">

    <section class="hw-block hw-block--margin-top">

      <!-- Enter block contents here -->

    </section>
  
  </main>
  <script src="http://bring-hedwig.s3.amazonaws.com/hedwig/main.js"></script>
  <script src="https://bring-hedwig.s3.amazonaws.com/hedwig/icons.js"></script>
</body>
</html>
```

### Simple article page

```
<html>
<head>
  <title>Article - example</title>
  <link href="https://hedwig-cdn.s3.amazonaws.com/hedwig/assets/fonts/fonts.css" rel="stylesheet"/>
  <link href="https://bring-hedwig.s3.amazonaws.com/hedwig/main.css"  rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
</head>
<body>

  <header>
  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('http://d2fbmjy3x0sdua.cloudfront.net/cdn/farfuture/BGvi7M953z6_Nq3MaEI13zHFuRhDqbfpGFEF4hGJTCg/mtime:1486670279/sites/default/files/styles/hero_cover_bird_page/public/Spotted%20Owl%20b13-41-134_V.jpg?itok=CY4ZHWj9');"></div>
  </header>

  <!-- Main contents -->

  <main class="hw-block hw-block--full hw-block--limited-text">

    <article class="hw-block hw-block--margin-top">

      <!-- wysiwyg contents (rich text) -->

      <div class="hw-wysiwyg">
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <p class="hw-text-lead">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <hr class="hw-hr" />
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
        <h3>Where does it come from</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

        <div class="hw-block hw-block--full hw-block--margin-bottom-double hw-block--margin-top-double">
          <figure class="hw-image hw-image--large">
            <img src="http://weknowyourdreams.com/images/owl/owl-05.jpg" />
            <figcaption>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </figcaption>
          </figure>
        </div>

        <h3>Where does it come from</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

        <h3>Where does it come from</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
  
        <div class="hw-block hw-block--full hw-block--margin-bottom-double hw-block--margin-top-double">
          <figure class="hw-image">
            <img src="http://www.owlcentre.com/images/2013_owl_for_leaflet_cover_large.jpg" />
            <figcaption>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </figcaption>
          </figure>
        </div>

        <h3>Final headline</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      
      </div> <!-- End of wysiwyg -->
    </article>
  
  </main>
  <script src="http://bring-hedwig.s3.amazonaws.com/hedwig/main.js"></script>
  <script src="https://bring-hedwig.s3.amazonaws.com/hedwig/icons.js"></script>
</body>
</html>

```

### Form example

```
<html>
  <head>
    <title>Hedwig - Form example</title>
    <link href="https://hedwig-cdn.s3.amazonaws.com/hedwig/assets/fonts/fonts.css" rel="stylesheet"/>
    <link href="https://bring-hedwig.s3.amazonaws.com/hedwig/main.css"  rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  </head>
<body>

  <div class="hw-hero">
    <div class="hw-hero__image" style="background-image: url('https://s3.eu-west-2.amazonaws.com/hedwig-cdn/hedwig/assets/images/hero-image-1.png');" ></div>
  </div>

  <!-- Main contents -->

  <main class="hw-block hw-block--full hw-block--limited-text">

    <section class="hw-block hw-block--margin-top">

      <div class="hw-wysiwyg">
        <h1>Kontakt oss</h1>
        <p class="hw-text-lead">
          Fyll ut feltene nedenfor, så tar vi kontakt med deg så raskt som mulig.
        </p>
        <hr class="hw-hr" />
      </div>

      <!-- Form contents -->

      <form>
        <div class="hw-block hw-block--full hw-block--margin-bottom">
          
          <fieldset class="hw-fieldset">
            <legend class="hw-fieldset__legend">
              Hva slags tjenester er du interessert i?
            </legend>

            <div class="hw-fieldset__content">
              <div class="hw-grid">
                <div class="hw-grid__item hw-one-half">
                  
                  <label class="hw-checkbox">
                    Ekspress
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                  
                  <label class="hw-checkbox">
                    Post
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                  
                  <label class="hw-checkbox">
                    E-handel
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                  
                  <label class="hw-checkbox">
                    Reklame
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                  
                  <label class="hw-checkbox">
                    Termo
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>

                </div><!--
                --><div class="hw-grid__item hw-one-half">
                  
                  <label class="hw-checkbox">
                    Interasjonal transport
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                  
                  <label class="hw-checkbox">
                    Nasjonal transportransport
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                  
                  <label class="hw-checkbox">
                    Lager
                    <input type="checkbox" />
                    <div class="hw-checkbox__indicator"></div>
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <label class="hw-label">
          Velg land
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

            <label>
              Telefonnummer
              <div class="hw-grid">
                <div class="hw-grid__item hw-one-third">
                  <select
                    data-hw-dropdown="numbers"
                    data-hw-dropdown-small>
                    <option value="1">+47</option>
                    <option value="2">+48</option>
                    <option value="3">+49</option>
                  </select>
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
      
    </section>
  
  </main>
  <script src="http://bring-hedwig.s3.amazonaws.com/hedwig/main.js"></script>
  <script src="https://bring-hedwig.s3.amazonaws.com/hedwig/icons.js"></script>
</body>
</html>
```
