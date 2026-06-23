import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hire Me — Shreyas Y D | Marketing Operations & Campaign Management',
  description:
    'Shreyas YD runs marketing operations for B2B and SaaS teams — campaign setup and trafficking, tracking QA, reporting, optimisation, and platform management. A seamless extension of your team, remote from Bengaluru.',
  keywords:
    'Shreyas YD, marketing operations, campaign management, campaign trafficking, marketing QA, GA4, GTM, Looker Studio dashboard, Google Ads, Meta Ads, platform management, marketing ops consultant, Bengaluru',
  alternates: { canonical: '/hire' },
};

export default function HirePage() {
  return (
    <PageShell active="hire">

        {/* ── SECTION 1: HERO ── */}
        <PageHeader
          eyebrow="Hire Me"
          title={<>Scale your marketing operations<br /><em>with speed and accuracy.</em></>}
          sub="From campaign setup and trafficking to QA, reporting, and optimisation — I run the day-to-day marketing operations so your team can focus on strategy. Fewer errors, faster launches, cleaner data, as a seamless extension of your team."
        >
          <div className="page-header__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>Book a Discovery Call →</a>
            <Link className="btn btn--ghost-white" href="/work">See My Work →</Link>
          </div>
        </PageHeader>

        {/* ── SECTION 2: WHAT I HANDLE ── */}
        <div className="services-section">
          <div className="container">
            <div className="t-eyebrow animate-fadeup">What I Handle</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>End-to-end marketing operations.</h2>
            <p className="body-lg animate-fadeup delay-2" style={{ maxWidth: '580px', marginTop: '12px' }}>Five connected areas that keep campaigns launching on time, tracking clean, and reporting trustworthy. Take one, or hand me the whole operation.</p>

            <div className="services-grid">

              {/* Service 01 */}
              <div className="service-card animate-fadeup delay-1">
                <div className="service-card__tag">01 · Setup &amp; Trafficking</div>
                <div className="service-card__title">Campaign Setup &amp; Trafficking</div>
                <ul className="service-card__features">
                  <li>Campaign configuration across Google, Meta, and LinkedIn</li>
                  <li>Conversion pixel and tag implementation</li>
                  <li>Audience and segment setup</li>
                  <li>Creative upload and ad trafficking</li>
                  <li>Standardised workflows for high-volume launches</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">High-volume launches, precision and speed</div>
                </div>
              </div>

              {/* Service 02 */}
              <div className="service-card service-card--teal animate-fadeup delay-2">
                <div className="service-card__tag">02 · QA &amp; Compliance</div>
                <div className="service-card__title">Quality Assurance &amp; Compliance</div>
                <ul className="service-card__features">
                  <li>Pre-launch QA on every campaign</li>
                  <li>Tracking and conversion validation</li>
                  <li>Targeting and audience verification</li>
                  <li>UTM governance and naming consistency</li>
                  <li>Brand-safety and creative compliance checks</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">Catch errors before they cost you</div>
                </div>
              </div>

              {/* Service 03 */}
              <div className="service-card service-card--navy animate-fadeup delay-3">
                <div className="service-card__tag">03 · Reporting &amp; Analytics</div>
                <div className="service-card__title">Reporting &amp; Analytics Support</div>
                <ul className="service-card__features">
                  <li>Performance dashboards in Looker Studio</li>
                  <li>Data consolidation across every channel</li>
                  <li>Custom report building for each stakeholder</li>
                  <li>Insight generation, not just numbers</li>
                  <li>Clear, on-time client and leadership reporting</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">Accurate, timely, actionable</div>
                </div>
              </div>

              {/* Service 04 */}
              <div className="service-card animate-fadeup delay-1">
                <div className="service-card__tag">04 · Optimisation</div>
                <div className="service-card__title">Campaign Optimisation Support</div>
                <ul className="service-card__features">
                  <li>Bid and budget pacing management</li>
                  <li>Audience refinement based on live data</li>
                  <li>A/B test design and execution</li>
                  <li>Ongoing performance analysis</li>
                  <li>Data-driven recommendations you can act on</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">Continuous, data-driven improvement</div>
                </div>
              </div>

              {/* Service 05 */}
              <div className="service-card service-card--teal animate-fadeup delay-2">
                <div className="service-card__tag">05 · Platforms &amp; Integrations</div>
                <div className="service-card__title">Platform Management &amp; Integrations</div>
                <ul className="service-card__features">
                  <li>Google Ads, Meta, and LinkedIn campaign platforms</li>
                  <li>GA4 and Google Tag Manager configuration</li>
                  <li>Search Console and Google Business Profile</li>
                  <li>Tag management and conversion API integrations</li>
                  <li>Clean data flowing between every tool</li>
                </ul>
                <div className="service-card__footer">
                  <div className="service-card__timeline">One connected stack, one source of truth</div>
                </div>
              </div>

              {/* Featured — full-width */}
              <div className="service-card service-card--featured animate-fadeup">
                <div>
                  <div className="service-card__tag">Full Operations Management</div>
                  <div className="service-card__title">Run the entire operation, end-to-end.</div>
                  <p className="service-card__intro">For teams that want marketing operations handled completely — not advice, but execution. You brief me on the business; I run setup, trafficking, QA, reporting, and optimisation as a dedicated extension of your team.</p>
                </div>
                <div>
                  <ul className="service-card__features">
                    <li>Embedded ownership of day-to-day campaign operations across all channels</li>
                    <li>Standardised QA and trafficking workflows applied to every launch</li>
                    <li>Always-on reporting and a single dashboard across paid, organic, and analytics</li>
                    <li>Continuous optimisation and process improvement, month over month</li>
                    <li>One strategy call per month — plain-English on what&apos;s working and what&apos;s next</li>
                  </ul>
                  <div className="service-card__footer">
                    <div className="service-card__timeline">Ongoing · dedicated, as an extension of your team</div>
                    <p className="service-card__note">Book a discovery call to map what this looks like for your business.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── SECTION 3: HOW WE WORK TOGETHER ── */}
        <div className="services-section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="t-eyebrow animate-fadeup">How We Work Together</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>Four steps to seamless operations.</h2>
            <p className="body-lg animate-fadeup delay-2" style={{ maxWidth: '580px', marginTop: '12px' }}>A simple, repeatable engagement that gets me operating as part of your team — usually within two to three weeks.</p>

            <div className="work-preview-grid">
              <div className="work-card animate-fadeup delay-1">
                <div className="work-card__num">01</div>
                <div className="work-card__label">Discover</div>
                <p className="work-card__desc">I learn your setup, channels, and tools, and pinpoint exactly where operations are slowing you down or leaking data.</p>
              </div>
              <div className="work-card work-card--teal animate-fadeup delay-2">
                <div className="work-card__num" style={{ color: 'var(--teal)' }}>02</div>
                <div className="work-card__label">Develop</div>
                <p className="work-card__desc">I build a tailored plan and the workflows — setup, QA, reporting, optimisation — to hit your operational goals.</p>
              </div>
              <div className="work-card work-card--gold animate-fadeup delay-3">
                <div className="work-card__num" style={{ color: 'var(--gold)' }}>03</div>
                <div className="work-card__label">Deliver</div>
                <p className="work-card__desc">I execute as an extension of your team — campaigns launched accurately, on time, with reporting you can trust.</p>
              </div>
              <div className="work-card work-card--navy animate-fadeup delay-1">
                <div className="work-card__num" style={{ color: 'var(--navy)' }}>04</div>
                <div className="work-card__label">Optimise</div>
                <p className="work-card__desc">I keep refining the process and the performance — better efficiency, cleaner data, stronger results every month.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 4: CASE STUDY SNAPSHOTS ── */}
        <div className="proof-section">
          <div className="container">
            <section className="section" aria-label="Case study snapshots">
              <div className="t-eyebrow animate-fadeup">The Work, Verified</div>
              <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>These aren&apos;t hypotheticals.</h2>
              <p className="body-lg animate-fadeup delay-2" style={{ maxWidth: '580px', marginTop: '12px' }}>The operations above map to work already built and delivered. The results are real. The links are live.</p>

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

        {/* ── SECTION 5: CTA ── */}
        <div className="hire-cta" role="complementary" aria-label="Get in touch">
          <h2>Ready to start?</h2>
          <p className="hire-cta__sub">Book a 30-minute discovery call — no pitch, no pressure. We talk about your setup, where operations are slowing you down, and whether I&apos;m the right person to help.</p>
          <div className="hire-cta__actions">
            <a className="btn btn--primary" href={`mailto:${site.email}`}>Send me an email →</a>
            <a className="btn btn--ghost-white" href={site.linkedin} target="_blank" rel="noopener">Connect on LinkedIn →</a>
          </div>
          <p className="hire-cta__location">Based in Bengaluru &nbsp;·&nbsp; Working remotely with teams across India, UK, and beyond</p>
        </div>

    </PageShell>
  );
}
