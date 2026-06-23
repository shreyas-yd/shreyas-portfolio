import { createClient, type Entry, type EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

/**
 * Contentful client for the blog. Configure via .env (see .env.example).
 * The blog is wired up but optional: if no space is configured the helpers
 * return empty results so the rest of the site builds and runs fine.
 */
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';

export const isContentfulConfigured = Boolean(space && accessToken);

const client = isContentfulConfigured
  ? createClient({ space: space!, accessToken: accessToken!, environment })
  : null;

/**
 * The fixed set of blog categories. This is the single source of truth in code;
 * the matching dropdown ("Accept only specified values") must be configured on
 * the `category` field in Contentful so editors can only pick from this list.
 * Keep the two in sync if you ever change them.
 */
export const BLOG_CATEGORIES = [
  'Marketing Strategy',
  'Content & SEO',
  'Analytics & Measurement',
  'AI & Automation',
  'Brand & Social',
  'Career & Notes',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

/** Shape of a "blogPost" content type in Contentful. */
export interface BlogPostFields extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    body: Document;
    publishedDate?: string;
    category?: BlogCategory;
    coverImage?: {
      fields: { file: { url: string }; title?: string };
    };
  };
}

/**
 * Contentful asset URLs are protocol-relative (e.g. `//images.ctfassets.net/…`).
 * Normalise to an absolute https URL so <Image> / <img> can use it.
 */
export function assetUrl(url?: string): string | null {
  if (!url) return null;
  return url.startsWith('//') ? `https:${url}` : url;
}

/**
 * Pull the cover image off a post. Contentful's Entry typing collapses linked
 * assets to `never`, so we read it loosely here and return a clean url/alt pair.
 */
export function coverImage(post: BlogPost): { url: string; alt: string } | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const img = (post.fields as any).coverImage?.fields;
  const url = assetUrl(img?.file?.url);
  if (!url) return null;
  return { url, alt: img?.title ?? post.fields.title };
}

export type BlogPost = Entry<BlogPostFields, undefined, string>;

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) return [];
  const res = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
  } as never);
  return res.items;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null;
  const res = await client.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  } as never);
  return res.items[0] ?? null;
}
