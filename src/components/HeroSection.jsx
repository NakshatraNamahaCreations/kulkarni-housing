import { useState, useEffect } from 'react'
import image1 from '../assets/image/image4.PNG'
import image2 from '../assets/image/image2.PNG'
import image3 from '../assets/image/image1.PNG'
import './HeroSection.css'

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [image1, image2, image3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="hs-section">
      <div className="hs-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            className={`hs-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="hs-carousel-controls">
        <button className="hs-carousel-arrow hs-carousel-arrow-left" onClick={goToPrevious}>
          &#8249;
        </button>
        <button className="hs-carousel-arrow hs-carousel-arrow-right" onClick={goToNext}>
          &#8250;
        </button>
        <div className="hs-carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`hs-carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="hs-content">
        <span className="hs-subtitle">AN EXTENSIVE RANGE OF SERVICES</span>
        <h1 className="hs-title">BUILDING DREAM HOMES WITH EXCELLENCE</h1>
        <p className="hs-text">Kulkarni Housing is a Construction and Architectural firm is a highly trusted construction and architecture firm specializing in all kinds of themes.</p>
        <div className="hs-btns">
          <a href="#contact" className="hs-btn">
            <span className="hs-btn__bar"></span>
            <span className="hs-btn__text">START CONSULTING</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

