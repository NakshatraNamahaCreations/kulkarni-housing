import './ContactInfo.css'

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="contact-info-grid">
          {/* Address Block */}
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="contact-info-title">Our Address</h3>
            <p className="contact-info-text">
             #317/318 Bhuvana,  3rd Floor,
              BDA main Road, Dwarka Nagar Rajarajeshwari Nagar
              Bengaluru 560098, Karnataka, India
            </p>
          </div>

          {/* Phone Block */}
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3 className="contact-info-title">Phone Number</h3>
            <p className="contact-info-text">
              <a href="tel:+919108316506" className="contact-info-link">
                +91 9108316506
              </a>
              <a href="tel:+919845057415" className="contact-info-link">
                +91 9845057415
              </a>
            </p>
          </div>

          {/* Email Block */}
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="contact-info-title">Email Address</h3>
            <p className="contact-info-text">
              <a href="mailto:mayurgk@gmail.com" className="contact-info-link">
                mayurgk@gmail.com
              </a>
           
             
            </p>
          </div>

          {/* Working Hours Block */}
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="contact-info-title">Working Hours</h3>
            <p className="contact-info-text">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo

















