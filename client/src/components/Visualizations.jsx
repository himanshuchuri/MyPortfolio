// src/components/Visualizations.jsx
import TableauEmbed from "./TableauEmbed.jsx";

export default function Visualizations() {
  return (
    <section id="visualizations" className="section section-alt">
      <div className="section-header">
        <p className="section-kicker">Data Visualizations</p>
        <h2>Tableau dashboards</h2>
        <p className="section-lead">
          A selection of Tableau projects published on{" "}
          <a
            href="https://public.tableau.com/app/profile/himanshu.churi/vizzes"
            target="_blank"
            rel="noreferrer"
          >
            my Tableau Public profile
          </a>
          , exploring health and conflict data through visual storytelling.
        </p>
      </div>

      <div className="tableau-grid">
        {/* 1 — Cancer Analysis */}
        <div className="tableau-card">
          <TableauEmbed
            title="Cancer Analysis"
            src="https://public.tableau.com/views/CancerAnalysis_17113082552350/CancerAnalysis?:showVizHome=no&:embed=true"
          />
          <div className="tableau-summary">
            <h3>Early Age Cancer Onset</h3>
            <p>
              There&apos;s been a growing conversation about young adults being
              diagnosed with cancer, so I wanted to dig into the data. This
              visualization uses the latest Cancer Incidence in Five Continents
              (CI5) plus dataset to explore cancer diagnoses among young adults
              aged 20–40.
            </p>
            <p>
              The dashboard highlights a significant number of cases within this
              age group across multiple cancer types, including thyroid, breast,
              melanoma, and more. While the numbers are concerning, it&apos;s
              important to interpret them carefully:
            </p>
            <ul>
              <li>
                The median age of cancer diagnosis is 66 (National Cancer
                Institute), but projections show an increase in cases among
                younger adults.
              </li>
              <li>
                Greater public awareness and improved screening can lead to{" "}
                earlier detection, which may partly explain the rise in reported
                early-onset cases.
              </li>
              <li>
                Ongoing research is examining lifestyle changes, environmental
                exposures, and other factors that may contribute to this trend.
              </li>
            </ul>
            <p>
              This is a complex issue, and the goal of the visualization is to
              make the patterns more visible so that researchers, clinicians,
              and the public can ask better questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
