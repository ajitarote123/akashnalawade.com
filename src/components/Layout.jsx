import { nav, site } from '../data'
import Ext from './Ext'

export default function Layout({ page, children }) {
  const year = new Date().getFullYear()

  return (
    <div className="layout">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="/">
          <span className="monogram" aria-hidden="true">
            आ
          </span>
          <span className="brand-text">
            <strong>Akash Nalawade</strong>
            <span>Marathi actor</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary">
          {nav.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={page === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <main id="content">{children}</main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-mark" lang="mr">
              {site.nameMr}
            </p>
            <p className="footer-official">Official website</p>
          </div>
          <div className="footer-links">
            <nav aria-label="Explore">
              <h2>Explore</h2>
              <ul>
                {nav.map((link) => (
                  <li key={link.id}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
                <li>
                  <a href="/work/#contact">Events</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Site">
              <h2>Site</h2>
              <ul>
                <li>
                  <a href="/terms/">Terms</a>
                </li>
                <li>
                  <a href="/credits/">Credits</a>
                </li>
                <li>
                  <a href="/sitemap/">Sitemap</a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Connect">
              <h2>Connect</h2>
              <ul>
                <li>
                  <Ext href={site.instagram}>Instagram</Ext>
                </li>
                <li>
                  <Ext href={site.facebook}>Facebook</Ext>
                </li>
                <li>
                  <a href={site.emailHref}>Enquiries</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-bar">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
