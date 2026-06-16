// Structured data (JSON-LD) carried over verbatim from the original site.

import { site } from './site';

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shreyas Y D',
  url: site.baseUrl,
  email: site.email,
  telephone: site.phoneE164,
  jobTitle: 'Digital Marketing & Content Leader',
  worksFor: { '@type': 'Organization', name: 'D.E.S.A.I Media' },
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
  knowsAbout: [
    'Digital Marketing',
    'Content Strategy',
    'SEO',
    'Social Media Marketing',
    'Brand Building',
    'AI Content Workflows',
  ],
  sameAs: [site.linkedin, 'https://www.ydshreyas.com'],
};

/** Builds BreadcrumbList JSON-LD. `path` is route-relative, e.g. "/about". */
export function breadcrumbLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name, item: `${site.baseUrl}${path}` },
    ],
  };
}
