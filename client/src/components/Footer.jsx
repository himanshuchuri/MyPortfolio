// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Himanshu Churi</p>
      <p className="footer-sub">
        Built with React &amp; Vite. View code on{" "}
        <a
          href="https://github.com/himanshuchuri"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
