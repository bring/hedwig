
var production = process.env.NODE_ENV === 'production';

var reload = '<script src="//localhost:9091"></scripts>';

var icons = `
  <script>
    var url = 'http://localhost:3001/assets/svg-sprite.svg';

    var ajax = new XMLHttpRequest();

    ajax.open("GET", url, true);
    ajax.send();

    ajax.onload = function(e) {
      var div = document.createElement("div");
      div.style.display = 'none';
      div.innerHTML = ajax.responseText;
      document.body.insertBefore(div, document.body.childNodes[0]);
    }

  </script>
`;

if (production) {
  reload = '';
  icons = '<script src="https://hedwig-cdn.s3.amazonaws.com/hedwig/icons.js"></scripts>';
}


module.exports = `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hedwig</title>
      <style>
        /**
          * Margin highlighting for block demo
          */

        .hw-helpers-margin-highlighter {
          background-color: #f9cc9d;
          display: inline-block;
          width: 100%;
          margin-bottom: 24px;
        }
        .hw-helpers-margin-highlighter > div {
            background-color: #C3E0B7;
        }
        .hw-helpers-margin-highlighter > div > p {
            background-color: rgb(242, 242, 242);
        }

        .hw-helpers-highlight {
          background-color: #048ebb;
          color: white;
          padding: 12px;
        }

      </style>
    </head>
    <body>
      <div id="catalog" />
      <script src="https://interactivethings.github.io/catalog/catalog.min.js"></script>
      <script src="docs-config.js"></script>
      ${icons}
      ${reload}
    </body>
    </html>
`;
