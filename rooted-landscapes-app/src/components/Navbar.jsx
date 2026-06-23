import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (isHome) {
      const onScroll = () => setScrolled(window.scrollY > 40)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    } else {
      setScrolled(false)
    }
  }, [isHome])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const headerClass = [
    !isHome ? 'solid-bg' : '',
    isHome && scrolled ? 'scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header id="siteHeader" className={headerClass}>
        <div className="container">
          <nav>
            <NavLink to="/" className="logo">
              Rooted <span>Landscapes</span>
            </NavLink>
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <NavLink to="/contact" className="btn btn-ghost">
                Get an Estimate
              </NavLink>
              <button
                className="nav-toggle"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          className="mobile-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
