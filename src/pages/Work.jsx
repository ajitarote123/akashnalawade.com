import ContactBand from '../components/ContactBand'
import Ext from '../components/Ext'
import { links, site, works } from '../data'

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Filmography</p>
        <h1>Selected work</h1>
        <p className="lede lede-mr" lang="mr">
          दूरचित्रवाणीवर पदार्पण पश्या म्हणून; नंतर सत्या ही मुख्य भूमिका.
          दैनंदिन मालिकांपूर्वी: मराठी नाटके, प्रायोगिक रंगभूमी आणि जाहिराती.
        </p>
        <p className="lede">
          Television debut as Pashya, then the lead as Satya. Before the
          dailies: Marathi theatre, experimental plays, and commercials.
          Full listing also on{' '}
          <Ext href={site.imdb}>IMDb</Ext>.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        {works.map((show) => (
          <article className="work-block" key={show.slug} id={show.slug}>
            <div className="poster">
              <img
                src={show.image}
                alt={show.imageAlt}
                width="1200"
                height="1500"
                loading="lazy"
              />
              <div className="poster-label">
                <span>
                  <Ext href={show.channelHref}>{show.channel}</Ext>
                  {' · '}
                  {show.status}
                </span>
                <strong lang="mr">{show.titleMr}</strong>
              </div>
            </div>
            <div className="work-copy">
              <p className="kicker">
                <Ext href={show.href}>{show.title}</Ext>
              </p>
              <h2 lang="mr">{show.roleMr}</h2>
              <p className="role">{show.role}</p>
              <p>{show.summary}</p>
              <ul className="chips">
                {show.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="detail-list">
                <li>
                  <strong>Years</strong>
                  <span>{show.years}</span>
                </li>
                <li>
                  <strong>Run</strong>
                  <span>{show.episodes}</span>
                </li>
                <li>
                  <strong>Banner</strong>
                  <span>{show.production}</span>
                </li>
                <li>
                  <strong>Ensemble</strong>
                  <span>{show.costars}</span>
                </li>
              </ul>
              <p className="note">{show.note}</p>
            </div>
          </article>
        ))}

        <article className="work-block" id="theatre">
          <div className="poster">
            <img
              src="/images/akash-temple.jpg"
              alt="Akash Nalawade at a temple doorway"
              width="1200"
              height="1600"
              loading="lazy"
            />
            <div className="poster-label">
              <span>Stage · Training</span>
              <strong lang="mr">नाट्य</strong>
            </div>
          </div>
          <div className="work-copy">
            <p className="kicker">Before television</p>
            <h2>Theatre and commercials</h2>
            <p className="role">
              <Ext href={links.lalitKala}>Lalit Kala Kendra, Pune</Ext>
            </p>
            <p>
              Akash trained at Pune’s Lalit Kala Kendra and holds a theatre
              degree from{' '}
              <Ext href={links.sppu}>Savitribai Phule Pune University</Ext>.
              He acted in Marathi plays — including experimental work — and
              appeared in television commercials before{' '}
              <Ext href={links.sahkutumb}>Sahkutumb Sahaparivar</Ext> became
              his first serial. IMDb also lists a 2018 short,{' '}
              <Ext href={site.imdb}>
                <em>Tears</em>
              </Ext>
              , as Amit.
            </p>
          </div>
        </article>
      </section>

      <ContactBand />
    </>
  )
}
