import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Page Not Found — Shreyas Y D',
};

export default function NotFound() {
  return (
    <PageShell person={false}>
      <div className="error-page">
        <div>
          <div className="error-page__num">404</div>
          <div className="error-page__title">Page not found.</div>
          <p className="error-page__text">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link className="btn btn--primary" href="/" style={{ display: 'inline-flex' }}>← Back to Home</Link>
        </div>
      </div>
    </PageShell>
  );
}
