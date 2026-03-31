import './About.css'

const stats = [
  { number: '10+', label: 'Projects Completed' },
  { number: '2+',  label: 'Years Experience'   },
  { number: '5+',  label: 'Happy Clients'       },
  { number: '3+',  label: 'Certifications'      },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline" />
          <p>Get to know me a little better</p>
        </div>

        <div className="about-grid">
          {/* Image side */}
          <div className="about-image-col">
            <div className="about-img-wrapper">
              <div className="about-img-bg" />
              <div className="about-img-placeholder">
                <svg viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="75" r="45" fill="rgba(108,99,255,0.25)" stroke="rgba(108,99,255,0.5)" strokeWidth="2"/>
                  <ellipse cx="100" cy="175" rx="70" ry="40" fill="rgba(108,99,255,0.15)" stroke="rgba(108,99,255,0.35)" strokeWidth="2"/>
                </svg>
                <p>Your Photo Here</p>
              </div>
              <div className="experience-badge">
                <span className="exp-num">2+</span>
                <span className="exp-label">Years<br/>Experience</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about-text-col">
            <h3 className="about-subtitle">
              A <span className="gradient-text">passionate developer</span> based in Indonesia
            </h3>
            <p className="about-bio">
              Hi! I'm a passionate web developer with a love for creating beautiful
              and functional digital experiences. I specialize in building modern web
              applications using the latest technologies.
            </p>
            <p className="about-bio">
              When I'm not coding, you can find me exploring new design trends,
              learning new technologies, or working on personal projects that challenge
              my creativity and technical skills.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Your Full Name</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">your@email.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">From</span>
                <span className="info-value">Indonesia</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value status-open">Open to Work</span>
              </div>
            </div>

            <a href="#" className="btn btn-primary" download>
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-card card">
              <span className="stat-num gradient-text">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
