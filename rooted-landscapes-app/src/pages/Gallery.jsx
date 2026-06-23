import { useState } from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.jsx'

const CATEGORIES = ['All', 'Landscape Design', 'Hardscaping', 'Lawn Care', 'Seasonal']

const PROJECTS = [
  { id: 1, category: 'Hardscaping', tall: true },
  { id: 2, category: 'Lawn Care' },
  { id: 3, category: 'Landscape Design' },
  { id: 4, category: 'Landscape Design' },
  { id: 5, category: 'Seasonal' },
  { id: 6, category: 'Hardscaping' },
  { id: 7, category: 'Lawn Care' },
  { id: 8, category: 'Landscape Design' },
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
            Photos from real projects will go here — design installs,
            hardscaping, and before/after maintenance work.
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

          {/* PLACEHOLDER GALLERY GRID: swap each Placeholder for a real <img> once photos are sent */}
          <div className="work-grid">
            {filtered.map((project) => (
              <Placeholder
                key={project.id}
                className={`work-cell ${project.tall ? 'tall' : ''}`}
                label={`${project.category}<br>Photo pending`}
              />
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
