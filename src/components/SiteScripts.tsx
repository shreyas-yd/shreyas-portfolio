'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * All client-side behaviour of the legacy site, reimplemented as a single
 * effect that runs on every route. This replaces:
 *   - js/main.js (nav, fade-up, counters, bar charts, smooth scroll, hamburger)
 *   - the inline <script> in work.html (accordions + timeline nav)
 *   - the inline <script> in results.html (results nav + AI bars + Chart.js)
 *
 * It re-runs whenever the pathname changes so the freshly-rendered legacy
 * markup gets wired up after client-side navigation.
 */
export default function SiteScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const observers: IntersectionObserver[] = [];

    // ── NAV SCROLL STATE ───────────────────────────────
    const nav = document.querySelector('.site-nav');
    if (nav) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // ── HAMBURGER MENU ─────────────────────────────────
    const hamburger = document.querySelector<HTMLButtonElement>('.nav-hamburger');
    if (hamburger && nav) {
      const onClick = () => {
        nav.classList.toggle('nav-open');
        const lines = hamburger.querySelectorAll('span');
        const open = nav.classList.contains('nav-open');
        if (open) {
          (lines[0] as HTMLElement).style.transform = 'translateY(6.5px) rotate(45deg)';
          (lines[1] as HTMLElement).style.opacity = '0';
          (lines[2] as HTMLElement).style.transform = 'translateY(-6.5px) rotate(-45deg)';
        } else {
          lines.forEach((l) => {
            (l as HTMLElement).style.transform = '';
            (l as HTMLElement).style.opacity = '';
          });
        }
      };
      hamburger.addEventListener('click', onClick);
      cleanups.push(() => hamburger.removeEventListener('click', onClick));
    }

    // ── INTERSECTION OBSERVER — FADE UP ────────────────
    const ioFade = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            ioFade.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-fadeup').forEach((el) => ioFade.observe(el));
    observers.push(ioFade);

    // ── ANIMATED NUMBER COUNTER ────────────────────────
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const decimals = parseInt(el.dataset.decimals || '0', 10);
          const duration = 1600;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = ease * target;
            el.textContent = prefix + current.toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));
    observers.push(countIO);

    // ── GENERIC BAR CHART ANIMATION ────────────────────
    const barIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll<HTMLElement>('.bar-fill[data-width]')
            .forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + '%';
              }, i * 120);
            });
          barIO.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.bar-chart').forEach((el) => barIO.observe(el));
    observers.push(barIO);

    // ── SMOOTH HASH SCROLL ─────────────────────────────
    const hashLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );
    const hashHandlers = hashLinks.map((a) => {
      const handler = (e: Event) => {
        const sel = a.getAttribute('href');
        if (!sel || sel === '#') return;
        const target = document.querySelector(sel);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      a.addEventListener('click', handler);
      return { a, handler };
    });
    cleanups.push(() =>
      hashHandlers.forEach(({ a, handler }) => a.removeEventListener('click', handler))
    );

    // ── ACCORDION LOGIC (work page) ────────────────────
    const accordionHandlers: Array<{ el: Element; handler: () => void }> = [];
    document.querySelectorAll('[data-accordion]').forEach((acc) => {
      const trigger = acc.querySelector('.accordion__trigger');
      if (!trigger) return;
      const handler = () => {
        const isOpen = acc.classList.contains('is-open');
        const siblings = acc
          .closest('.role-accordions')
          ?.querySelectorAll('[data-accordion]');
        siblings?.forEach((s) => {
          s.classList.remove('is-open');
          s.querySelector('.accordion__trigger')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          acc.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      };
      trigger.addEventListener('click', handler);
      accordionHandlers.push({ el: trigger, handler });
    });
    cleanups.push(() =>
      accordionHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
    );

    // ── WORK TIMELINE NAV ACTIVE STATE + SMOOTH SCROLL ─
    const roleBlocks = document.querySelectorAll('.role-block[id]');
    const tlStops = document.querySelectorAll<HTMLAnchorElement>('.tl-stop');
    if (roleBlocks.length && tlStops.length) {
      let suppressNavIO = false;
      let suppressTimer: ReturnType<typeof setTimeout> | undefined;

      const navIO = new IntersectionObserver(
        (entries) => {
          if (suppressNavIO) return;
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            tlStops.forEach((stop) =>
              stop.classList.toggle('active', stop.getAttribute('href') === '#' + id)
            );
          });
        },
        { threshold: 0.45, rootMargin: '-20% 0px -50% 0px' }
      );
      roleBlocks.forEach((b) => navIO.observe(b));
      observers.push(navIO);

      tlStops.forEach((stop) => {
        const handler = (e: Event) => {
          e.preventDefault();
          // Suppress the observer while scrolling so it can't override our selection.
          suppressNavIO = true;
          clearTimeout(suppressTimer);
          suppressTimer = setTimeout(() => { suppressNavIO = false; }, 1000);

          tlStops.forEach((s) => s.classList.remove('active'));
          stop.classList.add('active');
          const target = document.querySelector(stop.getAttribute('href') || '');
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - 210,
              behavior: 'smooth',
            });
          }
        };
        stop.addEventListener('click', handler);
        cleanups.push(() => stop.removeEventListener('click', handler));
      });
      cleanups.push(() => clearTimeout(suppressTimer));
    }

    // ── RESULTS NAV ACTIVE STATE + SMOOTH SCROLL ───────
    const outcomes = document.querySelectorAll('.outcome[id]');
    const navItems = document.querySelectorAll<HTMLAnchorElement>('.results-nav__item');
    if (outcomes.length && navItems.length) {
      const rNavIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            navItems.forEach((item) =>
              item.classList.toggle('active', item.getAttribute('href') === '#' + id)
            );
          });
        },
        { threshold: 0.3, rootMargin: '-15% 0px -55% 0px' }
      );
      outcomes.forEach((o) => rNavIO.observe(o));
      observers.push(rNavIO);

      navItems.forEach((item) => {
        const handler = (e: Event) => {
          e.preventDefault();
          const target = document.querySelector(item.getAttribute('href') || '');
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY - 130,
              behavior: 'smooth',
            });
          }
        };
        item.addEventListener('click', handler);
        cleanups.push(() => item.removeEventListener('click', handler));
      });
    }

    // ── AI BAR ANIMATION (results page) ────────────────
    const aiPanel = document.getElementById('aiBarChart');
    if (aiPanel) {
      const aiIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target
              .querySelectorAll<HTMLElement>('.ai-bar-fill[data-width]')
              .forEach((bar, i) => {
                setTimeout(() => {
                  bar.style.width = bar.dataset.width + '%';
                }, i * 180);
              });
            aiIO.unobserve(entry.target);
          });
        },
        { threshold: 0.3 }
      );
      aiIO.observe(aiPanel);
      observers.push(aiIO);
    }

    // ── JEL CHART.JS CHARTS (results page) ─────────────
    let chartCleanup: (() => void) | undefined;
    const mainEl = document.getElementById('jelMainChart') as HTMLCanvasElement | null;
    const shareEl = document.getElementById('jelShareChart') as HTMLCanvasElement | null;
    if (mainEl || shareEl) {
      import('chart.js/auto')
        .then(({ default: Chart }) => {
          const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          const total = [1835, 1903, 2479, 2306, 2367, 2295, 2808, 2830, 3428, 2998];
          const blog = [1654, 1727, 2258, 2096, 2123, 2097, 2550, 2497, 2962, 2534];
          const guides = [55, 43, 76, 84, 126, 101, 143, 218, 351, 380];
          const other = total.map((t, i) => t - blog[i] - guides[i]);
          const blogShare = blog.map((b, i) => +((b / total[i]) * 100).toFixed(1));
          const guidesShare = guides.map((g, i) => +((g / total[i]) * 100).toFixed(1));
          const otherShare = other.map((o, i) => +((o / total[i]) * 100).toFixed(1));

          const tooltipStyle = {
            backgroundColor: '#0e0e12',
            titleColor: '#f5f0e8',
            bodyColor: '#a0a0b0',
            padding: 10,
            cornerRadius: 2,
            titleFont: { family: "'DM Mono', monospace", size: 10 },
            bodyFont: { family: "'DM Mono', monospace", size: 10 },
          };
          const gridColor = 'rgba(0,0,0,0.06)';
          const tickStyle = { color: '#9896a4', font: { family: "'DM Mono', monospace", size: 9 } };
          const axisBase: any = { grid: { color: gridColor }, ticks: tickStyle, border: { display: false } };
          const baseOpts: any = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: tooltipStyle },
          };

          const instances: any[] = [];

          if (mainEl) {
            instances.push(
              new Chart(mainEl, {
                type: 'bar',
                data: {
                  labels: months,
                  datasets: [
                    { label: 'Total', data: total, backgroundColor: 'rgba(192,67,42,0.12)', borderColor: '#c0432a', borderWidth: 1.5, borderRadius: 2, order: 1 },
                    { label: 'Blog', data: blog, backgroundColor: '#2a7a50cc', borderRadius: 2, order: 2 },
                    { label: 'Guides', data: guides, backgroundColor: '#3a6fa8cc', borderRadius: 2, order: 3 },
                  ],
                },
                options: {
                  ...baseOpts,
                  scales: {
                    x: { ...axisBase, ticks: { ...axisBase.ticks, autoSkip: false } },
                    y: { ...axisBase, ticks: { ...axisBase.ticks, callback: (v: any) => (v >= 1000 ? `${v / 1000}k` : v) } },
                  },
                },
              })
            );
          }

          if (shareEl) {
            instances.push(
              new Chart(shareEl, {
                type: 'bar',
                data: {
                  labels: months,
                  datasets: [
                    { label: 'Blog', data: blogShare, backgroundColor: '#2a7a50', borderRadius: 0, stack: 's' },
                    { label: 'Guides', data: guidesShare, backgroundColor: '#3a6fa8', borderRadius: 0, stack: 's' },
                    { label: 'Other', data: otherShare, backgroundColor: '#b0aa9e', borderRadius: 2, stack: 's' },
                  ],
                },
                options: {
                  ...baseOpts,
                  scales: {
                    x: { ...axisBase, ticks: { ...axisBase.ticks, autoSkip: false } },
                    y: { ...axisBase, stacked: true, max: 100, ticks: { ...axisBase.ticks, callback: (v: any) => v + '%' } },
                  },
                },
              })
            );
          }

          chartCleanup = () => instances.forEach((c) => c.destroy());
        })
        .catch(() => {
          /* Chart.js failed to load — charts are progressive enhancement */
        });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      observers.forEach((o) => o.disconnect());
      chartCleanup?.();
    };
  }, [pathname]);

  return null;
}
