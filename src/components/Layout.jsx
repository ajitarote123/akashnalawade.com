import { site } from '../data'

const links = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'about', href: '/about/', label: 'About' },
  { id: 'work', href: '/work/', label: 'Work' },
]

export default function Layout({ page, children }) {
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
          {links.map((link) => (
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
        <p>
          {site.nameMr} · {site.name}
        </p>
        <p className="footer-links">
          <a href={site.instagram} rel="noreferrer" target="_blank">
            Instagram {site.instagramHandle}
          </a>
          <a href={site.facebook} rel="noreferrer" target="_blank">
            Facebook
          </a>
        </p>
        <p>Independent profile compiled from publicly reported interviews and credits.</p>
      </footer>
    </div>
  )
}
