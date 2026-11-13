import { useEffect, useRef, useState, type FormEvent } from "react";
import { company } from "../content";
import { createInquiryDraft } from "../inquiry";

type ContactProps = {
  territory: string;
  onTerritoryChange: (value: string) => void;
};
export function Contact({ territory, onTerritoryChange }: ContactProps) {
  const [draft, setDraft] = useState("");
  const draftRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (draft) draftRef.current?.focus();
  }, [draft]);
  useEffect(() => {
    setDraft("");
  }, [territory]);
  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDraft(
      createInquiryDraft(new FormData(event.currentTarget), company.email),
    );
  }
  return (
    <section className="section contact" id="contact">
      <div className="contact-copy">
        <div className="eyebrow">FRANCHISE INQUIRY</div>
        <h2>
          Speak with the <br />
          franchise team.
        </h2>
        <p>
          Share your preferred location and questions. We can discuss franchise
          formats, support, requirements, and the next steps in your review.
        </p>
        <div className="contact-details">
          <a href={`mailto:${company.email}`}>{company.email} →</a>
          <a href={company.phoneHref}>{company.phone}</a>
          <span>Grants Pass, Oregon</span>
        </div>
        <a
          className="text-link"
          href={company.inquiryUrl}
          target="_blank"
          rel="noopener"
        >
          Use the existing inquiry form →
        </a>
      </div>
      <form
        id="inquiry"
        onSubmit={prepareInquiry}
        onChange={() => setDraft("")}
      >
        <h3>Request franchise information</h3>
        <p className="form-intro">
          Start with a few details. Fields marked * are required.
        </p>
        <div className="form-grid">
          <label className="full">
            Full name *
            <input
              name="name"
              autoComplete="name"
              required
              placeholder="Your full name"
              maxLength={120}
            />
          </label>
          <label>
            Email address *
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Phone number
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 123-4567"
              maxLength={40}
            />
          </label>
          <label className="full">
            City and state of interest *
            <input
              name="city"
              required
              placeholder="e.g. Bend, Oregon"
              maxLength={200}
            />
          </label>
          <label className="full">
            Preferred franchise location or territory
            <input
              id="territory"
              name="territory"
              value={territory}
              onChange={(event) => onTerritoryChange(event.target.value)}
              placeholder="A neighborhood, region, or format"
              maxLength={250}
            />
          </label>
          <label className="full">
            Additional questions or comments
            <textarea
              name="comments"
              rows={3}
              placeholder="Tell us a little about your plans…"
              maxLength={3000}
            ></textarea>
          </label>
        </div>
        <label className="consent">
          <input type="checkbox" required />
          <span>
            I agree to be contacted by Yumberry Bowl about this inquiry. *
          </span>
        </label>
        <p className="privacy-note">
          Your details stay in this page until you choose to open your email
          app. Review and send the draft there. This website does not submit or
          store your inquiry.
        </p>
        <button className="button" type="submit">
          Prepare email inquiry <span>→</span>
        </button>
        <p id="form-status" role="status">
          {draft &&
            "Your draft is ready. Nothing has been sent. Open it in your email app, then review and send."}
        </p>
        <a
          id="email-draft"
          className="text-link"
          href={draft || undefined}
          hidden={!draft}
          ref={draftRef}
        >
          Open email draft →
        </a>
        <p className="fine">
          Prefer an online submission?{" "}
          <a href={company.inquiryUrl} target="_blank" rel="noopener">
            Visit Yumberry’s existing form.
          </a>
        </p>
      </form>
    </section>
  );
}
