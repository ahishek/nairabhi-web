import type { APIRoute } from 'astro';
import { canonical, jsonResponse } from '../../lib/discovery';

export const prerender = true;

const catalog = {
  linkset: [
    {
      anchor: canonical('/.well-known/'),
      'service-desc': [
        {
          href: canonical('/.well-known/openapi.json'),
          type: 'application/vnd.oai.openapi+json',
        },
      ],
      'service-doc': [
        {
          href: canonical('/docs/api'),
          type: 'text/html',
        },
      ],
      status: [
        {
          href: canonical('/.well-known/status.json'),
          type: 'application/json',
        },
      ],
      'service-meta': [
        {
          href: canonical('/llms.txt'),
          type: 'text/plain',
        },
        {
          href: canonical('/.well-known/oauth-protected-resource'),
          type: 'application/json',
        },
        {
          href: canonical('/.well-known/mcp/server-card.json'),
          type: 'application/json',
        },
        {
          href: canonical('/.well-known/agent-skills/index.json'),
          type: 'application/json',
        },
      ],
    },
  ],
};

export const GET: APIRoute = () =>
  jsonResponse(catalog, 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"; charset=utf-8');
