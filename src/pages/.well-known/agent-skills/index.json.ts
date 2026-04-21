import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { canonical, jsonResponse } from '../../../lib/discovery';

export const prerender = true;

const skillPath = path.join(
  process.cwd(),
  'public',
  '.well-known',
  'agent-skills',
  'site-discovery',
  'SKILL.md',
);

export const GET: APIRoute = async () => {
  const skill = await readFile(skillPath, 'utf8');
  const digest = createHash('sha256').update(skill).digest('hex');

  return jsonResponse({
    $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
    skills: [
      {
        name: 'site-discovery',
        type: 'skill-md',
        description: 'Discover and consume nairabhi.com public pages and machine-readable metadata.',
        url: canonical('/.well-known/agent-skills/site-discovery/SKILL.md'),
        digest: `sha256:${digest}`,
      },
    ],
  });
};
