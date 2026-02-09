# nairabhi.com

Personal website for Abhishek Nair. Built with Astro, React, and a retro terminal aesthetic.

## Features

- **Retro terminal theme** — green-on-dark, monospace everything, ASCII art header, scanlines
- **Human/Agent toggle** — switches the entire site between a styled web view and a raw markdown view
- **Markdown blog** — drop a `.md` file in `src/content/blog/`, push, and it's live
- **Side projects showcase** — edit one file to add/remove projects
- **Career timeline** — styled as `git log` output
- **Social links** — GitHub, Twitter/X, LinkedIn, email

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Project Structure

```
src/
├── components/          # Reusable Astro + React components
│   ├── Header.astro     # Terminal-style navigation
│   ├── Footer.astro     # Social links + Human/Agent toggle
│   ├── ViewToggle.tsx   # React island — the toggle switch
│   ├── AsciiArt.astro   # ASCII art name banner
│   └── ...
├── content/blog/        # Blog posts (markdown files)
├── data/projects.ts     # Side projects data
├── layouts/             # Base page layout
├── pages/               # Routes: /, /projects, /about, /blog
└── styles/
    ├── global.css       # Terminal theme
    └── agent-mode.css   # Markdown view overrides
```

## Adding Blog Posts

Create a `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2026-02-15
description: "A short description"
tags: ["tag1", "tag2"]
---

Your content here...
```

Push to GitHub → GitHub Pages auto-deploys.

## Adding Projects

Edit `src/data/projects.ts` and add a new entry to the array:

```ts
{
  name: 'my-project',
  description: 'What it does.',
  tech: ['React', 'Node.js'],
  url: 'https://github.com/ahishek/my-project',
  status: 'active', // 'active' | 'wip' | 'archived'
}
```

## Deploy to GitHub Pages + GoDaddy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: nairabhi.com"
git remote add origin https://github.com/ahishek/nairabhi-web.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The included workflow (`.github/workflows/deploy.yml`) handles the rest
4. Every push to `main` auto-builds and deploys

### 3. Configure Custom Domain in GitHub

1. In **Settings** → **Pages** → **Custom domain**, enter `nairabhi.com`
2. Check **Enforce HTTPS**

### 4. Update GoDaddy DNS

Go to GoDaddy → My Products → DNS for nairabhi.com. Delete any existing A records for `@`, then add:

| Type  | Name  | Value                        | TTL    |
|-------|-------|------------------------------|--------|
| A     | @     | 185.199.108.153              | 600    |
| A     | @     | 185.199.109.153              | 600    |
| A     | @     | 185.199.110.153              | 600    |
| A     | @     | 185.199.111.153              | 600    |
| CNAME | www   | ahishek.github.io            | 1 Hour |

Wait 5-30 minutes for DNS propagation. GitHub auto-provisions SSL.

## Tech Stack

- [Astro](https://astro.build) — Static site framework
- [React](https://react.dev) — Interactive components (Human/Agent toggle)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — Monospace font
- [GitHub Pages](https://pages.github.com) — Hosting
