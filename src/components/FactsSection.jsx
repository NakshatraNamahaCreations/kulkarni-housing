import { useState, useEffect, useRef } from 'react'
import bgImage from '../assets/home_images/bg-2.jpg'
import './FactsSection.css'

const facts = [

  {
    number: 360,
    label: 'Finished Projects'
  },

]

function FactsSection() {
  const [counters, setCounters] = useState([0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            facts.forEach((fact, index) => {
              let current = 0
              const increment = fact.number / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= fact.number) {
                  current = fact.number
                  clearInterval(timer)
                }
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = Math.floor(current)
                  return newCounters
                })
              }, 30)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <div 
      ref={sectionRef}
      className="fs-section-full p-t80 p-b50 fs-overlay-wraper fs-bg-top-center fs-bg-parallax"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="fs-overlay-main fs-bg-black"></div>
      
      <div className="container">
        <div className="row fs-facts-row">
          <div className="col-lg-6 col-md-12">
            <div className="fs-some-facts">
              <div className="text-white text-uppercase">
                <span className="fs-font-40 font-weight-300">Some</span>
                <h2 className="fs-font-50">
                  Interesting Facts
                </h2>
                <p className="fs-font-18 font-weight-300">
                  With years of experience in construction and design, we have successfully delivered numerous projects that exceed client expectations. Our commitment to quality and excellence has made us a trusted name in the housing industry.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="fs-some-facts-counter">
              {facts.map((fact, index) => (
                <div key={index} className="col-md-4 col-sm-4">
                  <div className="fs-icon-box-wraper p-a10 text-white m-b30">
                    <div className="fs-icon-content text-center">
                      <div className="fs-font-40 font-weight-600 m-b5">
                        <span className="fs-counter">{counters[index]} +</span>
                      </div>
                      <div className="fs-separator-outer m-b20">
                        <div className="fs-separator bg-white"></div>
                      </div>
                      <span className="text-uppercase">{fact.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactsSection

