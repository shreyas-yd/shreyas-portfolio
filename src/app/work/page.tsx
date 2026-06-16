import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import CtaStrip from '@/components/CtaStrip';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work History — Shreyas Y D | 10+ Years Digital Marketing',
  description:
    'Full professional record of Shreyas YD — 10+ years across fintech, real estate, logistics, recruitment, technology, and media. Verified results, detailed case notes, and complete career timeline.',
  keywords:
    'Shreyas YD work history, digital marketing career, content strategy career, SEO career, Jones Group, Karle Infra, Chaitanya India, Prime Focus, Voot, Crunchbase, Bengaluru',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <PageShell active="work">

        {/* ── CV HEADER ── */}
        <header className="page-header">
          <div className="page-header__inner">
            <div>
              <div className="page-header__eyebrow">Complete Work History &amp; Professional Record</div>
              <h1>Shreyas <em>Y D</em></h1>
              <p className="cv-header__role">Digital Marketing &amp; Analytics Leader &nbsp;·&nbsp; Marketing Technology &nbsp;·&nbsp; AI-Powered Growth Systems &nbsp;·&nbsp; 10+ Years &nbsp;·&nbsp; Bengaluru, India</p>
              <div className="cv-header__contact">
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <a href={site.phoneHref}>{site.phone}</a>
                <a href={site.linkedin} target="_blank" rel="noopener">Linkedin</a>
              </div>
            </div>
            <div className="cv-header__download">
              <a className="btn btn--primary" href={site.cv} target="_blank" rel="noopener">Download Full CV ↓</a>
              <a className="btn btn--ghost-white" href="/results">See the Impact →</a>
            </div>
          </div>
        </header>

        {/* ── PROFESSIONAL SUMMARY ── */}
        <div className="cv-summary">
          <div className="cv-summary__inner animate-fadeup">
            <div className="cv-section-label">Professional Profile</div>
            <p className="cv-summary__text">I&apos;m a <strong>digital-first marketing and content leader</strong> with 10+ years of experience, including 8 years deeply focused on digital. My work sits at the intersection of brand, content, and growth — building ecosystems that not only attract attention but sustain it. I operate across the full stack: from shaping strategy to executing it hands-on, running performance campaigns, defining creative direction, interpreting analytics, and leading teams. My experience spans <strong>fintech, real estate, logistics, recruitment, technology services, and media</strong>, giving me the ability to adapt quickly across audiences and business models. At the core, I care about building work that lasts — content that resonates, systems that scale, and engines that compound over time.</p>
          </div>
        </div>

        {/* ── IMPACT STRIP ── */}
        <div className="impact-strip" aria-label="Career impact metrics">
          <div className="impact-strip__inner">
            <div className="impact-item animate-fadeup">
              <div className="impact-item__num">87%</div>
              <div className="impact-item__label">Visitor Growth via SEO</div>
            </div>
            <div className="impact-item animate-fadeup delay-1">
              <div className="impact-item__num">17K+</div>
              <div className="impact-item__label">Community Built from Zero</div>
            </div>
            <div className="impact-item animate-fadeup delay-2">
              <div className="impact-item__num">3×</div>
              <div className="impact-item__label">Daily Leads, Zero Ad Spend</div>
            </div>
            <div className="impact-item animate-fadeup delay-3">
              <div className="impact-item__num">60%↓</div>
              <div className="impact-item__label">Creative TAT via AI</div>
            </div>
            <div className="impact-item animate-fadeup delay-4">
              <div className="impact-item__num">50%↑</div>
              <div className="impact-item__label">SEO Team Productivity</div>
            </div>
            <div className="impact-item animate-fadeup delay-5">
              <div className="impact-item__num">4</div>
              <div className="impact-item__label">Business Units, Jones Group</div>
            </div>
            <div className="impact-item animate-fadeup delay-6">
              <div className="impact-item__num">85%+</div>
              <div className="impact-item__label">Organic Blog Traffic Share</div>
            </div>
            <div className="impact-item animate-fadeup delay-6">
              <div className="impact-item__num">35%↓</div>
              <div className="impact-item__label">Workflow Turnaround, Karle</div>
            </div>
          </div>
        </div>

        {/* ── CORE COMPETENCIES ── */}
        <div className="cv-competencies">
          <div className="cv-competencies__inner animate-fadeup">
            <div className="cv-section-label">Core Competencies</div>
            <div className="competencies-grid">
              <div className="competency-row">
                <div className="competency-row__cat">Digital Marketing</div>
                <div className="competency-row__skills">SEO, SEM, Performance Marketing, Google Ads, Social Media Strategy, Lead Generation, Audience Targeting, Campaign Optimisation, ROAS &amp; CPL Tracking, Remarketing Journey Design</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Content Leadership</div>
                <div className="competency-row__skills">Content Strategy, Content Flywheel Design, Editorial Planning, Content Operations, Brand Messaging, Multi-Format Content Production, Thought Leadership, Content Repurposing, Sales Enablement Assets</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Analytics &amp; Reporting</div>
                <div className="competency-row__skills">Google Analytics (GA4) · GA4 API · Google Ads API · Search Console API · Google Business Profile (GBP) API · OAuth 2.0 · GTM Conversion Tracking Architecture · Call &amp; Form Tracking · Cross-channel Dashboard Design · Looker Studio · Funnel Optimisation · KPI Frameworks · Automated Reporting · Traffic Analysis · A/B Testing</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">SEO &amp; Search Visibility</div>
                <div className="competency-row__skills">On-page &amp; Off-page SEO, SERP Analysis, Keyword Strategy, Backlink Audits, Content Audits, AEO (Answer Engine Optimisation), GEO (Generative Engine Optimisation), AI Search Visibility</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Social Media &amp; Community</div>
                <div className="competency-row__skills">Multi-platform Strategy (LinkedIn, Instagram, YouTube, Pinterest, X), Community Building &amp; Management, Content Calendars, Platform Algorithm Optimisation, Influencer Partnership Management, UGC Campaigns, Online Reputation Management</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Video &amp; Visual Content</div>
                <div className="competency-row__skills">Video Content Strategy, Concept Development, Scriptwriting, Storyboarding, Shot Planning, Production Scheduling, Short-form &amp; Long-form Video, Photography Direction, Event Content Capture</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Brand Strategy</div>
                <div className="competency-row__skills">Brand Positioning, Integrated Campaigns, Creative Brief Writing, Messaging Frameworks, Market Research, Consumer Insights, Trend Analysis, Competitive Benchmarking, Tone-of-Voice Development, Brand Calendar Management, Regulatory Compliance in Marketing</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">AI &amp; Marketing Technology</div>
                <div className="competency-row__skills">Prompt Engineering · AI-Assisted Development (Claude as co-builder) · AI Content Pipeline Design · Human-in-the-Loop Editorial Systems · AEO/GEO-Optimised Content · Editorial Quality Control · Content Repurposing Systems · Serverless App Development (AI-assisted) · OpenAI Sora · Google Veo II</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Team &amp; Project Leadership</div>
                <div className="competency-row__skills">Cross-functional Collaboration, Stakeholder Management, Agency &amp; Vendor Management, Workflow Standardisation, Hiring &amp; Onboarding, Upskilling, Resource Allocation, Event Content Planning &amp; Distribution</div>
              </div>
              <div className="competency-row">
                <div className="competency-row__cat">Tools &amp; Platforms</div>
                <div className="competency-row__skills">Google Analytics (GA4) · GTM · Google Ads · Search Console · GA4 API · Google Ads API · Search Console API · Google Business Profile API · OAuth 2.0 · Looker Studio · SEMrush · Ahrefs · Meta Ads · LinkedIn Campaign Manager · WordPress · Contentful · Mailchimp · HubSpot · Hootsuite · Zoho CRM · Adobe Photoshop · DaVinci Resolve · Canva · Notion · Trello · JIRA · ChatGPT · Claude · Gemini · OpenAI Sora · Google Veo II · Microsoft Office Suite</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TIMELINE NAV ── */}
        <div className="timeline-nav" aria-label="Jump to role">
          <div className="timeline-nav__inner">
            <div className="timeline-nav__label">Jump to role</div>
            <div className="tl-track">
              <a className="tl-stop" href="#consulting-analytics" aria-label="Marketing Analytics Consultant">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Mar 2026 – Present</div>
                <div className="tl-stop__role">Analytics Consultant</div>
                <div className="tl-stop__company">Independent</div>
              </a>
              <a className="tl-stop" href="#jones" aria-label="Jones Group">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Aug 2024 – Mar 2026</div>
                <div className="tl-stop__role">SM &amp; Content Manager</div>
                <div className="tl-stop__company">Jones Group</div>
              </a>
              <a className="tl-stop" href="#karle" aria-label="Karle Infra">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Nov 2023 – Jul 2024</div>
                <div className="tl-stop__role">Marketing Manager</div>
                <div className="tl-stop__company">Karle Infra</div>
              </a>
              <a className="tl-stop" href="#consultant" aria-label="Consultant">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Aug 2021 – Oct 2023</div>
                <div className="tl-stop__role">Brand Consultant</div>
                <div className="tl-stop__company">Self-Employed</div>
              </a>
              <a className="tl-stop" href="#trupp" aria-label="Trupp Global">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Sep 2020 – Aug 2021</div>
                <div className="tl-stop__role">Web Search Analyst</div>
                <div className="tl-stop__company">Trupp Global</div>
              </a>
              <a className="tl-stop" href="#chaitanya" aria-label="Chaitanya India">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Feb 2019 – Mar 2020</div>
                <div className="tl-stop__role">Content Manager</div>
                <div className="tl-stop__company">Chaitanya India</div>
              </a>
              <a className="tl-stop" href="#prime" aria-label="Prime Focus">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Aug 2017 – Jan 2019</div>
                <div className="tl-stop__role">Content Writer</div>
                <div className="tl-stop__company">Prime Focus</div>
              </a>
              <a className="tl-stop" href="#asst-director" aria-label="Assistant Director">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Sep 2016 – May 2017</div>
                <div className="tl-stop__role">Asst. Director</div>
                <div className="tl-stop__company">Feature Film</div>
              </a>
              <a className="tl-stop" href="#filmmaker" aria-label="Filmmaker">
                <div className="tl-stop__dot"><div className="tl-stop__dot-inner"></div></div>
                <div className="tl-stop__date">Jan 2014 – Jul 2016</div>
                <div className="tl-stop__role">Freelance Filmmaker</div>
                <div className="tl-stop__company">Self-Employed</div>
              </a>
            </div>
          </div>
        </div>

        {/* ── PROFESSIONAL EXPERIENCE ── */}
        <div className="cv-experience">
          <div className="cv-experience-label animate-fadeup">Professional Experience</div>

          {/* 01 CONSULTING */}
          <div className="role-block animate-fadeup" id="consulting-analytics">
            <div className="role-block__header">
              <div className="role-block__num">01<span>01</span><div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', color: 'var(--teal)', marginTop: '8px' }}>Current</div></div>
              <div className="role-block__meta">
                <div className="role-block__title">Marketing Analytics &amp; Growth Consultant</div>
                <div className="role-block__company">Independent</div>
                <div className="role-block__dates">March 2026 – Present &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Independent consulting engagement for a multi-location healthcare brand — building their digital marketing presence, measurement infrastructure, and AI-assisted operational systems from the ground up. This engagement is not listed on public profiles by choice; the skills built here directly inform current positioning.</p>
              </div>
              <div className="role-block__links"></div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements</span>
                    <span className="accordion__count">(6 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Built the entire website on AWS architecture from scratch using AI tools — set up <strong>automated email notifications for each new booking</strong>, and enabled content writers to update daily and weekly blogs via Contentful</li>
                      <li>Built a <strong>unified cross-channel analytics dashboard</strong> integrating Google Ads, GA4, Google Search Console, and Google Business Profile APIs — replacing manual reporting with automated, real-time performance visibility across 8 clinic locations</li>
                      <li>Architected and deployed <strong>Google Tag Manager-based conversion tracking</strong> (call tracking + form submissions) with zero website code changes — enabling accurate attribution for paid and organic campaigns for the first time</li>
                      <li>Conducted a <strong>16-month cross-channel performance audit</strong> identifying critical gaps in organic CTR (0.44% vs 3–5% benchmark) and competitor impression share, directly informing campaign prioritisation</li>
                      <li>Integrated <strong>Google Business Profile API via OAuth 2.0</strong> to power a reviews and local SEO dashboard across all active locations</li>
                      <li>Used <strong>AI-assisted development (Claude as co-builder)</strong> to architect and build a serverless staff scheduling application and multi-source analytics dashboard — translating complex business requirements into production-ready systems without a traditional engineering team</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(8 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>End-to-end API integration: <strong>Google Ads API, GA4 API, Search Console API, GBP API</strong> — unified into a single data layer</li>
                      <li>GTM conversion tracking architecture: <strong>call tracking, form tracking</strong>, no website code changes required</li>
                      <li><strong>OAuth 2.0 authentication</strong> implementation for Google Business Profile API</li>
                      <li>Cross-channel performance auditing and gap analysis across <strong>16 months of historical data</strong></li>
                      <li>AI-assisted development of serverless applications using <strong>Claude as a co-builder and engineering partner</strong></li>
                      <li>Dashboard design in <strong>Looker Studio</strong> with real-time data across all 8 locations</li>
                      <li>Strategy recommendations based on audit findings — <strong>organic CTR, competitor impression share, local SEO</strong></li>
                      <li>AI-assisted content development pipeline to create and publish content across all channels including <strong>Social Media, SEO, Internal Documents, Instore Media</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 JONES GROUP */}
          <div className="role-block animate-fadeup" id="jones">
            <div className="role-block__header">
              <div className="role-block__num">02<span>02</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Social Media &amp; Content Manager</div>
                <div className="role-block__company"><a href="https://jonesasset.com" target="_blank" rel="noopener">Jones Asset Management (Jones Group)</a></div>
                <div className="role-block__dates">August 2024 – March 2026 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Responsible for digital marketing strategy across four business units of the Jones Group simultaneously — Jones Asset Management, Jones RecruitZo, and Jones Elite Logistics — with all organic growth achieved without paid advertising spend.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://jonesasset.com" target="_blank" rel="noopener">Jones Asset Management</a>
                <a className="role-link" href="https://in.linkedin.com/company/jones-recruitzo" target="_blank" rel="noopener">Jones RecruitZo LinkedIn</a>
                <a className="role-link" href="https://www.jonesrecruitzo.com" target="_blank" rel="noopener">Jones RecruitZo Website</a>
                <a className="role-link" href="https://www.joneselitelogistics.com" target="_blank" rel="noopener">Jones Elite Logistics</a>
                <a className="role-link" href="https://www.instagram.com/jonesasset/" target="_blank" rel="noopener">Jones Asset Instagram</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements</span>
                    <span className="accordion__count">(5 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <span className="sub-brand-label">Jones Asset Management · Wealth &amp; Investments</span>
                    <ul className="cv-bullets">
                      <li>Designed and executed digital marketing across <strong>four business units simultaneously</strong> — growing overall website traffic by 2× and organic leads by 300%, entirely without paid advertising</li>
                      <li>Tripled new daily leads for Jones Asset Management through purely organic brand strategy — <strong>sharp audience targeting, the right content format, and consistent publishing rhythm</strong></li>
                      <li>Introduced AI content generation pipelines that <strong>reduced social media creative turnaround time by 60%</strong> while maintaining quality standards and increased SEO team productivity by 50%</li>
                    </ul>
                    <span className="sub-brand-label">Jones RecruitZo · Recruitment Platform</span>
                    <ul className="cv-bullets">
                      <li>Built Jones RecruitZo&apos;s LinkedIn presence from <strong>zero to 17,000+ organic followers in under one year</strong> — developing the full content engine, video strategy, community engagement model, and editorial calendar from scratch</li>
                    </ul>
                    <span className="sub-brand-label">Jones Elite Logistics · B2B &amp; B2C Logistics</span>
                    <ul className="cv-bullets">
                      <li>Repositioned Jones Elite Logistics across both B2B and B2C verticals; drove <strong>87% growth in new website visitors</strong> with blog content consistently accounting for 85%+ of all organic traffic, over a sustained 10-month period through AI-powered SEO content pipelines</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(18 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Led a team of writers and social media executives to plan, create, and execute <strong>digital campaigns, content calendars, SEO plans, and paid marketing initiatives</strong> across all brands</li>
                      <li>Developed and continuously optimised SEO-driven content — managing keyword research, SERP analysis, on-page optimisation, and off-page improvements; applied <strong>AEO (Answer Engine Optimisation) and AI search visibility principles</strong> to ensure content was discoverable across both traditional and generative search platforms</li>
                      <li>Owned the complete social media pipeline end-to-end: strategised new content ideas, built brand content calendars aligned with <strong>seasonal trends, marketing campaigns, and product launches</strong>, coordinated with designers and external stakeholders, published and scheduled across all channels, and reviewed platform algorithm performance regularly to rework and optimise for organic growth</li>
                      <li>Oversaw <strong>website content governance, CRO enhancements, and landing page optimisation</strong> to improve lead quality, reduce bounce rates, and increase marketing qualification accuracy across business units</li>
                      <li>Wrote and reviewed <strong>creative briefs</strong> for campaigns and content initiatives — collaborating with creative teams to ensure all output was on-brief, on-brand, and aligned with audience needs</li>
                      <li>Supported new product and service development through ongoing <strong>market research, consumer behaviour analysis, competitive benchmarking, and trend monitoring</strong> — providing insight-driven positioning and messaging recommendations to leadership</li>
                      <li>Collaborated directly with leadership to translate strategic business objectives into <strong>performance-led marketing campaigns</strong> with measurable content outcomes</li>
                      <li>Built and maintained <strong>performance dashboards and automated reporting frameworks</strong> — covering traffic, rankings, ROAS-equivalent metrics, CPL proxies, audience behaviour, funnel conversion, lead quality, and engagement — used directly in leadership decision-making</li>
                      <li>Planned and executed <strong>event-related content</strong> — creating pre-event promotional content, live event coverage, and post-event repurposed assets to maximise the reach and impact of every brand moment</li>
                      <li>Managed <strong>influencer identification, outreach coordination, and partnership execution</strong> to extend organic brand reach and build credibility through third-party voices and user-generated content</li>
                      <li>Designed <strong>remarketing content journeys</strong> to re-engage website visitors and social audiences — reducing touchpoint overlap and shortening the path to conversion</li>
                      <li>Built <strong>content repurposing systems</strong> to transform one core insight or piece of content into multiple formats across channels — maximising content value and distribution efficiency</li>
                      <li>Conducted <strong>competitor benchmarking and market intelligence analysis</strong> to identify content gaps, keyword opportunities, and campaign angles across all verticals</li>
                      <li>Researched, evaluated, and implemented <strong>new AI tools and automation workflows</strong> for content generation, reporting, and analytics — continuously improving the marketing tech stack for efficiency and output quality</li>
                      <li>Engaged with followers through comments, messages, and interactive social features to <strong>build active communities</strong> around each brand</li>
                      <li>Set clear <strong>KPIs and ownership models</strong> to improve team accountability and on-time delivery; managed workloads, priorities, and resource allocation under tight deadlines without compromising quality</li>
                      <li>Drove productivity improvements through <strong>process optimisation and workflow standardisation</strong> across the content and social teams</li>
                      <li>Interviewed, evaluated, and onboarded new team members; identified <strong>skill gaps and implemented upskilling initiatives</strong> to strengthen team capability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 KARLE INFRA */}
          <div className="role-block animate-fadeup" id="karle">
            <div className="role-block__header">
              <div className="role-block__num">03<span>03</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Marketing Manager</div>
                <div className="role-block__company"><a href="https://karleinfra.com" target="_blank" rel="noopener">Karle Infra (Karle Group)</a></div>
                <div className="role-block__dates">November 2023 – July 2024 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Primary content strategist and creative lead for Karle Infra — one of Bangalore&apos;s most recognised real estate and mixed-use development groups — owning all digital campaigns, thought leadership, event marketing, and brand content.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://in.linkedin.com/company/karle-infra-pvt-ltd" target="_blank" rel="noopener">Karle Infra LinkedIn</a>
                <a className="role-link" href="https://www.karletowncentre.com/" target="_blank" rel="noopener">Karle Town Centre</a>
                <a className="role-link" href="https://www.instagram.com/_karletowncentre_/?hl=en" target="_blank" rel="noopener">Town Centre Instagram</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements</span>
                    <span className="accordion__count">(4 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Increased Karle Infra&apos;s <strong>LinkedIn followers by 60% and doubled engagement</strong> through targeted content themes, sharper audience segmentation, and improved posting frequency</li>
                      <li>Grew the <strong>Instagram channel by 21%</strong> using analytics-driven visual storytelling and hashtag optimisation</li>
                      <li>Improved event marketing performance, generating <strong>30–40% higher participation</strong> for monthly B2B engagement events through integrated online-to-offline content campaigns</li>
                      <li>Streamlined content workflows across business units, <strong>reducing turnaround time by 35%</strong> through process standardisation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(9 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Acted as the <strong>primary content strategist and creative lead</strong> for the organisation — generating all digital content, leadership communications, and event collateral across every channel and touchpoint</li>
                      <li>Managed and maintained the <strong>brand calendar</strong> — planning and scheduling all marketing campaigns, content themes, seasonal initiatives, and events to ensure consistent, timely execution across the year</li>
                      <li>Managed end-to-end digital campaigns across <strong>LinkedIn, Instagram, and Google Ads</strong> — including creative brief development, ad copy writing, audience targeting, budget management, bid strategy, and performance tracking against KPIs</li>
                      <li>Led content production for both internal and external communications: <strong>newsletters, quarterly reports, tenant engagement materials, and corporate presentations</strong></li>
                      <li>Planned and executed <strong>online-to-offline marketing events</strong> — producing pre-event promotional content, in-event coverage, post-event recap content, and thought leadership pieces to maximise the reach of every event moment</li>
                      <li>Tracked event and campaign KPIs including <strong>engagement rates, participation counts, and satisfaction scores</strong> to continuously improve marketing performance</li>
                      <li>Coordinated with vendors, designers, and internal stakeholders to <strong>align brand identity</strong> and ensure campaign consistency and claims accuracy across all channels and materials</li>
                      <li>Conducted multiple <strong>&apos;Tenant Activation&apos; campaigns</strong> for Karle Town Centre — converting offline community presence into measurable digital following and interaction</li>
                      <li>Identified and coordinated <strong>influencer partnerships and user-generated content</strong> opportunities to extend brand reach organically</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 04 CONSULTANT */}
          <div className="role-block animate-fadeup" id="consultant">
            <div className="role-block__header">
              <div className="role-block__num">04<span>04</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Content &amp; Brand Marketing Consultant</div>
                <div className="role-block__company">Self-Employed</div>
                <div className="role-block__dates">August 2021 – October 2023 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Worked independently with B2B and B2C clients across tech, retail, and consumer services — repositioning brands, building content ecosystems, and creating digital growth strategies that delivered measurable improvements in search visibility, engagement, and lead quality.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://cloudzenix.com/" target="_blank" rel="noopener">CloudZenix</a>
                <a className="role-link" href="https://www.scrumconnect.com/" target="_blank" rel="noopener">Scrummconnect</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements &amp; Notable Client Work</span>
                    <span className="accordion__count">(5 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Repositioned multiple B2B and B2C brands across tech, retail, and consumer services — <strong>improving digital visibility and generating measurable increases</strong> in organic search traffic and audience engagement for each client</li>
                      <li>Built <strong>brand messaging systems, tone-of-voice frameworks, and content ecosystems</strong> that gave each brand a clear, distinctive identity</li>
                      <li>Enabled clients to reduce content dependency by implementing <strong>scalable content governance systems</strong> and workflow structures they could operate independently</li>
                    </ul>
                    <div className="client-block" style={{ marginTop: '16px' }}>
                      <div className="client-block__title">Bengaluru-based DevOps &amp; Services B2B Startup · US Market</div>
                      <p className="client-block__text">Revamped the full brand strategy and implemented a comprehensive content strategy. Set up processes, workflows, and tools enabling clear, credible communication with existing and potential US B2B clients.</p>
                    </div>
                    <div className="client-block">
                      <div className="client-block__title">UK-based IT Services Provider · Government Contracts</div>
                      <p className="client-block__text">Assisted a company specialising in bidding for IT contracts with the UK government to establish B2B services and enhance brand presence during expansion. Collaborated with recruitment and management teams to build employer branding and content creation pipelines for the UK B2B market.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(6 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Conducted <strong>SEO audits, content audits, and competitive analysis</strong> to build tailored digital growth strategies for each client</li>
                      <li>Developed <strong>long-form blogs, website copy, landing pages, newsletters, and campaign content</strong> optimised for search discoverability, conversion, and brand voice</li>
                      <li>Created <strong>sales enablement assets</strong> including one-pagers, explainers, and marketing collateral to support business development and client-facing communication</li>
                      <li>Built <strong>content repurposing frameworks</strong> to extend the value of each core piece of content across multiple formats, platforms, and audiences</li>
                      <li>Managed <strong>freelancers, designers, and external agencies</strong> end-to-end to deliver marketing assets on brief and on time</li>
                      <li>Provided <strong>weekly analytics-driven recommendations</strong> to improve content ROI and campaign performance for each client account</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 05 TRUPP GLOBAL */}
          <div className="role-block animate-fadeup" id="trupp">
            <div className="role-block__header">
              <div className="role-block__num">05<span>05</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Senior Web Search Analyst <span style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '0.7em' }}>(Contract)</span></div>
                <div className="role-block__company">Trupp Global Technologies</div>
                <div className="role-block__dates">September 2020 – August 2021 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Managed SEO quality and content accuracy for Crunchbase — one of the world&apos;s leading startup and venture capital data platforms — improving organic visibility and automated ranking signals across the global startup ecosystem.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://www.crunchbase.com" target="_blank" rel="noopener">Crunchbase Platform</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements</span>
                    <span className="accordion__count">(2 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Increased organic visibility for clients by improving <strong>metadata accuracy, keyword alignment, and content audit systems</strong> — resulting in measurable ranking improvements across managed profiles</li>
                      <li>Enhanced accuracy and compliance of client digital profiles, <strong>improving automated ranking signals and search discoverability</strong> at scale</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(6 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Performed daily <strong>keyword research, backlink audits, on-page optimisation, and SEO performance reporting</strong> across client accounts</li>
                      <li>Monitored ranking changes and developed specific <strong>SEO improvement recommendations</strong> for content teams to act on</li>
                      <li>Analysed analytics dashboards for <strong>trends, visibility patterns, and content opportunities</strong> to inform strategy</li>
                      <li>Maintained SEO standards and content quality for <strong>Crunchbase profiles</strong> — improving their organic visibility on Google through structured, search-optimised content</li>
                      <li>Created <strong>search-optimised, structured content</strong> and improved audience discoverability through data-focused SEO practices</li>
                      <li>Ensured consistency and compliance with <strong>brand guidelines</strong> across all managed listings and digital properties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 06 CHAITANYA */}
          <div className="role-block animate-fadeup" id="chaitanya">
            <div className="role-block__header">
              <div className="role-block__num">06<span>06</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Assistant Content Manager</div>
                <div className="role-block__company"><a href="https://www.chaitanyaindia.in" target="_blank" rel="noopener">Chaitanya India Fin Credit Pvt. Ltd.</a></div>
                <div className="role-block__dates">February 2019 – March 2020 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">First digital hire at an RBI and SEBI-regulated NBFC — responsible for building the entire Content &amp; Communications department and digital marketing infrastructure from absolute zero. The strategy and structure built during this period remains in active use today.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://www.chaitanyaindia.in" target="_blank" rel="noopener">Chaitanya India Website</a>
                <a className="role-link" href="https://www.linkedin.com/company/chaitanya-india-fin-credit/" target="_blank" rel="noopener">Chaitanya LinkedIn</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements</span>
                    <span className="accordion__count">(6 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Built and led the <strong>Content &amp; Communications department entirely from scratch</strong> — the first digital hire at the company, responsible for establishing every process, system, and channel from zero</li>
                      <li>Established the company&apos;s <strong>full social media presence and digital campaigns workflow</strong> from scratch</li>
                      <li>Developed <strong>internal stakeholder communication channels using recorded video</strong> — a first for the organisation</li>
                      <li>Created direct communication channels between the <strong>leadership team and ground staff spread across the country</strong> through live virtual town halls and structured newsletters</li>
                      <li>Redesigned the corporate website and set up <strong>content pipelines, CMS systems, and digital marketing processes</strong></li>
                      <li>Delivered the company <strong>Annual Report as a two-person team</strong> and led brand-aligned social media strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(7 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Acted as the <strong>single Point of Contact for all content and digital media requirements</strong> across HQ — touching every team and function</li>
                      <li>Built the digital marketing pipeline from scratch as the company&apos;s first digital hire, <strong>establishing the foundation for all future digital activity</strong></li>
                      <li>Drafted <strong>leadership communications, brand updates, newsletters, and investor-related material</strong> for internal and external audiences</li>
                      <li>Oversaw <strong>website content governance</strong> and managed content updates in coordination with product and design teams</li>
                      <li>Supported <strong>PR activities, internal communication campaigns, and broader branding initiatives</strong> across the organisation</li>
                      <li>Supported the <strong>HR training department</strong> with induction materials, alignment communications, and upskilling content for employees across the organisation</li>
                      <li>Supported the company secretary team with <strong>formal communications and filings for regulators including RBI and SEBI</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 07 PRIME FOCUS */}
          <div className="role-block animate-fadeup" id="prime">
            <div className="role-block__header">
              <div className="role-block__num">07<span>07</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Content Writer</div>
                <div className="role-block__company">Prime Focus Technologies &nbsp;·&nbsp; <a href="https://www.voot.com" target="_blank" rel="noopener">Voot (Viacom18)</a></div>
                <div className="role-block__dates">August 2017 – January 2019 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Lead writer for Colors Network–Kannada&apos;s non-fictional programming on Voot — Viacom18&apos;s streaming platform — converting broadcast content into search-discoverable, click-optimised digital formats for India&apos;s rapidly growing OTT audience.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://www.voot.com" target="_blank" rel="noopener">Voot Platform</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Key Achievements</span>
                    <span className="accordion__count">(2 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Served as <strong>lead writer for the &apos;Kannada Non-Fictional Shows&apos;</strong> content localisation, SEO optimisation, and digital marketing content for Colors Network – Kannada</li>
                      <li>Awarded the <strong>Excelsior Extra Punch Award</strong> for &apos;High-Quality Content Delivery at the Time of Critical Need&apos; — a company-wide recognition for performing exceptionally under pressure</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon" style={{ color: 'var(--teal)' }}>◆</span>
                    <span className="accordion__title" style={{ color: 'var(--teal)' }}>Core Responsibilities</span>
                    <span className="accordion__count">(3 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Improved <strong>video SEO performance</strong> through structured keyword optimisation, audience-focused title writing, and a deep understanding of target audience behaviour on search platforms</li>
                      <li>Wrote <strong>SEO-optimised blogs, highlight scripts, and digital content</strong> for broadcast and streaming platforms</li>
                      <li>Conducted <strong>keyword research</strong> and collaborated closely with design and production teams to ensure content was aligned with campaign objectives and platform requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 08 ASSISTANT DIRECTOR */}
          <div className="role-block animate-fadeup" id="asst-director">
            <div className="role-block__header">
              <div className="role-block__num">08<span>08</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Assistant Director</div>
                <div className="role-block__company">Feature Film Production</div>
                <div className="role-block__dates">September 2016 – May 2017 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">On-set assistant director for a feature film production in Bengaluru — managing large cast groups, leading casting operations, and contributing across pre-production and production phases. Alongside this, completed a Diploma in Film Making &amp; Direction at FFVA, Bengaluru.</p>
              </div>
              <div className="role-block__links">
                <a className="role-link" href="https://www.youtube.com/watch?v=SVVX5PnhKBA" target="_blank" rel="noopener">Film Trailer</a>
                <a className="role-link" href="https://www.instagram.com/p/BQQYuArhQqW/" target="_blank" rel="noopener">Team Announcement Post</a>
              </div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Responsibilities &amp; Contributions</span>
                    <span className="accordion__count">(4 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Directed all <strong>background action on set</strong> — managing large groups of secondary and background actors to execute the director&apos;s vision</li>
                      <li>Led the <strong>Casting Department for secondary and background actors</strong> — conducting auditions, evaluations, and selections</li>
                      <li>Key contributor to <strong>script checking, storyboarding, promotional material editing</strong>, on-set coordination, and pre-production photoshoots</li>
                      <li>Served as <strong>Assistant to the On-Set Script Supervisor</strong> and acted as liaison between the Camera Team, Set Design, Make-Up, and Costuming team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 09 FREELANCE FILMMAKER */}
          <div className="role-block animate-fadeup" id="filmmaker">
            <div className="role-block__header">
              <div className="role-block__num">09<span>09</span></div>
              <div className="role-block__meta">
                <div className="role-block__title">Freelance Filmmaker</div>
                <div className="role-block__company">Self-Employed</div>
                <div className="role-block__dates">January 2014 – July 2016 &nbsp;·&nbsp; Bengaluru, Karnataka, India</div>
                <p className="role-block__summary">Built the visual storytelling and creative production instincts that underpin content strategy and video work today — through ad film production, documentary direction, and feature film assistance.</p>
              </div>
              <div className="role-block__links"></div>
            </div>
            <div className="role-accordions">
              <div className="accordion" data-accordion="">
                <button className="accordion__trigger" aria-expanded="false">
                  <div className="accordion__trigger-left">
                    <span className="accordion__icon">◆</span>
                    <span className="accordion__title">Responsibilities &amp; Contributions</span>
                    <span className="accordion__count">(4 items)</span>
                  </div>
                  <span className="accordion__arrow">▾</span>
                </button>
                <div className="accordion__body">
                  <div className="accordion__content">
                    <ul className="cv-bullets">
                      <li>Produced and directed <strong>advertising content for startups and local markets</strong> — handling concept, scriptwriting, storyboarding, production, and delivery end-to-end</li>
                      <li>Worked as <strong>1st and 2nd Assistant Director on multiple ad film productions</strong> — supporting directors with scheduling, crew coordination, and on-set execution</li>
                      <li>Directed and edited a <strong>full documentary film for a US-based NGO</strong> — managing the project independently from brief through to final delivery</li>
                      <li>Developed strong skills in <strong>photography direction, on-set visual capture, pre-production photoshoots, and promotional material creation</strong> — forming the visual storytelling instincts that underpin social media content strategy and brand content today</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>{/* end cv-experience */}

        {/* ── EDUCATION & RECOGNITION ── */}
        <div className="cv-edu-rec">
          <div className="cv-edu-rec__inner animate-fadeup">
            <div className="cv-section-label">Education &amp; Recognition</div>
            <div>
              <div className="edu-grid" style={{ marginBottom: '32px' }}>
                <div className="edu-item">
                  <div className="edu-item__degree">Diploma in Film Making &amp; Direction</div>
                  <div className="edu-item__school">Film &amp; Fine Arts Academy (FFVA) · Bengaluru, Karnataka, India</div>
                  <div className="edu-item__year">2016 – 2017</div>
                </div>
              </div>
              <div style={{ background: 'var(--navy)', padding: '28px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '28px', flexShrink: 0 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, fontStyle: 'italic', color: '#FFD700', marginBottom: '4px' }}>Excelsior Extra Punch Award</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>Prime Focus Technologies · 2018</div>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>Awarded for &apos;High-Quality Content Delivery at the Time of Critical Need&apos; — a company-wide recognition for exceptional performance under pressure and tight deadlines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <CtaStrip />

    </PageShell>
  );
}
