import type { APIRoute } from 'astro';
import { canonical, jsonResponse } from '../../lib/discovery';

export const prerender = true;

const openApi = {
  openapi: '3.1.0',
  info: {
    title: 'nairabhi.com Discovery API',
    version: '1.0.0',
    description: 'Read-only machine-readable discovery resources for nairabhi.com.',
  },
  servers: [{ url: canonical('/') }],
  paths: {
    '/robots.txt': {
      get: {
        summary: 'Robots Exclusion Protocol policy',
        responses: {
          '200': {
            description: 'robots.txt policy',
            content: {
              'text/plain': {
                schema: { type: 'string' },
              },
            },
          },
        },
      },
    },
    '/sitemap.xml': {
      get: {
        summary: 'XML sitemap',
        responses: {
          '200': {
            description: 'Canonical public URLs for the site',
            content: {
              'application/xml': {
                schema: { type: 'string' },
              },
            },
          },
        },
      },
    },
    '/.well-known/api-catalog': {
      get: {
        summary: 'RFC 9727 API catalog',
        responses: {
          '200': {
            description: 'Linkset describing public discovery endpoints',
            content: {
              'application/linkset+json': {
                schema: { $ref: '#/components/schemas/Linkset' },
              },
            },
          },
        },
      },
    },
    '/.well-known/status.json': {
      get: {
        summary: 'Discovery endpoint status',
        responses: {
          '200': {
            description: 'Public status for discovery resources',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Status' },
              },
            },
          },
        },
      },
    },
    '/llms.txt': {
      get: {
        summary: 'Agent-facing profile summary',
        responses: {
          '200': {
            description: 'Concise profile and canonical links for AI agents',
            content: {
              'text/plain': {
                schema: { type: 'string' },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Linkset: {
        type: 'object',
        properties: {
          linkset: {
            type: 'array',
            items: { type: 'object' },
          },
        },
        required: ['linkset'],
      },
      Status: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          service: { type: 'string' },
          generatedAt: { type: 'string', format: 'date-time' },
        },
        required: ['status', 'service'],
      },
    },
  },
};

export const GET: APIRoute = () =>
  jsonResponse(openApi, 'application/vnd.oai.openapi+json; charset=utf-8');
