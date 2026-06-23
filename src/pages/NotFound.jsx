import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section
      className="section-pad"
      style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          404
        </span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px' }}>
          This page wandered off the property.
        </h1>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
