/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from "mdsvex";
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    extensions: [".svelte", ".svx"],
    preprocess: mdsvex()
  }),
  ],
  test: {
    globals: true,
    setupFiles: './src/setup.ts',
  }
})
