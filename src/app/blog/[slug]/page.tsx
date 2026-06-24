import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-react-renderer';
import PageShell from '@/components/PageShell';
import { getAllPosts, getPostBySlug, isContentfulConfigured, coverImage, assetUrl } from '@/lib/contentful';

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

const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => (
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,34px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1.15, letterSpacing: '-0.5px', marginTop: 48, marginBottom: 16 }}>{children}</h2>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2, letterSpacing: '-0.3px', marginTop: 40, marginBottom: 12 }}>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3, marginTop: 32, marginBottom: 10 }}>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_node, children) => (
      <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--ink)', marginTop: 28, marginBottom: 8 }}>{children}</h4>
    ),
    // Render embedded images from the Contentful media library
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fields = (node.data?.target as any)?.fields;
      const url = assetUrl(fields?.file?.url);
      const alt: string = fields?.title ?? fields?.description ?? '';
      const mimeType: string = fields?.file?.contentType ?? '';

      if (!url) return null;

      // Only render images — skip PDFs, videos, etc.
      if (!mimeType.startsWith('image/')) return null;

      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt={alt}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '32px auto',
            borderRadius: '2px',
          }}
        />
      );
    },
    // Open external links in a new tab
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target={node.data.uri.startsWith('http') ? '_blank' : undefined}
        rel={node.data.uri.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{ color: 'var(--accent)', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const f = post.fields;
  const cover = coverImage(post);

  return (
    <PageShell active="blog" person={false}>

      {/* Sticky breadcrumb just below the nav */}
      <nav
        aria-label="Breadcrumb"
        style={{
          position: 'sticky',
          top: 64,
          zIndex: 90,
          background: 'rgba(245,240,232,0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--rule)',
          padding: '10px 48px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          overflow: 'hidden',
        }}
      >
        <Link href="/" style={{ color: 'var(--mid)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Home</Link>
        <span style={{ color: 'var(--faint)', flexShrink: 0 }}>›</span>
        <Link href="/blog" style={{ color: 'var(--mid)', textDecoration: 'none', whiteSpace: 'nowrap' }}>Blog</Link>
        <span style={{ color: 'var(--faint)', flexShrink: 0 }}>›</span>
        <span style={{ color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{f.title}</span>

        {/* Category + date pushed to the right */}
        <span style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 'auto', paddingLeft: 24, flexShrink: 0 }}>
          {f.category && (
            <span style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, letterSpacing: '0.5px' }}>{f.category}</span>
          )}
          {f.publishedDate && (
            <span style={{ color: 'var(--ink)', fontSize: 13, fontWeight: 600, letterSpacing: '0.5px' }}>
              {new Date(f.publishedDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          )}
        </span>
      </nav>

      <article className="container" style={{ maxWidth: 780, margin: '0 auto', padding: '80px 24px 80px' }}>
        <h1 className="font-display" style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: 32 }}>
          {f.title}
        </h1>
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover.url}
            alt={cover.alt}
            style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', display: 'block', marginBottom: 40 }}
          />
        )}
        <div
          className="blog-body"
          style={{ fontSize: 17, fontWeight: 300, color: 'var(--mid)', lineHeight: 1.85 }}
        >
          {documentToReactComponents(f.body, richTextOptions)}
        </div>
      </article>

      {/* End-of-post CTA */}
      <div style={{ background: 'var(--navy)', padding: '72px 48px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          Want to work together?
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, fontStyle: 'italic', color: '#fff', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: 16 }}>
          Let&apos;s talk about your marketing.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: 300, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.7 }}>
          If something in this post resonated — or you&apos;re working on a problem like this — I&apos;d love to hear about it.
        </p>
        <Link
          href="/contact"
          style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', color: '#fff', background: 'var(--accent)', padding: '14px 32px', borderRadius: 'var(--radius)' }}
        >
          Get in Touch →
        </Link>
      </div>
    </PageShell>
  );
}
