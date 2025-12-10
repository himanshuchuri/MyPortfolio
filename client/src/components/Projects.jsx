// src/components/Projects.jsx
const projects = [
  {
    title: "AI Chatbot for Trade Analytics",
    tagline: "AWS Bedrock–powered assistant for financial data queries.",
    description:
      "Built an AI chatbot using AWS Bedrock, Lambda, and OpenSearch that automated 70% of repetitive database queries for sales teams. Sales reps now access real-time trade analytics and client data instantly, improving client service efficiency by 60%.",
    tech: ["AWS Bedrock", "AWS Lambda", "OpenSearch", "Python", "CloudFormation"],
  },
  {
    title: "High-Volume Financial Data Pipeline",
    tagline: "Cloud-native ingestion and processing at millions of records per day.",
    description:
      "Engineered a data pipeline that ingests 20M+ daily financial transactions with 99.9% accuracy. Optimized Lambda + SQL flows to process 1–3M row datasets 2.5× faster, reducing processing time by 30% and supporting 5TB+ monthly transfers.",
    tech: ["AWS Lambda", "S3", "SQL Optimization", "Monitoring"],
  },
  {
    title: "University KPI Visualization Suite",
    tagline: "Analytics dashboards for enrollment and fundraising.",
    description:
      "Designed 12 Tableau dashboards tracking 20+ KPIs for 100+ stakeholders. The insights helped reverse an 18% decline in applications by 15% and supported campaigns that increased fundraising by $1.2M (10%).",
    tech: ["Tableau", "Python", "AWS", "GCP"],
  },
  {
    title: "Blockchain-Based Academic Evaluation",
    tagline: "Graph algorithms & smart contract gas analysis.",
    description:
      "Implemented blockchain-based graph algorithms to analyze student solution patterns and automated gas calculation for smart contract evaluation, improving grading efficiency by 22%.",
    tech: ["Python", "Blockchain Algorithms", "Graph Data Models"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="section-header">
        <p className="section-kicker">Projects</p>
        <h2>Selected projects</h2>
        <p className="section-lead">
          A snapshot of systems and solutions I&apos;ve built across cloud,
          data, and AI/ML.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
