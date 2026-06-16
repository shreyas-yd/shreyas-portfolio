import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import CtaStrip from '@/components/CtaStrip';

export const metadata: Metadata = {
  title: 'Shreyas Y D — Digital Marketing & Analytics Leader | Marketing Technology | Bengaluru',
  description:
    'Shreyas YD is a digital marketing and analytics leader with 10+ years building content flywheels, marketing measurement systems, and AI-powered growth engines across B2B and B2C.',
  keywords:
    'Shreyas YD, digital marketing, content strategy, SEO, brand manager, Bengaluru, social media manager, content leader, marketing analytics, GA4, Google Tag Manager, API integration, MarTech, marketing technology, AI marketing, growth marketing',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://ydshreyas.com/',
    title: 'Shreyas Y D — Digital Marketing & Content Leader',
    description:
      'Filmmaker-turned-marketer. 10+ years building brands, organic communities, and growth engines. 300% organic lead growth. 17K+ community built from zero.',
  },
};

export default function HomePage() {
  return (
    <PageShell active="home">

        {/* ── SECTION 1: HERO ── */}
        <section className="hero" aria-label="Introduction">
          <div className="hero__bg-kannada" aria-hidden="true">ಆಡು ಮುಟ್ಟದ<br />ಎಲೆಯಿಲ್ಲ</div>
          <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
          <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
          <div className="hero__content">
            <div className="hero__eyebrow">Digital Marketing &amp; Analytics Leader · Marketing Technology · AI-Powered Growth Systems · Organic Growth</div>
            <h1 className="hero__heading">Shreyas <em>Y D</em></h1>
            <p className="hero__sub">A filmmaker-turned-marketer who has spent a decade finding the voice inside every brand — and building the systems that carry it forward.</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" href="/work">See My Work →</Link>
              <Link className="btn btn--ghost-white" href="/about">Read My Story →</Link>
              <a className="btn btn--ghost-white" href="/Shreyas_YD_CV.pdf" target="_blank" rel="noopener">Download CV ↓</a>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: THE TWO WORLDS ── */}
        <div className="two-worlds" aria-label="Background and approach">
          <div className="world world--dark animate-fadeup">
            <div className="world__identity">The Filmmaker</div>
            <div className="world__subtitle">The instinct</div>
            <ul className="world__lines">
              <li className="world__line">Learn the audience before you speak to them — a story nobody sees themselves in is just noise with a budget.</li>
              <li className="world__line">Put yourself in different shoes for every brief. The director&apos;s. The actor&apos;s. The audience member in the back row who almost didn&apos;t come.</li>
              <li className="world__line">Build the hook first. Everything else is what you earn the right to say after you&apos;ve earned their attention.</li>
              <li className="world__line">Visual language is a language. Fluency means knowing when the image says more than the sentence ever could.</li>
            </ul>
            <p className="world__context">Films. Ad productions. Documentaries. A Diploma in Film Making &amp; Direction from FFVA, Bengaluru. The instinct that no brief can teach.</p>
          </div>
          <div className="world world--light animate-fadeup delay-2">
            <div className="world__identity">The Marketer</div>
            <div className="world__subtitle">The system</div>
            <ul className="world__lines">
              <li className="world__line">Every story has an impact. Measure it. Analytics aren&apos;t the enemy of creativity — they are how you prove the story landed.</li>
              <li className="world__line">Guide the audience through the journey deliberately. Awareness to consideration to conversion — programmatic tools that move people, not just reach them.</li>
              <li className="world__line">Revamp the message until it says what the brand actually means — not what the brand thinks it is saying.</li>
              <li className="world__line">SEO. Performance marketing. Dashboards. Feedback loops. Content systems. The full toolkit, in service of one signal.</li>
            </ul>
            <p className="world__context">Fintech. Real estate. Logistics. Recruitment. Tech. Media. Ten years. Every industry a new language — learned by immersion.</p>
          </div>
        </div>

        {/* ── SECTION 4: STATS BAND ── */}
        <div className="stats-band" role="region" aria-label="Key metrics">
          <div className="stats-inner">
            <div className="stat-item animate-fadeup delay-1">
              <div className="stat-item__num">17K+</div>
              <div className="stat-item__label">Community Built from Zero</div>
            </div>
            <div className="stat-item animate-fadeup delay-2">
              <div className="stat-item__num" data-count data-target="87" data-suffix="%">87%</div>
              <div className="stat-item__label">Visitor Growth via SEO</div>
            </div>
            <div className="stat-item animate-fadeup delay-3">
              <div className="stat-item__num">3×</div>
              <div className="stat-item__label">Daily Leads, Zero Ad Spend</div>
            </div>
            <div className="stat-item animate-fadeup delay-4">
              <div className="stat-item__num">60%↓</div>
              <div className="stat-item__label">Creative TAT via AI</div>
            </div>
            <div className="stat-item animate-fadeup delay-5">
              <div className="stat-item__num">10+</div>
              <div className="stat-item__label">Years Experience</div>
            </div>
            <div className="stat-item animate-fadeup delay-6">
              <div className="stat-item__num">5</div>
              <div className="stat-item__label">Services Integrated — Single Analytics System</div>
            </div>
          </div>
        </div>

        {/* ── SECTION 7: INDUSTRIES ── */}
        <div className="industries-section" aria-label="Industries worked in">
          <div className="container">
            <div className="t-eyebrow animate-fadeup">Six industries. Six lessons.</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>What each leaf taught me</h2>
            <div className="industries-grid">
              <div className="industry-cell animate-fadeup delay-1">
                <div className="industry-cell__name">Finance</div>
                <div className="industry-cell__line"></div>
                <p className="industry-cell__learning">Trust is built slowly, in small consistent acts, and destroyed in a single moment of opacity.</p>
              </div>
              <div className="industry-cell animate-fadeup delay-2">
                <div className="industry-cell__name">Real Estate</div>
                <div className="industry-cell__line"></div>
                <p className="industry-cell__learning">People don&apos;t buy square footage. They buy a version of the life they want.</p>
              </div>
              <div className="industry-cell animate-fadeup delay-3">
                <div className="industry-cell__name">Logistics</div>
                <div className="industry-cell__line"></div>
                <p className="industry-cell__learning">The unglamorous industries need the best storytelling of their impact on daily lives — because it could get lost on the excel sheet.</p>
              </div>
              <div className="industry-cell animate-fadeup delay-1">
                <div className="industry-cell__name">Recruitment</div>
                <div className="industry-cell__line"></div>
                <p className="industry-cell__learning">Every brand is also an employer brand. How you talk about your people is how your people talk about you.</p>
              </div>
              <div className="industry-cell animate-fadeup delay-2">
                <div className="industry-cell__name">Technology</div>
                <div className="industry-cell__line"></div>
                <p className="industry-cell__learning">Complex technical concepts need simple language — without simplifying it. It&apos;s complex not complicated.</p>
              </div>
              <div className="industry-cell animate-fadeup delay-3">
                <div className="industry-cell__name">Media &amp; OTT</div>
                <div className="industry-cell__line"></div>
                <p className="industry-cell__learning">Audiences are not passive. They choose, skip, and scroll. Every second of attention is earned, not assumed.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="animate-fadeup">
            <Link className="btn btn--ghost" href="/about">Read my story →</Link>
          </div>
        </div>

        {/* ── SECTION 5: THE QUESTION ── */}
        <div className="question-section" aria-label="Work philosophy — the question">
          <div className="question-section__eyebrow animate-fadeup">How every engagement begins</div>
          <blockquote className="question-section__q animate-fadeup delay-1">
            &ldquo;What is the <em>core belief and message</em> of this brand?&rdquo;
          </blockquote>
          <div className="question-section__body animate-fadeup delay-2">
            <p>That answer becomes the source of truth. Everything I build — the content, the system, the dashboards, the feedback loops — traces back to it.</p>
            <p>The companies that scale poorly are usually the ones that grew faster than their message could keep up with. The ones that scale well have a belief clear enough to hand to a new hire on day one and strong enough to survive every channel, every team, and every year that follows.</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="animate-fadeup">
            <Link className="btn btn--ghost" href="/results">See the impact →</Link>
          </div>
        </div>

        {/* ── SECTION 6: SELECTED WORK ── */}
        <div className="container">
          <section className="section" aria-label="Selected work">
            <div className="t-eyebrow animate-fadeup">Selected Work</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px', marginBottom: '12px' }}>Where I&apos;ve Made a Difference</h2>
            <p className="body-lg animate-fadeup delay-2">Verified metrics from current and past roles. Every number has a story.</p>

            <div className="work-preview-grid">
              <Link className="work-card animate-fadeup delay-1" href="/work#jones" aria-label="Jones RecruitZo case">
                <div className="work-card__num">17K+</div>
                <div className="work-card__label">Jones RecruitZo — LinkedIn from Zero</div>
                <p className="work-card__desc">Built brand identity, content engine, video strategy, and community model from scratch. 17,000+ organic followers in under one year.</p>
                <span className="work-card__link">View Case Study →</span>
              </Link>
              <Link className="work-card work-card--teal animate-fadeup delay-2" href="/work#jam">
                <div className="work-card__num" style={{ color: 'var(--teal)' }}>3×</div>
                <div className="work-card__label">Jones Asset Management — Organic Leads</div>
                <p className="work-card__desc">Tripled new daily leads through 100% organic content strategy — zero ad spend. Sharp positioning, right message, consistent execution.</p>
                <span className="work-card__link" style={{ color: 'var(--teal)' }}>View Case Study →</span>
              </Link>
              <Link className="work-card work-card--gold animate-fadeup delay-3" href="/work#jel">
                <div className="work-card__num" style={{ color: 'var(--gold)' }}>87%</div>
                <div className="work-card__label">Jones Elite Logistics — SEO Growth</div>
                <p className="work-card__desc">90% growth in new visitors. Blog content consistently 85%+ of all organic traffic over 9 months. B2B and B2C repositioning.</p>
                <span className="work-card__link" style={{ color: 'var(--gold)' }}>View Case Study →</span>
              </Link>
              <Link className="work-card work-card--navy animate-fadeup delay-1" href="/work#karle">
                <div className="work-card__num" style={{ color: 'var(--navy)' }}>60%</div>
                <div className="work-card__label">Karle Infra — LinkedIn Growth</div>
                <p className="work-card__desc">60% follower growth and 2× engagement. Targeted thought leadership and editorial planning for a premium real estate brand.</p>
                <span className="work-card__link" style={{ color: 'var(--navy)' }}>View Case Study →</span>
              </Link>
              <Link className="work-card animate-fadeup delay-2" href="/work#chaitanya">
                <div className="work-card__num" style={{ fontSize: '28px', letterSpacing: '0', lineHeight: '1.2' }}>Still<br />Live</div>
                <div className="work-card__label">Chaitanya India — Brand from Scratch</div>
                <p className="work-card__desc">Built the entire digital brand and communications infrastructure for an RBI/SEBI-regulated NBFC. Strategy remains in active use today.</p>
                <span className="work-card__link">Read the Story →</span>
              </Link>
              <Link className="work-card work-card--teal animate-fadeup delay-3" href="/work#consulting-analytics" aria-label="Marketing Analytics System case study">
                <div className="work-card__num" style={{ color: 'var(--teal)', fontSize: 'clamp(18px,2.2vw,26px)', letterSpacing: '0', lineHeight: '1.25' }}>5 APIs<br />8 Clinics</div>
                <div className="work-card__label">Built Marketing Analytics System</div>
                <p className="work-card__desc">Built a unified cross-channel analytics dashboard integrating Google Ads, GA4, Google Search Console, and Google Business Profile APIs — replacing manual reporting with real-time performance visibility across 8 clinic locations.</p>
                <span className="work-card__link" style={{ color: 'var(--teal)' }}>View Case Study →</span>
              </Link>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }} className="animate-fadeup">
              <Link className="btn btn--ghost" href="/work">View All Work →</Link>
            </div>
          </section>
        </div>

        {/* ── SECTION 8: CTA STRIP ── */}
        <CtaStrip blurb="From the first conversation to the moment your audience finally gets it — the process, the creative bank, the systems, the story. The things that outlast any single campaign." />

    </PageShell>
  );
}
