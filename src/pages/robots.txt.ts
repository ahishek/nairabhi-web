import type { APIRoute } from 'astro';

export const prerender = true;

const site = 'https://nairabhi.com';
const contentSignal = 'Content-Signal: ai-train=no, search=yes, ai-input=yes';

const lines = [
  '# robots.txt for nairabhi.com',
  '# Default policy: public pages are crawlable; non-page endpoints are limited.',
  '',
  'User-agent: *',
  'Allow: /',
  'Disallow: /api/',
  'Disallow: /oauth/',
  'Disallow: /mcp',
  'Allow: /llms.txt',
  'Allow: /.well-known/api-catalog',
  'Allow: /.well-known/agent-skills/',
  'Allow: /.well-known/mcp/server-card.json',
  contentSignal,
  '',
  '# Search and user-requested retrieval bots are allowed.',
  'User-agent: OAI-SearchBot',
  'Allow: /',
  contentSignal,
  '',
  'User-agent: ChatGPT-User',
  'Allow: /',
  contentSignal,
  '',
  'User-agent: Claude-Web',
  'Allow: /',
  contentSignal,
  '',
  '# Training or broad corpus crawlers are not allowed to crawl this site.',
  'User-agent: GPTBot',
  'Disallow: /',
  contentSignal,
  '',
  'User-agent: Google-Extended',
  'Disallow: /',
  contentSignal,
  '',
  'User-agent: Amazonbot',
  'Disallow: /',
  contentSignal,
  '',
  'User-agent: anthropic-ai',
  'Disallow: /',
  contentSignal,
  '',
  'User-agent: Bytespider',
  'Disallow: /',
  contentSignal,
  '',
  'User-agent: CCBot',
  'Disallow: /',
  contentSignal,
  '',
  'User-agent: Applebot-Extended',
  'Disallow: /',
  contentSignal,
  '',
  `Sitemap: ${site}/sitemap.xml`,
  '',
];

export const GET: APIRoute = () =>
  new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
