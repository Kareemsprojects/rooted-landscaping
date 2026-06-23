import { Link } from 'react-router-dom'

const SERVICES = [
  {
    mark: '01',
    title: 'Landscape Design',
    desc: 'Planting plans, layout, and grading that account for how your yard actually drains and grows.',
    tags: ['Planting Plans', 'Grading'],
  },
  {
    mark: '02',
    title: 'Hardscaping',
    desc: 'Retaining walls, patios, walkways, and stone work built to handle freeze-thaw cycles.',
    tags: ['Retaining Walls', 'Patios'],
  },
  {
    mark: '03',
    title: 'Lawn Care & Maintenance',
    desc: 'Mowing, fertilization, aeration, and weed control on a schedule built around your grass type.',
    tags: ['Mowing', 'Fertilization'],
  },
  {
    mark: '04',
    title: 'Seasonal Cleanup & Irrigation',
    desc: 'Spring and fall cleanups, mulching, and irrigation tune-ups between visits.',
    tags: ['Cleanup', 'Irrigation'],
  },
]

const GALLERY = [
  { src: '/assets/hardscaping.jpg', alt: 'Stone retaining wall and gravel landscape bed at sunset', label: 'Hardscaping — Retaining Wall', tall: true },
  { src: '/assets/lawn-care.jpg', alt: 'Manicured front lawn with shaped hedges', label: 'Lawn Care & Hedging' },
  { src: '/assets/landscape-design.jpg', alt: 'Front yard landscape bed with shrubs and lawn', label: 'Landscape Design' },
  { src: '/assets/gallery-1.jpg', alt: 'Stone chimney home with planted entry beds', label: 'Planting & Entry Beds' },
  { src: '/assets/about-crew.jpg', alt: 'Home with flowering shrub beds along the walkway', label: 'Seasonal Planting' },
]

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <video autoPlay muted loop playsInline poster="/assets/lawn-care.jpg">
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim"></div>
        <div className="container hero-content on-dark">
          <span className="eyebrow">Landscape Design &amp; Property Care</span>
          <h1>
            Land, <em>cared for</em>
            <br />
            like it's ours.
          </h1>
          <p className="hero-sub">
            We design, build, and maintain outdoor spaces that hold up
            season after season — from the first sketch to the last leaf
            cleanup.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/gallery" className="btn btn-ghost">
              See Our Work
            </Link>
          </div>
        </div>
        <div className="scroll-cue">
          <div className="line"></div>Scroll
        </div>
      </section>

      <section className="section-pad">
        <div className="container intro">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>
              A small crew that treats your property like it's the only
              one we have.
            </h2>
          </div>
          <div className="intro-text">
            <p>
              Rooted Landscapes is a full-service landscaping company built
              around one idea: good outdoor work should outlast the season
              it was done in. We plan before we plant, we build for
              drainage and soil before we build for looks, and we show up
              for the maintenance after the install is done.
            </p>
            <div className="intro-stats">
              <div>
                <div className="stat-num">12+</div>
                <div className="stat-label">Years Operating</div>
              </div>
              <div>
                <div className="stat-num">300+</div>
                <div className="stat-label">Properties Maintained</div>
              </div>
              <div>
                <div className="stat-num">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad services-dark">
        <div className="container">
          <div className="section-head">
            <h2>What we do, from the ground up</h2>
            <p>
              Every property starts with soil, slope, and sun — the
              services below build on top of that, in the order they
              usually come up.
            </p>
          </div>

          {SERVICES.map((svc) => (
            <div className="service-row" key={svc.mark}>
              <div className="service-item">
                <span className="service-mark">{svc.mark}</span>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="service-tags">
                  {svc.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-ghost">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad home-gallery-preview">
        <div className="container">
          <div className="section-head">
            <h2>A few properties we've worked on</h2>
            <p>
              Every yard is different — here's a sense of the range, from
              full installs to ongoing care.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="work-grid">
            {GALLERY.map((item) => (
              <div
                className={`work-cell ${item.tall ? 'tall' : ''}`}
                key={item.src}
              >
                <img src={item.src} alt={item.alt} />
                <div className="work-cell-label">{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/gallery" className="btn btn-ghost-dark">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonial section-pad">
        <div className="container">
          <span className="eyebrow">From a client</span>
          <blockquote>
            "They didn't just show up and mow. They walked the property
            first, told us what our drainage problem actually was, and
            fixed it before it became a bigger issue. Three years later it
            still looks right."
          </blockquote>
          <cite>— Property owner, ongoing maintenance client</cite>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Let's talk about your property
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
            <a href="tel:+15551234567" className="btn btn-ghost">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
