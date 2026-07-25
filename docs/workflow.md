# Dev Workflow

## Quick Start

```bash
npm run dev        # local preview at http://localhost:3000 (hot reload)
npm run build      # check for errors, outputs static files to out/
```

## Add Feature

1. Edit `src/app/page.tsx`
2. `npm run dev` to preview changes live
3. `npm run build` to verify no errors

## Deploy

### Auto (recommended)

```bash
git add -A
git commit -m "what changed"
git push origin main
```

Cloudflare Pages auto-deploys from GitHub on every `main` push.

### Manual

```bash
npm run build
npx wrangler@3 pages deploy out --project-name atw-games
```

## Structure

```
src/app/
  page.tsx       # main landing page content
  layout.tsx     # HTML shell, metadata, fonts
  globals.css    # Tailwind imports, theme vars
public/
  screenshots/   # game screenshots (6 files)
  *-01.png       # Steam capsule art
wrangler.toml    # Cloudflare Pages config
next.config.ts   # Next.js config (static export)
```

## Add Screenshots

1. Place new PNG in `public/screenshots/`
2. Add entry to `screenshots` array in `src/app/page.tsx`

## Domain

Custom domain set in Cloudflare Dashboard → Pages → atw-games → Custom domains. Currently using `atwgames.com`.
