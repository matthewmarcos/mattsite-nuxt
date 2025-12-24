# Important Config Files

- `nuxt.config.js` - core Nuxt setup (static target, global head, CSS, modules). Includes `@nuxt/content`, `@nuxt/image`, SVG loader config, PostCSS with Tailwind, and a router override that filters out `/blog` routes.
- `tailwind.config.js` - Tailwind setup and content scanning paths.
- `.eslintrc.js` / `.prettierrc` - linting/formatting rules.
- `tsconfig.json` - TypeScript compiler options and path aliases (`~` and `@`).
- `netlify.toml` - Netlify build config: `npm run generate`, publish `dist/`, Node 14 env, security headers, catch-all redirect to `index.html`.
- `Makefile` - shortcut targets for setup, dev, lint, build, clean.
- `package.json` - npm scripts and JS dependencies (Nuxt 2, Tailwind, @nuxt/content, ESLint/Prettier, TypeScript tools).
- `pyproject.toml` / `tools/*.py` - Poetry-managed helpers for downloading/processing icons and favicons.

