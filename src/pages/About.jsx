import { useCallback, useEffect, useState } from 'react'
import Ext from '../components/Ext'
import { appearances, facts, gallery, links, site, timeline } from '../data'

export default function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null)
  }, [])

  const showNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length)
  }, [])

  const showPrev = useCallback(() => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }, [])

  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex, closeLightbox, showNext, showPrev])
  return (
    <>
      <section className="page-hero about-split">
        <div className="about-photo">
          <img
            src={site.images.studio}
            alt={site.images.studioAlt}
            width="1400"
            height="2330"
          />
        </div>
        <div>
          <p className="kicker">Biography</p>
          <h1 lang="mr">आकाश नलावडे</h1>
          <p className="english-name">From Pune theatre to television and cinema</p>
          <p className="lede lede-mr" lang="mr">
            आकाश नलावडे यांचा जन्म ८ सप्टेंबर १९९१ रोजी पुण्यात झाला.
            चित्रपटसृष्टीतील कुटुंबाचा आधार नसताना त्यांनी ललित कला केंद्रात
            अभिनयाचे शिक्षण घेतले, मराठी रंगभूमीवर काम केले आणि
            दूरचित्रवाणीवर पश्या म्हणून ओळख निर्माण केली. त्यानंतर ‘साधी
            माणसं’मध्ये सत्या ही मुख्य भूमिका त्यांनी साकारली.
          </p>
          <p className="lede">
            Akash Nalawade is a Marathi actor born in{' '}
            <Ext href={links.pune}>Pune</Ext> on 8 September 1991. Without an
            industry family behind him, he trained in acting at Lalit Kala
            Kendra,{' '}
            <Ext href={links.sppu}>Savitribai Phule Pune University</Ext>,
            worked on the Marathi stage, and broke through on television as
            Pashya — then took the lead as Satya in{' '}
            <Ext href={links.sadhiManasa}>Sadhi Manasa</Ext>.
          </p>
        </div>
      </section>

      <section className="section">
        <dl className="facts">
          {facts.map((item) => (
            <div className="fact" key={item.label}>
              <dt>{item.label}</dt>
              <dd>
                {item.href ? <Ext href={item.href}>{item.value}</Ext> : item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Portraits</h2>
          <p>Photographs from his own collection.</p>
        </div>
        <div className="gallery">
          {gallery.map((shot, index) => (
            <figure
              key={shot.src}
              className="gallery-item"
              role="button"
              tabIndex={0}
              aria-label={`View full portrait: ${shot.caption}`}
              onClick={() => setActiveImageIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveImageIndex(index)
                }
              }}
            >
              <div className="gallery-frame">
                <img
                  className={`pose-${shot.pose}`}
                  src={shot.src}
                  alt={shot.alt}
                  width="800"
                  height="1000"
                  loading="lazy"
                  style={shot.objectPosition ? { objectPosition: shot.objectPosition } : undefined}
                />
                <span className="gallery-zoom-badge" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
              </div>
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Journey</h2>
          <p>
            From school in <Ext href={links.pune}>Pune</Ext> to{' '}
            <Ext href={links.starPravah}>Star Pravah</Ext>.
          </p>
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

      <section id="off-camera" className="section">
        <div className="section-head">
          <h2>Off camera</h2>
          <p>With Ruchika Dhuri and their son, Adhiraj.</p>
        </div>
        <div className="family-panel">
          <figure className="couple-frame">
            <img
              src={site.images.family}
              alt={site.images.familyAlt}
              width="765"
              height="1024"
              loading="lazy"
            />
            <figcaption>Ruchika, Adhiraj, and Akash</figcaption>
          </figure>
          <div className="family-copy">
            <p className="kicker">Family</p>
            <h3>Ruchika and Adhiraj</h3>
            <p>
              He married actress and model Ruchika Dhuri on 18 March 2023,
              after their engagement in 2022. Colleagues from{' '}
              <Ext href={links.sahkutumb}>Sahkutumb Sahaparivar</Ext> were
              among those present at the wedding.
            </p>
            <p>
              In 2026 the couple welcomed a son, Adhiraj. They keep family
              life largely private, sharing a few photographs — including
              this temple visit — with the people who follow his work.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>Recognition</h2>
          <p>Awards and the first lead, as reported.</p>
        </div>
        <div className="timeline">
          {appearances.map((item) => (
            <article key={`${item.year}-${item.title}`}>
              <time>{item.year}</time>
              <div>
                <h3>
                  <Ext href={item.href}>{item.title}</Ext>
                </h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="enquiry-box" id="enquire">
        <p className="kicker">Appearances</p>
        <h2>Enquiries</h2>
        <p>
          For public appearances and brand associations, write to{' '}
          <a href={site.emailHref}>{site.email}</a>.
        </p>
      </section>

      {activeImageIndex !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Portrait Viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox-btn lightbox-close"
            onClick={closeLightbox}
            aria-label="Close portrait viewer"
          >
            ✕
          </button>

          <button
            type="button"
            className="lightbox-btn lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous portrait"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="lightbox-img"
              src={gallery[activeImageIndex].src}
              alt={gallery[activeImageIndex].alt}
            />
            <div className="lightbox-meta">
              <span className="lightbox-caption">
                {gallery[activeImageIndex].caption}
              </span>
              <span className="lightbox-counter">
                {activeImageIndex + 1} of {gallery.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-btn lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next portrait"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
