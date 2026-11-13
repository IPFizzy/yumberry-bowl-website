export function Opportunity() {
  return (
    <section className="section opportunity" id="opportunity">
      <div>
        <div className="eyebrow">THE BUSINESS</div>
        <h2>
          The Yumberry <br />
          Bowl concept.
        </h2>
        <p>
          Founded in Grants Pass, Oregon, Yumberry Bowl combines hand-blended
          bowls with customizable menu options and a recognizable brand.
        </p>
        <a
          className="text-link"
          href="https://www.yumberrybowl.com/"
          target="_blank"
          rel="noopener"
        >
          Explore the Yumberry menu <span>→</span>
        </a>
      </div>
      <div className="product-points" aria-label="Explore the concept">
        <details className="concept-detail" open>
          <summary>
            <span className="point-mark">01</span>
            <span>Hand-blended preparation</span>
            <span className="expand" aria-hidden="true">
              +
            </span>
          </summary>
          <p>
            Every bowl is blended by hand, without sorbets or premade bases.
          </p>
        </details>
        <details className="concept-detail">
          <summary>
            <span className="point-mark">02</span>
            <span>Customizable menu</span>
            <span className="expand" aria-hidden="true">
              +
            </span>
          </summary>
          <p>
            Guests can choose from superfood bases and add-ons, alongside
            smoothies and other bowl options.
          </p>
        </details>
        <details className="concept-detail">
          <summary>
            <span className="point-mark">03</span>
            <span>Consistent brand identity</span>
            <span className="expand" aria-hidden="true">
              +
            </span>
          </summary>
          <p>
            Distinctive packaging, menus, and visual materials give your
            business a recognizable Yumberry identity.
          </p>
        </details>
      </div>
    </section>
  );
}
