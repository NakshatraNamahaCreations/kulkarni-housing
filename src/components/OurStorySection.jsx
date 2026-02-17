import latest1 from '../assets/latest/latest1.jpeg'
import latest2 from '../assets/latest/latest2.jpeg'
import latest3 from '../assets/latest/latest3.jpeg'
import latest4 from '../assets/latest/latest4.jpeg'
import './OurStorySection.css'

function OurStorySection() {
  const services = [
    {
      category: '01',
      title: 'ARCHITECTURE DESIGN',
      description: 'Professional architectural design services for residential and commercial projects. We create innovative and functional designs that meet your vision and requirements.',
      image: latest1
    },
    {
      category: '02',
      title: 'CONSTRUCTION MANAGEMENT',
      description: 'Complete construction management services ensuring quality, timely delivery, and cost-effective solutions for all your building projects.',
      image: latest2
    },
    {
      category: '03',
      title: 'INTERIOR DESIGN',
      description: 'Transform your spaces with our expert interior design services. We combine aesthetics with functionality to create beautiful living environments.',
      image: latest3
    },
    {
      category: '04',
      title: 'PROJECT CONSULTATION',
      description: 'Comprehensive project consultation services to guide you through every stage of your construction or renovation project from concept to completion.',
      image: latest4
    }
  ]

  return (
    <section className="our-story">
      <div className="square_shape1"></div>
      <div className="square_shape2"></div>
      <div className="square_shape3"></div>
      <div className="square_shape4"></div>
      <div className="container">
        <h2 className="section-title">OUR SERVICES</h2>
        <p className="section-subtitle">
  We are a one-stop solution providing our clients with architectural design, 3D elevations, structural design, plumbing and electrical drawings, and landscape concepts.
</p>

        {services.map((service, index) => (
          <div 
            key={index} 
            className={`story-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="story-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className={`story-card ${index % 2 !== 0 ? 'story-card-black' : ''}`}>
              <span className="year">{service.category}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurStorySection
