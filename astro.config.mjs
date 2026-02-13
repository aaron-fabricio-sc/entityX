// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // 1. Cambia tu GitHub Pages URL por tu dominio real
  site: "https://entityx.tech",

  // 2. Cambia el base de "/entityX" a "/"
  base: "/",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  server: {
    port: 4321,
  },

  integrations: [sitemap()],
});
