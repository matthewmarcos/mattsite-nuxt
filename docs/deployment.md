# Deployment (Netlify)

## Build output
- Static site generated via `npm run generate` (Nuxt `target: "static"`).
- Generated files emit to `dist/`, which Netlify serves.

## Netlify config
- `netlify.toml`:
  - Build command: `npm run generate`
  - Publish directory: `dist`
  - Environment: `NODE_VERSION = "14"`
  - Redirect: `/* -> /index.html` (SPA-style)
  - Security headers: X-Frame-Options, X-XSS-Protection, X-Content-Type-Options, Referrer-Policy

## Deploy steps
1) Install deps: `npm install`
2) Generate static site: `npm run generate`
3) Deploy (preview): `npx netlify deploy` and select `dist/`
4) Deploy (prod): `npx netlify deploy --prod` (or `npm run deploy:prod` which runs generate + Netlify prod deploy)

## Local preview
After `npm run generate`, you can serve `dist/` locally (e.g., `npx serve dist`) to spot-check before pushing to Netlify.

