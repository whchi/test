import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

const root = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, 'dist');
const publicDir = path.resolve(__dirname, 'public');
const isDev = process.env.NODE_ENV === 'development';
const isProduction = !isDev;
console.log(isProduction);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root,
      '@ctx': path.resolve(root, 'contexts'),
    },
  },
  publicDir,
  build: {
    lib: {
      entry: path.resolve(root, 'index.ts'),
      formats: ['es'],
    },
    minify: isProduction,
    outDir,
    reportCompressedSize: isProduction,
    rollupOptions: {
      watch: {
        include: ['src/**', 'vite.config.ts'],
        exclude: ['node_modules/**'],
      },
    },
  },
});
