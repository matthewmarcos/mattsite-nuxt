# Common Commands

## npm scripts (`package.json`)
- `npm run dev` - start Nuxt dev server.
- `npm run build` - production build.
- `npm start` - serve production build.
- `npm run generate` - generate static site to `dist/`.
- `npm run deploy` - generate, then `netlify deploy` (preview).
- `npm run deploy:prod` - generate, then `netlify deploy --prod`.
- `npm run format` / `npm run format:check` - Prettier format/check.
- `npm run lint` / `npm run lint:fix` - ESLint check/fix.
- `npm run type-check` - TypeScript type check via `vue-tsc`.
- `npm run validate` - run format check, lint, type-check.

## Make targets (`Makefile`)
- `make setup` - `npm install`.
- `make dev` - `npm run dev`.
- `make lint` - format + validate.
- `make build` - `npm run build`.
- `make clean` - remove `node_modules`, `.nuxt`, `dist`, `.cache`.

