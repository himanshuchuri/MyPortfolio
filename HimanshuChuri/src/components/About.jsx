// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="section-header">
        <p className="section-kicker">About</p>
        <h2>Who I am</h2>
        <p className="section-lead">
          Programmer Analyst | Banking &amp; Fintech | AWS | Python | SQL |
          Data &amp; Analytics
        </p>
      </div>

      <div className="section-grid">
        <div>
          <p className="section-text">
            I&apos;m a data-driven Programmer Analyst and Data Scientist with 3+
            years of experience building cloud-native data solutions — designing
            ETL and large-scale pipelines, optimizing databases, leading AWS
            migrations, and deploying ML tools that process millions of
            transactions and reduce costs.
          </p>
          <p className="section-text">
            I hold a Master&apos;s in Computer Science from Syracuse University
            and an AWS Cloud Practitioner certification. I enjoy solving
            high-impact problems and draw inspiration from hiking and travel to
            design simple, focused software.
          </p>
        </div>

        <div className="about-spec-grid">
          <div className="about-spec-card">
            <p className="about-spec-label">Primary stack</p>
            <p className="about-spec-value">AWS · Python · SQL · Tableau</p>
          </div>
          <div className="about-spec-card">
            <p className="about-spec-label">Domains</p>
            <p className="about-spec-value">Banking, fintech, higher education, analytics</p>
          </div>
          <div className="about-spec-card">
            <p className="about-spec-label">Focus areas</p>
            <p className="about-spec-value">ETL, observability, ML-powered automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
