
var production = process.env.NODE_ENV !== 'production';

var reload = '';
if (production) {
  reload = '<script src="//localhost:9091"></scripts>';
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
      ${reload}
    </body>
    </html>
`;
