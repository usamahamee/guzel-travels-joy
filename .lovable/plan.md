# Migrate to Plain Vite SPA for Vercel

## Heads-up before I start

This is a **structural, one-way migration**. Once done:

- The Lovable editor still works (file edits, preview), but it will no longer auto-generate `routeTree.gen.ts`, no longer have SSR, and no longer support the `_authenticated` / `createFileRoute` / server-function tooling. Future features that need a backend will need Lovable Cloud (Supabase) called from the client, not server functions.
- SEO meta moves from SSR `head()` to **client-side** `react-helmet-async`. Google indexes this fine, but social crawlers (Facebook, Twitter, LinkedIn, WhatsApp) that don't run JS will see only the static `index.html` defaults. To keep rich previews, I'll bake sensible defaults into `index.html` and per-route helmet tags will update for users in-browser.
- The Lovable "Publish" button may stop working as expected since it expects the TanStack Start build output. You'll deploy via Vercel directly (`git push` → Vercel build).

If that's acceptable, here's what I'll do.

## What I'll build

### 1. Toolchain swap
- Remove `@lovable.dev/vite-tanstack-config`, `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-plugin`, `nitro`.
- Add `react-router-dom`, `react-helmet-async`.
- Rewrite `vite.config.ts` to plain `@vitejs/plugin-react` + `@tailwindcss/vite` + `vite-tsconfig-paths`.
- Update `package.json` scripts: `dev`, `build`, `preview` stay; remove `build:dev`.

### 2. App shell
- New `index.html` at project root with brand defaults (title, description, OG, favicon link, JSON-LD Organization).
- New `src/main.tsx` mounting `<App />` inside `<BrowserRouter>` + `<HelmetProvider>` + `<QueryClientProvider>`.
- New `src/App.tsx` with `<Routes>` declaring all 6 pages + a catch-all `*` → NotFound.
- Delete `src/router.tsx`, `src/start.ts`, `src/server.ts`, `src/routeTree.gen.ts`, `src/routes/__root.tsx`, `src/routes/sitemap[.]xml.ts`, `src/routes/README.md`.

### 3. Convert pages
- Move each `src/routes/*.tsx` page body into `src/pages/<Name>.tsx`.
- Replace `createFileRoute(...).head()` with a `<Helmet>` block inside the page returning title/meta/canonical/JSON-LD.
- Swap `import { Link } from "@tanstack/react-router"` → `import { Link } from "react-router-dom"` and `to=` paths stay the same.
- Convert `Header.tsx`, `Footer.tsx`, `FloatingButtons.tsx` Link imports too.
- Build a real 404 page component as the `*` route (keep current branded design).

### 4. Sitemap + robots (static)
- Replace dynamic `src/routes/sitemap[.]xml.ts` with **static** `public/sitemap.xml` listing all 6 routes (canonical `https://guzeltravels.com`).
- `public/robots.txt` stays as-is.

### 5. Vercel config
- Add `vercel.json` at project root:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

- Add `public/_redirects` for Netlify/Cloudflare Pages portability: `/*  /index.html  200`.
- Build output: a single `dist/` folder ready to deploy.

### 6. Verify
- Run `bun run build` and confirm dist/ produces `index.html` + `assets/`.
- Spot-check each route renders, Helmet titles update, deep-link refresh works in preview, sitemap.xml is reachable.

## Deployment to Vercel (you'll do this part)

1. Push the repo to GitHub.
2. Import the repo into Vercel — framework preset: **Vite**, build command: `bun run build` (or `npm run build`), output dir: `dist`.
3. Add the custom domain `guzeltravels.com` in Vercel → Settings → Domains.

## Technical notes

- `tsconfig.json` will be simplified — TanStack Router types removed.
- `eslint.config.js` will likely need TanStack plugin references stripped if present.
- Form (Web3Forms key `faca17cf-949a-49fc-a9d9-f47bed6f957c`), WhatsApp/Call buttons, Testimonials, fonts, colors, all styling — unchanged.

Reply **"go"** to execute, or tell me what to adjust.
