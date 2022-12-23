/**
 * Rollup config
 * https://rollupjs.org/
 */

import 'core-js';
import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default [{
  input: { include: ['src/shared/utilities/js/polyfills/*.js', 'src/**/*.js'] },
  onwarn: (warning) => {
    // Skip certain warnings
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    // console.warn everything else
    console.warn(warning.message);
  },
  output: {
    file: 'dist/main.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    multiEntry(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    uglify(),
  ],
}];
