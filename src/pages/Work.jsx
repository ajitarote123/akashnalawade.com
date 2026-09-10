import { works } from '../data'

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Filmography</p>
        <h1>Selected work</h1>
        <p className="lede">
          Television debut as Pashya, then the lead as Satya. Before the
          dailies: Marathi theatre, experimental plays, and commercials.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        {works.map((show, index) => (
          <article className="work-block" key={show.slug} id={show.slug}>
            <div className={`poster ${index === 0 ? 'one' : 'two'}`}>
              <span>
                {show.channel} · {show.status}
              </span>
              <strong lang="mr">{show.titleMr}</strong>
            </div>
            <div className="work-copy">
              <p className="kicker">{show.title}</p>
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

        <article className="work-block">
          <div className="poster" style={{ background: 'linear-gradient(180deg, #3a2a18, #16100c)' }}>
            <span>Stage · Training</span>
            <strong lang="mr">नाट्य</strong>
          </div>
          <div className="work-copy">
            <p className="kicker">Before television</p>
            <h2>Theatre and commercials</h2>
            <p className="role">Lalit Kala Kendra, Pune</p>
            <p>
              Akash trained at Pune’s Lalit Kala Kendra and holds a theatre
              degree from Savitribai Phule Pune University. He acted in
              Marathi plays — including experimental work — and appeared in
              television commercials before Sahkutumb Sahaparivar became his
              first serial. Individual play titles are not consistently listed
              in public databases; the through-line is stage craft first,
              then the daily soap.
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
