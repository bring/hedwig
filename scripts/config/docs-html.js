module.exports = `
    <!doctype html>
    <html class="no-js">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hedwig</title>
      <link rel="icon" type="image/x-icon" href="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/favicon.ico" />
      <style>

        body {
          margin: 0;
          background: #f2f2f2;
          overflow: hidden;
        }

        /**
          * Switcher styles
          */

        .hw-app-switcher {
          display: flex;
          height: 100vh;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .hw-app-switcher__item {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
          height: 100%;
          transition: background 0.3s ease;
        }
        .hw-app-switcher__item:hover {
          background: white;
        }
        .hw-app-switcher__item:hover .hw-app-switcher__owl {
          transform: translateY(0%);
        }

        .hw-app-switcher__logo {
          height: 70px;
        }
        .hw-app-switcher__owl {
          position: absolute;
          bottom: 0;
          transition: transform 0.3s ease;
          transform: translateY(33%);
        }

      </style>
    </head>
    <body>
      <nav class="hw-app-switcher">
        <a class="hw-app-switcher__item" href="/bring.html">
          <img class="hw-app-switcher__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bring_logo.svg/1280px-Bring_logo.svg.png" alt="logo" />
          <img class="hw-app-switcher__owl" src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/logo.svg" alt="owl" />
        </a>
        <a class="hw-app-switcher__item" href="/posten.html">
          <img class="hw-app-switcher__logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Posten-Norge-Logo.svg" alt="logo" />
          <img class="hw-app-switcher__owl" src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/logo.svg" alt="owl" />
        </a>
      </nav>
    </body>
    </html>
`;
