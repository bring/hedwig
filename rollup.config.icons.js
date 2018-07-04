/**
 * Rollup config for icons
 * https://rollupjs.org/
 */

import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'assets/icons.js',
  output: {
    file: 'dist/icons.min.js',
    format: 'cjs',
  },
  plugins: [
    babel(),
    uglify(),
  ],
};
