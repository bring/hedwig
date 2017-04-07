
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
    </head>
    <body>
      <div id="catalog" />
      <script src="https://interactivethings.github.io/catalog/catalog.min.js"></script>
      <script src="docs-config.js"></script>
      ${reload}
    </body>
    </html>
`;
