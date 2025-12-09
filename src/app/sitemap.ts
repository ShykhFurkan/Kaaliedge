import { MetadataRoute } from 'next';
import { countries } from '@/data/countries';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kaaliedge.com';

    // Static routes
    const routes = [
        '',
        '/services',
        '/about',
        '/contact',
        '/testimonials',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic country routes
    const countryRoutes = countries.map((country) => ({
        url: `${baseUrl}/countries/${country.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9, // High priority for landing pages
    }));

    return [...routes, ...countryRoutes];
}
