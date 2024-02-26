//vite.config.js
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from './package.json';
import tailwindcss from "tailwindcss";
// import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";


export default defineConfig ({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
    }),
    // reactDocgenTypescript()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.ts`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
      output: { preserveModules: true, exports: 'named' }, // Closing parenthesis added here
    },
    target: 'esnext',
    sourcemap: true
  }
});