import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="#hero">
            <img src="/assets/images/logo.png" alt="Victor Diniz Logo" className="logo-img" />
        </a>



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
            <li><a href="#experience">Experiência</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
