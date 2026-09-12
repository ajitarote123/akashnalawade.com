import Ext from './Ext'
import { site } from '../data'

export default function ContactBand({ id = 'contact' }) {
  return (
    <section className="contact-band" id={id}>
      <p className="kicker">Events &amp; collaborations</p>
      <h2>Write to Akash</h2>
      <p lang="mr">कार्यक्रम आणि सहकार्यासाठी थेट पत्र.</p>
      <p>
        For inaugurations, ribbon cuttings, appearances, and brand
        collaborations, email <a href={site.emailHref}>{site.email}</a>.
        Instagram remains open for public messages.
      </p>
      <div className="actions">
        <a className="btn btn-primary" href={site.emailHref}>
          {site.email}
        </a>
        <Ext className="btn btn-ghost" href={site.instagram}>
          Instagram {site.instagramHandle}
        </Ext>
      </div>
    </section>
  )
}
