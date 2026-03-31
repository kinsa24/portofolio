import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML / CSS',   level: 90, color: '#ff6584' },
      { name: 'JavaScript',   level: 85, color: '#f7df1e' },
      { name: 'React.js',     level: 80, color: '#61dafb' },
      { name: 'Tailwind CSS', level: 78, color: '#38bdf8' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',   level: 72, color: '#6cc24a' },
      { name: 'Express',   level: 68, color: '#a0a0c0' },
      { name: 'PHP',       level: 65, color: '#8892be' },
      { name: 'MySQL',     level: 70, color: '#4479a1' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 82, color: '#f05032' },
      { name: 'Figma',        level: 75, color: '#a259ff' },
      { name: 'VS Code',      level: 90, color: '#007acc' },
      { name: 'Linux',        level: 60, color: '#fcc624' },
    ],
  },
]

const techBadges = [
  'React', 'Vue', 'Node.js', 'Python', 'TypeScript',
  'MongoDB', 'Firebase', 'Docker', 'REST API', 'Git',
  'Figma', 'Tailwind', 'SASS', 'GraphQL', 'Next.js',
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="underline" />
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="skill-cat card">
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="skill-bar-item">
                    <div className="skill-bar-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="tech-badges-section">
          <h3 className="tech-badges-title">Also familiar with</h3>
          <div className="tech-badges">
            {techBadges.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
