import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'Results & Impact — Shreyas Y D | Verified Portfolio of Outcomes',
  description:
    'Verified results from Shreyas YD — 17K+ organic LinkedIn community, 87% SEO growth, 3× daily leads, AI pipelines cutting TAT 60%. Every metric sourced from production data.',
  keywords:
    'Shreyas YD results, digital marketing outcomes, SEO growth, LinkedIn community building, organic lead generation, Jones Group, Karle Infra, Chaitanya India, marketing analytics',
  alternates: { canonical: '/results' },
};

export default function ResultsPage() {
  return (
    <PageShell active="results">

        {/* ── PAGE HEADER ── */}
        <header className="port-header">
          <div className="port-header__inner">
            <div className="port-header__eyebrow">Portfolio of Outcomes · Verified Results</div>
            <h1>What the work <em>produced.</em></h1>
            <p className="port-header__note">For the complete work history and responsibilities behind these results — <a href="/work">see the Work page →</a></p>
          </div>
        </header>

        {/* ── RESULTS NAV ── */}
        <nav className="results-nav" aria-label="Jump to result">
          <div className="results-nav__inner">
            <a className="results-nav__item" href="#consulting-analytics"><span className="results-nav__num">01</span> Independent Consulting</a>
            <a className="results-nav__item" href="#recruitzo"><span className="results-nav__num">02</span> Jones RecruitZo</a>
            <a className="results-nav__item" href="#jam"><span className="results-nav__num">03</span> Jones Asset Management</a>
            <a className="results-nav__item" href="#jel"><span className="results-nav__num">04</span> Jones Elite Logistics</a>
            <a className="results-nav__item" href="#karle"><span className="results-nav__num">05</span> Karle Infra</a>
            <a className="results-nav__item" href="#chaitanya"><span className="results-nav__num">06</span> Chaitanya India</a>
          </div>
        </nav>


        {/* ── 01 INDEPENDENT CONSULTING ── */}
        <section className="outcome outcome--cream" id="consulting-analytics" aria-label="Independent Consulting result">
          <div className="outcome__inner">
            <div className="outcome__label" data-num="01">Independent Consulting · Multi-location Healthcare Brand</div>
            <div className="outcome__hero animate-fadeup">8</div>
            <p className="outcome__hero-context animate-fadeup delay-1">Locations — Full digital marketing presence and measurement infrastructure built from the ground up, across 8 active clinic locations. March 2026 – Present.</p>

            <div className="outcome__body">
              <div className="outcome__story animate-fadeup delay-1">
                <div className="outcome__story-label">Before &amp; After</div>
                <div className="outcome__before-after">
                  <div className="ba-cell ba-cell--before">
                    <div className="ba-cell__label">Before</div>
                    <p className="ba-cell__text">No website. No marketing measurement. Four platforms (Google Ads, GA4, Search Console, GBP) with no unified view. No way to know where calls or bookings were coming from. Staff scheduling managed manually. 16 months of data sitting untouched.</p>
                  </div>
                  <div className="ba-cell ba-cell--after">
                    <div className="ba-cell__label">After</div>
                    <p className="ba-cell__text">A new website built on AWS, fully under the client&apos;s control. All channels visible in one dashboard. Every call and booking automatically tracked to its source. Staff scheduling handled by a purpose-built tool. Automated email alerts sent the moment a new lead arrives. A 16-month audit done and actioned.</p>
                  </div>
                </div>
                <p>This engagement started with a blank page. A healthcare brand with 8 active clinics, no website they owned, and no clear picture of where their patients were coming from. The brief was open-ended — build something that works, and hand it over with full control.</p>
                <p>What followed was a full build. A new website on AWS, designed and deployed from scratch. A system that captures every enquiry — calls, bookings, form submissions — and automatically notifies the right people the moment it comes in. A single dashboard that pulls together every marketing channel into one view, updated in real time. A scheduling tool purpose-built for how the clinics actually operate. And a 16-month audit that finally made visible what was working and what wasn&apos;t.</p>
                <p><strong>Everything built by one person. Using AI as a co-builder, not a shortcut.</strong> The kind of work that used to need an agency and a development team.</p>
                <div style={{ marginTop: '24px', background: 'var(--white)', borderLeft: '3px solid var(--rule)', padding: '18px 22px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--faint)', marginBottom: '8px' }}>Note</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--mid)', lineHeight: 1.75, margin: 0 }}>This engagement is independent consulting work and is not publicly listed. Results are verified from production systems.</p>
                </div>
              </div>

              <div className="outcome__right animate-fadeup delay-2">
                <div className="outcome__metrics">
                  <div className="metric-row">
                    <div className="metric-row__num">8</div>
                    <div className="metric-row__label">Clinic Locations — One Unified System</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num" style={{ fontSize: 'clamp(14px,1.5vw,20px)', letterSpacing: 0, lineHeight: 1.1 }}>From Zero</div>
                    <div className="metric-row__label">Website, Dashboard &amp; Tools — All Built Fresh</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">16mo</div>
                    <div className="metric-row__label">Historical Data Audited &amp; Actioned</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num" style={{ fontSize: 'clamp(13px,1.4vw,18px)', letterSpacing: 0, lineHeight: 1.1 }}>Automated</div>
                    <div className="metric-row__label">Lead Alerts — Every Enquiry Notified Instantly</div>
                  </div>
                </div>

                <div className="outcome__links-label">See the full role &amp; verify the work</div>
                <div className="outcome__links">
                  <a className="outcome-link outcome-link--story" href="/work#consulting-analytics">
                    <span className="outcome-link__label">View role detail on Work page</span>
                    <span className="outcome-link__url">work</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link" href="https://www.manyadental.in" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Manya Dental Website</span>
                    <span className="outcome-link__url">manyadental.in</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 02 JONES RECRUITZO ── */}
        <section className="outcome outcome--light" id="recruitzo" aria-label="Jones RecruitZo result">
          <div className="outcome__inner">
            <div className="outcome__label" data-num="02">Jones RecruitZo · LinkedIn Brand Build</div>
            <div className="outcome__hero animate-fadeup">17K+</div>
            <p className="outcome__hero-context animate-fadeup delay-1">Organic LinkedIn followers — built from a blank page in under one year, with zero paid advertising spend.</p>

            <div className="outcome__body">
              <div className="outcome__story animate-fadeup delay-1">
                <div className="outcome__story-label">Before &amp; After</div>
                <div className="outcome__before-after">
                  <div className="ba-cell ba-cell--before">
                    <div className="ba-cell__label">Before</div>
                    <p className="ba-cell__text">The LinkedIn page didn&apos;t exist. Zero followers. Zero content. Zero brand presence. A complete blank page.</p>
                  </div>
                  <div className="ba-cell ba-cell--after">
                    <div className="ba-cell__label">After</div>
                    <p className="ba-cell__text">17,000+ organic followers. Full brand identity, content flywheel, video strategy, and community model — all built from scratch, all organic.</p>
                  </div>
                </div>
                <p>The Jones RecruitZo LinkedIn presence was built entirely from zero — no inherited audience, no paid amplification, no legacy brand equity to lean on. Every follower was earned through content that was specifically designed for the platform&apos;s audience and algorithm.</p>
                <p>What made this work wasn&apos;t a single campaign. It was the infrastructure built underneath it: a <strong>brand identity that felt distinct from the Jones Group parent</strong>, a content flywheel that maintained consistent output without creative burnout, a video strategy that performed at the format level LinkedIn rewards, and a community engagement model that turned followers into active participants.</p>
                <p>From launch to 17,000+ followers in under one year. Making it <strong>one of the Jones Group&apos;s most visible and engaged brand properties</strong> — in a fraction of the time any of its other brands took to reach comparable scale.</p>
              </div>

              <div className="outcome__right animate-fadeup delay-2">
                <div className="outcome__metrics">
                  <div className="metric-row">
                    <div className="metric-row__num">17K+</div>
                    <div className="metric-row__label">Organic LinkedIn Followers</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">&lt;1yr</div>
                    <div className="metric-row__label">Time from Zero to Scale</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">0₹</div>
                    <div className="metric-row__label">Paid Advertising Spend</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">Full</div>
                    <div className="metric-row__label">Brand Built from Scratch</div>
                  </div>
                </div>

                <div className="outcome__links-label">Verify the work</div>
                <div className="outcome__links">
                  <a className="outcome-link" href="https://in.linkedin.com/company/jones-recruitzo" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Jones RecruitZo LinkedIn</span>
                    <span className="outcome-link__url">in.linkedin.com/company/jones-recruitzo</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link" href="https://www.jonesrecruitzo.com" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Jones RecruitZo Website</span>
                    <span className="outcome-link__url">jonesrecruitzo.com</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 03 JONES ASSET MANAGEMENT ── */}
        <section className="outcome outcome--cream" id="jam" aria-label="Jones Asset Management result">
          <div className="outcome__inner">
            <div className="outcome__label" data-num="03">Jones Asset Management · Organic Lead Growth + AI Pipeline</div>
            <div className="outcome__hero animate-fadeup">3×</div>
            <p className="outcome__hero-context animate-fadeup delay-1">New daily leads — tripled through purely organic content strategy, with zero paid advertising spend. AI pipelines built simultaneously reduced creative turnaround by 60%.</p>

            <div className="outcome__body">
              <div className="outcome__story animate-fadeup delay-1">
                <div className="outcome__story-label">Before &amp; After</div>
                <div className="outcome__before-after">
                  <div className="ba-cell ba-cell--before">
                    <div className="ba-cell__label">Before</div>
                    <p className="ba-cell__text">Organic growth was minimal. Content production was slow and heavily team-dependent. No AI workflows. High turnaround times.</p>
                  </div>
                  <div className="ba-cell ba-cell--after">
                    <div className="ba-cell__label">After</div>
                    <p className="ba-cell__text">300% growth new daily leads. 2x organic visitors to website. AI pipelines cut creative TAT by 60% and boosted SEO team productivity by 50%.</p>
                  </div>
                </div>
                <p>The lead growth at Jones Asset Management was achieved through a single-minded focus on the right message reaching the right audience — <strong>no paid amplification, no retargeting, no ad budget</strong>. Just sharp brand positioning, the right content formats for the platform, and a publishing rhythm that built compounding authority over time.</p>
                <p>Running simultaneously, AI content generation pipelines were introduced into the creative process — not to replace judgment, but to <strong>multiply the team&apos;s output without multiplying headcount</strong>. The result was a 60% reduction in social media content turnaround and a 50% increase in SEO team productivity.</p>

                {/* AI efficiency panel */}
                <div className="ai-panel animate-fadeup" id="aiBarChart">
                  <div className="ai-donut">
                    <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16"/>
                      <circle cx="70" cy="70" r="52" fill="none" stroke="#c0432a" strokeWidth="16"
                        strokeDasharray="196 130" strokeDashoffset="82" strokeLinecap="round"/>
                    </svg>
                    <div className="ai-donut__label">
                      <div className="ai-donut__num">60%</div>
                      <div className="ai-donut__text">TAT<br />Reduction</div>
                    </div>
                  </div>
                  <div className="ai-bars">
                    <div className="ai-bar-item">
                      <div className="ai-bar-label">Creative Content TAT Reduction</div>
                      <div className="ai-bar-track"><div className="ai-bar-fill" data-width="60" style={{ background: 'linear-gradient(90deg,var(--accent),#e07060)' }}><span className="ai-bar-val">−60%</span></div></div>
                    </div>
                    <div className="ai-bar-item">
                      <div className="ai-bar-label">SEO Team Productivity Gain</div>
                      <div className="ai-bar-track"><div className="ai-bar-fill" data-width="50" style={{ background: 'linear-gradient(90deg,var(--teal),#2a9b8a)' }}><span className="ai-bar-val">+50%</span></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="outcome__right animate-fadeup delay-2">
                <div className="outcome__metrics">
                  <div className="metric-row">
                    <div className="metric-row__num">3×</div>
                    <div className="metric-row__label">New Daily Leads</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">2x</div>
                    <div className="metric-row__label">Organic visitors</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">60%↓</div>
                    <div className="metric-row__label">Creative TAT via AI</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">50%↑</div>
                    <div className="metric-row__label">SEO Team Productivity</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">0₹</div>
                    <div className="metric-row__label">Paid Advertising Spend</div>
                  </div>
                </div>

                <div className="outcome__links-label">Verify the work</div>
                <div className="outcome__links">
                  <a className="outcome-link" href="https://jonesasset.com" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Jones Asset Management</span>
                    <span className="outcome-link__url">jonesasset.com</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link" href="https://www.instagram.com/jonesasset/" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Jones Asset Instagram</span>
                    <span className="outcome-link__url">instagram.com/jonesasset</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 04 JONES ELITE LOGISTICS ── */}
        <section className="outcome outcome--light" id="jel" aria-label="Jones Elite Logistics result">
          <div className="outcome__inner">
            <div className="outcome__label" data-num="04">Jones Elite Logistics · SEO &amp; Content Growth</div>
            <div className="outcome__hero animate-fadeup">87%</div>
            <p className="outcome__hero-context animate-fadeup delay-1">Growth in new first-time organic visitors — sustained over 10 months, with blog content driving 85%+ of all organic acquisition and a guides channel scaling 6.9× from near-zero.</p>

            <div className="outcome__body">
              <div className="outcome__story animate-fadeup delay-1">
                <div className="outcome__story-label">Before &amp; After</div>
                <div className="outcome__before-after">
                  <div className="ba-cell ba-cell--before">
                    <div className="ba-cell__label">Before</div>
                    <p className="ba-cell__text">The site was invisible in its industry. No distinction between B2B and B2C audiences. No SEO-driven content strategy. No topic authority.</p>
                  </div>
                  <div className="ba-cell ba-cell--after">
                    <div className="ba-cell__label">After</div>
                    <p className="ba-cell__text">87% new visitor growth. Blog consistently 85%+ of all organic traffic. Guides channel grew 6.9× — from 3% to 12.7% share — building a second organic acquisition engine alongside the blog.</p>
                  </div>
                </div>
                <p>Jones Elite Logistics needed to speak to two entirely different audiences — B2B clients with complex logistics needs, and B2C customers with different language, different concerns, and different decision timelines. The repositioning meant <strong>building two distinct content strategies under one brand</strong>, with separate messaging, separate audience targeting, and separate content architecture.</p>
                <p>The SEO-first content strategy built topic authority from the ground up. Blog content became the primary driver of organic discovery — <strong>consistently accounting for 85%+ of all organic traffic</strong> throughout the 10-month period. But the more significant story is what happened alongside it: a guides channel, starting from near-zero in March, compounded month over month to reach 12.7% of total organic traffic by December — a 6.9× increase in under a year.</p>
                <p>The data shows the characteristic signature of content SEO done well: <strong>slow compounding in H1, accelerating returns in H2</strong>, with October (+52%), November (+61%), and December — against the seasonal grain — holding firm on guides growth. Not a spike. A new baseline.</p>

                {/* Chart.js charts */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                  <div className="chart-wrap" style={{ background: 'var(--white)', border: '1px solid var(--rule)', padding: '20px 20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <div className="chart-title" style={{ marginBottom: 0 }}>All Channels</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>Total new visitors vs. blog vs. guides</div>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--mid)' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#c0432a', flexShrink: 0 }}></span>Total organic</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--mid)' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#2a7a50', flexShrink: 0 }}></span>Blog</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--mid)' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#3a6fa8', flexShrink: 0 }}></span>Guides</span>
                    </div>
                    <div style={{ position: 'relative', height: '220px' }}>
                      <canvas id="jelMainChart"></canvas>
                    </div>
                  </div>

                  <div className="chart-wrap" style={{ background: 'var(--white)', border: '1px solid var(--rule)', padding: '20px 20px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <div className="chart-title" style={{ marginBottom: 0 }}>Channel Share</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>How the mix shifted</div>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--mid)' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#2a7a50', flexShrink: 0 }}></span>Blog</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--mid)' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#3a6fa8', flexShrink: 0 }}></span>Guides</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--mid)' }}><span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: '#b0aa9e', flexShrink: 0 }}></span>Other</span>
                    </div>
                    <div style={{ position: 'relative', height: '220px' }}>
                      <canvas id="jelShareChart"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              <div className="outcome__right animate-fadeup delay-2">
                <div className="outcome__metrics">
                  <div className="metric-row">
                    <div className="metric-row__num">87%</div>
                    <div className="metric-row__label">New Visitor Growth</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">6.9×</div>
                    <div className="metric-row__label">Guides Channel Scale-Up</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">85%+</div>
                    <div className="metric-row__label">Blog as % of Organic Traffic</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">10mo</div>
                    <div className="metric-row__label">Sustained Performance Period</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">3%→12.7%</div>
                    <div className="metric-row__label">Guides Share Gained</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">B2B+B2C</div>
                    <div className="metric-row__label">Dual Vertical Repositioning</div>
                  </div>
                </div>

                <div className="outcome__links-label">Verify the work</div>
                <div className="outcome__links">
                  <a className="outcome-link" href="https://www.joneselitelogistics.com" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Jones Elite Logistics Website</span>
                    <span className="outcome-link__url">joneselitelogistics.com</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 05 KARLE INFRA ── */}
        <section className="outcome outcome--cream" id="karle" aria-label="Karle Infra result">
          <div className="outcome__inner">
            <div className="outcome__label" data-num="05">Karle Infra · Social &amp; Brand Growth</div>
            <div className="outcome__hero animate-fadeup">60%</div>
            <p className="outcome__hero-context animate-fadeup delay-1">LinkedIn follower growth — alongside 2× engagement, 21% Instagram growth, and 30–40% higher B2B event participation.</p>

            <div className="outcome__body">
              <div className="outcome__story animate-fadeup delay-1">
                <div className="outcome__story-label">Before &amp; After</div>
                <div className="outcome__before-after">
                  <div className="ba-cell ba-cell--before">
                    <div className="ba-cell__label">Before</div>
                    <p className="ba-cell__text" style={{ color: 'rgba(0,0,0,0.9)' }}>Inconsistent social presence for one of Bangalore&apos;s most recognised developers. Low engagement. Fragmented content themes. Events not translating to digital impact.</p>
                  </div>
                  <div className="ba-cell ba-cell--after">
                    <div className="ba-cell__label">After</div>
                    <p className="ba-cell__text" style={{ color: 'rgba(0,0,0,0.9)' }}>60% LinkedIn growth. 2× engagement. 21% Instagram growth. 30–40% higher B2B event participation. 35% reduction in content workflow turnaround.</p>
                  </div>
                </div>
                <p>Karle Infra had the brand equity but not the digital presence to match it. As primary content strategist and creative lead, the work covered every channel and touchpoint — <strong>LinkedIn, Instagram, Google Ads, events, newsletters, quarterly reports, and corporate presentations</strong>.</p>
                <p>The Tenant Activation campaigns were a particular differentiator: offline community engagement converted into measurable digital following by bringing the Karle Town Centre community into the digital space. <strong>Offline presence becoming online proof.</strong></p>

                <div style={{ marginTop: '24px', background: 'var(--navy)', padding: '24px' }}>
                  <div className="chart-title" style={{ color: 'rgba(255,255,255,0.8)' }}>Social &amp; Marketing Growth (Nov 2023 – Jul 2024)</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2px', background: 'rgba(255,255,255,0.06)' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px 12px', textAlign: 'center' }}>
                      <div style={{ width: '48px', height: '80px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 12px', display: 'flex', alignItems: 'flex-end' }}>
                        <div className="ai-bar-fill" data-width-h="48" style={{ width: '100%', height: '48px', background: 'rgba(255,255,255,0.55)' }}></div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>+60%</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>LinkedIn Followers</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px 12px', textAlign: 'center' }}>
                      <div style={{ width: '48px', height: '80px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 12px', display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ width: '100%', height: '80px', background: 'var(--teal)' }}></div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>2×</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>LinkedIn Engagement</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px 12px', textAlign: 'center' }}>
                      <div style={{ width: '48px', height: '80px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 12px', display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ width: '100%', height: '17px', background: 'var(--gold)' }}></div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>+21%</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Instagram Followers</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px 12px', textAlign: 'center' }}>
                      <div style={{ width: '48px', height: '80px', background: 'rgba(255,255,255,0.06)', margin: '0 auto 12px', display: 'flex', alignItems: 'flex-end' }}>
                        <div style={{ width: '100%', height: '28px', background: 'var(--accent)' }}></div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>+35%</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Event Participation</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="outcome__right animate-fadeup delay-2">
                <div className="outcome__metrics">
                  <div className="metric-row">
                    <div className="metric-row__num">60%</div>
                    <div className="metric-row__label" style={{ color: 'rgba(0,0,0,0.9)' }}>LinkedIn Follower Growth</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">2×</div>
                    <div className="metric-row__label" style={{ color: 'rgba(0,0,0,0.9)' }}>LinkedIn Engagement Growth</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">21%</div>
                    <div className="metric-row__label" style={{ color: 'rgba(0,0,0,0.9)' }}>Instagram Channel Growth</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">30–40%</div>
                    <div className="metric-row__label" style={{ color: 'rgba(0,0,0,0.9)' }}>Higher B2B Event Participation</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num">35%↓</div>
                    <div className="metric-row__label" style={{ color: 'rgba(0,0,0,0.9)' }}>Content Workflow Turnaround</div>
                  </div>
                </div>

                <div className="outcome__links-label">Verify the work</div>
                <div className="outcome__links">
                  <a className="outcome-link" href="https://in.linkedin.com/company/karle-infra-pvt-ltd" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Karle Infra LinkedIn</span>
                    <span className="outcome-link__url">linkedin.com/company/karle-infra-pvt-ltd</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link" href="https://www.karletowncentre.com/" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Karle Town Centre</span>
                    <span className="outcome-link__url">karletowncentre.com</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link" href="https://www.instagram.com/_karletowncentre_/?hl=en" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Karle Town Centre Instagram</span>
                    <span className="outcome-link__url">instagram.com/_karletowncentre_</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── 06 CHAITANYA INDIA ── */}
        <section className="outcome outcome--light" id="chaitanya" aria-label="Chaitanya India result">
          <div className="outcome__inner">
            <div className="outcome__label" data-num="06">Chaitanya India Fin Credit · Brand Built from Zero</div>
            <div className="outcome__hero animate-fadeup" style={{ fontSize: 'clamp(52px,9vw,112px)', letterSpacing: '-2px' }}>Still Live</div>
            <p className="outcome__hero-context animate-fadeup delay-1">The strategy and communications infrastructure built in 2019 remains in active use today — years after the engagement ended. That is the measure.</p>

            <div className="outcome__body">
              <div className="outcome__story animate-fadeup delay-1">
                <div className="outcome__story-label">Before &amp; After</div>
                <div className="outcome__before-after">
                  <div className="ba-cell ba-cell--before">
                    <div className="ba-cell__label">Before</div>
                    <p className="ba-cell__text">The founders cared deeply about their customers and the communities they served. Nobody outside the organisation knew. Zero digital presence. Zero communication infrastructure.</p>
                  </div>
                  <div className="ba-cell ba-cell--after">
                    <div className="ba-cell__label">After</div>
                    <p className="ba-cell__text">Complete digital brand, social presence, website, internal communications, town halls, annual report — all built from scratch. Employees reconnected. Customers trusted. Investors understood the mission.</p>
                  </div>
                </div>
                <p>Chaitanya India Fin Credit is an RBI and SEBI-regulated NBFC operating in India&apos;s most economically marginalised communities. The founders had a genuine conviction — that access to credit at fair terms is a form of dignity — but no channel to make that conviction visible to the world.</p>
                <p>Built the entire Content &amp; Communications department from zero as the company&apos;s first digital hire. <strong>Every process, every channel, every system</strong> established from scratch. The corporate website redesigned from the ground up. Internal town halls created for the first time, connecting leadership with field staff across the country. The Annual Report prepared as a two-person team — going to RBI, SEBI, shareholders, and partners.</p>

                <div className="story-excerpt">
                  <p className="story-excerpt__text">&ldquo;They cared deeply. My job was to make that care visible — to their customers, their employees, their investors, and the communities whose lives were changing quietly, in places the world wasn&apos;t looking.&rdquo;</p>
                  <p className="story-excerpt__attr">From the full Chaitanya story on the About page</p>
                </div>
              </div>

              <div className="outcome__right animate-fadeup delay-2">
                <div className="outcome__metrics">
                  <div className="metric-row">
                    <div className="metric-row__num" style={{ fontSize: 'clamp(16px,1.8vw,22px)', letterSpacing: 0 }}>From Zero</div>
                    <div className="metric-row__label">Full Digital Brand &amp; Infrastructure</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num" style={{ fontSize: 'clamp(16px,1.8vw,22px)', letterSpacing: 0 }}>Still Live</div>
                    <div className="metric-row__label">Strategy in Active Use Today</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num" style={{ fontSize: 'clamp(16px,1.8vw,22px)', letterSpacing: 0 }}>All Teams</div>
                    <div className="metric-row__label">Every Process Built from Scratch</div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-row__num" style={{ fontSize: 'clamp(16px,1.8vw,22px)', letterSpacing: 0 }}>RBI + SEBI</div>
                    <div className="metric-row__label">Regulated Environment, Compliant Output</div>
                  </div>
                </div>

                <div className="outcome__links-label">Verify the work &amp; read the story</div>
                <div className="outcome__links">
                  <a className="outcome-link" href="https://www.chaitanyaindia.in" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Chaitanya India Website</span>
                    <span className="outcome-link__url">chaitanyaindia.in</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link" href="https://www.linkedin.com/company/chaitanya-india-fin-credit/" target="_blank" rel="noopener">
                    <span className="outcome-link__label">Chaitanya India LinkedIn</span>
                    <span className="outcome-link__url">linkedin.com/company/chaitanya-india-fin-credit</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                  <a className="outcome-link outcome-link--story" href="/about#chaitanya-story">
                    <span className="outcome-link__label">Read the full story →</span>
                    <span className="outcome-link__url">about</span>
                    <span className="outcome-link__arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── BOTTOM CTA ── */}
        <div className="port-footer-cta">
          <p>Want the complete work history and responsibilities behind these results?</p>
          <a href="/work">View the full Work History page →</a>
        </div>

    </PageShell>
  );
}
