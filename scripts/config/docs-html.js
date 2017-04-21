
var production = process.env.NODE_ENV === 'production';

var reload = '<script src="//localhost:9091"></script>';
var icons = '<script src="http://localhost:3001/icons.js"></script>';

if (production) {
  reload = '';
  icons = '<script src="https://hedwig-cdn.s3.amazonaws.com/hedwig/icons.js"></script>';
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

        .hw-helpers-icon {
          display: inline-block;
          width: 90px;
          text-align: center;
          font-size: 12px;
          padding: .5rem;
          margin: .5rem;
        }

        .hw-helpers-icon .hw-icon {
          margin: .5rem;
          background: white;
          width: 60px;
          height: 60px;
          padding: 10px;
          border: 1px solid #eee;
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
