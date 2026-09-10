import { works } from '../data'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Star Pravah · Theatre · Pune</p>
          <h1 lang="mr">आकाश नलावडे</h1>
          <p className="english-name">Akash Nalawade</p>
          <p className="lede">
            Marathi television actor known to households as Pashya in
            Sahkutumb Sahaparivar, and later as Satya, the lead of Sadhi
            Manasa (साधी माणसं). A Pune-trained theatre actor who moved from
            a beloved supporting part to the hero of a daily.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="/work/">
              View work
            </a>
            <a className="btn btn-ghost" href="/about/">
              About Akash
            </a>
          </div>
          <dl className="stats">
            <div>
              <dt>Debut</dt>
              <dd>2020</dd>
            </div>
            <div>
              <dt>Lead role</dt>
              <dd>2024</dd>
            </div>
            <div>
              <dt>Home</dt>
              <dd>Pune</dd>
            </div>
          </dl>
        </div>
        <div className="portrait" aria-hidden="true">
          <div className="portrait-frame" />
          <div className="portrait-mark">आ</div>
          <p className="portrait-caption">Actor · पश्या · सत्या</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>On screen</h2>
          <p>Two Star Pravah serials that defined his public image.</p>
        </div>
        <div className="cards">
          {works.map((show, index) => (
            <a
              className={`card ${index === 0 ? 'featured' : 'lead'}`}
              href="/work/"
              key={show.slug}
            >
              <p className="meta">
                {show.channel} · {show.years.split('–')[0].trim()}
              </p>
              <h3 lang="mr">{show.titleMr}</h3>
              <p className="role">{show.role}</p>
              <p>{show.summary}</p>
              <span className="more">Read credits →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <blockquote>
          “Pashya received a lot of love. That role took me into people’s
          homes. I hope Satya finds the same love.”
        </blockquote>
        <cite>Akash Nalawade, on taking the lead in Sadhi Manasa</cite>
      </section>
    </>
  )
}
