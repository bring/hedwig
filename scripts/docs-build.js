/**
 *
 * Docs build
 *
 * -> Iterate through all markdown files in the src folder
 * -> Move markedowns files to docs
 * -> Make Catalog.js config
 * -> Generate html file
 *
 */

var fs = require('fs');
var glob = require('glob');
var sortPages = require('./utilities/sortPages');

var bringDocsConfig = require('./config/docs-config-bring');
var postenDocsConfig = require('./config/docs-config-posten');

var docsHtml = require('./config/docs-html');
var bringHtml = require('./config/docs-html-bring');
var postenHtml = require('./config/docs-html-posten');

function prepareDocFile(file, fileSection){

  var filename = file.split('/').pop();
  var title = filename.split('.').shift();

  /**
   * Copy md files to docs
   */

  /*fs.createReadStream(file).pipe(
    fs.createWriteStream(`docs/md/${fileSection}/` + filename)
  );*/
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/{{postenbring}}/g, fileSection);

    fs.writeFile("docs/md/" + fileSection + "/" + filename, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });

  return {
    title,
    path: title,
    src: `md/${fileSection}/${filename}`
  }
}


function build() {
  /**
   * Make directories if non existant
   */

  if (!fs.existsSync('./docs')) { fs.mkdirSync('./docs'); }
  if (!fs.existsSync('./docs/md')) { fs.mkdirSync('./docs/md'); }
  if (!fs.existsSync('./docs/md/shared')) { fs.mkdirSync('./docs/md/shared'); }
  if (!fs.existsSync('./docs/md/bring')) { fs.mkdirSync('./docs/md/bring'); }
  if (!fs.existsSync('./docs/md/posten')) { fs.mkdirSync('./docs/md/posten'); }

  /**
   * Copy html to docs
   */

  fs.writeFile('docs/index.html', docsHtml, function(err) {
    if(err) {
      return console.warn(err);
    }
  });

  fs.writeFile('docs/bring.html', bringHtml, function(err) {
    if(err) {
      return console.warn(err);
    }
  });

  fs.writeFile('docs/posten.html', postenHtml, function(err) {
    if(err) {
      return console.warn(err);
    }
  });


  /**
   * Make empty component and page config files
   */

  //  Desired structure:
  // About
  // Getting started
  // Guidelines
  //   - Logo
  //   - Typo
  //   - Spacing
  //   - Colors
  //   - Layout
  // Components
  // CommonCombos
  // Icons
  // Utilities
  // Contact

  const sharedComponents = []; // KEEP
  const sharedCommonCombos = [];
  const sharedGettingStarted = [];
  const sharedGuidelines = [];
  const sharedPages = [];
  const sharedUtilities = [];
  const sharedLayout = [];
  const sharedReact = [];

  const bringComponents = [];
  const bringCommonCombos = [];
  const bringGettingStarted = [];
  const bringGuidelines = [];
  const bringPages = [];
  const bringUtilities = [];
  const bringLayout = [];
  const bringReact = [];

  const postenComponents = [];
  const postenCommonCombos = [];
  const postenGettingStarted = [];
  const postenGuidelines = [];
  const postenPages = [];
  const postenUtilities = [];
  const postenLayout = [];
  const postenReact = [];


  /**
   * Loop through all components/pages
   */

  glob('src/**/*.md', (err, files) => {
    /**
     * Return if any error
     */

    if (err) {
      console.warn('😞 There was an error compiling the docs')
      return;
    }

    /**
     * Iterate through all markdown files
     */

    files.forEach(file => {

      const filePath = file.split('/');
      const fileSection = filePath[1]; // Will be shared, posten or bring
      var components;
      var commonCombos;
      var gettingStarted;
      var guidelines;
      var pages;
      var layout;
      var utilities;
      var react;

      switch (fileSection) {
          case 'posten':
              components = postenComponents;
              commonCombos = postenCommonCombos;
              gettingStarted = postenGettingStarted;
              guidelines = postenGuidelines;
              pages = postenPages;
              layout = postenLayout;
            //  utilities = postenUtilities;
              react = postenReact;
              break;
          case 'bring':
              components = bringComponents;
              commonCombos = bringCommonCombos;
              gettingStarted = bringGettingStarted;
              guidelines = bringGuidelines;
              pages = bringPages;
              layout = bringLayout;
             // utilities = bringUtilities;
              react = bringReact;
              break;
          default:
          case 'shared':
              components = sharedComponents;
              commonCombos = sharedCommonCombos;
              gettingStarted = sharedGettingStarted;
              guidelines = sharedGuidelines;
              pages = sharedPages;
              layout = sharedLayout;
             // utilities = sharedUtilities;
              react = sharedReact;
              break;
      }

      if(fileSection == "shared") {
        if(file.indexOf('guidelines') !== -1) {
          bringGuidelines.push(prepareDocFile(file, "bring"));
          postenGuidelines.push(prepareDocFile(file, "posten"));
          return;
        }

        if(file.indexOf('gettingStarted') !== -1) {
          bringGettingStarted.push(prepareDocFile(file, "bring"));
          postenGettingStarted.push(prepareDocFile(file, "posten"));
          return;
        }

        if(file.indexOf('components') !== -1) {
          bringComponents.push(prepareDocFile(file, "bring"));
          postenComponents.push(prepareDocFile(file, "posten"));
          return;
        }

        if(file.indexOf('commonCombos') !== -1) {
          bringCommonCombos.push(prepareDocFile(file, "bring"));
          postenCommonCombos.push(prepareDocFile(file, "posten"));
          return;
        }

        if(file.indexOf('layout') !== -1) {
          bringLayout.push(prepareDocFile(file, "bring"));
          postenLayout.push(prepareDocFile(file, "posten"));
          return;
        }
      }
      else {
        if(file.indexOf('guidelines') !== -1) {
          guidelines.push(prepareDocFile(file, fileSection));
          return;
        }

        if(file.indexOf('gettingStarted') !== -1) {
          gettingStarted.push(prepareDocFile(file, fileSection));
          return;
        }

        if(file.indexOf('components') !== -1) {
          components.push(prepareDocFile(file, fileSection));
          return;
        }

        if(file.indexOf('commonCombos') !== -1) {
          commonCombos.push(prepareDocFile(file, fileSection));
          return;
        }

        if(file.indexOf('layout') !== -1) {
          layout.push(prepareDocFile(file, fileSection));
          return;
        }
      }

      // if(file.indexOf('utilities') !== -1) {
      //   utilities.push(prepareDocFile(file, fileSection));
      //   return;
      // }


    /**
     * Check if the page is React
     var title = filename.split('.').shift();
    */

    if (file.indexOf('-react') !== -1) {

      var filename = file.split('/').pop();
      var title = filename.split('.').shift();

      /**
       * Copy md files to docs
       */

      fs.createReadStream(file).pipe(
        fs.createWriteStream(`docs/md/${fileSection}/` + filename)
      );

      /**
       * Add page to a pages array
       */
      react.push({
        title: title.split('-react').join(''),
        path: title,
        src: `md/${fileSection}/${filename}`,
      });

      return;
    }

    /**
     * Process remaining pages
     */

    var filename = file.split('/').pop();
    var title = filename.split('.')[1];

    /**
     * Copy md files to docs
     */

    fs.createReadStream(file).pipe(
      fs.createWriteStream(`docs/md/${fileSection}/` + filename)
    );

    /**
    * Make config for pages in root directory
    */

    var path = title === 'Home' ? '/' : title;
    pages.push({
      path,
      src: `md/${fileSection}/${filename}`,
      title,
    });
  });


  /**
   * Generate Catalog config file and write it to docs
   */

  const bringMergedPages = [
    ...sharedPages,
    ...bringPages,
  ];
  bringMergedPages.push({
    title: 'Getting Started',
    pages: sortPages([
      ...sharedGettingStarted,
      ...bringGettingStarted,
    ]),
  });

  bringMergedPages.push({
    title: 'Guidelines',
    pages: sortPages([
      ...sharedGuidelines,
      ...bringGuidelines,
    ]),
  });
  bringMergedPages.push({
    title: 'Layout',
    pages: sortPages([
      ...sharedLayout,
      ...bringLayout,
    ]),
  });
   bringMergedPages.push({
    title: 'Common Combos',
    pages: sortPages([
      ...sharedCommonCombos,
      ...bringCommonCombos,
    ]),
  });
  bringMergedPages.push({
    title: 'Components',
    pages: sortPages([
      ...sharedComponents,
      ...bringComponents,
    ]),
  });
  // bringMergedPages.push({
  //   title: 'Utilities',
  //   pages: sortPages([
  //     ...sharedUtilities,
  //     ...bringUtilities,
  //   ]),
  // });
  bringMergedPages.push({
    title: 'React',
    pages: sortPages([
      ...sharedReact,
      ...bringReact,
    ]),
  });

  const bringCatalogSettings = Object.assign(bringDocsConfig, { pages: bringMergedPages });
  const CatalogJSBring = `Catalog.render(${JSON.stringify(bringCatalogSettings)}, document.getElementById('catalog'))`;

  fs.writeFile('docs/docs-config-bring.js', CatalogJSBring, function(err) {
    if(err) {
      return console.warn(err);
    }
    console.log("✍️ The Bring docs was generated");
  });

  const postenMergedPages = [
    ...sharedPages,
    ...postenPages,
  ];
  postenMergedPages.push({
    title: 'Getting Started',
    pages: sortPages([
      ...sharedGettingStarted,
      ...postenGettingStarted,
    ]),
  });

  postenMergedPages.push({
    title: 'Guidelines',
    pages: sortPages([
      ...sharedGuidelines,
      ...postenGuidelines,
    ]),
  });
  postenMergedPages.push({
    title: 'Layout',
    pages: sortPages([
      ...sharedLayout,
      ...bringLayout,
    ]),
  });

  postenMergedPages.push({
    title: 'Common Combos',
    pages: sortPages([
      ...sharedCommonCombos,
      ...postenCommonCombos,
    ]),
  });
  postenMergedPages.push({
    title: 'Components',
    pages: sortPages([
      ...sharedComponents,
      ...postenComponents,
    ]),
  });
  // postenMergedPages.push({
  //   title: 'Utilities',
  //   pages: sortPages([
  //     ...sharedUtilities,
  //     ...postenUtilities,
  //   ]),
  // });
  postenMergedPages.push({
    title: 'React',
    pages: sortPages([
      ...sharedReact,
      ...postenReact,
    ]),
  });

  const postenCatalogSettings = Object.assign(postenDocsConfig, { pages: postenMergedPages });
  const CatalogJSPosten = `Catalog.render(${JSON.stringify(postenCatalogSettings)}, document.getElementById('catalog'))`;

  fs.writeFile('docs/docs-config-posten.js', CatalogJSPosten, function(err) {
    if(err) {
      return console.warn(err);
    }
    console.log("✍️ The Posten docs was generated");
  });
})
}

build();

module.exports = build;
