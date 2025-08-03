const skills = [
  {
    icon: 'fab fa-js-square',
    title: 'JavaScript',
    description: 'Desenvolvimento frontend e backend com Node.js'
  },
  {
    icon: 'fab fa-react',
    title: 'React',
    description: 'Interfaces modernas e responsivas'
  },
  {
    icon: 'fab fa-node-js',
    title: 'Node.js',
    description: 'APIs RESTful e aplicações server-side'
  },
  {
    icon: 'fab fa-python',
    title: 'Python',
    description: 'Automação, análise de dados e algoritmos'
  },
  {
    icon: 'fab fa-java',
    title: 'Java',
    description: 'Desenvolvimento desktop e aplicações empresariais'
  },
  {
    icon: 'fas fa-database',
    title: 'Databases',
    description: 'SQL, NoSQL e modelagem de dados'
  }
]

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 