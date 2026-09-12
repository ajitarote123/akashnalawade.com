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
          Bramhane. Television stills used on the Work page come from
          public press coverage of Sahkutumb Sahaparivar and Sadhi
          Manasa.
        </p>

        <h2>Words</h2>
        <p>
          Biography and credits follow interviews, Star Pravah coverage,
          series pages, and {site.name}’s own notes. Short quoted lines
          are attributed on the page where they appear.
        </p>

        <h2>Design and development</h2>
        <p>
          This website is designed and developed by{' '}
          <Ext href={studio.url}>{studio.name}</Ext>.
        </p>
        <ul className="credit-contacts">
          <li>
            <strong>Studio</strong>
            <Ext href={studio.url}>{studio.url.replace('https://', '')}</Ext>
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
