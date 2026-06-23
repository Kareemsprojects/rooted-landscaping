import { useState } from 'react'

const SERVICE_OPTIONS = [
  'Landscape Design',
  'Hardscaping',
  'Lawn Care & Maintenance',
  'Seasonal Cleanup',
  'Irrigation',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: not yet wired to a submission service (e.g. Formspree).
    // Add a fetch() call to your form endpoint here when ready.
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container on-dark">
          <span className="eyebrow">Get In Touch</span>
          <h1>Tell us what you're working with — we'll tell you what it needs.</h1>
          <p>
            Free on-site estimates. No pressure, no upsell — just an honest
            read on your yard.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Contact Info</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', marginBottom: '10px' }}>
              Reach us directly
            </h2>
            <p>
              Prefer to skip the form? Call or email and we'll get back to
              you within one business day.
            </p>

            <h3>Phone</h3>
            <a href="tel:+15551234567">(555) 123-4567</a>

            <h3>Email</h3>
            <a href="mailto:hello@rootedlandscapes.com">hello@rootedlandscapes.com</a>

            <h3>Service Area</h3>
            <p>Serving the local area and surrounding communities.</p>

            <h3>Hours</h3>
            <p>Monday – Saturday, 7:00 AM – 6:00 PM</p>
          </div>

          <div className="contact-form">
            <span className="eyebrow">Request an Estimate</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', marginBottom: '24px' }}>
              Send us a few details
            </h2>

            {submitted ? (
              <div
                style={{
                  background: 'var(--stone)',
                  padding: '28px',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                }}
              >
                Thanks — this form isn't connected to anything yet, but
                once it is, your message will land here.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">What do you need?</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell us about your property</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="A few details about your yard and what you're looking for..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
