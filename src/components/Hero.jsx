import { useEffect, useState } from "react";

function Hero() {
  const [typed, setTyped] = useState("");

  // Typewriter effect
  useEffect(() => {
    const msg = "VVictor Diniz";
    let i = 0;
    let cancelled = false;

    setTyped("");

    const write = () => {
      if (cancelled) return;
      if (i < msg.length) {
        setTyped((prev) => prev + msg.charAt(i));
        i++;
        setTimeout(write, 100);
      }
    };

    write();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="hero" className="hero fade-in">
      <div className="container">
        <div className="hero-image">
          <img src="/assets/images/victor.jpeg" alt="Foto de Victor Diniz" />
        </div>

        <h2>{typed || "Victor Diniz"}</h2>

        {/* Badge de status */}
        <div className="status-badge">
          <span>🔹 Aberto a oportunidades</span>
        </div>

        <p>
          Sou um desenvolvedor full stack em formação, com foco em automação,
          front-end e interfaces inteligentes.
        </p>

        {/* Botões */}
        <div className="hero-buttons">
          <a href="/assets/docs/Victor Diniz Currículo.pdf" className="btn secondary" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file-arrow-down"></i> Currículo
          </a>
          <a href="#footer" className="btn outline">
            <i className="fa-solid fa-envelope"></i> Contato
          </a>
          <a href="#projects" className="btn">
            <i className="fa-solid fa-briefcase"></i> Projetos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
