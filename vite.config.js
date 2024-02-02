//vite.config.js
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig ({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  test:{
    globals: true,
    environment: 'jsdom',
    include: ["src/**/*.test.jsx", "__ tests __/**/*.test.jsx"],
    setupFiles: resolve(__dirname, "src/__ tests __/setup.jsx")
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "design-system",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,

  },
});