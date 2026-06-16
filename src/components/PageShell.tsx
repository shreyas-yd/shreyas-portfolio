import Nav from './Nav';
import Footer from './Footer';
import JsonLd from './JsonLd';
import { personLd, breadcrumbLd } from '@/lib/structured-data';

interface PageShellProps {
  /** Nav key to highlight, e.g. "about". */
  active?: string;
  /** Emits BreadcrumbList JSON-LD when set. `path` is route-relative, e.g. "/about". */
  breadcrumb?: { name: string; path: string };
  /** Emit Person JSON-LD (default true). Set false on utility pages like 404/blog. */
  person?: boolean;
  children: React.ReactNode;
}

/**
 * Standard page chrome: structured data + Nav + <main> + Footer.
 * Page content is passed as children and rendered inside <main>.
 */
export default function PageShell({ active, breadcrumb, person = true, children }: PageShellProps) {
  return (
    <>
      {person && <JsonLd data={personLd} />}
      {breadcrumb && <JsonLd data={breadcrumbLd(breadcrumb.name, breadcrumb.path)} />}
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
