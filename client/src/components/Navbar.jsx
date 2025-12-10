// src/components/Navbar.jsx
import HCmono from "../assets/HCmono.png";

export default function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#visualizations", label: "Visualizations" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="logo">
          <img src={HCmono} alt="Himanshu Churi logo" />
        </a>
        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
