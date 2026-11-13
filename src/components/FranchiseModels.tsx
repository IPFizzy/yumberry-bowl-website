export function FranchiseModels({
  onSelect,
}: {
  onSelect: (format: string) => void;
}) {
  return (
    <section className="section models" id="models">
      <div className="section-heading">
        <div>
          <div className="eyebrow">FRANCHISE MODELS</div>
          <h2>Choose a franchise format.</h2>
        </div>
        <p>
          Discuss your market and operating plans with the team to understand
          which format may be suitable.
        </p>
      </div>
      <div className="model-grid">
        <article className="model storefront">
          <div className="model-art" aria-hidden="true">
            <svg viewBox="0 0 400 180">
              <path d="M100 75h200v95H100zM88 75l22-46h180l22 46"></path>
              <path d="M100 77q20 27 40 0q20 27 40 0q20 27 40 0q20 27 40 0q20 27 40 0M140 30l-10 45m45-45-5 45m40-45 5 45m30-45 10 45M123 115h57v35h-57zm96 55v-55h55v55M85 170h230"></path>
            </svg>
          </div>
          <div className="model-content">
            <div className="eyebrow">FIXED LOCATION</div>
            <h3>Storefront</h3>
            <p>
              Explore a dedicated Yumberry Bowl location and discuss site,
              layout, and local market considerations.
            </p>
            <a
              className="text-link model-link"
              onClick={() => onSelect("Storefront format")}
              href="#contact"
            >
              Explore storefront ownership <span>→</span>
            </a>
          </div>
        </article>
        <article className="model mobile">
          <div className="model-art" aria-hidden="true">
            <svg viewBox="0 0 400 180">
              <path d="M77 56h185v99H77zM262 94h40l28 28v33h-68M295 96v30h34M104 75h125v49H104zM104 130h125M74 155h25m37 0h130m37 0h31"></path>
              <circle cx="118" cy="155" r="19"></circle>
              <circle cx="285" cy="155" r="19"></circle>
              <path d="M90 56V39h158v17"></path>
            </svg>
          </div>
          <div className="model-content">
            <div className="eyebrow">MOBILE FORMAT</div>
            <h3>Mobile</h3>
            <p>
              Explore the mobile format and discuss setup, operating
              requirements, and suitability for your market.
            </p>
            <a
              className="text-link model-link"
              onClick={() => onSelect("Mobile format")}
              href="#contact"
            >
              Explore mobile ownership <span>→</span>
            </a>
          </div>
        </article>
      </div>
      <p className="fine">
        Illustrations represent general formats, not approved specifications.
        Ask the team for current model details, investment requirements, and
        availability.
      </p>
    </section>
  );
}
