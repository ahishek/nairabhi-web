import type { APIRoute } from 'astro';
import { canonical, jsonResponse } from '../lib/discovery';

export const prerender = true;

export const GET: APIRoute = () =>
  jsonResponse({
    service: 'nairabhi.com MCP endpoint',
    serverCard: canonical('/.well-known/mcp/server-card.json'),
    note: 'The Cloudflare Pages worker in this repository handles JSON-RPC MCP POST requests when deployed on an edge host that supports _worker.js.',
  });
