/**
 * Rollup config
 * https://rollupjs.org/
 */

import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: './src/index.js',
  format: 'iife',
  plugins: [ resolve() ],
  dest: './build/rollup.js'
};
