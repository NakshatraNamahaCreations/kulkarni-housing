import pic3 from '../assets/image/image4.PNG'
import './ContactBanner.css'

function ContactBanner() {
  return (
    <section className="cb-section">
      <div className="cb-image-container">
        <img src={pic3} alt="Contact Us" className="cb-image" />
      </div>
      <div className="cb-overlay-main cb-opacity-07 cb-bg-black"></div>
      <div className="cb-content">
        <div className="cb-title-outer">
          <div className="cb-title-name">
            <h1 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">
            Inspired design for people
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner



















