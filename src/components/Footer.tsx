import { useRef } from "react";
export function Footer() {
  const privacyRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <footer>
        <div className="footer-top">
          <a href="#" className="footer-brand">
            <img
              src={import.meta.env.BASE_URL + "images/logo.webp"}
              alt="Yumberry Bowl"
              width="100"
              height="79"
            />
          </a>
          <p>
            Yumberry Bowl
            <br />
            Franchise Opportunities
          </p>
          <a
            href="https://www.yumberrybowl.com/"
            target="_blank"
            rel="noopener"
          >
            Visit YumberryBowl.com →
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Yumberry Bowl</span>
          <button
            className="plain"
            id="privacy-open"
            onClick={() => privacyRef.current?.showModal()}
          >
            Inquiry privacy
          </button>
          <span>Client review preview · Design revision 03</span>
        </div>
        <p className="legal">
          For informational purposes only. This is not an offer to sell a
          franchise or a solicitation to buy one. Franchise offerings are made
          through a Franchise Disclosure Document and are subject to applicable
          registration or exemption requirements. Eligibility, locations, terms,
          and support must be confirmed with Yumberry Bowl.
        </p>
        <details className="review">
          <summary>Client review notes</summary>
          <p>
            Before public launch: Yumberry’s franchise team and legal counsel
            must approve all franchise offering content and any financial
            performance representations. No financial figures or earnings claims
            are included. Confirm current support scope, storefront/mobile
            specifications, territory availability, contact details, and the
            final privacy policy. Connect and test the approved form service
            before enabling direct submissions. This preview uses an explicit
            email-draft handoff and links to the existing Wix form.
          </p>
          <p>
            Content references:{" "}
            <a href="https://yumberrybowl.wixsite.com/franchising">
              Existing franchise site
            </a>{" "}
            · <a href="https://www.yumberrybowl.com/">Brand website</a> ·{" "}
            <a href="https://yumberry.weebly.com/franchise-support.html">
              Published franchise support
            </a>
            . Photography and logo are from Yumberry’s websites. Review reuse
            rights before public launch.
          </p>
        </details>
      </footer>
      <dialog id="privacy" ref={privacyRef}>
        <button
          className="plain close"
          onClick={() => privacyRef.current?.close()}
          aria-label="Close privacy notice"
        >
          ✕
        </button>
        <h2>About your inquiry</h2>
        <p>
          This preview does not transmit or save form entries. Preparing an
          inquiry creates an email link in your browser. Nothing is sent until
          you open your email app and send it yourself.
        </p>
        <p>
          The existing Yumberry form is hosted separately and its own data
          handling applies. A final company-approved privacy policy and form
          service are required before direct submissions are enabled here.
        </p>
        <button
          className="button close"
          onClick={() => privacyRef.current?.close()}
        >
          Got it
        </button>
      </dialog>
    </>
  );
}
