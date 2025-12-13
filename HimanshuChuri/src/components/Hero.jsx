// src/components/Hero.jsx
import { useEffect, useState } from "react";
import codeLogo from "../assets/code.png";
import etl from "../assets/etl.png";
import mlCircuit from "../assets/mlCircuit.png";
import mlCloud from "../assets/mlCloud.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";
import barLine from "../assets/barLine.png";
import gradientChart from "../assets/gradientChart.png";
import pieChart from "../assets/pieChart.png";
import db from "../assets/db.png";
import searchData from "../assets/search_data.png";
import aws from "../assets/aws.png";

const heroLogos = [
  { src: codeLogo, alt: "Code" },
  { src: etl, alt: "Transform to cloud" },
  { src: mlCircuit, alt: "Cloud ML circuitry" },
  { src: mlCloud, alt: "ML cloud" },
  { src: python, alt: "Python" },
  { src: ml, alt: "Machine learning" },
  { src: barLine, alt: "Growth bar chart" },
  { src: gradientChart, alt: "Line chart" },
  { src: pieChart, alt: "Pie chart" },
  { src: db, alt: "Database & analytics" },
  { src: searchData, alt: "Data search" },
  { src: aws, alt: "AWS cloud" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slots, setSlots] = useState(
    () => heroLogos.map((_, index) => index)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % heroLogos.length;

        setSlots((prev) => {
          const updated = [...prev];
          // send the previous center logo out to the orbit
          // position of the new active logo
          updated[current] = prev[next];
          return updated;
        });

        return next;
      });
    }, 6000); // change every 6 seconds
    return () => clearInterval(id);
  }, []);

  const activeLogo = heroLogos[activeIndex];

  return (
    <section id="top" className="section hero">
      <div className="hero-left">
        <p className="hero-kicker">Programmer Analyst · Data Engineering · AWS</p>
        <h1 className="hero-title">
          Hi, I’m <span>Himanshu Churi.</span>
        </h1>
        <p className="hero-subtitle">
          I build cloud-native, data-intensive systems that process millions of
          records, automate workflows, and deliver measurable business value.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn primary glass">View Projects</a>
          <a href="#about" className="btn ghost glass">About Me</a>
          <a
            href="https://public.tableau.com/app/profile/himanshu.churi"
            className="btn ghost glass"
            target="_blank"
            rel="noreferrer"
          >
            Tableau
          </a>
          <a
            href="https://github.com/himanshuchuri?tab=repositories"
            className="btn ghost glass"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-churi"
            className="btn ghost glass"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-center glass-strong" />

          {heroLogos.map((logo, index) => (
            <div
              key={logo.alt}
              className={`hero-logo-node hero-slot-${slots[index]}${
                index === activeIndex ? " is-active" : ""
              }`}
            >
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
