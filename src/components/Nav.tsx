import Link from 'next/link';
import { navLinks } from '@/lib/site';

/**
 * Site navigation. Uses the `.site-nav` design-system classes; `<SiteScripts />`
 * wires up scroll/hamburger behaviour. Link list lives in lib/site.ts.
 */
export default function Nav({ active }: { active?: string }) {
  return (
    <nav className="site-nav" id="sitenav">
      <Link className="nav-logo" href="/">
        Shreyas <span>Y D</span>
      </Link>
      <ul className="nav-links">
        {navLinks.map((l) => (
          <li key={l.key}>
            <Link href={l.href} className={active === l.key ? 'active' : undefined}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="nav-cta" href="/contact">
        Get in Touch →
      </Link>
      <button className="nav-hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
