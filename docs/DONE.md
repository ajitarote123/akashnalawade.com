# Done work

Newest first. Agents append here after each finished task.

## 2026-09-12 — Events on Work; family panel; public appearances

- What: Moved “Write to Akash” from Home to Work (`#contact`). Off Camera is now a two-column family panel (full photograph + family copy only). Events email sits in a separate Events desk box on About. Added an In public section: MATA Sanman 2022, Star Pravah Parivar Puraskar 2022, Sadhi Manasa launch 2024, and temple visits. No press photographs of ribbon cuttings were found; those bookings are named on the events desk instead.
- Files: `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Work.jsx`, `src/components/ContactBand.jsx`, `src/components/Layout.jsx`, `src/data.js`, `src/index.css`, `src/pages/Credits.jsx`
- Result: Family and bookings no longer mix. Footer Events points to `/work/#contact`.

## 2026-09-12 — Official footer, family photo, legal pages

- What: Replaced the low-quality couple still with Akash’s family photograph. Removed “independent profile” disclaimers. Added a four-column official footer (explore, site, connect, copyright). New pages: `/terms/`, `/credits/`, `/sitemap/`. Home contact now leads with `an.events.collaboration@gmail.com`. Quiet gold links on Star Pravah, serial Wikipedia pages, Pune, SPPU, IMDb, Instagram, Facebook, and Mandal Softwares.
- Files: `public/images/akash-family.jpg`, `src/data.js`, `src/pages/*`, `src/components/Layout.jsx`, `src/components/Ext.jsx`, `terms/`, `credits/`, `sitemap/`, `src/index.css`, `vite.config.js`, `public/.htaccess`, `public/sitemap.xml`, `README.md`
- Result: The site reads as Akash’s official site. Credits name Mandal Softwares with phone, WhatsApp, and email.

## 2026-09-12 — Client album + Off Camera crop fix

- What: Replaced press headshots on Home/About/Looks with the eight photos Akash sent (`AkashNalawadePics`). Stopped cropping the Ruchika still: it is now shown full-width with `object-fit: contain` (the source file itself already cuts the hairline). Serial cards still use character stills.
- Files: `public/images/akash-*.jpg`, `src/data.js`, `src/pages/About.jsx`, `src/pages/Work.jsx`, `src/index.css`
- Result: The site’s portraits are his approved set. Off Camera no longer clips the couple in a 5:4 cover box.

## 2026-09-12 — Photos, SEO, mobile, Marathi, contact

- What: Replaced the monogram placeholder with publicity portraits of Akash; added canonical / Open Graph / Twitter / JSON-LD / `robots.txt` / `sitemap.xml`; raised tap targets and contrast; added Marathi intros and an Instagram contact band.
- Files: `public/images/*`, `public/robots.txt`, `public/sitemap.xml`, `public/.htaccess`, `index.html`, `about/index.html`, `work/index.html`, `src/data.js`, `src/pages/*`, `src/components/Layout.jsx`, `src/index.css`, `README.md`
- Result: Home, About, and Work show real photos with alt text; crawlers get unique meta, a 1200×630 `og.jpg`, Person schema, and a sitemap. Nav/footer meet 44px targets.
- Photos used (his likeness; press copies of portraits he circulated — not Wikipedia show posters):
  - Hero / OG / set portrait: TV9 Marathi gallery, Feb 2024 (`Akash-Nalawade-2`, `-1`, `-3`, `-5`)
  - Formal waistcoat + Pashya–Anji still: Marathi Manoranjan Vishwa interview, Nov 2021 (Imgur uploads from that piece)
  - Couple photo: Times of India engagement story, May 2022 (photo he posted)
- Not usable from `pics.zip`: WhatsApp export of 10 Sep 2026 is chat text only (`<image omitted>`). Sixteen client stills still need a media export.

## 2026-09-12 — Move project docs out of `.cursor`

- What: Relocated done-work, targets, and task checklists to `docs/` so Git tracks them and Vite does not ship them.
- Files: `docs/README.md`, `docs/DONE.md`, `docs/TARGETS.md`, `docs/TASKS.md`; rules and `.cursor/README.md` updated to the new paths
- Result: Documentation lives beside the code, not inside the Cursor config folder, and is excluded from `dist/` by staying off `public/` and the HTML entry list.

## 2026-09-12 — Cursor rules and project memory

- What: Added `.cursor/rules` (project, work records, repetitive tasks, SEO, mobile, content) and docs for done work, targets, and task checklists.
- Files: `.cursor/README.md`, `.cursor/rules/*.mdc` (docs later moved to `docs/`)
- Result: Future sessions have a written goal (SEO + mobile final site) and a place to log progress.

## 2026-09-10 — GitHub repository

- What: Initialized `main`, committed the site, created a public GitHub repo and pushed.
- Files: repo at https://github.com/ajitarote123/akashnalawade.com
- Result: Source is versioned and remote-backed.

## 2026-09-10 — First static three-page site

- What: Vite + React multi-page site for shared Linux hosting. Pages: Home, About, Work. Bio and serial credits compiled from public interviews, Star Pravah coverage, and series Wikipedia pages. Apache `.htaccess` for trailing slashes. Basic responsive stacking at 900px / 640px. Per-page titles and meta descriptions.
- Files: `index.html`, `about/index.html`, `work/index.html`, `src/**`, `vite.config.js`, `public/.htaccess`, `public/404.html`, `README.md`
- Result: Upload `dist/` to `public_html` and the three URLs work without Node.

### Known gaps at that ship (see TARGETS)

- No canonical, Open Graph, Twitter cards, JSON-LD, `robots.txt`, or `sitemap.xml`
- No real photography (monogram placeholder)
- Nav tap targets on small screens are below 44px
- Content is English-first; limited Marathi body copy
