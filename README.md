# AI Tinkerer's Blog

A personal blog built with Nuxt.js and Tailwind CSS, featuring AI-generated content and tech explorations. This blog serves as a platform for sharing insights about AI, data engineering, and tech experiments.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📝 Markdown-based blog posts
- 🌙 Dark mode support
- 🖼️ Image optimization with Nuxt Image
- 🔍 SEO-friendly
- ⚡ Fast page loads with static generation
- 🤖 AI-generated content integration

## Tech Stack

- **Frontend**: Nuxt.js, Vue 2, Tailwind CSS
- **Content**: Nuxt Content module
- **Styling**: Tailwind CSS with Typography plugin
- **Deployment**: Netlify
- **Tools**: Python scripts for asset management

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Python 3.8+
- Poetry (Python package manager)
- Netlify CLI (optional, for deployment)

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
