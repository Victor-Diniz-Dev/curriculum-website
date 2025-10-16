function Projects() {
  return (
    <section id="projects" className="projects fade-in">
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
  );
}

export default Projects;
