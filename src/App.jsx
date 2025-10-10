import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");

  // --- TYPEWRITER ROBUSTO (sem undefined / compatível com StrictMode) ---
  useEffect(() => {
    const msg = "CConstruindo experiências digitais que unem eficiência e beleza.";
    let i = 0;
    let cancelled = false;

    setTyped(""); // garante reset ao montar/remontar

    const write = () => {
      if (cancelled) return;
      if (i < msg.length) {
        setTyped((prev) => prev + msg.charAt(i));
        i += 1;
        setTimeout(write, 35); // velocidade
      }
    };

    write();
    return () => {
      cancelled = true; // evita escrita após unmount
    };
  }, []);

  // fade-in ao rolar (equivalente ao script.js)
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
      {/* HEADER */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Victor Diniz</h1>

          {/* Botão mobile */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? "active" : ""}`}>
            <ul onClick={() => setMenuOpen(false)}>
              <li>
                <a href="#hero">Início</a>
              </li>
              <li>
                <a href="#stack">Stacks</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="hero fade-in">
        <div className="container">
          <div className="hero-image">
            {/* imagem deve estar em public/assets/images/victor.jpeg */}
            <img src="/assets/images/victor.jpeg" alt="Foto de Victor Diniz" />
          </div>

          <h2>{typed || "Construindo experiências digitais que unem eficiência e beleza."}</h2>

          <p>
            Sou um desenvolvedor full stack em formação, com foco em automação,
            front-end e interfaces inteligentes.
          </p>
          <a href="#projects" className="btn">Ver Projetos</a>
        </div>
      </section>

      {/* STACK SECTION */}
      <section id="stack" className="stack">
        <div className="container">
          <h3>Main stacks</h3>
          <div className="stack-icons">
            <div className="stack-item">
              <i className="fa-brands fa-react"></i>
              <span>React</span>
            </div>
            <div className="stack-item">
              <i className="fa-brands fa-python"></i>
              <span>Python</span>
            </div>
            <div className="stack-item">
              <i className="fa-brands fa-java"></i>
              <span>Java</span>
            </div>
            <div className="stack-item">
              <i className="fa-solid fa-wind"></i>
              <span>Tailwind</span>
            </div>
            <div className="stack-item">
              <i className="fa-brands fa-git-alt"></i>
              <span>Git</span>
            </div>
            <div className="stack-item">
              <i className="fa-solid fa-cloud"></i>
              <span>APIs REST</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects">
        <div className="container">
          <h3>Projetos em Destaque</h3>

          <div className="project-grid">
            <article className="project-card">
              <h4>Automação Python</h4>
              <p>
                Script que automatiza tarefas repetitivas, integrando APIs e
                gerando relatórios inteligentes.
              </p>
              <span className="tech">Python</span>
            </article>

            <article className="project-card">
              <h4>Interface de Dashboard</h4>
              <p>
                Layout de dashboard moderno desenvolvido em HTML, CSS e
                JavaScript, com visual clean e intuitivo.
              </p>
              <span className="tech">HTML • CSS • JS</span>
            </article>

            <article className="project-card">
              <h4>Protótipo React</h4>
              <p>
                Primeiro projeto experimental com React, explorando
                componentização e hooks básicos.
              </p>
              <span className="tech">React</span>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="container">
          <h3>Sobre Mim</h3>
          <p>
            Sou apaixonado por transformar ideias em interfaces funcionais.
            Tenho experiência com automações em Python e uma base sólida em
            front-end. Estou expandindo meus conhecimentos para me tornar um
            desenvolvedor full stack completo.
          </p>
          <p>
            Busco oportunidades para aprender, evoluir e contribuir com soluções
            que unam design, lógica e impacto real.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="footer">
        <div className="container">
          <p>© 2025 Victor Diniz — Feito com ❤️ e carinho.</p>
          <div className="socials">
            <a
              href="https://github.com/Victor-Diniz-Dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/v1ctordiniz/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=victordinizdev@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
