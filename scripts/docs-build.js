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

var docsConfig = require('./config/docs-config');
var docsHtml = require('./config/docs-html');
var addPagesToCategories = require('./utilities/addPagesToCategories');

function build() {
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
   * Copy html to docs
   */

   fs.writeFile('docs/index.html', docsHtml, function(err) {
     if(err) {
       return console.warn(err);
     }
   });


  /**
   * Make page config
   */

   var pagesSetup = [];
   var categories = [];

    glob('src/**/*.md', (err, files) => {
        /**
         * Return if any error
         */

        if (err) {
            console.warn('😞 There was an error compiling the docs')
            return;
        }

        /**
         * Iterate thru all markdown files
         */

        files.forEach(file => {

            /**
             * Make a filename and title
             */

            let filename = file.split('/').pop();
            let title = filename.split('.').shift();

            /**
             * Copy md files to docs
             */

            fs.createReadStream(file).pipe(
                fs.createWriteStream('docs/md/' + filename)
            );

            /**
             * Check if the page is a sub category (contains '_')
             */

            if (filename.indexOf('->') !== -1) {
              const category = filename.split('->').shift();
              const name = filename.split('->').pop().split('.').shift();

               const categoryPage = {
                 title: category,
                 pages: [{
                   title: name,
                   path: title,
                   src: `md/${filename}`,
                 }],
               };

               categories.push(categoryPage);

              return;
            }

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


        });

        /**
         * Make the category pages
         */

        const categoryPages = addPagesToCategories(categories);

        pagesSetup = [
          ...pagesSetup,
          ...categoryPages,
        ];

        /**
         * Generate Catalog config file and write it to docs
         */

        const config = Object.assign(docsConfig, { pages: pagesSetup });
        const CatalogJS = `Catalog.render(${JSON.stringify(config)}, document.getElementById('catalog'))`;

        fs.writeFile('docs/docs-config.js', CatalogJS, function(err) {
            if(err) {
                return console.warn(err);
            }
            console.log("✍️ The docs was generated");
        });


    })
}

build();

module.exports = build;
