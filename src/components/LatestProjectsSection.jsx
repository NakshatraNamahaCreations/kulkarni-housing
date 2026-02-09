import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import latest1 from '../assets/latest/latest1.jpeg'
import latest2 from '../assets/latest/latest2.jpeg'
import latest3 from '../assets/latest/latest3.jpeg'
import latest4 from '../assets/latest/latest4.jpeg'
import latest5 from '../assets/latest/latest5.jpeg'
import latest6 from '../assets/latest/latest6.jpeg'
import latest7 from '../assets/latest/latest7.jpeg'
import latest8 from '../assets/latest/latest8.jpeg'
import latest9 from '../assets/latest/latest9.jpeg'
import latest10 from '../assets/latest/latest10.jpeg'
import './LatestProjectsSection.css'

function LatestProjectsSection() {
  const sliderRef = useRef(null)

  const projects = [
    {
      image: latest1,
      title: 'Luxury Residential Villa',
      description: 'A stunning modern villa featuring contemporary design with premium finishes and spacious interiors.'
    },
    {
      image: latest2,
      title: 'Premium Apartment Complex',
      description: 'State-of-the-art residential complex with world-class amenities and sustainable design principles.'
    },
    {
      image: latest3,
      title: 'Eco-Friendly Housing Project',
      description: 'Sustainable living spaces designed to harmonize with nature while providing modern comfort.'
    },
    {
      image: latest4,
      title: 'Modern Townhouse Development',
      description: 'Elegant townhouses combining luxury and functionality in prime residential locations.'
    },
    {
      image: latest5,
      title: 'Contemporary Family Homes',
      description: 'Beautifully designed family homes with open layouts and premium quality construction.'
    },
    {
      image: latest6,
      title: 'Luxury Gated Community',
      description: 'Exclusive gated community offering privacy, security, and world-class amenities for residents.'
    },
    {
      image: latest7,
      title: 'Smart Home Residential',
      description: 'Intelligent homes equipped with modern technology and energy-efficient systems.'
    },
    {
      image: latest8,
      title: 'Premium Duplex Villas',
      description: 'Spacious duplex villas with elegant architecture and premium finishes throughout.'
    },
    {
      image: latest9,
      title: 'Modern Residential Towers',
      description: 'High-rise residential towers offering panoramic views and luxury living spaces.'
    },
    {
      image: latest10,
      title: 'Luxury Penthouse Suites',
      description: 'Exclusive penthouse suites featuring premium amenities and breathtaking city views.'
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    <section className="latest-projects-section" id="latest-projects">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <h2 className="text-uppercase font-36">Latest Projects</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black"></div>
            </div>
            <p className="latest-projects-description">
              Explore our recent construction projects showcasing innovative design and exceptional craftsmanship.
              {/* Each project reflects our commitment to quality, sustainability, and client satisfaction. */}
            </p>
          </div>
        </div>
        <div className="latest-projects-carousel-filter latest-projects-carousel">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="project-slide">
                <div className="project-card line-amiation">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="text-white font-weight-300 p-a40">
                    <h2>
                      <a href="/projects" className="text-white font-20 letter-spacing-4 text-uppercase">
                        {project.title}
                      </a>
                    </h2>
                    <p>{project.description}</p>
                    <a href="/projects" className="v-button letter-spacing-4 font-12 text-uppercase p-l20">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="carousel-navigation">
          <button className="carousel-arrow carousel-arrow-prev" onClick={goToPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-arrow carousel-arrow-next" onClick={goToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestProjectsSection

