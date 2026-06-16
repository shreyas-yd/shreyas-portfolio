import Link from 'next/link';
import { site, navLinks } from '@/lib/site';

const linkStyle = { fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' as const };

/** Site footer. Contact details and nav routes come from lib/site.ts. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <div className="site-footer__brand">
              Shreyas <span>Y D</span>
            </div>
            <div className="site-footer__tagline">Digital Marketing &amp; Content Leader</div>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={`mailto:${site.email}`} style={linkStyle}>{site.email}</a>
              <a href={site.phoneHref} style={linkStyle}>{site.phone}</a>
              <a href={site.linkedin} target="_blank" rel="noopener" style={linkStyle}>{site.linkedinLabel}</a>
            </div>
          </div>
          <div>
            <div className="footer-nav-title">Pages</div>
            <ul className="footer-nav-list">
              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link href={l.href}>{l.footerLabel ?? l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-nav-title">Download</div>
            <ul className="footer-nav-list">
              <li>
                <a href={site.cv} target="_blank" rel="noopener">
                  Full CV (PDF) ↓
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="footer-copy">© 2026 Shreyas Y D</div>
          <div className="footer-copy">{site.location}</div>
        </div>
      </div>
    </footer>
  );
}
