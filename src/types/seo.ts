export interface SEOMetadata {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
    publishedDate?: Date;
    modifiedDate?: Date;
    keywords?: string[];
}