import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import PageHeader from '@/components/PageHeader';
import CtaStrip from '@/components/CtaStrip';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Shreyas Y D — Filmmaker, Marketer, Builder, Systems Architect | Bengaluru',
  description:
    'Shreyas YD — digital marketing and analytics leader. Filmmaker turned marketer turned systems builder. 10+ years building content flywheels, measurement infrastructure, and AI-powered growth engines.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <PageShell active="about" breadcrumb={{ name: 'About', path: '/about' }}>

        {/* ── SECTION 1: PAGE HEADER ── */}
        <PageHeader
          eyebrow="About"
          title={<>Who I <em>Am</em></>}
          sub="Filmmaker. Marketer. Builder. Someone who starts every engagement with one question — and builds everything else from the answer."
        />

        {/* ── SECTION 2: PROVERB PULLQUOTE ── */}
        <div className="ethos-quote animate-fadeup" aria-label="Work philosophy">
          <div className="ethos-quote__kannada">ಆಡು ಮುಟ್ಟದ ಎಲೆಯಿಲ್ಲ</div>
          <blockquote className="ethos-quote__text">&ldquo;There is no leaf <em>the goat</em> won&apos;t touch.&rdquo;</blockquote>
          <p className="ethos-quote__source">A Kannada proverb — the philosophy behind a decade of work in digital</p>
        </div>

        {/* ── SECTION 3: PHILOSOPHY PILLARS ── */}
        <div className="ethos-body" aria-label="Work philosophy explained">
          <div className="ethos-body__inner">
            <div className="ethos-body__text animate-fadeup">
              <div className="t-eyebrow" style={{ marginBottom: '20px' }}>Why this matters</div>
              <p>In Kannada — my mother tongue — there is a saying that roughly translates to <strong>&ldquo;There is no leaf the goat won&apos;t touch.&rdquo;</strong> Having been in the content creation sphere for so long, I have had both the privilege and immense opportunity to work in every aspect of having a digital identity for any brand.</p>
              <p>Having worked at each step of the ladder — in a process of taking a brand from idea to reality — I can advise you with <strong>innate knowledge of the inner workings of the industry</strong>. From Media Production to Marketing Strategy, I can help you set up processes, resources, and a creative bank of ideas that you can continue to use in taking your big idea to the masses.</p>
              <p>That breadth is the point. Most marketers master one thing well. I&apos;ve had to master the whole chain — because at every job, from OTT content writing to building a fintech&apos;s entire digital presence from the ground floor, that&apos;s what the work demanded.</p>
            </div>
            <div className="ethos-pillars animate-fadeup delay-2">
              <div className="ethos-pillar">
                <div className="ethos-pillar__icon">🎬</div>
                <div>
                  <div className="ethos-pillar__title">Media Production</div>
                  <p className="ethos-pillar__text">From ad films and documentaries to OTT content localisation — the creative foundation came first, before the strategy.</p>
                </div>
              </div>
              <div className="ethos-pillar">
                <div className="ethos-pillar__icon">✍️</div>
                <div>
                  <div className="ethos-pillar__title">Content Creation &amp; SEO</div>
                  <p className="ethos-pillar__text">Writing for search, writing for people — long-form, short-form, metadata, scripts, briefs. Every format the written word takes online.</p>
                </div>
              </div>
              <div className="ethos-pillar">
                <div className="ethos-pillar__icon">📣</div>
                <div>
                  <div className="ethos-pillar__title">Brand Building from Zero</div>
                  <p className="ethos-pillar__text">Building complete digital identities from scratch — social presence, website, comms infrastructure, editorial calendar, community model.</p>
                </div>
              </div>
              <div className="ethos-pillar">
                <div className="ethos-pillar__icon">📊</div>
                <div>
                  <div className="ethos-pillar__title">Marketing Strategy &amp; Analytics</div>
                  <p className="ethos-pillar__text">Performance dashboards, campaign management, funnel optimisation, and reporting that actually informs decisions.</p>
                </div>
              </div>
              <div className="ethos-pillar">
                <div className="ethos-pillar__icon">🤖</div>
                <div>
                  <div className="ethos-pillar__title">AI Workflows &amp; Systems</div>
                  <p className="ethos-pillar__text">Deploying AI tools to multiply team output, not replace judgment — pipelines, quality control, and the human layer that makes it work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 9: PRINCIPLES ── */}
        <div style={{ background: 'var(--paper)' }}>
          <div className="container">
            <section className="section" aria-label="Work principles">
              <div className="t-eyebrow animate-fadeup">How I Work</div>
              <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>Principles I work by</h2>
              <div className="values-grid">
                <div className="value-item animate-fadeup delay-1">
                  <div className="value-item__num">01</div>
                  <div className="value-item__title">Audiences are people, not demographics</div>
                  <p className="value-item__text">Segments and personas are useful shorthand. They are not the point. The point is a specific human being with specific things on their mind, deciding whether what you&apos;re saying is worth their attention. I write for that person. When the content stops feeling like it was made for a real human, it shows — in the engagement data and in the gut.</p>
                </div>
                <div className="value-item animate-fadeup delay-2">
                  <div className="value-item__num">02</div>
                  <div className="value-item__title">Content is infrastructure, not decoration</div>
                  <p className="value-item__text">A piece of content is not a deliverable. It is a component in a system. A blog post is part of an SEO architecture. A LinkedIn post is part of a community-building strategy. An email is part of a nurture sequence. When content is treated as decoration it decays. When it is treated as infrastructure, it compounds.</p>
                </div>
                <div className="value-item animate-fadeup delay-3">
                  <div className="value-item__num">03</div>
                  <div className="value-item__title">Measure everything, assume nothing</div>
                  <p className="value-item__text">If it can&apos;t be measured, I build the measurement first. Every strategy I run has defined KPIs, baseline tracking, and regular performance reviews. I don&apos;t trust instinct alone and I don&apos;t trust data alone. Instinct tells me what to try. Data tells me whether I was right. I change course when the data says to — not when it feels like it.</p>
                </div>
                <div className="value-item animate-fadeup delay-1">
                  <div className="value-item__num">04</div>
                  <div className="value-item__title">Stay genuinely curious</div>
                  <p className="value-item__text">The landscape changes faster than any playbook. What worked last year is table stakes this year and irrelevant next year. I read obsessively, experiment constantly, and actively track how AI search, AEO, and generative content are changing the rules of discoverability. Curiosity is not a personality trait. It is a professional obligation I take seriously.</p>
                </div>
                <div className="value-item animate-fadeup delay-2">
                  <div className="value-item__num">05</div>
                  <div className="value-item__title">AI is a tool, humans need to create</div>
                  <p className="value-item__text">AI makes the process faster. It does not make the thinking unnecessary. Prompts need judgment. Outputs need editing. Strategy needs a human with enough context to know what the brand actually means. I adopted AI workflows early and aggressively, and I know exactly where they help and where they fail. The failure mode is always the same: when the human stops directing and starts approving.</p>
                </div>
                <div className="value-item animate-fadeup delay-3">
                  <div className="value-item__num">06</div>
                  <div className="value-item__title">Build systems to last</div>
                  <p className="value-item__text">Every system I build is documented well enough for someone else to run. The work I did at Chaitanya India in 2019 is still in use today. That is not luck. It is a deliberate choice to build things that outlive the project — content governance frameworks, editorial guidelines, workflow structures, repurposing systems. The measure is not how impressive it looks on handover. It is how well it runs when I&apos;m no longer in the room.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── SECTION 7: ABOUT INTRO WITH QUICK FACTS ── */}
        <div style={{ background: 'var(--white)' }}>
          <div className="container">
            <div className="about-lead">
              <div className="about-lead__grid">
                <div className="about-lead__text">
                  <div className="t-eyebrow animate-fadeup" style={{ marginBottom: '20px' }}>The full picture</div>
                  <p className="animate-fadeup delay-1">I&apos;m a <strong>digital-first marketing and content leader</strong> with over a decade of experience across fintech, real estate, logistics, recruitment, technology, and media. I&apos;ve built brands from nothing, repositioned tired ones, and grown communities that no one believed were possible — without big ad budgets.</p>
                  <blockquote className="animate-fadeup delay-2">
                    <p>&ldquo;From Media Production to Marketing Strategy — I can help you set up the processes, resources, and creative bank that you can keep using long after I&apos;ve handed over the keys.&rdquo;</p>
                  </blockquote>
                  <p className="animate-fadeup delay-3">My career started in film — as a freelance filmmaker and assistant director — which gave me an understanding of storytelling, visual composition, and audience emotion that most marketers never develop. That creative instinct lives in everything I do: from how I write a LinkedIn post to how I structure a content flywheel.</p>
                  <p className="animate-fadeup delay-4">Over 10+ years I&apos;ve moved through content writing, SEO, social media management, brand marketing, and digital strategy — picking up the full toolkit along the way. My current work at Jones Group spans <strong>four business units simultaneously</strong>, where I&apos;ve grown an organic community to 17,000+ followers, tripled daily leads with zero ad spend, and deployed AI workflows that made the team twice as productive.</p>
                  <p className="animate-fadeup delay-5">What I care most about: <strong>building work that lasts</strong>. Not vanity metrics, not short-term spikes — but systems, flywheels, and brand equity that compound over time. A strategy I built at Chaitanya India in 2019 is still in active use today. That&apos;s the kind of work I want to do.</p>
                  <p className="animate-fadeup">More recently, that instinct has moved into building — not just strategies and content systems, but actual tools. Dashboards that show every channel in one place. Websites built from the ground up and handed over with full control. Systems that automatically notify the right people the moment a new lead arrives. Scheduling tools. Automated reports. Things that used to require bringing in a specialist or an agency — built using AI as a co-builder, scoped and directed by someone who understands what the marketing actually needs to do.</p>
                  <div className="animate-fadeup delay-6" style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link className="btn btn--primary" href="/work">See My Work →</Link>
                    <Link className="btn btn--ghost" href="/results" target="_blank" rel="noopener">See the Impact →</Link>
                  </div>
                </div>

                <aside className="about-sidebar animate-fadeup delay-3">
                  <div className="sidebar-card">
                    <div className="sidebar-card__label">Quick Facts</div>
                    <ul className="info-list">
                      <li><span className="info-list__key">Location</span><span className="info-list__val">Bengaluru, Karnataka, India</span></li>
                      <li><span className="info-list__key">Current Role</span><span className="info-list__val">Independent Marketing Consultant</span></li>
                      <li><span className="info-list__key">Experience</span><span className="info-list__val">10+ years (8 years deeply digital)</span></li>
                      <li><span className="info-list__key">Industries</span><span className="info-list__val">Fintech, Real Estate, Logistics, Recruitment, Tech, Media, Healthcare</span></li>
                      <li><span className="info-list__key">Open To</span><span className="info-list__val">Remote &amp; on-site roles · Consulting engagements</span></li>
                      <li><span className="info-list__key">Languages</span><span className="info-list__val">English, Kannada, Hindi</span></li>
                    </ul>
                  </div>
                  <div className="sidebar-card">
                    <div className="sidebar-card__label">Contact</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <a href={`mailto:${site.email}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>{site.email}</a>
                      <a href={site.phoneHref} style={{ color: 'var(--mid)', textDecoration: 'none', fontSize: '14px' }}>{site.phone}</a>
                      <a href={site.linkedin} target="_blank" rel="noopener" style={{ color: 'var(--teal)', textDecoration: 'none', fontSize: '14px' }}>LinkedIn Profile ↗</a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 4: THE TWO WORLDS ── */}
        <div className="container">
          <section className="two-worlds-full" aria-label="Background — filmmaker and marketer">
            <div className="t-eyebrow animate-fadeup">Where it started</div>
            <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>Before the strategy,<br />there was the frame.</h2>
            <div className="two-worlds-full__grid">
              <div className="world-prose animate-fadeup delay-1">
                <div className="world-prose__label world-prose__label--dark">The Filmmaker</div>
                <div className="world-prose__rule world-prose__rule--accent"></div>
                <p>Most marketers learn their craft from a textbook, an internship, or a YouTube channel. I learned mine on a film set.</p>
                <p>Before I ever wrote a content brief or ran an SEO audit, I was directing background action, managing casting, and watching how a director could hold two hundred people&apos;s attention without saying a word — just by understanding where to point the camera and when to let silence do the work.</p>
                <p>That experience did something permanent to the way I see brands. I stopped seeing them as organisations with products to sell. I started seeing them as stories that hadn&apos;t found their narrator yet.</p>
                <p>The shift from filmmaking to marketing wasn&apos;t a career change. It was a translation. The same questions apply on both sides of it: <strong>Who is the audience? What do they feel before the first word? What do they remember when it&apos;s over?</strong> The tools changed. The instinct didn&apos;t.</p>
                <p>What I bring to every brief is that filmmaker&apos;s eye — the one that asks not just &ldquo;what are we saying?&rdquo; but &ldquo;how will this land in the body of the person who receives it?&rdquo; Strategy and analytics tell you whether something is working. The eye tells you why it isn&apos;t working before the data comes back.</p>
              </div>
              <div className="world-prose animate-fadeup delay-2">
                <div className="world-prose__label world-prose__label--teal">The Marketer</div>
                <div className="world-prose__rule world-prose__rule--teal"></div>
                <p>The instinct got the foot in the door. The discipline is what kept it there.</p>
                <p>Over ten years, I moved through every layer of the digital marketing stack — content writing, SEO, social media management, performance campaigns, brand strategy, analytics, AI workflows. Not because I planned a career path, but because each role demanded the next skill, and I learned it.</p>
                <p>The filmmaker in me asks the right questions. The marketer builds the system that answers them — <strong>content frameworks, performance dashboards, feedback loops, repurposing engines</strong>. Tools that carry the story forward without the story losing its shape.</p>
                <p>My current work at Jones Group spans four business units simultaneously: 17,000+ organic followers built from zero, 300% organic lead growth, 87% visitor growth through AI-powered SEO pipelines. Not because I had a bigger budget. Because I had a clearer question, and I built the right system around the answer.</p>
                <p>That combination — creative instinct and measurement discipline — is what a decade of touching every leaf looks like.</p>
              </div>
            </div>
          </section>
        </div>

        {/* ── THE SYSTEMS BUILDER — THIRD ACT ── */}
        <div style={{ background: 'var(--cream)' }}>
          <div className="container">
            <section className="two-worlds-full" aria-label="The Systems Builder — the present chapter">
              <div className="t-eyebrow animate-fadeup">The Third Act</div>
              <div style={{ maxWidth: '760px', marginTop: '48px' }}>
                <div className="world-prose animate-fadeup delay-1">
                  <div className="world-prose__label world-prose__label--dark">The Systems Builder</div>
                  <div className="world-prose__rule world-prose__rule--accent"></div>
                  <p>The present wasn&apos;t where I expected to end up. It was where all the previous chapters naturally led.</p>
                  <p>The filmmaker taught me how to see the story. The marketer taught me how to measure its impact. The systems builder emerged when I realised that neither was enough on its own.</p>
                  <p>A good strategy can create momentum. A good system can sustain it.</p>
                  <p>Over time, I became less interested in individual campaigns and more interested in the machinery behind them. The questions changed. Not &ldquo;How do we make this work?&rdquo; but &ldquo;How do we make this work consistently?&rdquo; Not &ldquo;How do we get the result?&rdquo; but &ldquo;How do we make the result repeatable?&rdquo;</p>
                  <p>That shift led me deeper into automation, analytics, AI workflows, reporting infrastructure, website development, and operational design. Not because I wanted to become a developer. Because every marketing problem eventually reveals itself as a systems problem.</p>
                  <p>The first thing I build is usually visibility. If you can&apos;t see what&apos;s working, you&apos;re optimising by instinct alone. Data scattered across platforms, dashboards, and spreadsheets creates noise. Bringing everything into a single view creates clarity.</p>
                  <p>The second thing I build is leverage. AI didn&apos;t replace the thinking. It amplified it. When you know exactly what you&apos;re trying to build, one person can now create what once required an agency, a development team, and weeks of coordination. The technology is powerful. The judgement behind it is what makes it useful.</p>
                  <p><strong>The third thing I build is independence.</strong></p>
                  <p>Every system should eventually stop needing its creator. The goal isn&apos;t to become indispensable. It&apos;s to hand over something that continues working long after you&apos;ve stepped away from it.</p>
                  <p>Today, that work takes many forms. Real-time dashboards that bring every marketing channel into one place. Websites built from the ground up and handed over with full ownership. Automated reporting pipelines. Lead management workflows. Notification systems that move information to the right people at the right moment.</p>
                  <p>On the surface, they look like different projects.</p>
                  <p>Underneath, they&apos;re all answers to the same question:</p>
                  <p style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--ink)', fontSize: '17px' }}>How do you build something that keeps creating value when nobody is watching it?</p>
                  <p>That is what this third act became. Not storytelling. Not marketing. But the systems that allow both to scale without losing their shape.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── SECTION 5: THE QUESTION & SYSTEM ── */}
        <div className="question-system" aria-label="The question and the system">
          <div className="question-system__inner">
            <div className="qs-main animate-fadeup">
              <div className="t-eyebrow" style={{ marginBottom: '12px' }}>Before the brief</div>
              <h2 className="h2" style={{ marginBottom: '0' }}>The first question I ask every brand.</h2>
              <blockquote className="qs-pullquote">
                &ldquo;What is the core belief and message of this brand — not what you do, but what you believe to be true about the world that made you build this thing?&rdquo;
              </blockquote>
              <p>The answer to this question is not a tagline. It is not a mission statement written by a committee. It is the thing the founder says when they stop performing and start talking — the conviction underneath the company, the reason it exists beyond the revenue it generates.</p>
              <p>That answer becomes <strong>the source of truth</strong>. Everything I build points back to it.</p>
              <div className="qs-sub">First, the system.</div>
              <p>Once the core belief is clear, I build the infrastructure that carries it — consistently, at scale, and without it losing its shape. Content frameworks that give every writer and designer a common north star. Editorial guidelines that make the brand&apos;s voice reproducible without making it robotic. Repurposing engines that take one strong idea and extend its reach across every channel and format. Workflow structures that a team can operate independently, long after any single project has ended.</p>
              <div className="qs-sub qs-sub--teal">Then, the measurement.</div>
              <p>I build performance dashboards that track what actually matters: not just reach and impressions, but the indicators that tell you whether the <strong>core message is landing with the right people in the right form</strong>. Are the right audiences arriving? Are they staying? Are they converting, engaging, returning? Are the content types that most faithfully embody the brand&apos;s belief outperforming the ones that don&apos;t?</p>
              <p>These dashboards are not decorative. They go directly into leadership decision-making — answering not just &ldquo;is what we&apos;re doing working?&rdquo; but which part is working, why, and what to do next.</p>
              <div className="qs-sub">feedback loop that keeps it honest.</div>
              <p>Analytics, for me, are not a scoreboard. They are a feedback mechanism. When the numbers say something isn&apos;t working, I don&apos;t defend the original plan. I ask why. Is the message unclear? Is the format wrong? Is the content reaching the wrong audience? Is the core belief not yet sharp enough in the way it&apos;s being expressed?</p>
              <p>This is the loop: define the belief, build the system, measure the response, refine the expression, measure again. A compounding engine — one that gets smarter the longer it runs, because every cycle of feedback sharpens the system&apos;s understanding of what the audience actually needs to hear.</p>
              <div className="qs-sub qs-sub--teal">Growth that knows where it came from.</div>
              <p>The companies that scale poorly are usually the ones that grew faster than their message could keep up with. The antidote is a communications infrastructure anchored to something real. <strong>A belief strong enough to survive growth. Clear enough to hand to a new hire on day one.</strong> Specific enough that when the team sits down to brief an agency, write a post, or prepare an investor update — they all reach for the same source of truth, independently, without needing to ask.</p>
              <p style={{ fontStyle: 'italic', color: 'var(--ink)' }}>The clearest proof I have that this works is not a metric. It is a story.</p>
            </div>
            <div className="qs-sidebar animate-fadeup delay-2">
              <div className="qs-card">
                <div className="qs-card__label">Result of the system</div>
                <div className="qs-card__num">300%</div>
                <p className="qs-card__text">Organic lead growth at Jones Group — built entirely without paid advertising.</p>
              </div>
              <div className="qs-card">
                <div className="qs-card__label">Community built from zero</div>
                <div className="qs-card__num">17K+</div>
                <p className="qs-card__text">LinkedIn followers for Jones RecruitZo — in under one year, from a blank page.</p>
              </div>
              <div className="qs-card">
                <div className="qs-card__label">SEO visitor growth</div>
                <div className="qs-card__num">87%</div>
                <p className="qs-card__text">Website visitor growth through AI-powered SEO content pipelines. 86% of traffic via organic SEO content.</p>
              </div>
              <div className="qs-card">
                <div className="qs-card__label">Systems that outlast the project</div>
                <div className="qs-card__num" style={{ fontSize: '24px', letterSpacing: '0', lineHeight: '1.3' }}>Still Live</div>
                <p className="qs-card__text">The strategy built at Chaitanya India in 2019 is still in active use today. That is the standard.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 6: BRIDGE — CHAITANYA STORY ── */}
        <section className="bridge-section" id="chaitanya-story" aria-label="Chaitanya India — the story">
          <div className="bridge-section__inner">
            <div className="bridge-header animate-fadeup">
              <div className="t-eyebrow" style={{ marginBottom: '16px' }}>The question applied · A story about what content is actually for</div>
              <h2 className="h2">They cared deeply.<br />Nobody knew.</h2>
              <p className="bridge-header__sub">How finding a brand&apos;s belief changed what its customers, employees, and investors thought — about the company, and about themselves.</p>
            </div>
            <div className="bridge-body">
              <div className="bridge-prose animate-fadeup delay-1">
                <p>There is a particular kind of problem that doesn&apos;t appear in any marketing textbook, because it isn&apos;t really a marketing problem at all. It is a human problem wearing a marketing problem&apos;s clothes.</p>
                <p>When I joined Chaitanya India Fin Credit as their first and only digital hire, the founders didn&apos;t have a content gap. They had a communication gap — and underneath it, something far more valuable and far more invisible: a genuine conviction about their work that had never once been given a form the world could receive.</p>
                <p>Chaitanya was a microfinance institution operating in some of India&apos;s most economically marginalised communities. The founders believed — not as a slogan, but as a lived principle — that access to small amounts of credit at fair terms could change the trajectory of a family&apos;s life. They had seen it happen, hundreds of times, in villages and urban settlements across the country. They had watched women start small businesses, send children to school, build homes with solid walls. They had watched people move — slowly, measurably, permanently — from economic precarity into something that felt, for the first time, like stability.</p>
                <p>But none of that was visible from outside the organisation. Chaitanya looked, to the world, like any other financial institution — formal, regulatory, remote. Investors saw a balance sheet. Customers saw a lender. Employees, scattered across the country in field offices far from headquarters, felt disconnected from the people who had built the thing and unclear about why the work they were doing mattered beyond the targets they were asked to hit.</p>
                <p><strong>The founders&apos; care — which was the entire point of the enterprise — had no channel.</strong></p>
                <div className="bridge-sub">The question that changed everything.</div>
                <p>I didn&apos;t arrive with a framework and start producing content. I spent the first part of my time there listening — to the founders, to the field staff, to the language people used when they weren&apos;t aware they were being listened to. And then I asked the question I always ask first:</p>
                <p style={{ fontStyle: 'italic', fontSize: '17px', color: 'var(--ink)', paddingLeft: '20px', borderLeft: '3px solid var(--accent)' }}>&ldquo;What is the core belief of this brand — not what you do, but what you believe to be true about the world that made you build this thing?&rdquo;</p>
                <p>The answer, when it came, wasn&apos;t a positioning statement. It was a story. It was specific. It was about a woman in a village who had used a small loan to buy a sewing machine and was now employing two other women in her neighbourhood. It was about what financial inclusion actually looks like when it works — not as an abstract development goal, but as a Tuesday afternoon in a real person&apos;s life that looks nothing like it did a year ago.</p>
                <p>That story — and the belief underneath it, that <strong>access to capital is a form of dignity</strong> — became the source of truth for everything we built.</p>
                <div className="bridge-sub bridge-sub--teal">What grew from it.</div>
                <p>We built the corporate website from the ground up — not as a brochure, but as a document of genuine purpose. The photography, the copy, the structure of every page — all of it was designed to close the distance between what microfinance is in theory and what it does in practice for real people in real places.</p>
                <p>We built internal communications that had never existed before. For the first time, employees working in field offices hundreds of kilometres from headquarters could hear directly from the people who had founded the organisation — not in a circular memo, but in a recorded message that spoke to them as people doing meaningful work. Virtual town halls that connected the ground staff to the founders&apos; conviction. Newsletters that made the scale of what the company was achieving legible to the people who were delivering it every day.</p>
                <p>We prepared the Annual Report not as a regulatory obligation, but as a story of what the year had meant — for the institution, for its borrowers, for the communities it served. It went to regulators, investors, and partners. It was the first time many of them had read an NBFC annual report that made them feel something.</p>
                <div className="bridge-sub">What changed — and why it lasted.</div>
                <p>The result was not just better marketing. It was a brand that finally matched the people behind it.</p>
                <p>Employees felt connected to a purpose they could name. Customers understood they were dealing with an institution that saw them as people, not risk profiles. Investors saw not just a financial model but a mission with evidence behind it. And the communities the company served — whose stories had previously existed only in the memories of field staff and the private conversations of founders — finally had a public record of what their resilience and resourcefulness had built.</p>
                <div className="bridge-callout animate-fadeup">
                  <p><strong className="bridge-callout__text">&ldquo;That strategy is still in active use today. Not because it was clever. Because it was true.&rdquo;</strong></p>
                </div>
              </div>
              <div className="bridge-sidebar animate-fadeup delay-2">
                <div className="bridge-fact">
                  <div className="bridge-fact__label">The organisation</div>
                  <div className="bridge-fact__value">Chaitanya India Fin Credit Pvt. Ltd. — RBI and SEBI-regulated NBFC operating in India&apos;s most economically marginalised communities.</div>
                </div>
                <div className="bridge-fact">
                  <div className="bridge-fact__label">The gap</div>
                  <div className="bridge-fact__value">Founders with a genuine conviction about microfinance and human dignity — and no channel to make that conviction visible to customers, employees, or investors.</div>
                </div>
                <div className="bridge-fact">
                  <div className="bridge-fact__label">My role</div>
                  <div className="bridge-fact__value">First digital hire. Built the entire Content &amp; Communications department from absolute zero — website, social presence, internal comms, town halls, annual report.</div>
                </div>
                <div className="bridge-fact">
                  <div className="bridge-fact__label">What it changed</div>
                  <div className="bridge-fact__value">Employees reconnected to purpose. Customers saw a human institution. Investors read a mission, not just a balance sheet. Communities saw their own stories told publicly.</div>
                </div>
                <div className="bridge-fact">
                  <div className="bridge-fact__label">The measure</div>
                  <div className="bridge-fact__value">The strategy built in 2019 is still in active use today. That is the standard every system is held to.</div>
                </div>
                <div className="bridge-fact">
                  <div className="bridge-fact__label">Visit</div>
                  <div className="bridge-fact__value"><a href="https://www.chaitanyaindia.in" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'none', borderBottom: '1px solid rgba(192,67,42,0.3)' }}>www.chaitanyaindia.in ↗</a></div>
                </div>
              </div>
            </div>
            <div className="bridge-closing animate-fadeup">
              <p className="bridge-closing__statement">That is the work I want to do.<br />That is what the whole system is built for.</p>
              <p className="bridge-closing__text">Content is not a way to fill a website. It is not a distribution mechanism for announcements. At its best, content is the act of making a true thing visible — of taking something that exists in the minds and hearts of the people who built something, and finding the precise form that carries it intact to the people who need to receive it.</p>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: SKILLS ── */}
        <div style={{ background: 'var(--white)' }}>
          <div className="container">
            <section className="section" aria-label="Skills">
              <div className="t-eyebrow animate-fadeup">Skills &amp; Expertise</div>
              <h2 className="h2 animate-fadeup delay-1" style={{ marginTop: '16px' }}>The Full Toolkit</h2>
              <div className="skills-grid">
                <div className="skill-group animate-fadeup delay-1">
                  <div className="skill-group__title">Analytics &amp; MarTech</div>
                  <ul className="skill-group__list">
                    <li>Google Analytics 4 (GA4) — including API integration</li>
                    <li>Google Ads — including API integration</li>
                    <li>Google Search Console — including API integration</li>
                    <li>Google Business Profile (GBP) API — OAuth 2.0</li>
                    <li>Google Tag Manager (GTM) — conversion tracking architecture</li>
                    <li>Call Tracking &amp; Form Submission Tracking</li>
                    <li>Cross-channel Dashboard Design (multi-source, real-time)</li>
                    <li>Looker Studio / Google Data Studio</li>
                    <li>SEMrush, Ahrefs</li>
                    <li>KPI Framework Design</li>
                    <li>Funnel Optimisation &amp; Traffic Analysis</li>
                    <li>Performance Dashboards &amp; Automated Reporting</li>
                  </ul>
                </div>
                <div className="skill-group animate-fadeup delay-2">
                  <div className="skill-group__title">AI &amp; Marketing Technology</div>
                  <ul className="skill-group__list">
                    <li>Prompt Engineering (Claude, ChatGPT, Gemini)</li>
                    <li>AI-Assisted Development (production systems built with Claude as co-builder)</li>
                    <li>AI Content Pipeline Design</li>
                    <li>Human-in-the-Loop Editorial Systems</li>
                    <li>AEO/GEO-Optimised Content Workflows</li>
                    <li>Editorial Quality Control Frameworks</li>
                    <li>OpenAI Sora &amp; Google Veo II (Video AI)</li>
                    <li>Content Repurposing &amp; Automation Systems</li>
                    <li>Serverless Application Development (AI-assisted)</li>
                    <li>Automated Reporting Pipelines</li>
                  </ul>
                </div>
                <div className="skill-group animate-fadeup delay-3">
                  <div className="skill-group__title">Digital Marketing</div>
                  <ul className="skill-group__list">
                    <li>SEO, AEO &amp; GEO (Generative Engine Optimisation)</li>
                    <li>Google Ads, Meta Ads, LinkedIn Campaign Manager</li>
                    <li>CRO — Conversion Rate Optimisation</li>
                    <li>Audience Targeting &amp; Remarketing</li>
                    <li>Campaign Planning, Budget Management, ROAS &amp; CPL</li>
                    <li>Landing Page Optimisation</li>
                  </ul>
                </div>
                <div className="skill-group animate-fadeup delay-4">
                  <div className="skill-group__title">Content Leadership</div>
                  <ul className="skill-group__list">
                    <li>Content Strategy &amp; Flywheel Design</li>
                    <li>Editorial Planning &amp; Content Operations</li>
                    <li>Brand Messaging &amp; Tone-of-Voice Development</li>
                    <li>Thought Leadership &amp; Executive Communications</li>
                    <li>Multi-Format Content Production</li>
                    <li>Content Repurposing Systems</li>
                  </ul>
                </div>
                <div className="skill-group animate-fadeup delay-1">
                  <div className="skill-group__title">Social Media &amp; Community</div>
                  <ul className="skill-group__list">
                    <li>LinkedIn, Instagram, YouTube, Pinterest, X</li>
                    <li>Community Building &amp; Management (17K+ built)</li>
                    <li>Content Calendars &amp; Scheduling</li>
                    <li>Influencer &amp; UGC Campaign Management</li>
                    <li>Platform Algorithm Optimisation</li>
                    <li>Online Reputation Management</li>
                  </ul>
                </div>
                <div className="skill-group animate-fadeup delay-2">
                  <div className="skill-group__title">Brand &amp; Leadership</div>
                  <ul className="skill-group__list">
                    <li>Brand Positioning &amp; Integrated Campaigns</li>
                    <li>Video Strategy, Scripting &amp; Production Direction</li>
                    <li>Team Hiring, Onboarding &amp; Upskilling</li>
                    <li>Cross-functional Collaboration &amp; Stakeholder Mgmt</li>
                    <li>Agency &amp; Vendor Management</li>
                    <li>Market Research &amp; Consumer Insights</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── CTA ── */}
        <CtaStrip />

    </PageShell>
  );
}
