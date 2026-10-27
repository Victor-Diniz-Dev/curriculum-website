import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { email, experience, github, linkedin, projects, technologies } from "./data";
import "./App.css";

function usePath() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, "") || "/");
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.replace(/\/$/, "") || "/");
    const onClick = (event) => {
      const link = event.target.closest("a");
      if (!link || link.target || link.origin !== window.location.origin || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.hash && link.pathname === window.location.pathname) return;
      event.preventDefault();
      if (link.pathname !== window.location.pathname) window.history.pushState({}, "", link.pathname);
      onPop();
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => { window.removeEventListener("popstate", onPop); document.removeEventListener("click", onClick); };
  }, []);
  return path;
}

function useReveal(path) {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [path]);
}

const slides = [
  { label: "Desenvolvimento", title: "Construir para resolver.", text: "Desenvolvimento de software como caminho para transformar necessidades em soluções claras." },
  { label: "Tecnologia", title: "Investigar o problema.", text: "Experiência em TI, suporte e automação, com curiosidade sobre como as ferramentas podem trabalhar melhor." },
  { label: "Interfaces", title: "Cuidar de cada interação.", text: "Interesse por interfaces digitais que combinam lógica, legibilidade e atenção à experiência de quem usa." },
];

function SectionHeading({ eyebrow, title, href, link }) {
  return <div className="section-heading" data-reveal>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>
    {href && <a className="text-link" href={href}>{link} <span aria-hidden="true">↗</span></a>}
  </div>;
}

function Carousel() {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState(null);
  const slide = slides[index];
  const move = (delta) => setIndex((current) => (current + delta + slides.length) % slides.length);
  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
  };
  return <section className="feature-carousel" role="region" aria-roledescription="carrossel" aria-label="Áreas de interesse" onKeyDown={onKeyDown}
    onTouchStart={(event) => setTouchX(event.touches[0].clientX)} onTouchEnd={(event) => {
      if (touchX === null) return;
      const distance = event.changedTouches[0].clientX - touchX;
      if (Math.abs(distance) > 55) move(distance < 0 ? 1 : -1);
      setTouchX(null);
    }}>
    <div className="carousel-top"><span className="eyebrow">{slide.label}</span></div>
    <div className="carousel-body" aria-live="polite" aria-atomic="true">
      <div><h2>{slide.title}</h2><p>{slide.text}</p></div>
    </div>
    <div className="carousel-controls">
      <div className="carousel-dots" aria-label="Escolher conteúdo">{slides.map((item, i) =>
        <button key={item.label} aria-label={`Mostrar ${item.label.toLowerCase()}`} aria-pressed={i === index} onClick={() => setIndex(i)} />
      )}</div>
      <div className="carousel-arrows"><button aria-label="Conteúdo anterior" onClick={() => move(-1)}>←</button><button aria-label="Próximo conteúdo" onClick={() => move(1)}>→</button></div>
    </div>
  </section>;
}

function Home() {
  return <>
    <main>
      <section className="home-intro">
        <div className="intro-index"><span className="availability"><i /> Aberto a oportunidades</span></div>
        <div className="intro-grid">
          <h1>Victor<br /><em>Diniz</em><span className="title-period">.</span></h1>
          <div className="intro-copy"><span className="eyebrow">TECNOLOGIA · DESENVOLVIMENTO · INTERFACES</span>
            <p>Profissional de tecnologia com formação em Análise e Desenvolvimento de Sistemas e experiência em suporte, automação e resolução de problemas.</p>
            <a className="text-link" href="/sobre">Conheça meu percurso <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="intro-bottom"><a href="#areas" aria-label="Explorar áreas de interesse">↓</a></div>
      </section>
      <div id="areas" className="container"><Carousel /></div>
      <section className="section-block container">
        <SectionHeading eyebrow="PROJETOS" title={<>Trabalho em<br />desenvolvimento.</>} href="/projetos" link="Ver catálogo" />
        <div className="home-projects">{projects.slice(0, 2).map((project, i) => <ProjectPreview key={project.slug} project={project} index={i} />)}</div>
      </section>
      <section className="stack-section">
        <div className="container"><SectionHeading eyebrow="FERRAMENTAS" title={<>Conhecimento em<br />construção contínua.</>} href="/sobre" link="Mais sobre mim" />
          <div className="stack-groups">{technologies.map((group) => <div className="stack-group" key={group.group} data-reveal><h3>{group.group}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
        </div>
      </section>
      <section className="home-contact container" data-reveal><h2>Vamos conversar<br />sobre tecnologia?</h2><a className="text-link" href="/contato">Entre em contato <span aria-hidden="true">↗</span></a></section>
    </main>
  </>;
}

function ProjectPreview({ project, index }) {
  return <a className={`project-preview preview-${index + 1}`} href={`/projetos/${project.slug}`} data-reveal>
    <div className="project-art"><span className="art-word">{project.technologies[0]}</span></div>
    <div className="project-meta"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><span className="project-arrow" aria-hidden="true">↗</span></div>
    <p>{project.description}</p>
  </a>;
}

function ProjectsPage() {
  return <main className="page-shell container">
    <PageIntro label="CATÁLOGO" title={<>Projetos em<br /><em>perspectiva.</em></>} text="Uma seleção de projetos e experimentos apresentados no portfólio. Os detalhes são limitados às informações disponíveis." />
    <div className="catalog-grid">{projects.map((project, i) => <ProjectPreview key={project.slug} project={project} index={i} />)}</div>
  </main>;
}
function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return <main className="page-shell container">
    <a className="back-link" href="/projetos">← Voltar ao catálogo</a>
    <PageIntro label={project.category.toUpperCase()} title={<>{project.title.split(" ")[0]}<br /><em>{project.title.split(" ").slice(1).join(" ")}</em></>} text={project.description} />
    <div className="detail-layout"><div><span className="eyebrow">VISÃO GERAL</span><p>Este portfólio não contém informações adicionais verificáveis sobre contexto, processo ou resultados deste projeto. Esta página fica preparada para receber esses dados.</p></div>
      <aside><span className="eyebrow">TECNOLOGIAS</span><ul className="tag-list">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></aside>
    </div>
  </main>;
}
function ExperiencePage() {
  return <main className="page-shell container">
    <PageIntro label="TRAJETÓRIA" title={<>Experiência<br /><em>em tecnologia.</em></>} text="Minha trajetória profissional em suporte, operações de TI e automação." />
    <div className="experience-list">{experience.map((job) => <article className="experience-entry" key={job.period} data-reveal>
      <span className="eyebrow">{job.period}</span><div><h2>{job.role}</h2><p className="experience-company">{job.company}</p><ul>{job.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </article>)}</div>
  </main>;
}
function AboutPage() {
  return <main className="page-shell container">
    <PageIntro label="SOBRE" title={<>Curioso por<br /><em>como as coisas funcionam.</em></>} text="Tecnologia, pessoas e problemas reais formam o ponto de partida do meu trabalho." />
    <div className="about-layout"><figure className="portrait"><img src="/assets/images/victor.jpeg" alt="Victor Diniz" loading="lazy" /><figcaption>VICTOR DINIZ · TECNOLOGIA</figcaption></figure>
      <div className="about-prose"><span className="eyebrow">UM POUCO SOBRE MIM</span><p>Sou formado em Análise e Desenvolvimento de Sistemas e trabalho com tecnologia, com experiência em suporte, manutenção e resolução de problemas.</p>
        <p>No dia a dia, tenho contato com automações em Google Apps Script, dashboards, documentação e integrações entre ferramentas. Também estudo desenvolvimento de interfaces e aplicações.</p>
        <p>Gosto de aproximar lógica e experiência de uso: entender uma necessidade, organizar o problema e buscar uma solução que faça sentido para quem vai utilizá-la.</p>
        <a className="text-link" href="/contato">Vamos conversar <span aria-hidden="true">↗</span></a></div>
    </div>
    <div className="about-stack"><SectionHeading eyebrow="REPERTÓRIO" title="Tecnologias e ferramentas" /><div className="stack-groups">{technologies.map((group) => <div className="stack-group" key={group.group}><h3>{group.group}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></div>
  </main>;
}
function ContactPage() {
  return <main className="page-shell container contact-page">
    <PageIntro label="CONTATO" title={<>Uma boa conversa<br /><em>começa por aqui.</em></>} text="Estou aberto a oportunidades em tecnologia, desenvolvimento e interfaces digitais." />
    <div className="contact-list"><a href={`mailto:${email}`}><span className="eyebrow">E-MAIL</span><span>{email}</span><b>↗</b></a><a href={linkedin} target="_blank" rel="noreferrer"><span className="eyebrow">LINKEDIN</span><span>linkedin.com/in/v1ctordiniz</span><b>↗</b></a><a href={github} target="_blank" rel="noreferrer"><span className="eyebrow">GITHUB</span><span>github.com/Victor-Diniz-Dev</span><b>↗</b></a></div>
  </main>;
}
function PageIntro({ label, title, text }) {
  return <header className="page-intro"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{text}</p></header>;
}
function NotFound() {
  return <main className="page-shell container"><PageIntro label="PÁGINA NÃO ENCONTRADA" title={<>Este caminho<br /><em>não existe.</em></>} text="O endereço pode ter mudado ou não estar disponível." /><a className="text-link" href="/">Voltar ao início ↗</a></main>;
}
function App() {
  const path = usePath();
  useReveal(path);
  useEffect(() => {
    const titles = { "/": "Victor Diniz — Tecnologia e desenvolvimento", "/projetos": "Projetos — Victor Diniz", "/experiencia": "Experiência — Victor Diniz", "/sobre": "Sobre — Victor Diniz", "/contato": "Contato — Victor Diniz" };
    const projectPage = path.startsWith("/projetos/") ? projects.find((p) => p.slug === path.split("/").pop()) : null;
    document.title = projectPage ? `${projectPage.title} — Victor Diniz` : titles[path] || "Página não encontrada — Victor Diniz";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = path === "/" ? "Portfólio de Victor Diniz, formado em Análise e Desenvolvimento de Sistemas, com experiência em TI e interesse em desenvolvimento e interfaces." : document.title;
  }, [path]);
  let page;
  if (path === "/") page = <Home />;
  else if (path === "/projetos") page = <ProjectsPage />;
  else if (path.startsWith("/projetos/")) page = <ProjectDetail slug={path.split("/").pop()} />;
  else if (path === "/experiencia") page = <ExperiencePage />;
  else if (path === "/sobre") page = <AboutPage />;
  else if (path === "/contato") page = <ContactPage />;
  else page = <NotFound />;

  return <><a className="skip-link" href="#main-content">Pular para conteúdo</a><Header path={path} /><div id="main-content" key={path} className="page-transition">{page}</div><div className="container"><Footer /></div></>;
}
export default App;
