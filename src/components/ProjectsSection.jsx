import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import project4 from '../assets/projects/project-4.jpg'
import project5 from '../assets/projects/project-5.jpg'
import bgElement from '../assets/home_images/element-2.png'
import './ProjectsSection.css'

function ProjectsSection() {
  const projects = [
    {
      image: project1,
      title: 'Superstructure Cardina Maritime',
      location: 'United State'
    },
    {
      image: project2,
      title: 'Superstructure Cardina Maritime',
      location: 'United State'
    },
    {
      image: project3,
      title: 'Roof Reparation',
      location: 'United State'
    },
    {
      image: project4,
      title: 'Hull University Vinci Construction',
      location: 'United State'
    },
    {
      image: project5,
      title: 'Steel and Glass',
      location: 'United State'
    }
  ]

  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg-left position-absolute start-0 bottom-0 z-index-n1">
        <img src={bgElement} alt="background" />
      </div>
      <div className="projects-diagonal-shape"></div>
      <div className="container">
        <div className="projects-header">
          <p className="projects-subtitle">OUR WORK SHOWCASE</p>
          <h2 className="projects-title">EXPLORE RECENT PROJECTS</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-block--style3">
              <div className="project-block__media">
                <a href="#project-details" className="project-block__link">
                  <img className="project-block__img" src={project.image} alt={project.title} />
                  <div className="project-block__dark-overlay"></div>
                  <div className="project-block__gradient-overlay"></div>
                  <div className="project-block__content-overlay">
                    <div className="project-block__content">
                      <div className="project-block__content__left">
                        <h3 className="project-block__title h4">
                          <a className="project-block__title__link" href="#project-details">{project.title}</a>
                        </h3>
                        <span className="project-block__location">LOCATION: {project.location}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

