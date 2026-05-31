import type { ImageMetadata } from "astro";
import { DEFAULT_HERO_IMAGE } from "../constants/site";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpeg,jpg,png,gif,webp}",
  { eager: true }
);

export function getImageByPath(src: string): ImageMetadata | null {
  // Handle absolute paths from src/assets
  if (src.startsWith("/src/assets/")) {
    return images[src]?.default || null;
  }
  // Handle paths without /src/assets prefix
  if (src.startsWith("/")) {
    const path = `/src/assets${src}`;
    return images[path]?.default || null;
  }
  // Handle relative paths
  const path = `/src/assets/${src}`;
  return images[path]?.default || null;
}

export function getHeroImagePath(heroImage: string | undefined): string {
  return heroImage
    ? `/src/assets/${heroImage}`
    : `/src/assets/${DEFAULT_HERO_IMAGE}`;
}

export function getFallbackAltText(
  title: string,
  type: "hero" | "content" = "content"
): string {
  return type === "hero"
    ? `Hero image for ${title}`
    : `Image related to ${title}`;
}
