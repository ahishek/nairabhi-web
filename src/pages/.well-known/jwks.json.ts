import type { APIRoute } from 'astro';
import { jsonResponse } from '../../lib/discovery';

export const prerender = true;

export const GET: APIRoute = () => jsonResponse({ keys: [] });
