// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://www.meble-bydgoszcz.pl",
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@content": path.resolve(__dirname, "./src/content"),
        "@lib": path.resolve(__dirname, "./src/lib"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@assets": path.resolve(__dirname, "./src/assets"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ["astro:content"],
    },
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [
        "https://www.meble-bydgoszcz.pl/",
        "https://www.meble-bydgoszcz.pl/kuchnie",
        "https://www.meble-bydgoszcz.pl/szafy-garderoby",
        "https://www.meble-bydgoszcz.pl/zabudowy",
        "https://www.meble-bydgoszcz.pl/sypialnie",
        "https://www.meble-bydgoszcz.pl/lozka",
        "https://www.meble-bydgoszcz.pl/lazienki",
        "https://www.meble-bydgoszcz.pl/meble-biurowe",
        "https://www.meble-bydgoszcz.pl/projektowanie",
        "https://www.meble-bydgoszcz.pl/wykonczenia",
        "https://www.meble-bydgoszcz.pl/realizacje",
        "https://www.meble-bydgoszcz.pl/kontakt",
      ],
      i18n: {
        defaultLocale: "pl",
        locales: {
          pl: "pl-PL",
        },
      },
    }),
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false,
      SVG: true,
    }),
  ],
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-north-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.meblesystem.pl",
      },
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ["astro:content"],
    },
  },
  build: {
    inlineStylesheets: "auto",
    assets: "assets",
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: false,
  },
});
