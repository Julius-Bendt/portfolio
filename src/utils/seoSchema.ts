interface SchemaOrgData {
    type: 'website' | 'article';
    title: string;
    description: string;
    url: string;
    image?: string;
    publishedDate?: Date;
    modifiedDate?: Date;
}

export function generateSchemaOrg(data: SchemaOrgData) {
    if (data.type === 'article') {
        return {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": data.title,
            "description": data.description,
            "image": data.image,
            "datePublished": data.publishedDate?.toISOString(),
            "dateModified": data.modifiedDate?.toISOString() || data.publishedDate?.toISOString(),
            "author": {
                "@type": "Person",
                "name": "Julius Bendt",
                "url": "https://jub.dk"
            }
        };
    }

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Julius Bendt",
        "url": "https://jub.dk",
        "jobTitle": ["Software Developer", "Software Engineer", "Fullstack Developer"],
        "description": "Software Developer based in Aalborg, Denmark, specializing in fullstack development and DevOps",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Denmark"
        },
        "sameAs": [
            "https://github.com/Julius-Bendt",
            "https://www.linkedin.com/in/julius-bendt",
            "https://leetcode.com/Julius-Bendt",
            "https://wip.dk",
        ]
    };
}