import { Link } from 'react-router-dom'

const SERVICES = [
  {
    mark: '01',
    title: 'Landscape Design',
    desc: 'A full plan before a single shovel goes in the ground — planting layout, grading, and drainage mapped to your actual soil and sun exposure.',
    items: [
      'Planting plans & layout',
      'Grading & drainage planning',
      'Native & low-maintenance plant selection',
      '3D mockups for larger projects',
    ],
  },
  {
    mark: '02',
    title: 'Hardscaping',
    desc: 'Patios, walkways, and retaining walls built to handle freeze-thaw cycles and years of foot traffic, not just look good on install day.',
    items: [
      'Retaining walls',
      'Patios & walkways',
      'Fire pits & outdoor living spaces',
      'Stone & paver work',
    ],
  },
  {
    mark: '03',
    title: 'Lawn Care & Maintenance',
    desc: 'Recurring care on a schedule built around your specific grass type, region, and growing season — not a generic monthly visit.',
    items: [
      'Mowing & edging',
      'Fertilization & weed control',
      'Aeration & overseeding',
      'Pest & disease treatment',
    ],
  },
  {
    mark: '04',
    title: 'Seasonal Cleanup',
    desc: 'Spring and fall cleanups that keep a property looking cared for in the gaps between regular maintenance visits.',
    items: [
      'Leaf & debris removal',
      'Mulching & bed refresh',
      'Pruning & trimming',
      'Winterization',
    ],
  },
  {
    mark: '05',
    title: 'Irrigation',
    desc: "Installation and tune-ups that keep water going where it's actually needed, and nowhere it isn't.",
    items: [
      'System installation',
      'Spring start-up & fall shutdown',
      'Leak detection & repair',
      'Smart controller setup',
    ],
  },
  {
    mark: '06',
    title: 'Commercial Grounds Care',
    desc: 'Ongoing maintenance contracts for HOAs, property managers, and commercial sites that need consistent, scheduled upkeep.',
    items: [
      'Scheduled visits & reporting',
      'Snow & ice management',
      'Multi-property contracts',
      'Dedicated point of contact',
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container on-dark">
          <span className="eyebrow">What we do</span>
          <h1>Services built around how a property actually grows.</h1>
          <p>
            From first design to year-round upkeep — each service below is
            something we handle start to finish, not hand off to a
            subcontractor.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="svc-grid">
            {SERVICES.map((svc) => (
              <div className="svc-card" key={svc.mark}>
                <span className="service-mark">{svc.mark}</span>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <ul>
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Not sure where to start?
          </span>
          <h2>Tell us what you're working with — we'll tell you what it needs.</h2>
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
