
var production = process.env.NODE_ENV === 'production';

var reload = '<script src="//localhost:9091"></script>';
var icons = '<script src="http://localhost:3001/icons.js"></script>';

if (production) {
  reload = '';
  icons = '<script src="https://bring-hedwig.s3.amazonaws.com/hedwig/icons.js"></script>';
}


module.exports = `
    <!doctype html>
    <html class="no-js">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hedwig - Bring</title>
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


        /**
          * Switcher styles
          */

        .hw-app-switcher {
          position: absolute;
          right: 0;
          top: 0;
          background: #3a3a3a;
          text-align: right;
          z-index: 1;
        }

        @media (min-width: 1000px) {
          .hw-app-switcher {
            margin-left: 251px;
            left: 0;
          }
        }

        .hw-app-switcher__link {
          width: 120px;
          display: inline-block;
          padding: 10px 20px;
          color: white;
          text-align: center;
        }
        .hw-app-switcher__link--active {
          font-family: Foundry Monoline Medium;
          background-color: #7bc144;
        }

      </style>
    </head>
    <body>
      <nav class="hw-app-switcher">
        <a class="hw-app-switcher__link hw-app-switcher__link--active" href="/bring.html">Bring</a>
        <a class="hw-app-switcher__link" href="/posten.html">Posten</a>
      </nav>
      <div id="catalog" />
      <script src="https://unpkg.com/catalog@3.0.0-rc.3/dist/catalog-standalone.min.js"></script>
      <script src="docs-config-bring.js"></script>
      ${icons}
      ${reload}
    </body>
    </html>
`;
