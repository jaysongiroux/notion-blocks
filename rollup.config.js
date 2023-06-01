import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import external from 'rollup-plugin-peer-deps-external';
import typescriptEngine from 'typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import copy from 'rollup-plugin-copy';

const dts = require('rollup-plugin-dts');

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss(),
      external({
        includeDependencies: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        typescript: typescriptEngine,
        sourceMap: true,
      }),
      commonjs(),
      babel({
        extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
        exclude: /node_modules/,
      }),
      resolve({
        browser: true,
      }),
      json(),
      terser(),
      copy(
        {
          targets: [
            {
              src: 'src/components/styles/katex.css',
              dest: 'dist/styles',
            },
            // copy all fonts to dist/styles/fonts
            {
              src: 'src/components/styles/fonts/*',
              dest: 'dist/styles/fonts',
            }
          ],
        },
      )
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    external: [/\.css$/u],
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
];
