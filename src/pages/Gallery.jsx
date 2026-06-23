import { useState } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = ['All', 'Landscape Design', 'Hardscaping', 'Lawn Care', 'Seasonal']

const PROJECTS = [
  {
    id: 1,
    src: '/assets/hardscaping.jpg',
    alt: 'Stone retaining wall and gravel landscape bed at sunset',
    label: 'Hardscaping — Retaining Wall',
    category: 'Hardscaping',
    tall: true,
  },
  {
    id: 2,
    src: '/assets/lawn-care.jpg',
    alt: 'Manicured front lawn with shaped hedges',
    label: 'Lawn Care & Hedging',
    category: 'Lawn Care',
  },
  {
    id: 3,
    src: '/assets/landscape-design.jpg',
    alt: 'Front yard landscape bed with shrubs and lawn',
    label: 'Landscape Design',
    category: 'Landscape Design',
  },
  {
    id: 4,
    src: '/assets/gallery-1.jpg',
    alt: 'Stone chimney home with planted entry beds',
    label: 'Planting & Entry Beds',
    category: 'Landscape Design',
  },
  {
    id: 5,
    src: '/assets/about-crew.jpg',
    alt: 'Home with flowering shrub beds along the walkway',
    label: 'Seasonal Planting',
    category: 'Seasonal',
  },
]

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <>
      <section className="page-hero">
        <div className="container on-dark">
          <span className="eyebrow">Our Work</span>
          <h1>A look at properties we've designed, built, and maintained.</h1>
          <p>
            A sample of recent projects — design installs, hardscaping,
            and ongoing maintenance work.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filtered.map((project) => (
              <div
                className={`work-cell ${project.tall ? 'tall' : ''}`}
                key={project.id}
              >
                <img src={project.src} alt={project.alt} />
                <div className="work-cell-label">{project.label}</div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--ink-soft)', marginTop: '40px' }}>
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Like what you see?
          </span>
          <h2>Let's talk about what your property needs.</h2>
          <p>
            Free on-site estimates. No pressure, no upsell — just an honest
            read on your yard.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get an Estimate
            </Link>
            <Link to="/services" className="btn btn-ghost">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
