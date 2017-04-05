/**
 *
 * DOCS BUILD SCRIPT
 *
 * Iterate thru all markdown files in the src folder
 * Move markedowns files to docs
 * Make Catalog.js config
 * Generate html file
 *
 */

var fs = require('fs');
var glob = require('glob');

var docsConfig = require('./docs-config');
var docsHtml = require('./docs-html');

function build() {
    glob('src/**/*.md', (err, files) => {
        /**
         * Return if any error
         */

        if (err) {
            console.warn('There was an error compiling the docs 😞')
            return;
        }

        /**
         * Make page config
         */

        var pagesSetup = [];


        /**
         * Make directory if it does not exists
         */

         var dir = './docs';
         if (!fs.existsSync(dir)) {
             fs.mkdirSync(dir);
         }

        var dir = './docs/md';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        /**
         * Iterate thru all markdown files
         */

        files.forEach(file => {

            /**
             * Make a filename and title
             */

            const filename = file.split('/').pop();
            const title = filename.split('.').shift();

            /**
             * Make index page
             */

            if (title === 'index') {
              var indexPage = {
                path: '/',
                title: 'Introduction',
                src: `md/${filename}`,
              };

              pagesSetup = [
                ...pagesSetup,
                indexPage,
              ];

              return;
            }

            /**
            * Make config for pages
            */

            const page = {
                path: title,
                src: `md/${filename}`,
                title,
            };

            pagesSetup = [
              ...pagesSetup,
              page,
            ];

            /**
             * Copy md files to docs
             */

            fs.createReadStream(file).pipe(
                fs.createWriteStream('docs/md/' + filename)
            );
        });

        /**
         * Generate Catalog config file and write it to docs
         */

        const config = Object.assign(docsConfig, { pages: pagesSetup });
        const CatalogJS = `Catalog.render(${JSON.stringify(config)}, document.getElementById('catalog'))`;

        fs.writeFile('docs/docs-config.js', CatalogJS, function(err) {
            if(err) {
                return console.warn(err);
            }
            console.log("The docs was generated! ✍️");
        });

        /**
         * Copy md files to docs
         */

         var html = './docs/index.html';
         if (!fs.existsSync(html)) {
             fs.writeFile('docs/index.html', docsHtml, function(err) {
                 if(err) {
                     return console.warn(err);
                 }
             });
         }
    })
}

build();

module.exports = build;
