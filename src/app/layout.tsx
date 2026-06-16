import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import '@/styles/design-system.css';
import '@/styles/pages.css';
import Analytics from '@/components/Analytics';
import SiteScripts from '@/components/SiteScripts';

export const metadata: Metadata = {
  metadataBase: new URL('https://ydshreyas.com'),
  title: 'Shreyas Y D — Digital Marketing & Content Leader',
  description:
    'Filmmaker-turned-marketer. 10+ years building brands, organic communities, and growth engines. 300% organic lead growth. 17K+ community built from zero.',
  authors: [{ name: 'Shreyas Y D' }],
  openGraph: {
    type: 'website',
    url: 'https://ydshreyas.com/',
    title: 'Shreyas Y D — Digital Marketing & Content Leader',
    description:
      'Filmmaker-turned-marketer. 10+ years building brands, organic communities, and growth engines. 300% organic lead growth. 17K+ community built from zero.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Y D — Digital Marketing & Content Leader',
    description:
      'Filmmaker-turned-marketer. 10+ years building brands, organic communities, and growth engines.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
