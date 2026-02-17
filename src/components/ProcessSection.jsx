// 
import React, { useState } from 'react'
import bgImage from '../assets/home_images/bg-service-01.jpg'
import './ProcessSection.css'

function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const processSteps = [
    {
      number: '01',
      title: 'CONSULTATION',
      description: 'Initial meeting to understand your vision, requirements, and budget for your dream home'
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Our expert architects create customized designs that blend functionality with aesthetic appeal'
    },
    {
      number: '03',
      title: 'PLANNING',
      description: 'Detailed planning and approvals to ensure your project meets all regulatory requirements'
    },
    {
      number: '04',
      title: 'CONSTRUCTION',
      description: 'Quality construction with premium materials, ensuring your home is built to last generations'
    }
  ]

  // Base circle style
  const getCircleStyle = (index) => {
    const isHovered = hoveredIndex === index
    return {
      padding: '50px 30px',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.3s ease',
      border: isHovered ? '2px solid #ebcd1e' : '2px solid #575757',
      boxShadow: isHovered ? '0 10px 30px rgba(235, 205, 30, 0.3)' : 'none',
      cursor: 'pointer'
    }
  }

  return (
    <section
      className="parallax parallax--our-process2"
      id="process"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="our-process2__header">
          <h2 className="our-process2__title">OUR PROCESS</h2>
          <div className="our-process2__underline"></div>
        </div>

        {/* horizontal row with process-specific classes */}
        <div className="process-row">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-col-lg-3 process-col-md-6 process-col-12"
            >
              <div
                className="our-process2__item"
                style={getCircleStyle(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h4>
                  <span className="num">{step.number}</span>
                  <span className="title-text">{step.title}</span>
                </h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
