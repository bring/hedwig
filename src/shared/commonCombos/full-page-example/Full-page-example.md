### Example page

```html
<form class="ajax-submit xp-formbuilder-form form-builder" data-embedded="false" action="/" method="post" data-errorlocalization="{&quot;textInput&quot;:&quot;Please fill in this field&quot;,&quot;simpleInput&quot;:&quot;Please Tick this box if you want to proceed&quot;}" novalidate="">
        <div class="hw-block hw-block--full hw-block--pb-large">
            <div class="hw-grid"><div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Bokningsdatum
                    <input class="hw-input" type="text" id="bokningsdatum" name="bokningsdatum" value="" size="37" required="required">
                </label>
            </div>

            <div class="hw-grid__item">
                <fieldset class="hw-fieldset hw-block hw-block--full hw-block--mt">
                    <legend class="hw-fieldset__legend">Välj typ av bokning</legend>
                    <div class="hw-fieldset__content">
                        <div class="hw-grid"><div class="hw-grid__item hw-medium--one-half">
                            <label class="hw-radio-button">
                                Avhämtning från
                                <input type="radio" name="typ_av bokning" data-inputtype="radio" value="Avhämtning från" data-radio-required="true" required="required">
                                <i class="hw-radio-button__indicator"></i>
                            </label>
                        </div><div class="hw-grid__item hw-medium--one-half">
                            <label class="hw-radio-button">
                                Utleverans till
                                <input type="radio" name="typ_av bokning" data-inputtype="radio" value="Utleverans till" data-radio-required="true" required="required">
                                <i class="hw-radio-button__indicator"></i>
                            </label>
                        </div>
                        </div>
                    </div>
                </fieldset>
            </div>

            
            <div class="hw-grid__item">
                <div class="hw-block hw-block--full hw-block--pt hw-block--pb-small">
                    <h3>Pallinformation</h3>
                </div>

            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Pallregistreringsnummer
                    <input class="hw-input" type="text" id="pallregistreringsnummer" name="pallregistreringsnummer" value="" size="37" required="required" data-kwimpalastatus="alive" data-kwimpalaid="1568119682103-2">
                <span style="opacity: 1; left: 966.5px; top: 760.5px; width: 19px; min-width: 19px; height: 13px; position: absolute; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTciIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNyAxMiI+IDxkZWZzPiA8cGF0aCBpZD0iYSIgZD0iTTcuOTA5IDEuNDYybDIuMTIxLjg2NHMtLjY3MS4xMy0xLjIwOS4yOTRjMCAwIC40MzcuNjM0Ljc3LjkzOC4zOTEtLjE4LjY1Ny0uMjQ4LjY1Ny0uMjQ4LS44MTEgMS42NjgtMi45NzkgMi43MDMtNC41MyAyLjcwMy0uMDkzIDAtLjQ4Mi0uMDA2LS43MjcuMDE1LS40MzUuMDIxLS41ODEuMzgtLjM3NC40NzMuMzczLjIwMSAxLjE0My42NjIuOTU4IDEuMDA5QzUuMiA4LjAwMy45OTkgMTEgLjk5OSAxMWwuNjQ4Ljg4Nkw2LjEyOSA4LjYzQzguNjAyIDYuOTQ4IDEyLjAwNiA2IDE1IDZoM1Y1aC00LjAwMWMtMS4wNTggMC0yLjA0LjEyMi0yLjQ3My0uMDItLjQwMi0uMTMzLS41MDItLjY3OS0uNDU1LTEuMDM1YTcuODcgNy44NyAwIDAgMSAuMTg3LS43MjljLjAyOC0uMDk5LjA0Ni0uMDc3LjE1NS0uMDk5LjU0LS4xMTIuNzc3LS4wOTUuODIxLS4xNi4xNDYtLjI0NS4yNTQtLjk3NC4yNTQtLjk3NEw3LjU2OS4zODlzLjIwMiAxLjAxMy4zNCAxLjA3M3oiLz4gPC9kZWZzPiA8dXNlIGZpbGw9IiNiNmI2YjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIiB4bGluazpocmVmPSIjYSIvPiA8L3N2Zz4=&quot;); background-repeat: no-repeat; background-position: 0px 0px; border: none; display: inline; visibility: visible; z-index: auto;"></span></label>
            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Antal EUR-pall
                    <input class="hw-input" type="text" id="antal_eurpall" name="antal_eurpall" value="" size="37" required="required">
                </label>
            </div>

            
            <div class="hw-grid__item">
                <div class="hw-block hw-block--full hw-block--pt hw-block--pb-small">
                    <h3>Avhämtnings-/leveransadress</h3>
                </div>

            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Företagsnamn
                    <input class="hw-input" type="text" id="foretagsnamn" name="foretagsnamn" value="" size="37" required="required">
                </label>
            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Adress
                    <input class="hw-input" type="text" id="adress" name="adress" value="" size="37" required="required">
                </label>
            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Postnummer
                    <input class="hw-input" type="text" id="postnummer" name="postnummer" value="" size="37" required="required" data-kwimpalastatus="alive" data-kwimpalaid="1568119682103-3">
                <span style="opacity: 1; left: 966.5px; top: 1196.5px; width: 19px; min-width: 19px; height: 13px; position: absolute; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTciIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNyAxMiI+IDxkZWZzPiA8cGF0aCBpZD0iYSIgZD0iTTcuOTA5IDEuNDYybDIuMTIxLjg2NHMtLjY3MS4xMy0xLjIwOS4yOTRjMCAwIC40MzcuNjM0Ljc3LjkzOC4zOTEtLjE4LjY1Ny0uMjQ4LjY1Ny0uMjQ4LS44MTEgMS42NjgtMi45NzkgMi43MDMtNC41MyAyLjcwMy0uMDkzIDAtLjQ4Mi0uMDA2LS43MjcuMDE1LS40MzUuMDIxLS41ODEuMzgtLjM3NC40NzMuMzczLjIwMSAxLjE0My42NjIuOTU4IDEuMDA5QzUuMiA4LjAwMy45OTkgMTEgLjk5OSAxMWwuNjQ4Ljg4Nkw2LjEyOSA4LjYzQzguNjAyIDYuOTQ4IDEyLjAwNiA2IDE1IDZoM1Y1aC00LjAwMWMtMS4wNTggMC0yLjA0LjEyMi0yLjQ3My0uMDItLjQwMi0uMTMzLS41MDItLjY3OS0uNDU1LTEuMDM1YTcuODcgNy44NyAwIDAgMSAuMTg3LS43MjljLjAyOC0uMDk5LjA0Ni0uMDc3LjE1NS0uMDk5LjU0LS4xMTIuNzc3LS4wOTUuODIxLS4xNi4xNDYtLjI0NS4yNTQtLjk3NC4yNTQtLjk3NEw3LjU2OS4zODlzLjIwMiAxLjAxMy4zNCAxLjA3M3oiLz4gPC9kZWZzPiA8dXNlIGZpbGw9IiNiNmI2YjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEpIiB4bGluazpocmVmPSIjYSIvPiA8L3N2Zz4=&quot;); background-repeat: no-repeat; background-position: 0px 0px; border: none; display: inline; visibility: visible; z-index: auto;"></span></label>
            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Postort
                    <input class="hw-input" type="text" id="postort" name="postort" value="" size="37" required="required">
                </label>
            </div>

            <div class="hw-grid__item">
                <label class="hw-label">
                    Övrig information angående transporten (ex. öppettider)
                                        <textarea class="hw-textarea" rows="6" id="kompletterande_uppgifter" name="kompletterande_uppgifter" size="36"></textarea>
                </label>
            </div>

            
            <div class="hw-grid__item">
                <div class="hw-block hw-block--full hw-block--pt hw-block--pb-small">
                    <h3>Kontaktinformation</h3>
                </div>

            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Kontaktperson
                    <input class="hw-input" type="text" id="kontaktperson" name="kontaktperson" value="" size="37" required="required">
                </label>
            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                    Telefonnummer
                    <input class="hw-input" type="text" id="telefonnummer" name="telefonnummer" value="" size="37" required="required" data-kwimpalastatus="alive" data-kwimpalaid="1568119682103-4">
                <span style="opacity: 1; left: 966.5px; top: 1746.5px; width: 19px; min-width: 19px; height: 13px; position: absolute; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMTcnIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxNyAxMic+IDxkZWZzPiA8cGF0aCBpZD0nYScgZD0nTTcuOTA5IDEuNDYybDIuMTIxLjg2NHMtLjY3MS4xMy0xLjIwOS4yOTRjMCAwIC40MzcuNjM0Ljc3LjkzOC4zOTEtLjE4LjY1Ny0uMjQ4LjY1Ny0uMjQ4LS44MTEgMS42NjgtMi45NzkgMi43MDMtNC41MyAyLjcwMy0uMDkzIDAtLjQ4Mi0uMDA2LS43MjcuMDE1LS40MzUuMDIxLS41ODEuMzgtLjM3NC40NzMuMzczLjIwMSAxLjE0My42NjIuOTU4IDEuMDA5QzUuMiA4LjAwMy45OTkgMTEgLjk5OSAxMWwuNjQ4Ljg4Nkw2LjEyOSA4LjYzQzguNjAyIDYuOTQ4IDEyLjAwNiA2IDE1IDZoM1Y1aC00LjAwMWMtMS4wNTggMC0yLjA0LjEyMi0yLjQ3My0uMDItLjQwMi0uMTMzLS41MDItLjY3OS0uNDU1LTEuMDM1YTcuODcgNy44NyAwIDAgMSAuMTg3LS43MjljLjAyOC0uMDk5LjA0Ni0uMDc3LjE1NS0uMDk5LjU0LS4xMTIuNzc3LS4wOTUuODIxLS4xNi4xNDYtLjI0NS4yNTQtLjk3NC4yNTQtLjk3NEw3LjU2OS4zODlzLjIwMiAxLjAxMy4zNCAxLjA3M3onLz4gPC9kZWZzPiA8dXNlIGZpbGw9JyMwMDdDOTcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTEpJyB4bGluazpocmVmPScjYScvPiA8L3N2Zz4=&quot;); background-repeat: no-repeat; background-position: 0px 0px; border: none; display: inline; visibility: visible; z-index: auto;"></span></label>
            </div>

            <div class="hw-grid__item hw-medium--one-whole">
                <label class="hw-label">
                     E-postadress
                    <input class="hw-input" type="email" id="e_postadress" name="e_postadress" value="" size="37" required="required" data-kwimpalastatus="alive" data-kwimpalaid="1568119682103-5">
                <span style="opacity: 1; left: 966.5px; top: 1837.5px; width: 19px; min-width: 19px; height: 13px; position: absolute; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMTcnIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxNyAxMic+IDxkZWZzPiA8cGF0aCBpZD0nYScgZD0nTTcuOTA5IDEuNDYybDIuMTIxLjg2NHMtLjY3MS4xMy0xLjIwOS4yOTRjMCAwIC40MzcuNjM0Ljc3LjkzOC4zOTEtLjE4LjY1Ny0uMjQ4LjY1Ny0uMjQ4LS44MTEgMS42NjgtMi45NzkgMi43MDMtNC41MyAyLjcwMy0uMDkzIDAtLjQ4Mi0uMDA2LS43MjcuMDE1LS40MzUuMDIxLS41ODEuMzgtLjM3NC40NzMuMzczLjIwMSAxLjE0My42NjIuOTU4IDEuMDA5QzUuMiA4LjAwMy45OTkgMTEgLjk5OSAxMWwuNjQ4Ljg4Nkw2LjEyOSA4LjYzQzguNjAyIDYuOTQ4IDEyLjAwNiA2IDE1IDZoM1Y1aC00LjAwMWMtMS4wNTggMC0yLjA0LjEyMi0yLjQ3My0uMDItLjQwMi0uMTMzLS41MDItLjY3OS0uNDU1LTEuMDM1YTcuODcgNy44NyAwIDAgMSAuMTg3LS43MjljLjAyOC0uMDk5LjA0Ni0uMDc3LjE1NS0uMDk5LjU0LS4xMTIuNzc3LS4wOTUuODIxLS4xNi4xNDYtLjI0NS4yNTQtLjk3NC4yNTQtLjk3NEw3LjU2OS4zODlzLjIwMiAxLjAxMy4zNCAxLjA3M3onLz4gPC9kZWZzPiA8dXNlIGZpbGw9JyMwMDdDOTcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTEpJyB4bGluazpocmVmPScjYScvPiA8L3N2Zz4=&quot;); background-repeat: no-repeat; background-position: 0px 0px; border: none; display: inline; visibility: visible; z-index: auto;"></span></label>
            </div>

            
            
                <div class="hw-grid__item">
                    <div class="hw-block hw-block--full hw-block--mb-small">
                        <div class="g-recaptcha" data-callback="recaptchaCallback" data-expired-callback="recaptchaReset" data-sitekey="6LdebzYUAAAAAJHyQn-5qb-DpjEpXeKh4HjUNj4l"><div style="width: 304px; height: 78px;" data-children-count="1"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdebzYUAAAAAJHyQn-5qb-DpjEpXeKh4HjUNj4l&amp;co=aHR0cHM6Ly93d3cuYnJpbmcuc2U6NDQz&amp;hl=en&amp;v=v1566858990656&amp;size=normal&amp;cb=yn0mh7sw8rls" width="304" height="78" role="presentation" name="a-smcrajs5fqlp" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" data-children-count="0"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
                    </div>
                    <button id="xp-formbuilder-submit" class="hw-button hw-button--primary xp-submit" type="submit" value="Submit" data-captcha="true" invalidcaptcha="true">Boka</button>
                </div>
            </div>
        </div>
    </form>
```
