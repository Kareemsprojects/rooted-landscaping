import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.jsx'

const VALUES = [
  {
    mark: 'Soil First',
    title: 'Plan for what\'s underground',
    desc: 'Drainage, grading, and soil health get solved before a single plant goes in. Skip this step and the prettiest install fails within a year.',
  },
  {
    mark: 'No Surprises',
    title: 'Clear quotes, clear scope',
    desc: "You get a written quote that says exactly what's included, so price isn't a moving target once work starts.",
  },
  {
    mark: 'Stay On',
    title: 'We maintain what we build',
    desc: "An install is the start of the relationship, not the end of it. We're the ones who show up after, too.",
  },
  {
    mark: 'Right-Sized',
    title: 'Honest about what a yard needs',
    desc: "We'll tell you when a smaller project is the better call — not just upsell to the biggest scope possible.",
  },
]

const CREW = [
  { role: 'Owner / Lead Designer' },
  { role: 'Crew Lead, Hardscaping' },
  { role: 'Crew Lead, Maintenance' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container on-dark">
          <span className="eyebrow">About Us</span>
          <h1>
            A small crew that treats your property like it's the only one
            we have.
          </h1>
          <p>
            Here's who we are, how we think about the work, and why we do
            it the way we do.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container story-block">
          <Placeholder label="Crew photo<br>pending" />
          <div className="story-text">
            <span className="eyebrow">Our story</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', marginBottom: '20px' }}>
              Started with one truck and a simple rule.
            </h2>
            <p>
              Rooted Landscapes started with a simple rule: never leave a
              property looking worse than when you found it — even
              temporarily. That rule turned into a way of working. We walk
              every site before we quote it, we build for drainage and
              soil health before we build for looks, and we stay on for
              the maintenance after the install is finished.
            </p>
            <p>
              Over the years that's meant turning down jobs that didn't
              make sense for the land, and it's meant fixing problems
              other companies papered over. It's slower. It's also why
              clients tend to stick around.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad services-dark">
        <div className="container">
          <div className="section-head">
            <h2>What we believe about this work</h2>
            <p>
              A few principles that shape every quote, every install, and
              every maintenance visit.
            </p>
          </div>
          <div
            className="values-list"
            style={{ background: 'var(--line-dark)', borderColor: 'var(--line-dark)' }}
          >
            {VALUES.map((v) => (
              <div className="value-item" style={{ background: 'var(--bg)' }} key={v.mark}>
                <span className="service-mark">{v.mark}</span>
                <h3 style={{ color: 'var(--paper)' }}>{v.title}</h3>
                <p style={{ color: 'rgba(247,245,240,0.68)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <h2>The crew</h2>
            <p>The people who actually show up to your property.</p>
          </div>
          <div className="team-grid">
            {CREW.map((member) => (
              <div className="team-card" key={member.role}>
                <Placeholder label="Photo<br>pending" />
                <h3>Name Pending</h3>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Want to work with us?
          </span>
          <h2>Let's talk about your property.</h2>
          <p>
            Free on-site estimates. No pressure, no upsell — just an honest
            read on your yard.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get an Estimate
            </Link>
            <Link to="/gallery" className="btn btn-ghost">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
