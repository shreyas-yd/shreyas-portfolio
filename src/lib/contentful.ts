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

/** Shape of a "blogPost" content type in Contentful. */
export interface BlogPostFields extends EntrySkeletonType {
  contentTypeId: 'blogPost';
  fields: {
    title: string;
    slug: string;
    excerpt?: string;
    body: Document;
    publishedDate?: string;
    coverImage?: {
      fields: { file: { url: string }; title?: string };
    };
  };
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
