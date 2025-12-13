// src/components/Skills.jsx
const skillGroups = [
  {
    label: "Cloud & Platforms",
    skills: ["AWS (Lambda, S3, IAM, Bedrock, CloudFormation, OpenSearch)", "GCP"],
  },
  {
    label: "Data Engineering",
    skills: ["ETL Pipelines", "SQL Optimization", "High-volume Ingestion", "Parallel Data Streams"],
  },
  {
    label: "Machine Learning",
    skills: ["Predictive Modeling", "Regression", "Clustering", "NLP & Sentiment Analysis", "Naive Bayes"],
  },
  {
    label: "Programming",
    skills: ["Python", "SQL", "JavaScript", "Data Modeling"],
  },
  {
    label: "Analytics & Visualization",
    skills: ["Tableau", "NewRelic", "Reporting Automation", "KPI Dashboards"],
  },
  {
    label: "Practices",
    skills: ["Performance Optimization", "Monitoring & Alerts", "Technical Mentoring"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <p className="section-kicker">Skills</p>
        <h2>What I work with</h2>
        <p className="section-lead">
          A mix of cloud, data engineering, ML, and analytics — focused on real business impact.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills-card">
            <h3>{group.label}</h3>
            <ul>
              {group.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
