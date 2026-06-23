/** Single source of truth for site-wide constants. */

export const site = {
  baseUrl: 'https://ydshreyas.com',
  email: 'contact@ydshreyas.com',
  phone: '+91 95380 87008',
  phoneE164: '+919538087008',
  phoneHref: 'tel:+919538087008',
  linkedin: 'https://www.linkedin.com/in/ydshreyas/',
  linkedinLabel: 'linkedin.com/in/ydshreyas',
  cv: '/Shreyas_YD_CV.pdf',
  location: 'Bengaluru, India',
} as const;

export interface NavLink {
  href: string;
  label: string;
  key: string;
  /** Overrides `label` in the footer when set. */
  footerLabel?: string;
}

/** Primary navigation — consumed by both <Nav> and <Footer>. */
export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/work', label: 'Work', key: 'work' },
  { href: '/results', label: 'Impact', key: 'results', footerLabel: 'Results & Metrics' },
  { href: '/hire', label: 'Hire Me', key: 'hire' },
  { href: '/blog', label: 'Blog', key: 'blog' },
  { href: '/contact', label: 'Contact', key: 'contact' },
];
