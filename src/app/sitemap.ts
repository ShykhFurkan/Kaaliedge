import { MetadataRoute } from 'next';
import { countries } from '@/data/countries';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kaaliedge.com';

    // Core static routes
    const routes = [
        '',
        '/services',
        '/destinations',
        '/about',
        '/contact',
        '/blog',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Destination routes
    const destinationRoutes = countries.map((country) => ({
        url: `${baseUrl}/destinations/${country.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Comparison routes
    const comparisonRoutes: MetadataRoute.Sitemap = [];
    for (let i = 0; i < countries.length; i++) {
        for (let j = i + 1; j < countries.length; j++) {
            comparisonRoutes.push({
                url: `${baseUrl}/compare/${countries[i].slug}-vs-${countries[j].slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.75,
            });
        }
    }

    return [...routes, ...destinationRoutes, ...blogRoutes, ...comparisonRoutes];
}
