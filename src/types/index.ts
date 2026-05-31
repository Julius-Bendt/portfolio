export interface SEOMetadata {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishDate?: Date;
  modifiedDate?: Date;
  keywords?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishDate: Date;
  modifiedDate?: Date;
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  draft: boolean;
  keywords: string[];
}

export interface GitDates {
  created: Date;
  modified?: Date;
  error?: string;
}
