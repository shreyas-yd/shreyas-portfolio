import type { Config } from 'tailwindcss';

/**
 * Tailwind is configured with the exact design tokens of the existing site so
 * that NEW work (the blog, future pages) can be authored with utility classes
 * that match the brand perfectly.
 *
 * `preflight` is disabled on purpose: the legacy marketing pages ship their own
 * hand-written reset + design system (src/styles/design-system.css). Letting
 * Tailwind's preflight reset run globally would alter that pixel-perfect output.
 * Blog/new components still get the full set of utilities.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        ink: '#0d0d10',
        paper: '#f5f0e8',
        cream: '#faf8f4',
        white: '#ffffff',
        accent: '#c0432a',
        'accent-lt': '#d9604a',
        teal: '#1a6b5a',
        gold: '#a87c2a',
        navy: '#162040',
        mid: '#5a5868',
        faint: '#9896a4',
        rule: '#e0dbd0',
        'rule-dark': '#2a2a36',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', '"Courier New"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.08)',
        lg: '0 16px 64px rgba(0,0,0,0.14)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};

export default config;
