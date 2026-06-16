interface CtaStripProps {
  /** Optional supporting paragraph between the heading and the button. */
  blurb?: string;
}

/** Shared closing CTA strip used on Home, About, and Work. */
export default function CtaStrip({ blurb }: CtaStripProps) {
  return (
    <div className="cta-strip" role="complementary">
      <h2>
        Your big idea deserves a voice.<br />Let&apos;s find it.
      </h2>
      {blurb && <p>{blurb}</p>}
      <div className="cta-strip__actions">
        <a className="btn btn--primary" href="/contact">Get in Touch →</a>
      </div>
    </div>
  );
}
