import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { getAllPosts, isContentfulConfigured } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Blog — Shreyas Y D | Notes on Marketing, Content & Systems',
  description:
    'Writing from Shreyas Y D on digital marketing, content strategy, analytics, and the systems that make growth compound.',
  alternates: { canonical: '/blog' },
};

// Revalidate the blog index hourly (ISR) so new Contentful posts appear.
export const revalidate = 3600;

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <PageShell active="blog" person={false}>
      <header className="page-header" style={{ background: 'var(--navy)', padding: '140px 48px 80px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div className="font-mono" style={{ color: 'var(--teal)', letterSpacing: 3, textTransform: 'uppercase', fontSize: 10, marginBottom: 20 }}>
            The Blog
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,7vw,96px)', fontWeight: 900, color: '#fff', lineHeight: 0.95, letterSpacing: '-2px' }}>
            Notes &amp; <em style={{ fontStyle: 'italic', color: 'rgba(200,215,235,0.6)' }}>Essays</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300, fontSize: 18, maxWidth: 580, marginTop: 20, lineHeight: 1.65 }}>
            Thinking out loud about marketing, content systems, analytics, and what makes growth compound.
          </p>
        </div>
      </header>

      <div className="container" style={{ padding: '72px 48px', maxWidth: 1120, margin: '0 auto' }}>
        {!isContentfulConfigured ? (
          <p style={{ color: 'var(--mid)', fontWeight: 300, fontSize: 16, lineHeight: 1.8 }}>
            The blog is ready and waiting. Add your Contentful credentials to{' '}
            <code>.env</code> (a <code>blogPost</code> content type with{' '}
            <code>title</code>, <code>slug</code>, <code>excerpt</code>,{' '}
            <code>body</code>, <code>publishedDate</code>, <code>coverImage</code>) and posts
            will appear here automatically.
          </p>
        ) : posts.length === 0 ? (
          <p style={{ color: 'var(--mid)', fontWeight: 300 }}>No posts published yet — check back soon.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => {
              const f = post.fields;
              return (
                <Link
                  key={post.sys.id}
                  href={`/blog/${f.slug}`}
                  className="block border border-rule bg-white p-8 no-underline transition hover:-translate-y-1 hover:shadow-soft"
                  style={{ color: 'inherit' }}
                >
                  {f.publishedDate && (
                    <div className="font-mono text-faint" style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                      {new Date(f.publishedDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  )}
                  <h2 className="font-display" style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 10 }}>
                    {f.title}
                  </h2>
                  {f.excerpt && (
                    <p style={{ color: 'var(--mid)', fontWeight: 300, fontSize: 14, lineHeight: 1.6 }}>{f.excerpt}</p>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </PageShell>
  );
}
