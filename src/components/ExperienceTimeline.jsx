import "./ExperienceTimeline.css";

function ExperienceTimeline() {
  const experiences = [
    {
      iconClass: "fa-solid fa-gears",
      period: "Abr 2025 — Atual",
      title: "Técnico de Campo de TI N2 · Arklok Tecnologia (Alocado na Flash)",
      bullets: [
        "Automação com Google Apps Script (JS)",
        "Dashboards e relatórios para diretoria",
        "Integrações Slack + ClickUp + Sheets",
        "Gestão de inventário e ativos de TI",
        "Suporte técnico avançado (N2) e Google Admin",
      ],
    },
    {
      iconClass: "fa-solid fa-headset",
      period: "Out 2024 — Abr 2025",
      title: "Técnico de Helpdesk · Arklok Tecnologia",
      bullets: [
        "Diagnóstico e solução de problemas (HW/SW)",
        "Manutenção preventiva/corretiva",
        "Instalação e config. Windows / Linux",
        "Backup e recuperação de dados",
        "Atendimento a clientes e registro de chamados",
      ],
    },
  ];

  return (
    <section id="experience" className="experience fade-in">
      <div className="container">
        <h3 className="experience-title">Experiência</h3>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <article className="timeline-item" key={idx}>
              <div className="timeline-icon">
                <i className={exp.iconClass} aria-hidden="true" />
              </div>

              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h4 className="timeline-role">{exp.title}</h4>
                <ul className="timeline-list">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
