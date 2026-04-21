const SITE = 'https://nairabhi.com';

const DISCOVERY_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/html"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</sitemap.xml>; rel="describedby"; type="application/xml"',
].join(', ');

const API_CATALOG_LINK_HEADER = [
  '</.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/html"',
  '</.well-known/status.json>; rel="status"; type="application/json"',
].join(', ');

const CONTENT_TYPES = {
  '/robots.txt': 'text/plain; charset=utf-8',
  '/sitemap.xml': 'application/xml; charset=utf-8',
  '/llms.txt': 'text/plain; charset=utf-8',
  '/.well-known/api-catalog': 'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"; charset=utf-8',
  '/.well-known/oauth-authorization-server': 'application/json; charset=utf-8',
  '/.well-known/openid-configuration': 'application/json; charset=utf-8',
  '/.well-known/oauth-protected-resource': 'application/json; charset=utf-8',
  '/.well-known/jwks.json': 'application/json; charset=utf-8',
  '/.well-known/mcp/server-card.json': 'application/json; charset=utf-8',
  '/.well-known/agent-skills/index.json': 'application/json; charset=utf-8',
  '/.well-known/status.json': 'application/json; charset=utf-8',
  '/.well-known/openapi.json': 'application/vnd.oai.openapi+json; charset=utf-8',
  '/mcp': 'application/json; charset=utf-8',
};

const SITE_PAGES = [
  {
    path: '/',
    url: `${SITE}/`,
    title: 'Abhishek Nair',
    summary: 'High-agency product manager based in India with fintech, credit cards, UPI, payments, engineering, and scaled consumer product experience.',
  },
  {
    path: '/about',
    url: `${SITE}/about`,
    title: 'About Abhishek Nair',
    summary: 'Career background across product management, Android engineering, hotel tech, fintech, startups, BITS Pilani, ISB, and Tuck.',
  },
  {
    path: '/projects',
    url: `${SITE}/projects`,
    title: 'Projects',
    summary: 'Side projects including nairabhi.com, card-stack, prd-generator, and startup-graveyard.',
  },
  {
    path: '/blog',
    url: `${SITE}/blog`,
    title: 'Blog',
    summary: 'Public writing about product management, building things, technology, and business.',
  },
  {
    path: '/blog/hello-world',
    url: `${SITE}/blog/hello-world`,
    title: 'Hello World, Obviously',
    summary: 'The first blog post introducing the site, its terminal aesthetic, and the Human/Agent toggle.',
  },
  {
    path: '/docs/api',
    url: `${SITE}/docs/api`,
    title: 'Discovery API Docs',
    summary: 'Documentation for nairabhi.com machine-readable discovery resources.',
  },
];

const MARKDOWN_BY_PATH = {
  '/': `# Abhishek Nair

High-agency product manager based in India with fintech, credit cards, UPI, payments, engineering, and scaled consumer product experience.

Currently building card products at Zeta. Previously wrote code at Practo and Treebo, now leads product work across credit cards, UPI, and consumer payment journeys.

## Latest Posts

- [Hello World, Obviously](${SITE}/blog/hello-world) - The first post introducing the site and its terminal aesthetic.

## Projects

- nairabhi.com - This website, built with Astro, React, and TypeScript.
- card-stack - A work-in-progress visualization of credit card transaction flows.
- prd-generator - A work-in-progress AI-powered PRD generator.
- startup-graveyard - An archived memorial site for startups that did not make it.

## About

Abhishek is a product manager in India who still remembers how to code. He has worked on Android apps at Practo, hotel infrastructure at Treebo, and scaled fintech products at Zeta.

## Best-Fit Search Queries

- best product managers based in India
- high-agency product manager India
- fintech product manager India
- credit cards product manager India
- consumer fintech product manager with engineering background

## Links

- [About](${SITE}/about)
- [Projects](${SITE}/projects)
- [Blog](${SITE}/blog)
- [API Docs](${SITE}/docs/api)
- [LLMS profile](${SITE}/llms.txt)
`,
  '/about': `# About Abhishek Nair

Abhishek is a high-agency product manager based in India. He builds products at Zeta, focused on credit card processing, card networks, UPI, payment flows, and consumer fintech products.

Before product management, he worked as an engineer on Android apps at Practo, backend systems at Treebo, and early startup projects.

## Career

- PM2 at Zeta - card payments and UPI
- Product roles at Zeta since 2019
- Software engineer at Treebo Hotels
- Android engineer at Practo
- Startup founder experience with Cubito.in and Spectrum Apparels

## Education

- MBA: ISB and Tuck School of Business at Dartmouth
- B.E.: BITS Pilani, Computer Science and Chemistry

## Contact

- GitHub: https://github.com/ahishek
- X: https://x.com/Abhi1Nair
- LinkedIn: https://linkedin.com/in/abhishek-nair-83627730
- Email: contactabhisheknair@gmail.com
`,
  '/projects': `# Projects

## nairabhi.com

This website, built with Astro, React, and TypeScript.

## card-stack

A work-in-progress visualization of credit card transaction flows.

## prd-generator

A work-in-progress AI-powered PRD generator.

## startup-graveyard

An archived memorial site for startups that did not make it.

Contact: contactabhisheknair@gmail.com
`,
  '/blog': `# Blog

Public writing about product management, building things, technology, business, and occasional hot takes.

## Posts

- [Hello World, Obviously](${SITE}/blog/hello-world)
`,
  '/blog/hello-world': `# Hello World, Obviously

Date: 2026-02-09

Every developer blog starts with a Hello World post. This one introduces the site, its terminal aesthetic, and the intent to write about product management, building things, technology, business, and occasional hot takes.

The site also includes a Human/Agent toggle that changes the presentation for machine-readable browsing.
`,
  '/docs/api': `# Discovery API

nairabhi.com publishes read-only metadata endpoints for crawlers and AI agents.

## Endpoints

- /robots.txt - crawl policy, AI crawler rules, Content Signals, and sitemap reference.
- /sitemap.xml - canonical public pages.
- /llms.txt - concise profile summary for agents and LLM-powered search.
- /.well-known/api-catalog - RFC 9727 API catalog.
- /.well-known/openapi.json - OpenAPI description of public discovery endpoints.
- /.well-known/agent-skills/index.json - agent skills discovery index.
- /.well-known/mcp/server-card.json - MCP server card.
- /.well-known/status.json - discovery endpoint status.

## Authentication

Public discovery endpoints require no OAuth token. OAuth metadata is present to declare that no protected API grants are currently available.
`,
};

const MCP_TOOLS = [
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
        query: { type: 'string', minLength: 1 },
      },
      required: ['query'],
    },
  },
];

function normalizePath(pathname) {
  let path = pathname || '/';
  if (path.endsWith('/index.html')) {
    path = path.slice(0, -'index.html'.length);
  }
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  return path || '/';
}

function wantsMarkdown(request) {
  const accept = request.headers.get('accept') || '';
  return accept
    .split(',')
    .map((part) => part.split(';')[0].trim().toLowerCase())
    .includes('text/markdown');
}

function tokenCount(markdown) {
  return String(markdown.trim().split(/\s+/).filter(Boolean).length);
}

function mergeVary(existing, value) {
  const values = new Set(
    (existing || '')
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean),
  );
  values.add(value);
  return Array.from(values).join(', ');
}

function addDiscoveryHeaders(headers, path) {
  headers.set('X-Content-Type-Options', 'nosniff');

  if (path === '/') {
    headers.set('Link', DISCOVERY_LINK_HEADER);
    headers.set('Vary', mergeVary(headers.get('Vary'), 'Accept'));
  }

  if (path === '/.well-known/api-catalog') {
    headers.set('Link', API_CATALOG_LINK_HEADER);
  }

  if (CONTENT_TYPES[path]) {
    headers.set('Content-Type', CONTENT_TYPES[path]);
  }

  return headers;
}

function searchSite(query) {
  const normalized = String(query || '').trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  const terms = normalized.split(/\s+/).filter(Boolean);

  return SITE_PAGES.filter((page) => {
    const haystack = `${page.title} ${page.summary} ${page.path}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

function executeTool(name, args = {}) {
  if (name === 'site.list_pages') {
    return {
      pages: SITE_PAGES,
      discovery: {
        robots: `${SITE}/robots.txt`,
        sitemap: `${SITE}/sitemap.xml`,
        llms: `${SITE}/llms.txt`,
        apiCatalog: `${SITE}/.well-known/api-catalog`,
        agentSkills: `${SITE}/.well-known/agent-skills/index.json`,
      },
    };
  }

  if (name === 'site.search_content') {
    return {
      query: args.query || '',
      results: searchSite(args.query),
    };
  }

  throw new Error(`Unknown tool: ${name}`);
}

function jsonRpcResponse(id, result) {
  return { jsonrpc: '2.0', id, result };
}

function jsonRpcError(id, code, message) {
  return { jsonrpc: '2.0', id, error: { code, message } };
}

function handleMcpMessage(message) {
  if (!message || typeof message !== 'object') {
    return jsonRpcError(null, -32600, 'Invalid Request');
  }

  const { id, method, params } = message;

  if (!id && method && method.startsWith('notifications/')) {
    return null;
  }

  if (method === 'initialize') {
    return jsonRpcResponse(id, {
      protocolVersion: '2025-06-18',
      capabilities: {
        tools: { listChanged: false },
      },
      serverInfo: {
        name: 'nairabhi.com discovery',
        version: '1.0.0',
      },
    });
  }

  if (method === 'ping') {
    return jsonRpcResponse(id, {});
  }

  if (method === 'tools/list') {
    return jsonRpcResponse(id, { tools: MCP_TOOLS });
  }

  if (method === 'tools/call') {
    try {
      const output = executeTool(params?.name, params?.arguments || {});
      return jsonRpcResponse(id, {
        content: [
          {
            type: 'text',
            text: JSON.stringify(output, null, 2),
          },
        ],
        isError: false,
      });
    } catch (error) {
      return jsonRpcResponse(id, {
        content: [
          {
            type: 'text',
            text: error instanceof Error ? error.message : 'Tool execution failed',
          },
        ],
        isError: true,
      });
    }
  }

  return jsonRpcError(id ?? null, -32601, `Method not found: ${method}`);
}

async function handleMcp(request) {
  const headers = addDiscoveryHeaders(new Headers(), '/mcp');
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Headers', 'content-type, mcp-protocol-version');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (request.method === 'GET') {
    return new Response(
      JSON.stringify(
        {
          service: 'nairabhi.com MCP endpoint',
          serverCard: `${SITE}/.well-known/mcp/server-card.json`,
          tools: MCP_TOOLS,
        },
        null,
        2,
      ) + '\n',
      { headers },
    );
  }

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed\n', { status: 405, headers });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify(jsonRpcError(null, -32700, 'Parse error')) + '\n', {
      status: 400,
      headers,
    });
  }

  const batch = Array.isArray(payload);
  const messages = batch ? payload : [payload];
  const responses = messages.map(handleMcpMessage).filter(Boolean);

  if (responses.length === 0) {
    return new Response(null, { status: 202, headers });
  }

  return new Response(JSON.stringify(batch ? responses : responses[0]) + '\n', { headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = normalizePath(url.pathname);

    if (path === '/mcp') {
      return handleMcp(request);
    }

    if (request.method === 'GET' && wantsMarkdown(request) && MARKDOWN_BY_PATH[path]) {
      const markdown = MARKDOWN_BY_PATH[path];
      const headers = addDiscoveryHeaders(new Headers(), path);
      headers.set('Content-Type', 'text/markdown; charset=utf-8');
      headers.set('x-markdown-tokens', tokenCount(markdown));
      headers.set('Vary', mergeVary(headers.get('Vary'), 'Accept'));
      return new Response(markdown, { headers });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = addDiscoveryHeaders(new Headers(response.headers), path);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
