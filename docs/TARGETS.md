# Future targets

Roadmap to the **final** personal site: SEO-friendly, mobile-friendly, static on shared Linux hosting.

Check boxes when shipped, and add a matching DONE entry. Reorder only if priority changes — do not delete completed items.

## Final definition of done

The site is final when a phone-sized browser and a crawler can both use it well:

- [ ] Lighthouse (mobile): Performance, SEO, Best Practices, Accessibility each ≥ 90
- [x] `/`, `/about/`, `/work/` have unique title, description, canonical, and social preview tags
- [x] `/terms/`, `/credits/`, `/sitemap/` exist with unique meta and footer links
- [x] `robots.txt` + `sitemap.xml` present in `dist/`
- [x] Home HTML includes JSON-LD `Person` / `WebSite` for Akash Nalawade
- [x] No horizontal scroll at 320px; nav and CTAs meet 44px tap targets
- [x] `npm run build` output is the only deploy artifact; documented in README

## SEO

- [x] Canonical URLs on all three HTML entries (`https://akashnalawade.com/…`)
- [x] Open Graph + Twitter card tags + a dedicated `og` image (1200×630)
- [x] `public/robots.txt` and `public/sitemap.xml`
- [x] JSON-LD Person (name, job, sameAs Instagram, known works)
- [x] Semantic heading order (one `h1` per page; serial titles not competing)
- [ ] `hreflang` or in-page Marathi/English if a language toggle is added
- [x] Descriptive `alt` on any real photos; do not use empty decorative photos as content

## Mobile and accessibility

- [x] Increase nav/footer tap targets; test 320 / 390 / 768 widths
- [x] Sticky header does not hide the first heading
- [x] Focus styles on links and buttons; skip-link remains
- [x] `prefers-reduced-motion` for scroll/animation
- [x] Contrast check gold-on-maroon and muted body text
- [ ] Optional: compact header on scroll (must stay keyboard-accessible)

## Content and pages

- [x] Replace monogram hero with approved stills/headshot when provided (do not generate a likeness)
- [x] Richer Marathi intro on Home and About
- [x] Contact / booking section (Instagram + optional mailto) if requested
- [x] Official footer: copyright, credits, quick links; events email on Home and About
- [x] Keep `src/data.js` as the only credits list; add new shows there first
- [x] Swap in the 10 Sep 2026 WhatsApp album once the actual image files are exported (zip was chat text only)

## Performance (static hosting)

- [ ] Subset or self-host fonts; avoid unused Google Font weights
- [ ] Compress hero/og images (WebP/AVIF) with width `srcset` if photos are added
- [x] Confirm JS bundle stays acceptable for a 3-page brochure (split only if needed)

## Launch

- [x] README deploy steps match the host (document root, `.htaccess`, 404)
- [ ] Smoke-test live URLs after first upload
- [ ] Submit sitemap in Google Search Console when the domain is live
