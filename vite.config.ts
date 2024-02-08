//vite.config.js
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from './package.json'

export default defineConfig ({
  plugins: [
    react({
      'jsxRuntime': 'classic'
    }),
    dts({
      include: ['src/**/*'],
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)], output: { preserveModules: true, exports: 'named' }
    },
    
    target: 'esnext',
    sourcemap: true
  }
});