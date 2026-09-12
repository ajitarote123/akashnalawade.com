# Akash Nalawade

Official static Vite + React site for [akashnalawade.com](https://akashnalawade.com). No Node server is required in production.

## Pages

- `/` — Home
- `/about/` — Biography
- `/work/` — Television and theatre credits
- `/terms/` — Terms of use
- `/credits/` — Photograph and studio credits
- `/sitemap/` — HTML sitemap

Portraits live in `public/images/` and ship with `dist/`. Credits and photo paths stay in `src/data.js`.

## Local

```bash
npm install
npm run dev
```

## Publish on shared Linux hosting

1. `npm run build`
2. Upload **everything inside** `dist/` (not the folder itself) into `public_html` (or the domain document root).
3. Keep folder structure: `index.html`, `about/`, `work/`, `terms/`, `credits/`, `sitemap/`, `assets/`, `images/`, `robots.txt`, `sitemap.xml`, `.htaccess`.

Apache will serve each folder as a real directory. This is a multi-page static build, so PHP or Node is not needed.

Do not upload `docs/` — it is project notes only and is not part of the build.

## Documentation

Progress notes live in [`docs/`](docs/) (`DONE.md`, `TARGETS.md`, `TASKS.md`). They are tracked in Git and are not included in `npm run build`.

## Notes

This is the official website of Akash Nalawade. Events: `an.events.collaboration@gmail.com`. Designed and developed by [Mandal Softwares](https://software.mandal.one/).
