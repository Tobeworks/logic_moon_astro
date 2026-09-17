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

### Adding a new release

1. **Get the Bandcamp release ID + cover** with the `bandcamp` CLI (installed globally, source at `/Users/tobe/Sites/python/bandcamp-id/`):
   ```
   bandcamp https://<label>.bandcamp.com/album/<slug>
   ```
   Prints the numeric `release_id` (used for the embedded player) and saves the cover image as `cover_<artist>_<slug or title>.jpg` in the cwd (usually `/tmp`). Copy it into `public/images/covers/`.
2. **Get the other DSP links** with `dsp_scraper` (repo at `/Users/tobe/Sites/logic-moon.de/dsp_scraper`, its own `AGENTS.md` applies there):
   ```
   cd /Users/tobe/Sites/logic-moon.de/dsp_scraper && uv run python3 cli.py <bandcamp_url> --stdout
   ```
   Checks Spotify, Apple Music, Deezer, Amazon Music, SoundCloud, Beatport by fuzzy title/artist match against a confidence threshold.
   **Always spot-check before trusting a match** — false positives happen (e.g. a same-artist match on an unrelated track). Reject: a `matched_title` that doesn't actually match, a `confidence` sitting right at the 70.0 threshold with no artist confirmation, or anything you can't verify (Beatport/Spotify pages often 403 bot-blockers, WebFetch and curl-with-UA included). When in doubt, leave the field off rather than add an unverified link.
3. Add the new entry to `releases.js` (next `id`, `slug`, `cover`, `year`, `release_id`, `title`, `text: ''` unless a bio blurb is warranted, plus whichever platform links survived step 2's check).
4. **Generate the `slug`** with the `slugify(title)` helper exported from `releases.js` (drops the "Artist - " prefix, e.g. `slugify('Logic Moon - The North')` → `'the-north'`):
   ```
   node -e "import('./src/releases.js').then(m => console.log(m.slugify('<title>')))"
   ```
   Check the result doesn't already exist as a `slug` elsewhere in the file — if it does, append `-<id>` to disambiguate (same pattern used for the two existing collisions, `i-see-planets-13` and `debut-47`).
- `Modal.vue` is the shared modal component (HeadlessUI `Dialog`, bottom-sheet style, `isOpen`/`@close` props, `<slot />` for content). Reuse it instead of building new modals. Its `DialogPanel` uses `bg-primary-500`/`border-secondary-400`/etc. — numbered color-scale classes that aren't defined in this theme's `@theme` block (`global.css` only defines flat tokens like `--color-primary`, no `-500`/`-400` variants), so they resolve to no background/text color and the dark page background shows through. Any content slotted into it needs explicit light text (`text-on-surface`, `text-primary`), not `text-on-primary` or similar dark tokens.
- Cross-island communication between plain Astro-rendered HTML and a separately-hydrated Vue component (`client:visible`/`client:load`) should not rely on `onMounted` alone reading `sessionStorage` — `client:visible` can hydrate before or after the triggering interaction. Pair a one-time read on mount with a live `window` custom-event listener so it works regardless of hydration timing.
- SVG icons: if a wrapping `<span>`/`<a>` around an SVG has no explicit `display` (defaults to `inline`), Tailwind width/height classes on it are inert. Use `inline-flex`/`inline-block` first.
