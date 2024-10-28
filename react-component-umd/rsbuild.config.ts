import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginUmd } from '@rsbuild/plugin-umd';
import * as path from "path";
const nodeEnv = process.env.NODE_ENV === 'production' ? '"production"' : '"development"';
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginUmd({
      name: 'PageLogicFlowRender',
    })
  ],
  source: {
    alias: {
      '@': './src/',
    },
    entry: {
      index: [
        path.resolve(__dirname, './src/index.tsx'),
        path.resolve(__dirname, './example/example.tsx')
      ]
    },
    define: { 'process.env.NODE_ENV': nodeEnv },
    transformImport: [],
  },
  tools: {
    rspack: {
      optimization: {
        sideEffects: true,
      },
    },
  },
  output: {
    polyfill: 'usage',
    filename: {},
    externals: {},
    sourceMap: {},
  },
  html: {
    template: path.resolve(__dirname, './example/index.html'),
    scriptLoading: 'defer',
  },
  server: {
  },
});