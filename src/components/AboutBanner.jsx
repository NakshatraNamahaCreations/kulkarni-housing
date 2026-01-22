import latest1 from '../assets/image/image2.PNG'
import './AboutBanner.css'

function AboutBanner() {
  return (
    <section className="ab-section">
      <div className="ab-image-container">
        <img src={latest1} alt="About Us Banner" className="ab-image" />
      </div>
      <div className="ab-overlay-main ab-opacity-07 ab-bg-black"></div>
      <div className="ab-content">
        <div className="ab-title-outer">
          <div className="ab-title-name">
            <h2 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">
              Architects with a different approach.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner


