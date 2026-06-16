import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work With Me — Shreyas Y D | Marketing Analytics & Content Growth',
  description:
    'Shreyas YD builds marketing analytics systems and content growth engines for B2B and SaaS companies — remotely from Bengaluru. Three productised service packages. Book a discovery call.',
  keywords:
    'Shreyas YD, marketing analytics consultant, GA4 audit, GTM setup, Looker Studio dashboard, SEO retainer, AI content system, Bengaluru, digital marketing consultant',
  alternates: { canonical: '/hire' },
};

export default function HirePage() {
  return (
    <PageShell active="hire">

        {/* ── SECTION 1: HERO ── */}
        <PageHeader
          eyebrow="Work With Me"
          title={<>I build marketing analytics systems<br /><em>and content growth engines.</em></>}
          sub="If your marketing data lives in four separate tabs, your conversion tracking is a guess, and your content isn't compounding — those are solvable problems. Here's how I solve them."
        >
          <div className="page-header__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>Book a Discovery Call →</a>
            <Link className="btn btn--ghost-white" href="/work">See My Work →</Link>
          </div>
        </PageHeader>

        {/* ── SECTION 2: SERVICE PACKAGES ── */}
        <div className="services-section">
          <div className="container">
            <div className="t-eyebrow animate-fadeup">How I Work With You</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>Four ways to engage.</h2>
            <p className="body-lg animate-fadeup delay-2" style={{ maxWidth: '580px', marginTop: '12px' }}>Pick the scope that matches your situation — or book a discovery call and we&apos;ll work it out together.</p>

            <div className="services-grid">

              {/* Package 01 */}
              <div className="service-card animate-fadeup delay-1">
                <div className="service-card__tag">Package 01</div>
                <div className="service-card__title">Marketing Analytics Audit &amp; Dashboard</div>
                <ul className="service-card__features">
                  <li>GA4 audit — configuration, data quality, attribution gaps</li>
                  <li>GTM review — conversion tracking, call tracking, form tracking</li>
                  <li>Unified Looker Studio dashboard — all channels, one view</li>
                  <li>30-minute strategy walkthrough of findings and recommendations</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">Timeline · 2 weeks</div>
                  <div className="service-card__price">Starting at $1,000</div>
                </div>
              </div>

              {/* Package 02 */}
              <div className="service-card service-card--teal animate-fadeup delay-2">
                <div className="service-card__tag">Package 02</div>
                <div className="service-card__title">AI Content System Setup</div>
                <ul className="service-card__features">
                  <li>Content strategy framework tailored to your brand and audience</li>
                  <li>Prompt library for your core content formats</li>
                  <li>Workflow SOP your team can run independently</li>
                  <li>2-week pilot — real content produced using the system</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">Timeline · 4 weeks</div>
                  <div className="service-card__price">Starting at $2,000</div>
                </div>
              </div>

              {/* Package 03 */}
              <div className="service-card service-card--navy animate-fadeup delay-3">
                <div className="service-card__tag">Package 03</div>
                <div className="service-card__title">Organic Growth Retainer</div>
                <ul className="service-card__features">
                  <li>Monthly content calendar aligned to SEO and audience strategy</li>
                  <li>Weekly SEO recommendations based on live data</li>
                  <li>Monthly Social Media Content Calendar tailored for audience</li>
                  <li>Monthly analytics report — what&apos;s working, what to fix, what to do next</li>
                  <li>One strategy call per month</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">Timeline · Ongoing monthly</div>
                  <div className="service-card__price">Starting at $1,500/month</div>
                </div>
              </div>

              {/* Package 04 — full-width featured */}
              <div className="service-card service-card--featured animate-fadeup">
                <div>
                  <div className="service-card__tag">Package 04</div>
                  <div className="service-card__title">Full Digital Marketing Management</div>
                  <p className="service-card__intro">For brands that want the entire marketing operation run end-to-end — not just advice, but execution. You brief me on the business; I manage the marketing.</p>
                </div>
                <div>
                  <ul className="service-card__features">
                    <li>Paid Ads management — Google Ads and Meta/Social Media Ads: strategy, setup, ongoing optimisation, and reporting</li>
                    <li>SEO — keyword strategy, content planning, on-page optimisation, and monthly performance review</li>
                    <li>Organic Social Media — content calendar, copy, scheduling, and community management across relevant platforms</li>
                    <li>Monthly performance report across all channels — plain-English summary of what&apos;s working, what&apos;s not, and what&apos;s next</li>
                    <li>One strategy call per month</li>
                  </ul>
                  <div className="service-card__footer">
                    <div className="service-card__timeline">Timeline · Ongoing monthly</div>
                    <div className="service-card__price">Custom — based on scope and channels</div>
                    <p className="service-card__note">Book a discovery call to discuss what this looks like for your business.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── SECTION 3: CASE STUDY SNAPSHOTS ── */}
        <div className="proof-section">
          <div className="container">
            <section className="section" aria-label="Case study snapshots">
              <div className="t-eyebrow animate-fadeup">The Work, Verified</div>
              <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>These aren&apos;t hypotheticals.</h2>
              <p className="body-lg animate-fadeup delay-2" style={{ maxWidth: '580px', marginTop: '12px' }}>Every package above maps to work already built and delivered. The results are real. The links are live.</p>

              <div className="work-preview-grid">
                <Link className="work-card animate-fadeup delay-1" href="/results#consulting-analytics" aria-label="Healthcare Analytics System case study">
                  <div className="work-card__num" style={{ fontSize: '20px', lineHeight: '1.3', letterSpacing: '0' }}>5 APIs<br />8 Clinics</div>
                  <div className="work-card__label">Marketing Intelligence System — Multi-location Healthcare Brand</div>
                  <p className="work-card__desc">5 APIs. 8 locations. Zero lines of website code changed for conversion tracking. Built the full measurement infrastructure — GA4, Google Ads, Search Console, GBP — plus GTM call/form tracking and a Looker Studio dashboard, from zero.</p>
                  <span className="work-card__link">See the Results →</span>
                </Link>

                <Link className="work-card work-card--teal animate-fadeup delay-2" href="/results#jam" aria-label="Jones Asset Management AI Pipelines case study">
                  <div className="work-card__num" style={{ color: 'var(--teal)' }}>60%↓</div>
                  <div className="work-card__label">AI Content Pipelines — Jones Asset Management</div>
                  <p className="work-card__desc">60% reduction in creative TAT. 50% increase in SEO team productivity. Designed and deployed end-to-end AI content production pipelines — prompt engineering, quality control frameworks, and human-in-the-loop editorial systems.</p>
                  <span className="work-card__link" style={{ color: 'var(--teal)' }}>See the Results →</span>
                </Link>

                <Link className="work-card work-card--gold animate-fadeup delay-3" href="/results#jel" aria-label="Jones Elite Logistics SEO Growth case study">
                  <div className="work-card__num" style={{ color: 'var(--gold)' }}>87%</div>
                  <div className="work-card__label">Organic SEO Growth — Jones Elite Logistics</div>
                  <p className="work-card__desc">87% visitor growth. Blog driving 85%+ of all organic traffic over 10 months. Built the full SEO content strategy, topic architecture, and AI-powered content pipeline from scratch.</p>
                  <span className="work-card__link" style={{ color: 'var(--gold)' }}>See the Results →</span>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* ── SECTION 4: CTA ── */}
        <div className="hire-cta" role="complementary" aria-label="Get in touch">
          <h2>Ready to start?</h2>
          <p className="hire-cta__sub">Book a 30-minute discovery call — no pitch, no pressure. We talk about your setup, your gaps, and whether I&apos;m the right person to help.</p>
          <div className="hire-cta__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>Send me an email →</a>
            <a className="btn btn--ghost-white" href={site.linkedin} target="_blank" rel="noopener">Connect on LinkedIn →</a>
          </div>
          <p className="hire-cta__location">Based in Bengaluru &nbsp;·&nbsp; Working remotely with teams across India, UK, and beyond</p>
        </div>

    </PageShell>
  );
}
