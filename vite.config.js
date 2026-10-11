import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    minify: "esbuild",   // minifica o JavaScript
    cssMinify: true,     // minifica o CSS
    sourcemap: false,
  },
});
