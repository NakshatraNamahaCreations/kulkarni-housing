import bgImage from '../assets/home_images/bg.jpg'
import successBg from '../assets/home_images/sucess-bg.svg'
import successIcon1 from '../assets/form/sucess-1.svg'
import successIcon2 from '../assets/form/sucess-2.svg'
import successIcon3 from '../assets/form/sucess-3.svg'
import './SuccessSection.css'

function SuccessSection() {
  return (
    <section className="success-section space-top z-index-common background-image" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="success__overlay"></div>
      <div className="success__shape"></div>
      <div className="success__element1 position-absolute top-0 start-0 z-index-n1">
        <svg width="537.549" height="430.304" viewBox="0 0 537.549 430.304">
          <g transform="translate(0 -4705)">
            <path d="M310.6,5135.3,152.516,4998.368,462.806,4803.84l57.633-32.263Z" fill="#fc6601"></path>
            <path d="M0,4705H537.549L0,5052.363Z" fill="#fc6601"></path>
          </g>
        </svg>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-6 mx-auto">
            <div className="title-area text-center">
              <span className="sec-subtitle2 text-white">COVERING ARCHITECTURAL DESIGN</span>
              <h2 className="sec-title text-white">
                YOUR <span className="highlight">RENOVATION</span> STARTS HERE
              </h2>
              <a href="#contact" className="vs-btn">
                <span className="vs-btn__bar"></span>
                START CONSULTING
              </a>
            </div>
          </div>
        </div>
        <div className="row gx-0 success-cards-row">
          <div className="col-lg-4 col-md-6">
            <div className="success-block--style1 background-image" style={{ backgroundImage: `url(${successBg})` }}>
              <div className="success-block__icon">
                <img src={successIcon1} alt="success icon 1" />
              </div>
              <div className="success-block__number">
                <span>80</span> Million SQFT
                <sup>Over</sup>
              </div>
              <p className="success-block__text">of Industrial space delivered.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="success-block--style1 background-image" style={{ backgroundImage: `url(${successBg})` }}>
              <div className="success-block__icon">
                <img src={successIcon2} alt="success icon 2" />
              </div>
              <div className="success-block__number">
                <span>8,000</span> multi-room
                <sup>Over</sup>
              </div>
              <p className="success-block__text">of Industrial space delivered.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="success-block--style1 background-image" style={{ backgroundImage: `url(${successBg})` }}>
              <div className="success-block__icon">
                <img src={successIcon3} alt="success icon 3" />
              </div>
              <div className="success-block__number">
                <span>100</span> Kilometers
                <sup>Over</sup>
              </div>
              <p className="success-block__text">of Industrial space delivered.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessSection

