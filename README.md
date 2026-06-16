# ydshreyas.com — Next.js + TypeScript + Tailwind

The personal site of **Shreyas Y D**, migrated from a hand-written static HTML/CSS
site into a modern, type-safe stack that's ready to grow:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (configured with the brand's exact design tokens)
- **AWS Amplify Gen 2** backend (auth + data)
- **Contentful**-powered blog (wired up, ready for content)

The rendered marketing pages are **pixel-identical** to the original site.

---

## How the migration works

The original site was five large, intricately styled HTML pages. To guarantee the
output is identical to the original, those pages were preserved verbatim rather
than risk drift from a hand re-type:

1. `scripts/extract-legacy.mjs` reads each original `*.html` file and splits it into:
   - `src/app/<route>/content.html` — the exact `<body>` markup (nav + content +
     footer), with internal links rewritten to clean routes (`/about`, `/work`, …).
   - `src/app/<route>/styles.css` — the page's `<style>` block, verbatim.
2. Each route's `page.tsx` imports its `styles.css` and renders `content.html`
   through `<LegacyPage>`. The shared design system lives in
   `src/styles/design-system.css` (a copy of the original `css/main.css`).
3. All client-side behaviour — nav scroll, hamburger, fade-up/counter observers,
   the work-page accordions & timeline, the results-page nav, and the Chart.js
   charts — is reimplemented once in `src/components/SiteScripts.tsx` (scripts
   injected via `dangerouslySetInnerHTML` never execute, so they're centralised).
4. Analytics (GA4 + Microsoft Clarity) and the global `trackClick()` used by the
   preserved inline handlers live in `src/components/Analytics.tsx`.

> **Tailwind + the legacy pages:** Tailwind's `preflight` reset is disabled
> (`tailwind.config.ts`) so it can't alter the legacy design system. Tailwind
> utilities are still available everywhere and are used to build the **blog** and
> any new pages natively. Legacy pages can be migrated to utilities one at a time;
> the design tokens already match, so it's incremental and safe.

If you ever edit the original site, re-run `npm run extract:legacy` to refresh
the partials.

## Project layout

```
New Codebase/
├── amplify/                 # Amplify Gen 2 backend (auth + data)
│   ├── backend.ts
│   ├── auth/resource.ts
│   └── data/resource.ts
├── public/                  # CV PDF, robots.txt, sitemap.xml
├── scripts/extract-legacy.mjs
├── src/
│   ├── app/
│   │   ├── layout.tsx       # html shell, analytics, global CSS, SiteScripts
│   │   ├── page.tsx         # home  (+ content.html / styles.css)
│   │   ├── about|work|results|hire|contact/   # legacy pages
│   │   ├── not-found.tsx    # 404
│   │   └── blog/            # Contentful-backed blog (list + [slug])
│   ├── components/          # LegacyPage, Nav, Footer, Analytics, SiteScripts, JsonLd
│   ├── lib/                 # legacy loader, contentful client, structured data
│   └── styles/              # design-system.css (verbatim) + tailwind.css
├── tailwind.config.ts
├── next.config.mjs          # legacy *.html → clean-route redirects
└── amplify.yml              # Amplify Hosting build (backend deploy + Next build)
```

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

`npm run build && npm start` for a production build.

### Blog (Contentful)

1. Create a Contentful space and a content type **`blogPost`** with fields:
   `title` (Short text), `slug` (Short text), `excerpt` (Short text),
   `body` (Rich text), `publishedDate` (Date), `coverImage` (Media, optional).
2. Copy `.env.example` to `.env` and fill in `CONTENTFUL_SPACE_ID` and
   `CONTENTFUL_ACCESS_TOKEN`.
3. Posts appear at `/blog` and `/blog/<slug>` automatically (ISR, hourly).

Until configured, `/blog` shows a friendly placeholder and the rest of the site
builds and runs normally.

### Amplify Gen 2 backend

```bash
npx ampx sandbox     # personal cloud sandbox during development
```

`amplify/data/resource.ts` defines a public-write/admin-read `ContactMessage`
model and a `NewsletterSubscriber` model — a foundation for wiring the contact
form and a newsletter to the cloud. Deploys run via the Amplify console using
`amplify.yml`.

## SEO parity

Per-page `<title>`, descriptions, keywords, canonical URLs, Open Graph/Twitter
tags, and JSON-LD (Person + Breadcrumb) are all carried over. `robots.txt` and
`sitemap.xml` ship from `public/`, and old `*.html` URLs 308-redirect to the new
clean routes so existing inbound links and search rankings are preserved.
