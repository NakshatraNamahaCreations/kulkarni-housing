import './FeaturesSection.css'

function FeaturesSection() {
  const features = [
    {
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience'
    },
    {
      title: 'Quality Materials',
      description: 'We use only the finest materials for durability'
    },
    {
      title: 'Timely Delivery',
      description: 'Projects completed on schedule, every time'
    },
    {
      title: 'Competitive Pricing',
      description: 'Fair and transparent pricing for all projects'
    }
  ]

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Excellence in every project we undertake
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection





























