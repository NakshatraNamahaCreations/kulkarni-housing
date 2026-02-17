import './ProjectsBanner.css'
import image6 from '../assets/image/image6.PNG'

function ProjectsBanner() {
  return (
    <section className="pb-section">
      <div className="pb-image-container">
        <img src={image6} alt="Projects Banner" className="pb-image" />
      </div>
      <div className="pb-overlay-main pb-opacity-07 pb-bg-black"></div>
      <div className="pb-content">
        <div className="pb-title-outer">
          <div className="pb-title-name">
            <h2 className="text-white text-uppercase letter-spacing-5 font-18 font-weight-300">
              Our Portfolio of Excellence and Innovation.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsBanner

















