import { useEffect, useRef } from "react";
export function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) {
        visual.style.removeProperty("--drift");
        return;
      }
      visual.style.setProperty(
        "--drift",
        `${Math.min(36, Math.max(0, window.scrollY * 0.075))}px`,
      );
    };
    const onScroll = () => {
      if (!frame && !motion.matches) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    motion.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      motion.removeEventListener("change", update);
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot"></span> FRANCHISE OPPORTUNITIES
        </div>
        <h1>
          Own a <br />
          <span>Yumberry Bowl</span>
          <br />
          franchise.
        </h1>
        <p>
          Bring hand-blended smoothie bowls to your community, with franchise
          training, brand resources, and operational support.
        </p>
        <a className="button" href="#why">
          Why Franchise With Us <span>→</span>
        </a>
        <a className="text-link secondary" href="#contact">
          Request Franchise Information <span>→</span>
        </a>
        <div className="origin">
          <span>FOUNDED IN GRANTS PASS, OREGON</span>
        </div>
      </div>
      <div className="hero-visual" ref={visualRef}>
        <div className="visual-orbit" aria-hidden="true"></div>
        <div className="hero-image">
          <img
            src={import.meta.env.BASE_URL + "images/bowls.webp"}
            width="836"
            height="960"
            fetchPriority="high"
            alt="Yumberry smoothie bowls topped with fresh strawberries, kiwi, bananas and blueberries"
          />
        </div>
        <div className="photo-note">
          <span className="note-dot"></span>
          <div>
            <strong>Always hand blended</strong>
            <span>No sorbets or premade bases</span>
          </div>
        </div>
        <svg
          className="fruit fruit-kiwi"
          aria-hidden="true"
          viewBox="0 0 120 120"
        >
          <circle cx="60" cy="60" r="56" fill="#aac66b"></circle>
          <circle cx="60" cy="60" r="48" fill="#d0dd95"></circle>
          <ellipse cx="60" cy="60" rx="15" ry="20" fill="#f8f5db"></ellipse>
          <g stroke="#4f6943" strokeWidth="3.5" strokeLinecap="round">
            <path d="M60 26v6m0 56v6M26 60h6m56 0h6M36 36l4 4m40 40 4 4M36 84l4-4m40-40 4-4M45 28l3 7m24 50 3 7M28 45l7 3m50 24 7 3M28 75l7-3m50-24 7-3M45 92l3-7m24-50 3-7"></path>
          </g>
        </svg>
        <svg
          className="fruit fruit-berries"
          aria-hidden="true"
          viewBox="0 0 100 100"
        >
          <circle cx="34" cy="62" r="28" fill="#46546f"></circle>
          <circle cx="68" cy="36" r="28" fill="#64708a"></circle>
          <path
            d="m29 48 5 7 8-3-3 8 7 5-9 1-2 8-5-7-8 2 4-8-7-5 9-1z"
            fill="#283f58"
          ></path>
          <path
            d="m62 20 5 7 8-3-3 8 7 5-9 1-2 8-5-7-8 2 4-8-7-5 9-1z"
            fill="#40516c"
          ></path>
        </svg>
      </div>
    </section>
  );
}
