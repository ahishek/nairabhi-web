import type { APIRoute } from 'astro';
import { jsonResponse } from '../../lib/discovery';

export const prerender = true;

export const GET: APIRoute = () =>
  jsonResponse({
    error: 'oauth_not_enabled',
    error_description: 'nairabhi.com does not currently issue access tokens because all published discovery APIs are public.',
  });
