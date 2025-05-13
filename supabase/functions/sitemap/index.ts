import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const baseUrl = 'https://rallmediagroup.com';

const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/services',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/work',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '/launch',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/blog',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '0.9'
  }
];

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // Generate XML content with proper XML declaration and styling
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Set strict XML content type and other necessary headers
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "all",
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
});