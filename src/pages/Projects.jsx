import HeaderTop from '../components/HeaderTop'
import HeaderMain from '../components/HeaderMain'
import ProjectsBanner from '../components/ProjectsBanner'
import ProjectsGridSection from '../components/ProjectsGridSection'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import './Projects.css'

function Projects() {
  return (
    <div className="projects-page">
      <HeaderTop />
      <HeaderMain />
      <ProjectsBanner />
      <ProjectsGridSection />
      {/* <BlogSection /> */}
      <Footer />
    </div>
  )
}

export default Projects

