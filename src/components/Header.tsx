import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "The Opportunity", href: "#opportunity" },
  { label: "Why Yumberry", href: "#why" },
  { label: "Franchise Models", href: "#models" },
  { label: "Getting Started", href: "#start" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <a className="brand" href="#" aria-label="Yumberry Bowl home">
          <img
            src={import.meta.env.BASE_URL + "images/logo.webp"}
            width="96"
            height="76"
            alt="Yumberry Bowl"
          />
        </a>
        <button
          className="menu"
          ref={menuButton}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu <span aria-hidden="true">☰</span>
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "open" : ""}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button nav-cta" href="#contact">
          Franchise Inquiry <span aria-hidden="true">→</span>
        </a>
      </header>
    </>
  );
}
