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
    return window.localStorage.getItem("portfolio-theme-v2") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function SunIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.6" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
  </svg>;
}

function MoonIcon() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20.3 15.4A8.5 8.5 0 0 1 8.6 3.7 8.5 8.5 0 1 0 20.3 15.4Z" />
  </svg>;
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
      window.localStorage.setItem("portfolio-theme-v2", theme);
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
          role="switch"
          aria-checked={dark}
          aria-label="Modo noturno"
          title={dark ? "Alternar para modo claro" : "Alternar para modo noturno"}
          onClick={() => setTheme(dark ? "light" : "dark")}
        >
          <span className={dark ? "theme-switch is-dark" : "theme-switch"} aria-hidden="true">
            <span className="theme-thumb">{dark ? <MoonIcon /> : <SunIcon />}</span>
          </span>
          <span className="theme-label">{dark ? "Escuro" : "Claro"}</span>
        </button>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          <span>{open ? "Fechar" : "Menu"}</span><span aria-hidden="true">{open ? "×" : "↗"}</span>
        </button>
      </div>
    </header>
  );
}
