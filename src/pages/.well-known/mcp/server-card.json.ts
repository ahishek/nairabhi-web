import type { APIRoute } from 'astro';
import { canonical, jsonResponse } from '../../../lib/discovery';

export const prerender = true;

const tools = [
  {
    name: 'site.list_pages',
    description: 'List canonical public pages and discovery resources on nairabhi.com.',
    inputSchema: {
      type: 'object',
      additionalProperties: false,
      properties: {},
    },
  },
  {
    name: 'site.search_content',
    description: 'Search public page summaries for a query string.',
    inputSchema: {
      type: 'object',
      additionalProperties: false,
      properties: {
        query: {
          type: 'string',
          minLength: 1,
        },
      },
      required: ['query'],
    },
  },
];

export const GET: APIRoute = () =>
  jsonResponse({
    serverInfo: {
      name: 'nairabhi.com discovery',
      version: '1.0.0',
    },
    transport: {
      type: 'streamable-http',
      endpoint: canonical('/mcp'),
    },
    transports: [
      {
        type: 'streamable-http',
        endpoint: canonical('/mcp'),
      },
    ],
    capabilities: {
      tools: {
        listChanged: false,
      },
      resources: {
        subscribe: false,
        listChanged: false,
      },
      prompts: {
        listChanged: false,
      },
    },
    tools,
  });
