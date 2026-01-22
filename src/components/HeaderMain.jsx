import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import headerTexture from '../assets/home_images/header-textures-1.svg'
import './HeaderMain.css'

function HeaderMain() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  
  return (
    <div className="header-main position-relative">
      <div className="header-textures position-absolute end-0 top-0">
        <img src={headerTexture} alt="texture" />
      </div>
      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMobileMenu}></div>
      )}
      <div className="container">
        <div className="menu-top">
          <div className="header-row">
            <div className="header-logo-wrapper">
              <div className="header-logo">
                <Link to="/" onClick={closeMobileMenu}>
                  <img src="/Group 118 (1).png" alt="Kulkarni Housing Construction and Architectural firm Logo" className="logo-image" />
                </Link>
              </div>
            </div>
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeMobileMenu}>Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={closeMobileMenu}>Projects</Link>
                </li>
               
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain

