import { useEffect, useState } from "react";

const links = [
  ["/", "Início"],
  ["/projetos", "Projetos"],
  ["/experiencia", "Experiência"],
  ["/sobre", "Sobre"],
  ["/contato", "Contato"],
];

function getSavedTheme() {
  try {
    return window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export default function Header({ path }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#171816" : "#f5f3ee";
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // O tema continua ativo nesta sessão se o armazenamento estiver indisponível.
    }
  }, [theme]);

  const dark = theme === "dark";

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Victor Diniz — início">
        <span className="wordmark-mark" aria-hidden="true">VD</span><span>Victor Diniz</span>
      </a>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Navegação principal">
        {links.map(([href, label]) => {
          const active = href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
          return <a key={href} href={href} aria-current={active ? "page" : undefined}>{label}</a>;
        })}
      </nav>
      <div className="header-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={dark ? "Ativar modo claro" : "Ativar modo noturno"}
          aria-pressed={dark}
          title={dark ? "Ativar modo claro" : "Ativar modo noturno"}
          onClick={() => setTheme(dark ? "light" : "dark")}
        >
          <span className="theme-icon" aria-hidden="true">{dark ? "☼" : "☾"}</span>
          <span className="theme-label">{dark ? "Modo claro" : "Modo noturno"}</span>
        </button>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <span>{open ? "Fechar" : "Menu"}</span><span aria-hidden="true">{open ? "×" : "↗"}</span>
        </button>
      </div>
    </header>
  );
}
