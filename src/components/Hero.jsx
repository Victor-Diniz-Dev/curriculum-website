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
        <p>
          Sou um desenvolvedor full stack em formação, com foco em automação,
          front-end e interfaces inteligentes.
        </p>
        <a href="#projects" className="btn">Ver Projetos</a>
      </div>
    </section>
  );
}

export default Hero;
