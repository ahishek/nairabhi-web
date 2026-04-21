import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const site = 'https://nairabhi.com';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function canonical(pathname: string) {
  return new URL(pathname, site).toString();
}

function urlEntry(loc: string, lastmod?: string) {
  const lastmodLine = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : '';
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmodLine}\n  </url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => a.id.localeCompare(b.id));

  const urls = [
    urlEntry(canonical('/')),
    urlEntry(canonical('/about')),
    urlEntry(canonical('/blog')),
    urlEntry(canonical('/docs/api')),
    urlEntry(canonical('/llms.txt')),
    urlEntry(canonical('/projects')),
    ...publishedPosts.map((post) =>
      urlEntry(
        canonical(`/blog/${post.id.replace(/\.md$/, '')}`),
        post.data.date.toISOString().slice(0, 10),
      ),
    ),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
