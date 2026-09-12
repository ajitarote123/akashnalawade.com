import { pages, site } from '../data'

export default function Sitemap() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Index</p>
        <h1>Sitemap</h1>
        <p className="lede">
          Every public page on {site.name}’s official website.
        </p>
      </section>

      <section className="section">
        <div className="sitemap-list">
          {pages.map((item) => (
            <a href={item.href} key={item.href}>
              <strong>{item.title}</strong>
              <span>{item.blurb}</span>
            </a>
          ))}
        </div>
        <p className="note">
          Machines can also read{' '}
          <a href="/sitemap.xml">sitemap.xml</a>.
        </p>
      </section>
    </>
  )
}
