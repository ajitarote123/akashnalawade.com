import { site } from '../data'

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <p className="kicker">Legal</p>
        <h1>Terms of use</h1>
        <p className="lede">
          This is the official website of {site.name} ({site.nameMr}). By
          using akashnalawade.com you agree to the terms below.
        </p>
      </section>

      <section className="section legal">
        <h2>The site</h2>
        <p>
          akashnalawade.com is published for {site.name} as his official
          public presence. It is provided for information, press, and
          polite enquiry. It is not a booking portal and does not accept
          payments.
        </p>

        <h2>Use</h2>
        <p>
          You may browse, share links, and quote short passages with
          attribution to this site. You may not copy the design, scrape
          the pages, or republish photographs, text, or marks as your own
          without written permission.
        </p>

        <h2>Photographs and name</h2>
        <p>
          Likeness, name, and photographs on this site belong to{' '}
          {site.name} or to photographers he has credited. They are not
          stock. Do not use them for advertising, merchandising, or
          training data without consent.
        </p>

        <h2>Enquiries</h2>
        <p>
          Events and collaborations go to{' '}
          <a href={site.emailHref}>{site.email}</a>. Public notes may also
          be sent on Instagram. We do not guarantee a reply.
        </p>

        <h2>Accuracy</h2>
        <p>
          Credits and dates are kept with care. Serial episode counts and
          press details can shift. If something is wrong, write to the
          events address and it will be reviewed.
        </p>

        <h2>Liability</h2>
        <p>
          The site is offered as-is. {site.name} and the studio that
          built it are not liable for losses from use or inability to
          use the pages, including third-party links that leave this
          domain.
        </p>

        <h2>Law</h2>
        <p>
          These terms are governed by the laws of India. Courts in Pune,
          Maharashtra have jurisdiction.
        </p>

        <p className="note">Last updated 12 September 2026.</p>
      </section>
    </>
  )
}
