import { facts, gallery, site, timeline } from '../data'

export default function About() {
  return (
    <>
      <section className="page-hero about-split">
        <div className="about-photo">
          <img
            src={site.images.formal}
            alt={site.images.formalAlt}
            width="1100"
            height="1400"
          />
        </div>
        <div>
          <p className="kicker">Biography</p>
          <h1 lang="mr">आकाश नलावडे</h1>
          <p className="english-name">From Pune theatre to Marathi television</p>
          <p className="lede lede-mr" lang="mr">
            आकाश नलावडे यांचा जन्म ८ सप्टेंबर १९९१ रोजी पुण्यात झाला.
            चित्रपटसृष्टीतील कुटुंबाचा आधार नसताना त्यांनी ललित कला केंद्रात
            अभिनयाचे शिक्षण घेतले, मराठी रंगभूमीवर काम केले आणि
            दूरचित्रवाणीवर पश्या म्हणून ओळख निर्माण केली. त्यानंतर ‘साधी
            माणसं’मध्ये सत्या ही मुख्य भूमिका त्यांनी साकारली.
          </p>
          <p className="lede">
            Akash Nalawade is a Marathi actor born in Pune on 8 September
            1991. Without an industry family behind him, he trained in
            acting at Lalit Kala Kendra, worked on the Marathi stage, and
            broke through on television as Pashya — then took the lead as
            Satya in Sadhi Manasa.
          </p>
        </div>
      </section>

      <section className="section">
        <dl className="facts">
          {facts.map((item) => (
            <div className="fact" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Looks</h2>
          <p>Publicity stills from the Pashya and Satya years.</p>
        </div>
        <div className="gallery">
          {gallery.map((shot) => (
            <figure key={shot.src}>
              <img
                src={shot.src}
                alt={shot.alt}
                width="800"
                height="1000"
                loading="lazy"
              />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Journey</h2>
          <p>Publicly reported milestones from school in Pune to Star Pravah.</p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.year}>
              <time>{item.year}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Off camera</h2>
        </div>
        <div className="couple">
          <img
            src={site.images.couple}
            alt={site.images.coupleAlt}
            width="1400"
            height="1000"
            loading="lazy"
          />
          <div>
            <p className="lede">
              He married actress and model Ruchika Dhuri on 18 March 2023,
              after their engagement in 2022. In 2026 the couple welcomed a
              son, Adhiraj. For events and messages, his public Instagram is{' '}
              <a href={site.instagram} rel="noreferrer" target="_blank">
                {site.instagramHandle}
              </a>
              .
            </p>
            <p className="note">
              This site is an independent static profile for
              akashnalawade.com. It is not an official management page.
              Dates and credits follow news reports, Star Pravah coverage,
              and Wikipedia series pages.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
