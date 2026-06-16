import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/contentful';

const BASE = 'https://ydshreyas.com';

// Regenerate the sitemap hourly so newly published blog posts are picked up.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/results`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hire`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];

  // Append a URL for every published Contentful blog post.
  const posts = await getAllPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.fields.slug}`,
    lastModified: post.sys.updatedAt ? new Date(post.sys.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...corePages, ...postPages];
}
