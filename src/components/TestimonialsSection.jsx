import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import quoteIcon from '../assets/home_images/quote-icon.svg'
import img3 from '../assets/latest/latest10.jpeg'
import img5 from '../assets/latest/latest11.jpeg'
import './TestimonialsSection.css'

function TestimonialsSection() {
  const sliderRef = useRef(null)

const testimonials = [
  {
    name: "",
    designation: "Homeowner",
    text: "The architectural design process was smooth and well thought out. They understood our requirements clearly and translated them into a functional and aesthetically pleasing design. Every detail was carefully planned, which made execution easy."
  },
  {
    name: "",
    designation: "Commercial Project Owner",
    text: "Their construction management team handled everything professionally, from planning to execution. The project was completed on schedule, and quality was maintained throughout. Communication was clear and timely at every stage."
  },
  {
    name: "",
    designation: "Residential Client",
    text: "The interior design work completely transformed our home. The team balanced aesthetics with practicality and created spaces that feel comfortable and elegant. We were impressed with their attention to detail and material selection."
  },
  {
    name: "",
    designation: "Property Developer",
    text: "The project consultation services were extremely helpful. They guided us through design decisions, approvals, and execution strategies with clarity and experience. Their insights helped us avoid costly mistakes and move forward confidently."
  }
];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  const goToPrev = () => {
    sliderRef.current?.slickPrev()
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sec-subtitle2">CLIENTS REVIEWS</span>
              <h2 className="sec-title">TESTIMONIALS</h2>
            </div>
            <div className="vs-carousel vssliderClient2 row slick-initialized slick-slider">
              <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col">
                    <div className="client-block--style2">
                      <span className="client-block__shape position-absolute top-0 end-0 z-n1">
                        <img src={quoteIcon} alt="quote icon" />
                      </span>
                      <p className="client-block__text">{testimonial.text}</p>
                      <div className="client-block__clientInfo">
                        <div className="client-block__info">
                          <h3 className="client-block__name">{testimonial.name}</h3>
                          {/* <span className="client-block__designation">{testimonial.designation}</span> */}
                          <div className="client-block__ratings">
                            <ul>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                              <li><i className="fas fa-star"></i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="d-flex align-items-center gap-2 mb-30 client-block__arrows">
              <button className="icon-btn style9" onClick={goToPrev}>
                <svg width="30.002" height="7.003" viewBox="0 0 30.002 7.003">
                  <path data-name="Rectangle 50 copy 8" d="M416.723,6229.985,413,6226.51q1.876-1.756,3.751-3.515v2.885H443v1.24H416.748V6230A.082.082,0,0,0,416.723,6229.985Z" transform="translate(-412.997 -6222.996)"></path>
                </svg>
              </button>
              <button className="icon-btn style9" onClick={goToNext}>
                <svg width="30.003" height="7.003" viewBox="0 0 30.003 7.003">
                  <path d="M550.251,6227.12H524v-1.24h26.252V6223q1.876,1.757,3.751,3.515l-3.726,3.475a.149.149,0,0,0-.025.014Z" transform="translate(-523.999 -6222.996)"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="client-img-wrapper">
              <div className="client-img__bg-shape"></div>
              <div className="client-img__two">
                <img src={img5} alt="testi 2" />
              </div>
              <div className="client-img__one">
                <img src={img3} alt="testi 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

