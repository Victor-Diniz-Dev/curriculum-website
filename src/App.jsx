import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import "./index.css";

function App() {
  // fade-in ao rolar
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <ExperienceTimeline />
      <About />
      <Footer />
    </>
  );
}

export default App;
