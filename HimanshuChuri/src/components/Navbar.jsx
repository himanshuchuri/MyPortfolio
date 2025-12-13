// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import HCmono from "../assets/HCmono.png";

export default function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#visualizations", label: "Visualizations" },
    { href: "#skills", label: "Skills" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar${isMenuOpen ? " navbar-open" : ""}`}>
      <div className="navbar-inner">
        <a href="#top" className="logo">
          <img src={HCmono} alt="Himanshu Churi logo" />
        </a>
        {!isMenuOpen && (
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <span className="nav-toggle-box" aria-hidden="true">
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
            </span>
          </button>
        )}
        <nav className="nav-desktop">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav className={`nav-mobile${isMenuOpen ? " is-open" : ""}`}>
        {isMenuOpen && (
          <button
            type="button"
            className="nav-toggle nav-toggle-close is-active"
            aria-label="Close navigation"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <span className="nav-toggle-box" aria-hidden="true">
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
            </span>
          </button>
        )}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
