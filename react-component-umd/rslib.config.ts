import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig, LibConfig } from '@rslib/core';

const shared: LibConfig = {
  bundle: false,
  dts: {
    bundle: false,
  },
};

export default defineConfig({
  lib: [
    {
      ...shared,
      format: 'esm',
      source: {
        entry: {
          index: ['./src/**', '!./src/env.d.ts'],
        }
      },
      output: {
        distPath: {
          root: './dist/esm',
        },
        filename: {
          //js: 'index.mjs',
          //css: 'styles.css',
        }
      },
    },
    {
      ...shared,
      format: 'cjs',
      source: {
        entry: {
          index: ['./src/**', '!./src/env.d.ts'],
        }
      },
      output: {
        distPath: {
          root: './dist/cjs',
        },
      },
    },
    {
      format: 'umd',
      umdName: 'RslibUmdExample',
      source: {
        entry: {
          index: './src/index.tsx',
        }
      },
      output: {
        externals: {
          react: 'React',
        },
        distPath: {
          root: './dist/umd',
        },
        /*filename: {
          js: 'umd.js',
          css: 'styles.css',
        }*/
      },
    },
  ],
  plugins: [
    pluginReact({
      swcReactOptions: {
        runtime: 'classic',
      },
    }),
    pluginSass(),
  ],
});
