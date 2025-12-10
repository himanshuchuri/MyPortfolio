// src/components/Experience.jsx
import { useEffect, useRef, useState } from "react";
const experiences = [
  {
    role: "Programmer Analyst",
    company: "Theoremlabs.io",
    location: "Remote",
    period: "May 2024 – Present",
    bullets: [
      "Built an AWS Bedrock–powered AI chatbot that automated 70% of routine database queries, improving client service efficiency by 60% for sales reps.",
      "Architected and deployed cloud infrastructure using AWS CloudFormation, provisioning 20+ resources (Lambda, S3, OpenSearch, IAM, Bedrock agents).",
      "Engineered 7+ AWS Lambda functions ingesting 20M+ daily financial transactions with 99.9% accuracy, reducing data migration issues by 35%.",
      "Optimized modular SQL-based Lambda functions to process 1–3M row datasets 2.5× faster, cutting processing time by 30% across 5TB+ monthly transfers.",
      "Created 2 monitoring dashboards tracking 15+ metrics, improving system reliability by 25% and reducing troubleshooting time from 3 hours to 15 minutes.",
      "Designed an 8-module onboarding program and led 12 training sessions, enabling 10 junior candidates to become productive within 3 weeks."
    ],
  },
  {
    role: "Research Intern",
    company: "Syracuse University — College of Engineering & Computer Science",
    location: "Syracuse, NY",
    period: "Jul 2023 – Jul 2024",
    bullets: [
      "Built 12 interactive Tableau reports tracking 20+ enrollment KPIs for 100+ stakeholders, reversing an 18% application decline by 15%.",
      "Ran regression analysis on 50,000+ donor records using 12 models, identifying 5 key targeting factors contributing to a $1.2M (10%) fundraising lift.",
      "Led migration of 25+ services from GCP to AWS, optimizing 18 resource-intensive workflows and reducing operational costs by 45% (~$65,000 annually).",
      "Redesigned data pipelines with 5 parallel processing streams, reducing transfer time by 40% for 100GB+ daily data while achieving 99.99% accuracy."
    ],
  },
  {
    role: "Research Assistant",
    company: "Syracuse University",
    location: "Syracuse, NY",
    period: "Jan 2024 – Mar 2024",
    bullets: [
      "Implemented blockchain-based graph algorithms to analyze student solution patterns, improving grading efficiency by 22%.",
      "Automated gas calculation for smart contract evaluation and created Python data models for visualizing solution patterns and optimization opportunities."
    ],
  },
  {
    role: "Market Research Analyst",
    company: "Beats by Dre",
    location: "United States",
    period: "Mar 2024",
    bullets: [
      "Analyzed market data and surveys for premium audio products, creating 3 Tableau dashboards that influenced product positioning.",
      "Conducted user interviews and synthesized qualitative + quantitative data to identify 4 key market opportunities."
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Syracuse University",
    location: "Syracuse, NY",
    period: "Jan 2023 – May 2023",
    bullets: [
      "Supported 45+ students in Systems and Network Programming (CSE 384) with code reviews, debugging, and weekly office hours.",
      "Created supplemental learning materials that improved project outcomes by 15% compared to the previous semester."
    ],
  },
  {
    role: "Data Scientist",
    company: "Shelubazar Urban Nidhi Ltd.",
    location: "Akola, India",
    period: "Jan 2020 – Jul 2021",
    bullets: [
      "Analyzed 1M+ financial transactions using advanced SQL and predictive models, increasing profitability by 17% and expanding gold mortgage portfolio by 12%.",
      "Processed 65,000+ customer feedback entries with NLP and sentiment analysis (92% accuracy), implementing improvements that reduced account closures by 23%.",
      "Segmented 50,000+ customer interactions using clustering, identifying 3 key segments that led to 15% higher engagement and 8% higher enrollment.",
      "Applied KNN and data preprocessing on 100,000+ accounts, improving data quality by 20% and increasing cross-selling success by 12%."
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Eduvance",
    location: "Mumbai, India",
    period: "Jun 2019 – Jul 2019",
    bullets: [
      "Analyzed customer datasets using SQL and Python to reveal 3 patterns in user behavior, contributing to an 8% improvement in retention.",
      "Developed automated data extraction pipelines that reduced weekly reporting time by 65%."
    ],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const tabListRef = useRef(null);
  const activeExperience = experiences[activeIndex];

  useEffect(() => {
    const list = tabListRef.current;
    if (!list) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = list;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) {
        setScrollIndex(0);
        return;
      }
      const progress = scrollLeft / maxScroll;
      const index = Math.round(progress * (experiences.length - 1));
      setScrollIndex(index);
    };

    handleScroll();
    list.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      list.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrollIndex((prev) => (prev !== activeIndex ? activeIndex : prev));
  }, [activeIndex]);

  const handleActivate = (index) => {
    setActiveIndex(index);
    const tab = document.getElementById(`experience-tab-${index}`);
    if (tab) {
      tab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2>Where I&apos;ve worked</h2>
        <p className="section-lead">
          From banking and fintech to research and market analytics, I build
          systems that move data reliably and unlock insights at scale.
        </p>
      </div>

      <div className="experience-tabs">
        <div
          className="experience-tab-list"
          role="tablist"
          aria-label="Work experience"
          ref={tabListRef}
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.role + exp.company}
              type="button"
              className={`experience-tab ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => handleActivate(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`experience-panel-${index}`}
              id={`experience-tab-${index}`}
            >
              <span className="experience-tab-role">{exp.role}</span>
              <span className="experience-tab-company">{exp.company}</span>
              <span className="experience-tab-period">{exp.period}</span>
            </button>
          ))}
        </div>

        <div className="experience-pagination" aria-hidden="true">
          {experiences.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`experience-dot${
                index === scrollIndex ? " is-scroll" : ""
              }${index === activeIndex ? " is-active" : ""}`}
              onClick={() => {
                handleActivate(index);
              }}
            />
          ))}
        </div>

        <div className="experience-tab-panels">
          <article
            className="experience-panel"
            role="tabpanel"
            id={`experience-panel-${activeIndex}`}
            aria-labelledby={`experience-tab-${activeIndex}`}
          >
            <header className="experience-header">
              <h3 className="experience-role">{activeExperience.role}</h3>
              <p className="experience-company">{activeExperience.company}</p>
            </header>
            <p className="experience-meta">
              {activeExperience.location} · {activeExperience.period}
            </p>
            <ul className="experience-points">
              {activeExperience.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
