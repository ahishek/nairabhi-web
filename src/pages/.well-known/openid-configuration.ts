import type { APIRoute } from 'astro';
import { canonical, jsonResponse, site } from '../../lib/discovery';

export const prerender = true;

export const GET: APIRoute = () =>
  jsonResponse({
    issuer: site,
    authorization_endpoint: canonical('/oauth/authorize'),
    token_endpoint: canonical('/oauth/token'),
    jwks_uri: canonical('/.well-known/jwks.json'),
    service_documentation: canonical('/docs/api#authentication'),
    response_types_supported: [],
    grant_types_supported: [],
    scopes_supported: [],
    subject_types_supported: [],
    id_token_signing_alg_values_supported: [],
    claims_supported: [],
  });
