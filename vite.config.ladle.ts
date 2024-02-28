//vite.config.js
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from './package.json';
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib")
    }
  }
});