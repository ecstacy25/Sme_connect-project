// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babelImport from 'vite-plugin-babel-import';

// Add the required configuration for vite-plugin-babel-import
export default defineConfig({
  plugins: [
    react(),
    babelImport([
      {
        libraryName: 'react-google-maps',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ]),
  ],
});
