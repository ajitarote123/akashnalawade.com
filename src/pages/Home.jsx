import { site, works } from '../data'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Star Pravah · Theatre · Pune</p>
          <h1 lang="mr">आकाश नलावडे</h1>
          <p className="english-name">Akash Nalawade</p>
          <p className="lede lede-mr" lang="mr">
            मराठी दूरचित्रवाणी अभिनेता. स्टार प्रवाहाच्या ‘सहकुटुंब
            सहपरिवार’मध्ये पश्या म्हणून घराघरात पोहोचले; नंतर ‘साधी
            माणसं’मध्ये सत्या ही मुख्य भूमिका साकारली. पुण्यात नाट्यशिक्षण
            घेतलेला कलाकार.
          </p>
          <p className="lede">
            Marathi television actor known to households as Pashya in
            Sahkutumb Sahaparivar, and later as Satya, the lead of Sadhi
            Manasa. A Pune-trained theatre actor who moved from a beloved
            supporting part to the hero of a daily.
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
        <div className="portrait">
          <img
            src={site.images.hero}
            alt={site.images.heroAlt}
            width="1200"
            height="1500"
            fetchPriority="high"
          />
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
              href={`/work/#${show.slug}`}
              key={show.slug}
            >
              <div className="card-media">
                <img
                  src={show.image}
                  alt={show.imageAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                />
              </div>
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

      <section className="contact-band" id="contact">
        <p className="kicker">Events</p>
        <h2>Contact</h2>
        <p lang="mr">
          कार्यक्रम, शुभेच्छा आणि संदेशासाठी सार्वजनिक इन्स्टाग्राम.
        </p>
        <p>
          For events and messages, write to him on Instagram. This site is
          an independent profile, not a booking office.
        </p>
        <div className="actions">
          <a
            className="btn btn-primary"
            href={site.instagram}
            rel="noreferrer"
            target="_blank"
          >
            Instagram {site.instagramHandle}
          </a>
        </div>
      </section>
    </>
  )
}
