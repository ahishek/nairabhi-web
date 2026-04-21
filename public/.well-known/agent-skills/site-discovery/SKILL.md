# Discover nairabhi.com

Use this skill when an agent needs to browse, summarize, or cite public content
from nairabhi.com.

## Sources

- Start with `https://nairabhi.com/sitemap.xml` to discover canonical public
  pages.
- Read `https://nairabhi.com/llms.txt` for the concise agent-facing profile of
  Abhishek Nair as a high-agency product manager based in India.
- Read `https://nairabhi.com/robots.txt` before crawling. It includes the
  site's AI crawler policy and Content Signals preferences.
- Use `https://nairabhi.com/.well-known/api-catalog` to discover
  machine-readable resources.
- Use `https://nairabhi.com/.well-known/mcp/server-card.json` when looking for
  MCP or browser-agent capabilities.

## Content Access

- HTML is the browser default.
- Agents may request markdown by sending `Accept: text/markdown` to public HTML
  pages when the site is served through the included edge worker or an equivalent
  markdown negotiation layer.
- Public discovery endpoints require no OAuth token. OAuth metadata is present
  to declare that no protected API grants are currently available.

## Suggested Flow

1. Fetch robots.txt and honor its allow/disallow rules.
2. Fetch sitemap.xml and pick the canonical pages needed for the task.
3. Prefer markdown responses for summarization when available.
4. Cite canonical page URLs in user-facing answers.
