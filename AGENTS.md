# Agent Instructions

Project/tech-stack overview is in [README.md](README.md) — read that first. This file only covers rules and context specific to working here as an agent.

## Hard rules

- **Never `git push`.** Commit only if explicitly asked; push only if explicitly asked, every time — a past push or approval does not carry over.
- **Never run `git commit` on your own initiative either** unless asked. Leave changes uncommitted by default and say so.
- **Never run builds/dev servers unless asked** (`astro build`, `astro dev`, `astro check`, `astro preview`). The user runs these themselves when needed. Exception: you may run `astro check`/`astro build` yourself to verify a change compiles before reporting it done, but don't do it just to "see the site" or as a routine step.
- **No em dashes anywhere in site copy** (blog posts, UI text, bios, anything user-facing). Use commas, periods, or parentheses instead.

## Project context

- Backend for forms (licensing, contact) is a separate Flask repo (`tobeworks_projects/api`), deployed at `api.tobeworks.de`. Not part of this repo.
- Discography data lives in `src/releases.js`; DSP links (Bandcamp/Spotify/Apple/etc.) were populated via a separate scraping tool (`dsp_scraper` repo), not hand-typed — verify before assuming a link is wrong.
- `Modal.vue` is the shared modal component (HeadlessUI `Dialog`, bottom-sheet style, `isOpen`/`@close` props, `<slot />` for content). Reuse it instead of building new modals. Its `DialogPanel` uses `bg-primary-500`/`border-secondary-400`/etc. — numbered color-scale classes that aren't defined in this theme's `@theme` block (`global.css` only defines flat tokens like `--color-primary`, no `-500`/`-400` variants), so they resolve to no background/text color and the dark page background shows through. Any content slotted into it needs explicit light text (`text-on-surface`, `text-primary`), not `text-on-primary` or similar dark tokens.
- Cross-island communication between plain Astro-rendered HTML and a separately-hydrated Vue component (`client:visible`/`client:load`) should not rely on `onMounted` alone reading `sessionStorage` — `client:visible` can hydrate before or after the triggering interaction. Pair a one-time read on mount with a live `window` custom-event listener so it works regardless of hydration timing.
- SVG icons: if a wrapping `<span>`/`<a>` around an SVG has no explicit `display` (defaults to `inline`), Tailwind width/height classes on it are inert. Use `inline-flex`/`inline-block` first.
