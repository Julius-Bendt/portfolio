import { promises as fs } from "fs";
import path from "path";
import readline from "readline";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");
const SRC_BLOG_ASSETS = path.join(process.cwd(), "src", "assets", "blog");

interface BlogPostDetails {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
}

async function promptUser(): Promise<BlogPostDetails> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query: string): Promise<string> =>
    new Promise((resolve) => rl.question(query, resolve));

  const title = await question("Enter blog post title: ");

  const defaultSlug = title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-");

  const slugInput = await question(
    `Enter slug (press enter to use "${defaultSlug}"): `
  );
  const slug = slugInput.trim() || defaultSlug;

  const description = await question("Enter blog post description: ");

  const defaultKeywords = [
    "software development",
    "web development",
    "programming",
  ];
  const keywordsInput = await question(
    `Enter keywords (comma-separated, press enter for defaults: ${defaultKeywords.join(", ")}): `
  );
  const keywords = keywordsInput.trim()
    ? keywordsInput.split(",").map((k) => k.trim())
    : defaultKeywords;

  rl.close();

  return { title, slug, description, keywords };
}

async function createBlogPost(details: BlogPostDetails) {
  const postDir = path.join(BLOG_DIR, details.slug);

  // Create blog post directory
  await fs.mkdir(postDir, { recursive: true });

  // Ensure src/assets/blog directory exists
  await fs.mkdir(SRC_BLOG_ASSETS, { recursive: true });

  // Create frontmatter content
  const currentDate = new Date().toISOString().split("T")[0];
  const frontmatter = `---
title: '${details.title}'
description: '${details.description}'
pubDate: '${currentDate}'
# updatedDate: '${currentDate}'
draft: true
keywords: [${details.keywords.map((k) => `'${k}'`).join(", ")}]
# heroImage: 'blog/${details.slug}/hero.webp'
# heroAlt: 'Alt text for hero image'
---

Write your blog post content here...

## Images
Add images to your blog post:

1. Place your images in \`src/assets/blog/${details.slug}/\`
2. For hero image:
   - Add the image to \`src/assets/blog/${details.slug}/hero.webp\`
   - Uncomment and update heroImage & heroAlt in frontmatter
3. Reference images in your content:
   \`\`\`markdown
   ![Image description](/blog/${details.slug}/your-image.webp)
   \`\`\`

## SEO Optimization
This blog post includes:
- ✅ Title and description
- ✅ Keywords for better search visibility
- ⏳ Hero image (pending)
- ⏳ Content (pending)

## Before Publishing
1. Add your content
2. Add and configure hero image
3. Review and update keywords if needed
4. Set draft: false when ready to publish
5. If making major updates later, uncomment and update the updatedDate

## Image Optimization Tips
- Use .webp format for better performance
- Optimize images before adding them
- Include meaningful alt text
- Recommended hero image size: 1200x630px (optimal for social sharing)
`;

  // Create index.md with frontmatter
  await fs.writeFile(path.join(postDir, "index.md"), frontmatter);

  // Create blog-specific assets directory under src/assets
  const srcPostDir = path.join(SRC_BLOG_ASSETS, details.slug);
  await fs.mkdir(srcPostDir, { recursive: true });

  // Create a README in the assets directory
  const assetsReadme = `# Blog Assets for "${details.title}"

Store your blog post images here.

## Directory Structure
src/assets/blog/${details.slug}/
├── hero.webp        # Main image for the blog post
└── other-images/    # Additional images used in the post

## Recommendations
- Use .webp format
- Optimize images before adding them
- Recommended hero image size: 1200x630px
- Keep filenames descriptive but simple
- Include meaningful alt text when referencing images

## Reference Images in Markdown
\`\`\`markdown
![Image description](/blog/${details.slug}/your-image.webp)
\`\`\`

## Tools for Image Optimization
- squoosh.app - Browser-based image optimization
- imageoptim.com - Desktop app for macOS
- tinypng.com - Online PNG and JPEG compression`;

  await fs.writeFile(path.join(srcPostDir, "README.md"), assetsReadme);

  return {
    postDir,
    assetsDir: srcPostDir,
  };
}

async function main() {
  try {
    console.log("🚀 Creating new blog post...\n");

    const details = await promptUser();
    const { postDir, assetsDir } = await createBlogPost(details);

    console.log("\n✅ Blog post created successfully!");
    console.log("\nDirectories created:");
    console.log("Content:", postDir);
    console.log("Assets (src/assets):", assetsDir);
    console.log("\nNext steps:");
    console.log("1. Add your content to index.md");
    console.log(`2. Add images to ${assetsDir}`);
    console.log("3. Review and update SEO elements (keywords, description)");
    console.log("4. Set draft: false when ready to publish");
    console.log("\nPro tips:");
    console.log("- Use .webp format for images");
    console.log("- Optimize images before adding them");
    console.log("- Hero image size: 1200x630px (optimal for social sharing)");
  } catch (error) {
    console.error("\n❌ Error creating blog post:", error);
    process.exit(1);
  }
}

main();
