const projects = [
  {
    title: 'Desafio Cadastro',
    description: 'Sistema de cadastro desenvolvido em Java com interface moderna e funcionalidades completas para gerenciamento de dados.',
    technologies: ['Java', 'Swing']
  },
  {
    title: 'Mini Maratona Berolab',
    description: 'Participação em maratona de programação com soluções em Python para desafios algorítmicos complexos.',
    technologies: ['Python', 'Algoritmos']
  },
  {
    title: 'Exercícios PraTi',
    description: 'Exercícios práticos de JavaScript para aprimorar habilidades de programação web e desenvolvimento frontend.',
    technologies: ['JavaScript', 'Web']
  }
]

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 