# Repetitive task checklists

Copy the relevant list when doing the job. Tick in the working copy; do not leave stale ticks in git unless the process itself changed.

## Update biography or a serial credit

1. [ ] Confirm the fact from a public source (news, Wikipedia series page, official channel)
2. [ ] Edit `src/data.js` only (or add a field there, then bind it in a page)
3. [ ] Check Home cards, About timeline, and Work blocks still read correctly
4. [ ] `npm run build` — no errors
5. [ ] Log the source in `docs/DONE.md`

## Add a static page

1. [ ] `pagename/index.html` — unique title, description, `data-page="pagename"`
2. [ ] `src/pages/Pagename.jsx`
3. [ ] Register in `src/App.jsx` and `vite.config.js` input
4. [ ] Link in `src/components/Layout.jsx`
5. [ ] Trailing-slash rule in `public/.htaccess` if needed
6. [ ] Add the URL to `public/sitemap.xml`
7. [ ] Update `docs/TARGETS.md` and `docs/DONE.md`

## Release to shared Linux hosting

1. [ ] `npm run build`
2. [ ] Upload **contents** of `dist/` to `public_html` (do not upload `docs/`)
3. [ ] Keep `about/`, `work/`, `assets/`, `.htaccess`, `favicon.svg`
4. [ ] Open `/`, `/about/`, `/work/` on phone and desktop
5. [ ] Confirm 404 falls back to the custom page or home
6. [ ] Note the deploy date in `docs/DONE.md`

## SEO pass (repeat before calling the site final)

1. [ ] Titles and descriptions unique and accurate
2. [ ] Canonical + og tags match the live host
3. [ ] `robots.txt` and `sitemap.xml` in `dist/`
4. [ ] JSON-LD validates (Person name, url, sameAs)
5. [ ] Mobile Lighthouse SEO + Accessibility ≥ 90
