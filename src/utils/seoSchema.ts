import { SITE_URL, SITE_DESCRIPTION, AUTHOR } from "../constants/site";

interface SchemaOrgData {
  type: "website" | "article";
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedDate?: Date;
  modifiedDate?: Date;
}

export function generateSchemaOrg(data: SchemaOrgData) {
  if (data.type === "article") {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.title,
      description: data.description,
      image: data.image,
      url: data.url,
      datePublished: data.publishedDate?.toISOString(),
      dateModified:
        data.modifiedDate?.toISOString() || data.publishedDate?.toISOString(),
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        url: AUTHOR.url,
        sameAs: Object.values(AUTHOR.social),
      },
      publisher: {
        "@type": "Person",
        name: AUTHOR.name,
        url: AUTHOR.url,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": data.url,
      },
    };
  }

  // Enhanced Person schema for homepage
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.jobTitle,
    description: SITE_DESCRIPTION,
    sameAs: Object.values(AUTHOR.social),
    knowsAbout: [
      "Web Development",
      "DevOps",
      "Full Stack Development",
      ".NET",
      "Node.js",
      "TypeScript",
      "Vue.js",
      "Laravel",
      "Terraform",
      "Cloud Infrastructure",
    ],
  };
}

// Generate Website schema for better SEO
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: AUTHOR.name,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
    },
  };
}

// Generate BreadcrumbList schema for navigation
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
