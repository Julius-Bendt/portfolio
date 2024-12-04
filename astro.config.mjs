import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jub.dk",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/blog/drafts/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind(),
  ],
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["avif", "webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    quality: 80,
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  viewTransitions: true,
});
