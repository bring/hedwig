/**
 *
 * svg-sprite
 *
 * -> Generate a SVG sprite from files in /icons/optimised folder
 *
 */

var fs = require('fs');
var glob = require('glob');
var svgSprite = require('svg2sprite');
const sprite = svgSprite.collection({ inline: true });

/**
 * config
 */

var src = './build/assets/icons/optimized/**/*.svg';
var dist = './build/assets/svg-sprite.svg';

console.log('🐝 Generating SVG sprite...');

/**
 * Go thru all SVG
 */

glob(src, (err, files) => {

  /**
   * Iterate thru files
   */

  files.forEach((file, index) => {
    /**
     * Generate name for filename and add to sprite
     */

    var name = file.split('/').pop().split('.').shift();

    sprite.add(name, fs.readFileSync(file, 'utf8'));
  });

  /**
   * Write to file
   */

  const svg = sprite.compile();

  fs.writeFileSync(dist, svg);

  console.log(`🐘 SVG sprite at '${dist}'`)
});
