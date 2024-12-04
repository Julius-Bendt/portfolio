// src/utils/remarkOptimizeImages.mjs
import { visit } from "unist-util-visit";
import { join } from "path";

export function remarkOptimizeImages() {
  return function (tree, file) {
    visit(tree, "image", (node) => {
      // Skip external images
      if (node.url.startsWith("http")) return;

      // Skip already processed images
      if (node.url.includes("?")) return;

      // Ensure the image path is relative to src/assets
      if (!node.url.startsWith("/")) {
        // Convert relative path to absolute path from src/assets
        node.url = join("/", node.url);
      }

      // Add astro image processing flag
      node.url = `${node.url}?astroContentImageFlag`;
    });
  };
}
