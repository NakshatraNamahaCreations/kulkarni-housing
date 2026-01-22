import HeaderTop from '../components/HeaderTop'
import HeaderMain from '../components/HeaderMain'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import FactsSection from '../components/FactsSection'
import LatestProjectsSection from '../components/LatestProjectsSection'
import BlogSection from '../components/BlogSection'
import TestimonialsSection from '../components/TestimonialsSection'
import SuccessSection from '../components/SuccessSection'
import FeaturesSection from '../components/FeaturesSection'
import ContactSection from '../components/ContactSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <HeaderTop />
      <HeaderMain />
      <HeroSection />
      {/* <CategorySection /> */}
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProcessSection />
      {/* <ProjectsSection /> */}
      <LatestProjectsSection />
      <TestimonialsSection />
      {/* <SuccessSection /> */}
      <FactsSection />
      {/* <FeaturesSection /> */}
      <BlogSection />
      {/* <ContactSection /> */}
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home

