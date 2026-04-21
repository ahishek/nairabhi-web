export const site = 'https://nairabhi.com';

export const linkHeader = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/html"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</sitemap.xml>; rel="describedby"; type="application/xml"',
].join(', ');

export function canonical(pathname: string) {
  return new URL(pathname, site).toString();
}

export function jsonResponse(data: unknown, contentType = 'application/json; charset=utf-8') {
  return new Response(`${JSON.stringify(data, null, 2)}\n`, {
    headers: {
      'Content-Type': contentType,
    },
  });
}
