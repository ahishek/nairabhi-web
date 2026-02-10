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
    name: 'ipl-auction',
    description: 'A project to help conduct a live Player auction built for my friends mini-leage. Has AI commentary, Live scout, Multi room support',
    tech: ['React', 'Peer.js'],
    url: 'https://ipl-mock-auctioneer-167669842328.us-west1.run.app/',
    status: 'active',
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
