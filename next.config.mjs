/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Preserve SEO: the old static site lived at /about.html, /work.html, etc.
  // Permanently redirect those legacy URLs to the new clean routes.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/work.html', destination: '/work', permanent: true },
      { source: '/results.html', destination: '/results', permanent: true },
      { source: '/hire.html', destination: '/hire', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
