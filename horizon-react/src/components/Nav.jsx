import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#tournament", label: "Live Tournament" },
    { href: "#register", label: "Register" },
    { href: "#about", label: "About" },
    { href: "#coming-soon", label: "Coming Soon" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container">
        <a href="#top" className="brand">
          <span className="brand-mark"></span>
          <span>
            HORIZON
            <br />
            <span>ESPORTS ACADEMY</span>
          </span>
        </a>

        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="#register" className="btn btn-ghost btn-sm">
            Register Now
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
