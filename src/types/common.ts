// src/types/common.ts
export interface BaseProps {
    class?: string;
    id?: string;
}

export interface ImageProps extends BaseProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
}

export interface LinkProps extends BaseProps {
    href: string;
    external?: boolean;
    ariaLabel?: string;
}

export interface SEOProps extends BaseProps {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
    publishedDate?: Date;
    modifiedDate?: Date;
    keywords?: string[];
}

export interface BlogPostProps extends SEOProps {
    pubDate: Date;
    updatedDate?: Date;
    draft?: boolean;
    keywords?: string[];
}

export interface PortfolioItemProps extends BaseProps {
    name: string;
    description: string;
    href: string | null;
    image: string;
    status: 'completed' | 'in-progress' | 'archived';
}