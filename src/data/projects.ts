export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  links?: {
    label: string;
    href: string;
  }[];
  status: 'active' | 'archived' | 'wip';
}

export const projects: Project[] = [
  {
    name: 'ArticleCast',
    description: 'An audio-first mobile app that turns articles and PDFs into a podcast-style listening queue, with share-sheet capture, TTS manifests, saved playback state, and native iOS/Android builds.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Express', 'SQLite'],
    url: 'https://www.articlecast.ai/',
    links: [
      { label: 'site', href: 'https://www.articlecast.ai/' },
      { label: 'app-store', href: 'https://apps.apple.com/us/app/articlecast-ai-podcast/id6748893275' },
    ],
    status: 'active',
  },
  {
    name: 'Hyrox Champ',
    description: 'A Garmin Connect IQ watch app for HYROX-style training, with button-first workout control, custom run/station workouts, live pace and heart-rate views, and FIT lap export to Garmin Connect.',
    tech: ['Monkey C', 'Garmin Connect IQ', 'FIT', 'GPS'],
    url: 'https://github.com/ahishek/hyrox-watch-app',
    links: [
      { label: 'source', href: 'https://github.com/ahishek/hyrox-watch-app' },
    ],
    status: 'active',
  },
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
