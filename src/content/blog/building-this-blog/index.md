---
title: "Building This Blog"
description: "How I built this blog with Astro and my personal notes on how to use it."
pubDate: "2024-12-03"
heroImage: "blog/building-this-blog/celebration.jpg"
heroAlt: "Building This Blog"
heroCredits:
  author: "Jason Leung"
  url: "https://unsplash.com/@ninjason"
  source: "Unsplash"
draft: false
keywords:
  ["astro", "blog", "tailwind", "markdown", "portfolio", "web development"]
---

## How it was built

The blog is part of my portfolio site, which runs on [Astro](https://astro.build) - a static site framework that ships minimal JavaScript to the browser and lets me compose pages from `.astro` components.

The blog itself is powered by **Astro Content Collections**. Each post lives in `src/content/blog/<slug>/index.md` as a Markdown file with a typed frontmatter schema validated by Zod. Astro reads those files at build time and generates a static page per post under `/blog/<slug>`.

Styling is handled by **Tailwind CSS** with the `@tailwindcss/typography` plugin, which styles all the `<p>`, `<blockquote>`, `<code>` etc. elements inside the post without me having to target them manually.

A few other details worth remembering:

- Post dates can come from frontmatter or fall back to the file's git commit timestamps (via `src/utils/gitDates.ts`)
- Images go in `src/assets/blog/<slug>/` and are processed by Astro's image pipeline - converted to WebP, resized, lazy-loaded
- `draft: true` hides a post in production but keeps it visible locally
- Hero image credits (author, URL, source) render as an overlay on the hero image

---

## My notes: how to add a new post

### 1. Scaffold with the CLI script

```bash
npm run create-blog
```

Prompts for title, slug, description, and keywords, then creates the folder and a prefilled `index.md`.

### 2. What gets created

```
src/content/blog/<slug>/
└── index.md               ← write content here

src/assets/blog/<slug>/
└── (drop images here)
```

### 3. Frontmatter cheat-sheet

```yaml
---
title: "My Post Title"
description: "One sentence for SEO and the post list"
pubDate: "2026-05-26"
# updatedDate: '2026-05-26'   ← uncomment when making major edits
draft: true                    ← flip to false when ready to publish
keywords: ["tag1", "tag2"]
# heroImage: 'blog/<slug>/hero.webp'
# heroAlt: 'Description of the hero image'
# heroCredits:
#   author: 'Photographer Name'
#   url: 'https://unsplash.com/@handle'
#   source: 'Unsplash'
---
```

### 4. Adding images

- **Hero image** → `src/assets/blog/<slug>/hero.webp`, then set `heroImage: 'blog/<slug>/hero.webp'` in frontmatter (no leading slash)
- **Inline images** → same `src/assets/blog/<slug>/` folder, reference as `/blog/<slug>/image.webp` in Markdown

```markdown
![Alt text](/blog/my-post/screenshot.webp)
```

Use `.webp` where possible; 1200×630 px is ideal for the hero.

### 5. Publishing

1. Write content
2. Add hero image (optional but worth it)
3. Set `draft: false`
4. Commit and push - CI handles the build
