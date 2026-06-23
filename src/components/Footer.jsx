import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo">
              Rooted <span>Landscapes</span>
            </Link>
            <p>
              Landscape design, hardscaping, and property care — built to
              last past the first season.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Landscape Design</Link></li>
              <li><Link to="/services">Hardscaping</Link></li>
              <li><Link to="/services">Lawn Care</Link></li>
              <li><Link to="/services">Seasonal Cleanup</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/gallery">Our Work</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+15551234567">(555) 123-4567</a></li>
              <li><a href="mailto:hello@rootedlandscapes.com">hello@rootedlandscapes.com</a></li>
              <li><a href="#top">Serving the local area</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Rooted Landscapes. All rights reserved.</span>
          <span>Licensed &amp; Insured</span>
        </div>
      </div>
    </footer>
  )
}
