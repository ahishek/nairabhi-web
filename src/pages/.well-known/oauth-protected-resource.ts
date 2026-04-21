import type { APIRoute } from 'astro';
import { canonical, jsonResponse, site } from '../../lib/discovery';

export const prerender = true;

export const GET: APIRoute = () =>
  jsonResponse({
    resource: site,
    resource_name: 'nairabhi.com public site',
    resource_documentation: canonical('/docs/api#authentication'),
    authorization_servers: [],
    scopes_supported: [],
    bearer_methods_supported: [],
  });
