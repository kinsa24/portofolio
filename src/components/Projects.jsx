import { useState } from 'react'
import './Projects.css'

const categories = ['All', 'Web', 'Mobile', 'UI/UX', 'Other']

const projects = [
  {
    title: 'Project Title 1',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web',
    demo: '#',
    github: '#',
    color: '#6c63ff',
  },
  {
    title: 'Project Title 2',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['Vue.js', 'Firebase'],
    category: 'Web',
    demo: '#',
    github: '#',
    color: '#ff6584',
  },
  {
    title: 'Project Title 3',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['React Native', 'Expo'],
    category: 'Mobile',
    demo: '#',
    github: '#',
    color: '#43e97b',
  },
  {
    title: 'Project Title 4',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['Figma', 'Adobe XD'],
    category: 'UI/UX',
    demo: '#',
    github: '#',
    color: '#f7df1e',
  },
  {
    title: 'Project Title 5',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['Python', 'Flask', 'SQL'],
    category: 'Other',
    demo: '#',
    github: '#',
    color: '#61dafb',
  },
  {
    title: 'Project Title 6',
    description: 'A brief description of what this project does and the problem it solves.',
    tags: ['Next.js', 'Tailwind', 'Prisma'],
    category: 'Web',
    demo: '#',
    github: '#',
    color: '#a259ff',
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <div className="underline" />
          <p>Some things I've built recently</p>
        </div>

        {/* Filter tabs */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div key={i} className="project-card card">
              {/* Thumbnail placeholder */}
              <div className="project-thumbnail" style={{ '--proj-color': project.color }}>
                <div className="thumbnail-icon">
                  <svg viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" rx="6" fill={project.color + '22'}/>
                    <rect x="8" y="8" width="18" height="12" rx="3" fill={project.color + '66'}/>
                    <rect x="8" y="23" width="44" height="4" rx="2" fill={project.color + '44'}/>
                    <rect x="8" y="30" width="30" height="4" rx="2" fill={project.color + '33'}/>
                    <circle cx="44" cy="14" r="8" fill={project.color + '55'}/>
                  </svg>
                </div>
                <div className="thumbnail-overlay">
                  <a href={project.demo} className="overlay-btn">Live Demo</a>
                  <a href={project.github} className="overlay-btn outline">GitHub</a>
                </div>
              </div>

              <div className="project-body">
                <div className="project-category-tag">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="project-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more?</p>
          <a href="#" className="btn btn-outline">View All on GitHub</a>
        </div>
      </div>
    </section>
  )
}
