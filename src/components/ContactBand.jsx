import Ext from './Ext'
import { site } from '../data'

export default function ContactBand({ id = 'contact' }) {
  return (
    <section className="contact-band" id={id}>
      <p className="kicker">Appearances</p>
      <h2>Enquiries</h2>
      <p lang="mr">कार्यक्रम आणि सहकार्यासाठी पत्र.</p>
      <p>
        For public appearances and brand associations, write to{' '}
        <a href={site.emailHref}>{site.email}</a>.
      </p>
      <div className="actions">
        <a className="btn btn-primary" href={site.emailHref}>
          Write
        </a>
        <Ext className="btn btn-ghost" href={site.instagram}>
          Instagram
        </Ext>
      </div>
    </section>
  )
}
