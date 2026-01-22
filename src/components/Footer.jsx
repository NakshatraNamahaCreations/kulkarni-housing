import { Link } from 'react-router-dom'
import bgImage from '../assets/home_images/bg-2.jpg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay overlay--dark"></div>
      <div className="footer-content">
        <div className="container">
          <div className="footer-wrapper">
            {/* Logo Column */}
            <div className="footer-column footer-logo-column">
              <div className="footer-logo">
                <Link to="/">
                  <img src="/Group 118 (1).png" alt="Kulkarni Housing is a Construction and Architectural firm Logo" className="footer-logo-image" />
                </Link>
              </div>
              <p className="footer-description">
                Building excellence through innovative design and construction solutions.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column footer-links-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Address Column */}
            <div className="footer-column footer-address-column">
              <h3 className="footer-title">Contact Us</h3>
              <div className="footer-address">
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>   #317/318 Bhuvana,  3rd Floor,
              BDA main Road, Dwarka Nagar Rajarajeshwari Nagar
              Bengaluru 560098, Karnataka, India</span>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <span>roopalimayur9@gmail.com</span>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <span>+91 9845057415</span>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <span>+91 9108316506</span>
                </p>
              </div>
            </div>

            {/* Social Icons Column */}
            <div className="footer-column footer-social-column">
              <h3 className="footer-title">Follow Us</h3>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#" aria-label="Instagram" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
     
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>&copy; 2026 Kulkarni Housing is a Construction and Architectural firm. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
