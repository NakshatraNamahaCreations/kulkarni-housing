import formBg from '../assets/home_images/bg.jpg'
import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="contact-form-card">
            <div className="contact-form-card__bg" style={{ backgroundImage: `url(${formBg})` }}></div>
            <div className="contact-form-card__content">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Get In Touch</h2>
                <p className="contact-form-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="tel" name="phone" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

