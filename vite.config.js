import { defineConfig } from "vite";

export default defineConfig({
  // Caminhos relativos: a página funciona em https://utilizador.github.io/gestor-tarefas/
  // (subpasta) e também em qualquer outro alojamento estático.
  base: "./",
  build: {
    outDir: "dist",
    minify: "esbuild",   // minifica o JavaScript
    cssMinify: true,     // minifica o CSS
    sourcemap: false,
  },
});
