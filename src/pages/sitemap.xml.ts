import type { APIRoute } from 'astro';

const SITE_URL = 'https://beccastudio.com';

export const GET: APIRoute = async () => {
  // Define all your URLs with their lastmod dates
  const pages = [
    { url: '/', lastmod: new Date() },
    // Add more routes as your site grows
  ];

  // Generate the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.url === '/' ? '1.0' : '0.7'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 