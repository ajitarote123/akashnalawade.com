import Ext from '../components/Ext'
import { site, studio } from '../data'

export default function Credits() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Colophon</p>
        <h1>Credits</h1>
        <p className="lede">
          The official website of {site.name}. Photographs, words, and
          the studio that built the pages.
        </p>
      </section>

      <section className="section legal">
        <h2>Photographs</h2>
        <p>
          Portraits and personal photographs were provided by{' '}
          {site.name} for this site. The vintage-car still is by Nilesh
          Bramhane. Television and film stills on the Work page come from
          coverage of Sahkutumb Sahaparivar, Sadhi Manasa, and Rivanawayali.
        </p>

        <h2>Words</h2>
        <p>
          Biography and credits follow interviews, Star Pravah coverage,
          series pages, and {site.name}’s own notes. Short quoted lines
          are attributed on the page where they appear.
        </p>

        <h2>Design and development</h2>
        <div className="studio-card">
          <a
            href={studio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="studio-brand"
          >
            <img
              src={studio.logo}
              alt={`${studio.name} Monogram`}
              width="44"
              height="44"
              className="studio-logo"
            />
            <div>
              <strong>{studio.name}</strong>
              <span>Bespoke Digital Portfolios</span>
            </div>
          </a>
        </div>
        <p>
          This website is designed and developed by{' '}
          <Ext href={studio.url}>{studio.name}</Ext>.
        </p>
        <ul className="credit-contacts">
          <li>
            <strong>Studio</strong>
            <Ext href={studio.url}>{studio.url.replace('https://', '').replace(/\/$/, '')}</Ext>
          </li>
          <li>
            <strong>Email</strong>
            <a href={studio.emailHref}>{studio.email}</a>
          </li>
          <li>
            <strong>Phone</strong>
            <a href={studio.phoneHref}>{studio.phone}</a>
          </li>
          <li>
            <strong>WhatsApp</strong>
            <Ext href={studio.whatsapp}>Chat on WhatsApp</Ext>
          </li>
          <li>
            <strong>Instagram</strong>
            <Ext href={studio.instagram}>{studio.instagramHandle}</Ext>
          </li>
        </ul>

        <h2>Akash</h2>
        <p>
          Events and collaborations:{' '}
          <a href={site.emailHref}>{site.email}</a>
        </p>
      </section>
    </>
  )
}
