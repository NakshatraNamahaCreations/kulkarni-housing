import HeaderTop from '../components/HeaderTop'
import HeaderMain from '../components/HeaderMain'
import AboutBanner from '../components/AboutBanner'
import AboutSection from '../components/AboutSection'
import OurServicesSection from '../components/OurServicesSection'
import OurExpertsSection from '../components/OurExpertsSection'
import Footer from '../components/Footer'
import './About.css'
import OurTeam from '../components/OurTeam'

function About() {
  return (
    <div className="about-page">
      <HeaderTop />
      <HeaderMain />
      <AboutBanner />
      <AboutSection />
      <OurServicesSection />
      {/* <OurExpertsSection /> */}
      <OurTeam/>
      <Footer />
    </div>
  )
}

export default About

