# Akash Nalawade

Static three-page Vite + React site for [akashnalawade.com](https://akashnalawade.com). No Node server is required in production.

## Pages

- `/` — Home
- `/about/` — Biography
- `/work/` — Television and theatre credits

## Local

```bash
npm install
npm run dev
```

## Publish on shared Linux hosting

1. `npm run build`
2. Upload **everything inside** `dist/` (not the folder itself) into `public_html` (or the domain document root).
3. Keep folder structure: `index.html`, `about/index.html`, `work/index.html`, `assets/`, `.htaccess`.

Apache will serve `/about/` and `/work/` as real directories. This is a multi-page static build, so PHP or Node is not needed.

## Notes

Credits follow publicly reported interviews, Star Pravah coverage, and series Wikipedia pages. The site is an independent profile, not an official management page.
