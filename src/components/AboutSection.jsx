import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import latest1 from '../assets/latest/latest1.jpeg'
import latest2 from '../assets/latest/latest2.jpeg'
import latest3 from '../assets/latest/latest3.jpeg'
import latest4 from '../assets/latest/latest4.jpeg'
import './AboutSection.css'

function AboutSection() {
  const sliderRef = useRef(null)

  const carouselImages = [
    { src: latest1, alt: 'Project 1' },
    { src: latest2, alt: 'Project 2' },
    { src: latest3, alt: 'Project 3' },
    { src: latest4, alt: 'Project 4' }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    customPaging: (i) => <span></span>
  }

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content-wrapper">
          {/* Left Side - Text Content */}
          <div className="about-text-content">
            <span className="about-welcome">About Us</span>
            <h2 className="about-main-title">
              We are a <span className="about-creative">creative</span> Building - Design Company
            </h2>
            <p className="about-description">
              At Kulkarni Housing Construction and Architectural firm, we build more than homes; we build communities where luxury meets convenience, affordability, and above all, trust. When you choose Kulkarni Housing Construction and Architectural firm, you choose our unwavering commitment to quality and customer service.
            </p>
            <p className="about-description">
              We preserve the natural environment and design homes that harmonize with the scenic beauty of the surrounding landscape. We would never build or design anything that we wouldn't want to live in. Every customer should be proud of their home, and their lasting relationship with us will always remain our bottom line.
            </p>
            <div className="about-read-more-wrapper">
              <a href="#about" className="about-read-more-btn">
                <span>Read More</span>
                <em></em>
              </a>
              <div className="about-read-more-line"></div>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="about-carousel-right-wrapper">
            <div className="m-carousel-1 m-l100">
              <div className="owl-carousel home-carousel-1 owl-btn-vertical-center">
                <Slider ref={sliderRef} {...settings}>
                  {carouselImages.map((image, index) => (
                    <div key={index} className="item">
                      <div className="owl-img wt-img-effect zoom-slow">
                        <a href="#about">
                          <img src={image.src} alt={image.alt} />
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {/* Experience Text Below Image - Outside after */}
            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
              <strong>20 Years</strong>
              <span className="text-black">Experience Working</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
