import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Shreyas Y D — Digital Marketing Leader | Bengaluru',
  description:
    'Get in touch with Shreyas Y D — call, email, or connect on LinkedIn. Digital marketing and content leader based in Bengaluru, India.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageShell active="contact" breadcrumb={{ name: 'Contact', path: '/contact' }}>

        {/* ── PAGE HEADER ── */}
        <PageHeader
          eyebrow="Let's Connect"
          title={<>Get in <em>Touch</em></>}
          sub="Whether you're hiring, collaborating, or just curious — I prefer a direct conversation. Pick the channel that works best for you."
        />

        {/* ── PRIMARY ACTION CARDS ── */}
        <div className="container">
          <section className="action-section" aria-label="Contact options">
            <div className="t-eyebrow animate-fadeup">Three ways to reach me</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>Pick up, write in,<br />or connect.</h2>
            <div className="action-cards">
              <a className="action-card action-card--call animate-fadeup delay-1" href={site.phoneHref} aria-label="Call Shreyas Y D">
                <div className="action-card__icon">📞</div>
                <div className="action-card__label">Call or WhatsApp</div>
                <div className="action-card__value">{site.phone}</div>
                <p className="action-card__desc">Available during business hours IST. Happy to take a quick call or respond on WhatsApp if that&apos;s easier.</p>
                <span className="action-card__cta">Call Now →</span>
              </a>
              <a className="action-card action-card--email animate-fadeup delay-2" href={`mailto:${site.email}`} aria-label="Email Shreyas Y D">
                <div className="action-card__icon">✉</div>
                <div className="action-card__label">Email</div>
                <div className="action-card__value">{site.email}</div>
                <p className="action-card__desc">For opportunities, project briefs, or anything you&apos;d prefer in writing. I reply within 24 hours — usually much sooner.</p>
                <span className="action-card__cta">Send Email →</span>
              </a>
              <a className="action-card action-card--linkedin animate-fadeup delay-3" href={site.linkedin} target="_blank" rel="noopener" aria-label="Connect with Shreyas on LinkedIn">
                <div className="action-card__icon">💼</div>
                <div className="action-card__label">LinkedIn</div>
                <div className="action-card__value">{site.linkedinLabel}</div>
                <p className="action-card__desc">Follow my work, read my posts, or send a connection request with a note about what you&apos;re working on.</p>
                <span className="action-card__cta">View Profile →</span>
              </a>
            </div>
          </section>
        </div>

        {/* ── INFO STRIP ── */}
        <div className="info-strip" aria-label="Additional details">
          <div className="info-strip__inner">
            <div className="info-cell animate-fadeup">
              <div className="info-cell__label">Location</div>
              <div className="info-cell__content">
                <strong>Bengaluru, Karnataka, India</strong><br />
                Open to on-site roles in Bengaluru and remote opportunities anywhere.
              </div>
            </div>
            <div className="info-cell animate-fadeup delay-1">
              <div className="info-cell__label">Portfolio &amp; Website</div>
              <div className="info-cell__content">
                <strong><a href="https://www.ydshreyas.com" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid rgba(192,67,42,0.3)', transition: 'border-color 0.2s' }}>www.ydshreyas.com</a></strong><br />
                Full portfolio, writing samples, and case studies at the main site.
              </div>
            </div>
            <div className="info-cell animate-fadeup delay-2">
              <div className="info-cell__label">Response Time</div>
              <div className="info-cell__content">
                <strong>Within 24 hours</strong> by email or LinkedIn.<br />
                Faster on phone and WhatsApp during IST business hours.
              </div>
            </div>
          </div>
        </div>

        {/* ── AVAILABILITY + CV ── */}
        <div className="container">
          <section className="bottom-section" aria-label="Availability and CV">
            <div className="bottom-grid">
              <div className="availability-panel animate-fadeup">
                <div className="availability-panel__eyebrow">Current Status</div>
                <div className="availability-panel__heading">Open to the right opportunity.</div>
                <p className="availability-panel__text">Currently open to conversations about senior marketing, content leadership, or growth strategy roles — in-person in Bengaluru or fully remote. Also available for freelance and consulting engagements.</p>
                <div className="avail-tags">
                  <span className="avail-tag">Full-time Roles</span>
                  <span className="avail-tag">Content Leadership</span>
                  <span className="avail-tag">Growth Strategy</span>
                  <span className="avail-tag">Bengaluru On-site</span>
                  <span className="avail-tag">Remote</span>
                  <span className="avail-tag">Freelance / Consulting</span>
                </div>
              </div>
              <div className="cv-panel animate-fadeup delay-2">
                <div className="cv-panel__eyebrow">Download</div>
                <div className="cv-panel__heading">Take the full CV with you.</div>
                <p className="cv-panel__text">Ten years of work, every role, every responsibility — in a single well-structured document. The PDF includes portfolio links, verified metrics, and the complete skills list.</p>
                <div className="cv-panel__links">
                  <a className="cv-btn cv-btn--primary" href={site.cv} target="_blank" rel="noopener">Download CV (PDF) ↓</a>
                  <Link className="cv-btn cv-btn--ghost" href="/work">View Full Work History →</Link>
                </div>
              </div>
            </div>
          </section>
        </div>

    </PageShell>
  );
}
