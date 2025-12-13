import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Visualizations from "./components/Visualizations.jsx";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app os-shell">
      <div className="os-shell-inner">
        <Navbar />
        <main className="os-main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Visualizations />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
