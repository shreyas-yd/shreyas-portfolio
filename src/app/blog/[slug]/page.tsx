import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PageShell from '@/components/PageShell';
import { getAllPosts, getPostBySlug, isContentfulConfigured } from '@/lib/contentful';

export const revalidate = 3600;

export async function generateStaticParams() {
  if (!isContentfulConfigured) return [];
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.fields.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post not found — Shreyas Y D' };
  return {
    title: `${post.fields.title} — Shreyas Y D`,
    description: post.fields.excerpt,
    alternates: { canonical: `/blog/${post.fields.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const f = post.fields;

  return (
    <PageShell active="blog" person={false}>
      <article className="container" style={{ maxWidth: 780, margin: '0 auto', padding: '140px 24px 80px' }}>
        {f.publishedDate && (
          <div className="font-mono text-accent" style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            {new Date(f.publishedDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        )}
        <h1 className="font-display" style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: 32 }}>
          {f.title}
        </h1>
        <div
          className="blog-body"
          style={{ fontSize: 17, fontWeight: 300, color: 'var(--mid)', lineHeight: 1.85 }}
        >
          {documentToReactComponents(f.body)}
        </div>
      </article>
    </PageShell>
  );
}
