import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true
});