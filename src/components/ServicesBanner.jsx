import image5 from '../assets/image/image5.PNG'
import './ServicesBanner.css'

function ServicesBanner() {
  return (
    <section className="sb-section">
      <div className="sb-image-container">
        <img src={image5} alt="Services Banner" className="sb-image" />
      </div>
      <div className="sb-overlay-main sb-opacity-07 sb-bg-black"></div>
      <div className="sb-content">
        <div className="sb-title-outer">
          <div className="sb-title-name">
            <h2 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">
              Quality Services for Your Construction Needs.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesBanner





