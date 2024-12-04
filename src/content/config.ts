import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z.string()
            .or(z.date())
            .transform((val) => new Date(val))
            .optional(),
        // Instead of a string, we'll store the image path relative to src/assets
        heroImage: z.string().optional(), // e.g., "test.jpg" or "blog/my-post/test2.jpg"
        heroAlt: z.string().optional(),
        keywords: z.array(z.string()).default([
            "fullstack developer",
            "devops engineer",
            "software engineering",
            "web development"
        ]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };