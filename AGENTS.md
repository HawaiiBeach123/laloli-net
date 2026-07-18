<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- Quick, project-specific notes for coding agents -->

- Project facts (source: `package.json`, `tsconfig.json`):
  - Next.js: 16.2.9 (non-standard/next-specific behaviours possible)
  - React: 19.2.4
  - TypeScript: project is TypeScript-first with `"strict": true` in `tsconfig.json`.
  - Path alias: `@/*` -> `./src/*` (see `tsconfig.json`)

- Architecture & important files to inspect before editing:
  - App router: source lives under `src/app/`. Each route folder contains `page.tsx` (e.g. `src/app/about/page.tsx`).
  - Root layout: `src/app/layout.tsx` (uses a client wrapper `src/app/ClientLayout.tsx`).
  - Client components must use the `"use client"` directive (examples: `src/app/ClientLayout.tsx`, `src/lib/i18n.tsx`).
  - Shared components: `src/components/` (e.g. `Header.tsx`, `Footer.tsx`) and associated CSS modules (`Header.module.css`, `Footer.module.css`).
  - Context/provider example: `src/lib/i18n.tsx` demonstrates a lightweight i18n provider (locale state + `t` helper).
  - Static/public assets: `public/` and `public/images/`.
  - ESLint config: `eslint.config.mjs` (project uses `eslint-config-next` presets).
  - `next.config.ts` is present but currently minimal — check here before changing framework-level features.

- Workflow & commands (use these exact npm scripts):
  - Development: `npm run dev` (alias: `yarn dev`, `pnpm dev`, `bun dev` as noted in `README.md`).
  - Build: `npm run build` → `next build`.
  - Start (production): `npm run start` → `next start`.
  - Lint: `npm run lint` (runs `eslint`). CI or automation may expect this script to exist.

- Conventions and quick rules for patches:
  - Preserve server/client component boundaries. If you add state, effects, or hooks, the file must include `"use client"` at the top.
  - Keep route files under `src/app` and use folder-per-route with `page.tsx`. Avoid adding pages under the legacy `pages/` directory.
  - Use the path alias imports (example: `import Header from '@/components/Header'`). Do not mix relative imports across the repo when an alias exists.
  - CSS modules are used per-component/page (e.g., `page.module.css` colocated with `page.tsx`). Respect the naming pattern when adding styles.
  - Type definitions are encouraged — many core files use typed props (see `src/app/layout.tsx` metadata typing).

- Debugging notes for agents:
  - If runtime behavior differs from your training data, check `node_modules/next/dist/docs/` as the top-line warning suggests.
  - For import/alias errors, verify `paths` in `tsconfig.json` and the resolved output from the TypeScript server.
  - Lint issues are surfaced via `npm run lint`. Use `eslint --fix` locally if you need to auto-fix style issues, but do not alter `eslint.config.mjs` without reason.

- Examples from this codebase to reference in PRs/edits:
  - Client wrapper and provider: `src/app/ClientLayout.tsx` (wraps `Header`, `Footer`, and `I18nProvider`).
  - I18n provider: `src/lib/i18n.tsx` (shows pattern for a tiny client-side context).
  - Layout metadata typing: `src/app/layout.tsx` (uses `Metadata` from `next`).

<!-- END:nextjs-agent-rules -->
