import { useState } from 'react'
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
import latest11 from '../assets/latest/latest11.jpeg'
import latest12 from '../assets/latest/latest12.jpeg'
import './ProjectsGridSection.css'

function ProjectsGridSection() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const categories = ['ALL', 'HOUSE', 'BUILDING', 'OFFICE', 'GARDEN', 'INTERIOR']

  const projects = [
    // HOUSE category
    {
      image: latest1,
      title: 'Luxury Residential Villa',
      description: 'A stunning modern villa featuring contemporary design with premium finishes and spacious interiors.',
      category: 'HOUSE'
    },
    {
      image: latest3,
      title: 'Eco-Friendly Housing Project',
      description: 'Sustainable living spaces designed to harmonize with nature while providing modern comfort.',
      category: 'HOUSE'
    },
    {
      image: latest4,
      title: 'Modern Townhouse Development',
      description: 'Elegant townhouses combining luxury and functionality in prime residential locations.',
      category: 'HOUSE'
    },
    {
      image: latest5,
      title: 'Contemporary Family Homes',
      description: 'Beautifully designed family homes with open layouts and premium quality construction.',
      category: 'HOUSE'
    },
    {
      image: latest7,
      title: 'Smart Home Residential',
      description: 'Intelligent homes equipped with modern technology and energy-efficient systems.',
      category: 'HOUSE'
    },
    {
      image: latest8,
      title: 'Premium Duplex Villas',
      description: 'Spacious duplex villas with elegant architecture and premium finishes throughout.',
      category: 'HOUSE'
    },
    // BUILDING category
    {
      image: latest2,
      title: 'Premium Apartment Complex',
      description: 'State-of-the-art residential complex with world-class amenities and sustainable design principles.',
      category: 'BUILDING'
    },
    {
      image: latest6,
      title: 'Luxury Gated Community',
      description: 'Exclusive gated community offering privacy, security, and world-class amenities for residents.',
      category: 'BUILDING'
    },
    {
      image: latest9,
      title: 'Modern Residential Towers',
      description: 'High-rise residential towers offering panoramic views and luxury living spaces.',
      category: 'BUILDING'
    },
    {
      image: latest10,
      title: 'Luxury Penthouse Suites',
      description: 'Exclusive penthouse suites featuring premium amenities and breathtaking city views.',
      category: 'BUILDING'
    },
    // OFFICE category
    {
      image: latest11,
      title: 'Corporate Office Complex',
      description: 'Modern office spaces designed for productivity and employee well-being with cutting-edge facilities.',
      category: 'OFFICE'
    },
    {
      image: latest2,
      title: 'Business Center Development',
      description: 'State-of-the-art business center with flexible office spaces and modern amenities.',
      category: 'OFFICE'
    },
    {
      image: latest9,
      title: 'Commercial Office Building',
      description: 'Contemporary office building featuring sustainable design and premium workspace solutions.',
      category: 'OFFICE'
    },
    // GARDEN category
    {
      image: latest12,
      title: 'Landscape Garden Design',
      description: 'Beautifully landscaped gardens creating serene outdoor spaces for relaxation and entertainment.',
      category: 'GARDEN'
    },
    {
      image: latest3,
      title: 'Eco-Friendly Garden Project',
      description: 'Sustainable garden designs that harmonize with nature and create beautiful outdoor environments.',
      category: 'GARDEN'
    },
    {
      image: latest5,
      title: 'Residential Garden Landscape',
      description: 'Elegant garden landscapes designed to enhance residential properties with natural beauty.',
      category: 'GARDEN'
    },
    // INTERIOR category
    {
      image: latest1,
      title: 'Modern Interior Design',
      description: 'Contemporary interior spaces featuring elegant design, premium finishes, and functional layouts.',
      category: 'INTERIOR'
    },
    {
      image: latest4,
      title: 'Luxury Interior Spaces',
      description: 'Sophisticated interior designs combining comfort, style, and modern aesthetics.',
      category: 'INTERIOR'
    },
    {
      image: latest7,
      title: 'Smart Home Interiors',
      description: 'Intelligent interior designs integrated with modern technology and smart home systems.',
      category: 'INTERIOR'
    },
    {
      image: latest8,
      title: 'Premium Interior Finishes',
      description: 'High-end interior designs featuring luxury materials and exceptional craftsmanship.',
      category: 'INTERIOR'
    }
  ]

  const filteredProjects = activeCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="projects-grid-section" id="projects-grid">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <h2 className="text-uppercase font-36">Latest Projects</h2>
            <div className="wt-separator-outer">
              <div className="wt-separator bg-black"></div>
            </div>
            <p className="latest-projects-description">
              Explore our recent construction projects showcasing innovative design and exceptional craftsmanship.
            </p>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12">
            {/* Category Filter */}
            <div className="projects-category-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card line-amiation">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="text-white font-weight-300 p-a40">
                <h2>
                  <a href="#projects" className="text-white font-20 letter-spacing-4 text-uppercase">
                    {project.title}
                  </a>
                </h2>
                <p>{project.description}</p>
                {/* <a href="#projects" className="v-button letter-spacing-4 font-12 text-uppercase p-l20">
                  Read More
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGridSection

