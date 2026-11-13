import { benefits } from "../content";

export function Benefits() {
  return (
    <section className="section benefits" id="why">
      <div className="section-heading">
        <div>
          <div className="eyebrow">FRANCHISEE SUPPORT</div>
          <h2>Why franchise with Yumberry?</h2>
        </div>
        <p>
          Access training, operating resources, and brand materials to support
          your business from planning through day-to-day operations.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article key={benefit.number}>
            <div className="benefit-top">
              <span>{benefit.number}</span>
              <span className="category">{benefit.category}</span>
            </div>
            <h3>{benefit.title}</h3>
            <ul>
              {benefit.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="benefit-bottom">
        <p>
          Based on Yumberry’s published franchise materials. Review the current
          scope, obligations, and terms with the team and Franchise Disclosure
          Document.
        </p>
        <a className="text-link" href="#contact">
          Discuss franchise support <span>→</span>
        </a>
      </div>
    </section>
  );
}
