import { getAllPosts } from '@/lib/contentful';
import { site } from '@/lib/site';

export const revalidate = 3600;

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map((post) => {
      const f = post.fields;
      if (!f.slug || !f.title) return '';
      const url = `${site.baseUrl}/blog/${f.slug}`;
      const pubDate = f.publishedDate
        ? new Date(f.publishedDate).toUTCString()
        : new Date().toUTCString();
      const description = f.excerpt
        ? `<![CDATA[${f.excerpt}]]>`
        : '';
      const category = f.category
        ? `<category>${f.category}</category>`
        : '';

      return `
    <item>
      <title><![CDATA[${f.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      ${category}
      <description>${description}</description>
    </item>`.trim();
    })
    .filter(Boolean)
    .join('\n    ');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shreyas Y D — Blog</title>
    <link>${site.baseUrl}/blog</link>
    <description>Notes on marketing, content systems, analytics, and what makes growth compound.</description>
    <language>en-IN</language>
    <atom:link href="${site.baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
