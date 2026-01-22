import HeaderTop from '../components/HeaderTop'
import HeaderMain from '../components/HeaderMain'
import ServicesBanner from '../components/ServicesBanner'
import ServicesSection from '../components/ServicesSection'
import OurStorySection from '../components/OurStorySection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <HeaderTop />
      <HeaderMain />
      <ServicesBanner />
      <OurStorySection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default Services

