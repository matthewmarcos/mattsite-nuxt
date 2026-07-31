# Deployment (Netlify)

> **This site is NOT connected to git.** Netlify has no repo linked, so pushing to
> GitHub deploys nothing. Every release is a manual CLI deploy of `dist/` — see
> "Deploy steps" below. Site is `mattsite` (`2fb944e9-c6ee-4749-a8ff-f7a326bccbe0`).

## Build output

- Static site generated via `npm run generate` (Nuxt `target: "static"`).
- Generated files emit to `dist/`, which Netlify serves.

## Netlify config

- `netlify.toml`:
  - Build command: `npm run generate`
  - Publish directory: `dist`
  - Environment: `NODE_VERSION = "18"` (only applies if git builds are ever enabled)
  - Redirect: `/* -> /index.html` (SPA-style)
  - Security headers: X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Referrer-Policy

## Deploy steps

Requires Node 18 (`nvm use`) — Nuxt 2 / webpack 4 will not build on Node 20+.

1. Install deps: `npm install`
2. Generate static site: `npm run generate`
3. Deploy (preview): `npx netlify deploy` and select `dist/`
4. Deploy (prod): `npx netlify deploy --prod` (or `npm run deploy:prod` which runs generate + Netlify prod deploy)

## Local preview

After `npm run generate`, you can serve `dist/` locally (e.g., `npx serve dist`) to spot-check before pushing to Netlify.
