import { useState } from 'react'
import latest1 from '../assets/latest/latest1.jpeg'
import latest4 from '../assets/latest/latest4.jpeg'
import latest7 from '../assets/latest/latest7.jpeg'
import latest11 from '../assets/latest/latest11.jpeg'
import latest12 from '../assets/latest/latest12.jpeg'
import bgService from '../assets/home_images/bg-service-01.jpg'
import './OurServicesSection.css'

const services = [
  {
    id: 'tab1',
    title: 'Master Plans',
    description: 'We create comprehensive master plans that integrate architectural vision with practical functionality, ensuring every project starts with a solid foundation.',
    image: latest1,
    position: 'right'
  },
  {
    id: 'tab2',
    title: 'Architecture',
    description: 'Our architectural services combine innovative design with sustainable practices, creating buildings that are both beautiful and environmentally responsible.',
    image: latest11,
    position: 'right'
  },
  {
    id: 'tab3',
    title: 'Landscaping',
    description: 'We design outdoor spaces that harmonize with nature, creating landscapes that enhance the beauty and value of your property.',
    image: latest7,
    position: 'right'
  },
  {
    id: 'tab4',
    title: 'Interior',
    description: 'We transform interior spaces into functional and aesthetically pleasing environments that reflect your style and meet your lifestyle needs.',
    image: latest12,
    position: 'left'
  },
  {
    id: 'tab5',
    title: 'Construction',
    description: 'We manage complete construction projects with precision and quality, ensuring timely delivery and adherence to the highest standards.',
    image: latest4,
    position: 'left'
  },
  {
    id: 'tab6',
    title: 'Urban Designs',
    description: 'We develop urban design solutions that create vibrant, sustainable communities with thoughtful planning and innovative design approaches.',
    image: '/projects_banner.jpg',
    position: 'left'
  }
]

function OurServicesSection() {
  const [activeTab, setActiveTab] = useState('tab1')
  const [hoveredTab, setHoveredTab] = useState(null)
  const [isHovering, setIsHovering] = useState(false)

  const leftColumnServices = services.filter(service => service.position === 'right')
  const rightColumnServices = services.filter(service => service.position === 'left')
  
  // Use hoveredTab if it exists, otherwise use activeTab
  const displayTab = hoveredTab || activeTab
  const activeService = services.find(service => service.id === displayTab) || services[1]

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const handleMouseEnter = (tabId) => {
    setHoveredTab(tabId)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setHoveredTab(null)
    setIsHovering(false)
  }

  return (
    <section 
      className="os-section section-full p-t80 p-b50 overlay-wraper os-bg-top-center os-bg-parallax"
      style={{ backgroundImage: `url(${bgService})` }}
    >
      <div className="overlay-main os-bg-black"></div>
      <div className="os-square-shape1"></div>
      <div className="os-square-shape2"></div>
      
      <div className="container">
        <div className="os-header">
          <h2 className="os-title text-white text-uppercase">What We Do</h2>
          <div className="os-separator-outer">
            <div className="os-separator"></div>
          </div>
        </div>
        <div className={`os-section-content os-circle-block-outer ${isHovering ? 'os-hovering' : ''}`} data-bs-toggle="tab-hover">
          <div className="row os-nav os-nav-tab" role="tablist">
            {/* Left Column */}
            <div className="col-lg-4 col-md-12 m-b30">
              {leftColumnServices.map((service) => (
                <div key={service.id} className="os-nav-item" role="presentation">
                  <a
                    className={`os-nav-link os-icon-box-wraper os-right p-a20 text-white ${
                      activeTab === service.id ? 'active' : ''
                    }`}
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabClick(service.id)
                    }}
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={handleMouseLeave}
                    role="tab"
                    aria-selected={activeTab === service.id}
                  >
                    <div className="os-icon-content">
                      <h4 className="os-title-text text-uppercase">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Middle Column - Image */}
            <div className="col-lg-4 col-md-12 m-b30">
              <div className="os-circle-content-pic os-tab-content">
                {services.map((service) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`os-tab-pane ${displayTab === service.id ? 'active show' : ''}`}
                    role="tabpanel"
                  >
                    <div className="os-box">
                      <div className="os-media text-primary m-b20">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4 col-md-12 m-b30">
              {rightColumnServices.map((service) => (
                <div key={service.id} className="os-nav-item" role="presentation">
                  <a
                    className={`os-nav-link os-icon-box-wraper os-left p-a20 text-white ${
                      activeTab === service.id ? 'active' : ''
                    }`}
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabClick(service.id)
                    }}
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={handleMouseLeave}
                    role="tab"
                    aria-selected={activeTab === service.id}
                  >
                    <div className="os-icon-content">
                      <h4 className="os-title-text text-uppercase">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection

