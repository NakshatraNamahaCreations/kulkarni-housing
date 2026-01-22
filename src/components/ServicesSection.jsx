import serviceBg from '../assets/home_images/service-block-bg.png'
import serviceIcon1 from '../assets/services/service-1.svg'
import serviceIcon2 from '../assets/services/service-2.svg'
import serviceIcon3 from '../assets/services/service-3.svg'
import './ServicesSection.css'

function ServicesSection() {
  const services = [
    {
      icon: serviceIcon1,
      title: 'Quality Materials',
      description: 'Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi, lo bibendum auctor.',
      footerColor: 'transparent',
      buttonColor: '#fc6601'
    },
    {
      icon: serviceIcon2,
      title: 'General Construction',
      description: 'Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi, lo bibendum auctor.',
      footerColor: 'transparent',
      buttonColor: '#fc6601'
    },
    {
      icon: serviceIcon3,
      title: 'Architecture Design',
      description: 'Professional architectural design services for residential and commercial projects with modern solutions.',
      footerColor: 'transparent',
      buttonColor: '#fc6601'
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="services-logo-icon"></div>
          <p className="services-subtitle">QUALITY SERVICING OPPORTUNITY</p>
          <h2 className="services-title">QUALITY SERVICES</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-block">
              <div className="service-block__bg" style={{ backgroundImage: `url(${serviceBg})` }}>
                <svg width="372.006" height="87" viewBox="0 0 372.006 87" className="service-block__pattern">
                  <g transform="translate(-374.997 -2256)">
                    <path d="M448.062,2278.9l50.349,19.889-98.825,28.254-18.356,4.685Z" fill="#f0f0f0"></path>
                    <path d="M665.6,2256l81.4,86.332L432.178,2343,375,2341.7Z" fill="#f0f0f0"></path>
                  </g>
                </svg>
              </div>
              <div className="service-block__content">
                <div className="service-block__icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="service-block__title">{service.title}</h3>
                <p className="service-block__description">{service.description}</p>
                <div className="service-block__footer" style={{ backgroundColor: service.footerColor }}>
                  <svg width="100%" height="100%" viewBox="0 0 372.006 87" className="service-block__shape" preserveAspectRatio="none">
                    <g transform="translate(-374.997 -2256)">
                      <path d="M448.062,2278.9l50.349,19.889-98.825,28.254-18.356,4.685Z" fill="#fc6601"></path>
                      <path d="M665.6,2256l81.4,86.332L432.178,2343,375,2341.7Z" fill="#fc6601"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection


