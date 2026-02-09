export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  status: 'active' | 'archived' | 'wip';
}

export const projects: Project[] = [
  {
    name: 'nairabhi.com',
    description: 'This very website. Built it with Astro and a terminal theme because I miss my engineering days. Has a Human/Agent toggle because why not.',
    tech: ['Astro', 'React', 'TypeScript'],
    url: 'https://nairabhi.com',
    status: 'active',
  },
  {
    name: 'card-stack',
    description: 'A weekend project to visualize how credit card transaction flows work. Turns out, explaining payments is harder than building them.',
    tech: ['React', 'D3.js'],
    status: 'wip',
  },
  {
    name: 'prd-generator',
    description: 'An AI-powered PRD generator that I built to automate myself out of a job. Work in progress. My manager doesn\'t know yet.',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    status: 'wip',
  },
  {
    name: 'startup-graveyard',
    description: 'A memorial site for all the startups that didn\'t make it. Based on personal experience.',
    tech: ['Next.js', 'MDX'],
    status: 'archived',
  },
];
