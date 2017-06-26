/**
 * Rollup config
 * https://rollupjs.org/
 */

import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  format: 'iife',
  sourceMap: true,
  sourceMapFile: 'build/main.js.map',
  entry: {
    include: ['src/**/*.js'],
    exclude: ['src/**/*.test.js'],
  },
  dest: 'build/main.js',
  plugins: [
    resolve(),
    multiEntry(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
