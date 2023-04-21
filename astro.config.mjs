import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  site: "https://juto.dk",
  integrations: [mdx(), sitemap(), vue(), tailwind(), compress(), frontendistahtmlMinify()]
});