import type { APIRoute } from 'astro';
import { canonical, jsonResponse } from '../../lib/discovery';

export const prerender = true;

export const GET: APIRoute = () =>
  jsonResponse({
    status: 'ok',
    service: 'nairabhi.com discovery resources',
    generatedAt: new Date().toISOString(),
    resources: [
      canonical('/robots.txt'),
      canonical('/sitemap.xml'),
      canonical('/llms.txt'),
      canonical('/.well-known/api-catalog'),
      canonical('/.well-known/agent-skills/index.json'),
      canonical('/.well-known/mcp/server-card.json'),
    ],
  });
