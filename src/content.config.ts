import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ entry }) =>
      entry.replace(/\/index\.(md|mdx)$/, "").replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCredits: z
      .object({
        author: z.string(),
        url: z.string().url(),
        source: z.string().default("Unsplash"),
      })
      .optional(),
    keywords: z
      .array(z.string())
      .default([
        "fullstack developer",
        "devops engineer",
        "software engineering",
        "web development",
      ]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
