# Repo Overview

Short guide to how the Nuxt 2 blog in this repo is organized.

## Directory map (high-level)
- `assets/` - global styles (`css/main.css`), images, tech logos, icons.
- `components/` - shared Vue components (cards, header/footer, timeline, blog item).
- `content/` - markdown blog posts consumed by `@nuxt/content`.
- `data/` - site metadata, menus, and project lists.
- `layouts/` - `default.vue` shell wrapping all pages.
- `pages/` - Nuxt page entrypoints (home, projects, blog list/detail).
- `plugins/` - client plugins (e.g., `prism.js` for syntax highlighting).
- `static/` - public static assets served as-is (favicon, author photo).
- `store/` - placeholder for Vuex store modules.
- `tools/` - helper scripts for logos/favicons conversion and downloads.
- Root configs: `nuxt.config.js`, `tailwind.config.js`, `.eslintrc.js`, `.prettierrc`, `tsconfig.json`, `netlify.toml`.

## Page entry points
- Home: `pages/index.vue`
- Projects: `pages/projects.vue`
- Blog list: `pages/blog/index.vue`
- Blog detail: `pages/blog/_slug.vue`
- Layout shell: `layouts/default.vue`
- Global styles: `assets/css/main.css`
- Prism syntax highlighting: `plugins/prism.js`

## Routing note
`nuxt.config.js` currently filters out routes starting with `/blog` in `router.extendRoutes` to temporarily disable blog pages. Remove that filter to re-enable blog routes.

