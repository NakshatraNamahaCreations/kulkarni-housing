import latest11 from '../assets/latest/latest11.jpeg'
import './ContactForm.css'

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-layout">
          {/* Left Side - Image */}
          <div className="contact-form-image-wrapper">
            <img src={latest11} alt="Contact" className="contact-form-image" />
          </div>
          
          {/* Right Side - Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-content">
              <h2 className="contact-form-title">Get In Touch</h2>
              <p className="contact-form-subtitle">Contact us for your construction and design needs</p>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-textarea" rows="4" required></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

