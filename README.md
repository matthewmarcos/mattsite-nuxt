# matthewmarcos.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fb944e9-c6ee-4749-a8ff-f7a326bccbe0/deploy-status)](https://app.netlify.com/projects/mattsite/deploys)

Personal site and blog. Nuxt 2 + Tailwind, statically generated, deployed to Netlify.

## Features

- Markdown-based posts via Nuxt Content
- Dark mode
- Static generation

## Tech Stack

- **Frontend**: Nuxt.js, Vue 2, Tailwind CSS
- **Content**: Nuxt Content module
- **Styling**: Tailwind CSS with Typography plugin
- **Deployment**: Netlify

## Prerequisites

- Node.js 18 (see `.nvmrc`) — Nuxt 2 / webpack 4 do not build on Node 20+
- npm
- Netlify CLI (for deployment — this site is deployed manually, not via git)

## Setup Instructions

### Frontend Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to the project directory:

```bash
cd your-repo
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Access the blog at `http://localhost:3000`.

### Steps for committing changes

1. Create a new branch
2. Make changes
3. Run `npm run format` to format the code
4. Commit changes
5. Push changes
6. Create a pull request

### Deployment with Netlify

1. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Deploy the site:

```bash
netlify deploy
```

3. Follow the prompts to complete the deployment.

4. Access your deployed site at the provided URL.

### Creating New Posts

1. Create a new Markdown file in the `content/articles` directory.
2. Add frontmatter at the top of the file:

```markdown
---
title: Your Post Title
tags: tag1, tag2
date: YYYY-MM-DD
description: Brief description of your post
image: url-to-cover-image
author: Your Name
draft: false
---
```
