module.exports = `
    <!doctype html>
    <html class="no-js">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hedwig</title>
      <style>
        /**
          * Switcher styles
          */

        #switcher {
          position: fixed;
          right: 0;
          top: 0;
          z-index: 1;
          background-color: #26b576;
          padding: 10px;
        }
        #switcher a {
          padding: 10px 20px;
          color: white;
        }

      </style>
    </head>
    <body>
      <nav id="switcher">
        <a href="/bring.html">Bring</a>
        <a href="/posten.html">Posten</a>
      </nav>
    </body>
    </html>
`;
