export async function GET() {
  const siteUrl = 'https://podoro.ch';
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'monthly' },
    { url: '/leistungen', priority: '0.9', changefreq: 'monthly' },
    { url: '/ueber-uns', priority: '0.8', changefreq: 'monthly' },
    { url: '/galerie', priority: '0.7', changefreq: 'monthly' },
    { url: '/kontakt', priority: '0.9', changefreq: 'monthly' },
    { url: '/impressum', priority: '0.3', changefreq: 'yearly' },
    { url: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
    { url: '/agb', priority: '0.3', changefreq: 'yearly' },
  ];

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${siteUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
