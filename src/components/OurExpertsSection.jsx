import pic1 from '../assets/team/pic1.jpg'
import pic2 from '../assets/team/pic2 (2).jpg'
import team3 from '../assets/team/team3.jpg'
import team4 from '../assets/team/team4.jpg'
import team5 from '../assets/team/team5.jpg'
import './OurExpertsSection.css'

const teamMembers = [
  { id: 1, name: 'David Gray', image: pic2 },
  { id: 2, name: 'Taylor Roberts', image: team3 },
  { id: 3, name: 'Robert Willson', image: team4 },
  { id: 4, name: 'Austin Evon', image: team5 }
]

function OurExpertsSection() {
  return (
    <section className="oe-section">
      <div className="container">
        <div className="oe-section-header">
          <h2 className="oe-main-title text-uppercase">Our Experts</h2>
          <div className="oe-header-separator-outer">
            <div className="oe-header-separator"></div>
          </div>
        </div>
        <div className="row">
          {/* Left Section - Grid */}
          <div className="oe-col-lg-6 col-md-12">
            <div className="oe-right-part">
              <div className="oe-team-grid">
                {teamMembers.map((member) => (
                  <div key={member.id} className="oe-col-md-6 col-sm-6 col-xs-6 oe-m-tb15">
                    <div className="oe-wt-team-six oe-bg-white">
                      <div className="oe-wt-team-media oe-wt-thum-bx oe-wt-img-overlay1">
                        <img src={member.image} alt={member.name} />
                        <div className="oe-overlay-bx">
                          <div className="oe-overlay-icon">
                            <ul className="oe-social-icons-grid oe-social-square-grid oe-social-dark">
                              <li><a href="javascript:void(0);" className="oe-social-link-grid"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="javascript:void(0);" className="oe-social-link-grid"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="javascript:void(0);" className="oe-social-link-grid"><i className="fab fa-linkedin-in"></i></a></li>
                              <li><a href="javascript:void(0);" className="oe-social-link-grid"><i className="fab fa-youtube"></i></a></li>
                              <li><a href="javascript:void(0);" className="oe-social-link-grid"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="oe-wt-team-info text-center oe-bg-white p-lr10 p-tb20">
                        <h5 className="oe-wt-team-title text-uppercase oe-m-a0">{member.name}</h5>
                        <p className="oe-m-b0">Co-manager associated</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Black Background */}
          <div className="oe-col-lg-6 col-md-12 oe-bg-black oe-square-shape1 oe-square-shape2">
            <div className="oe-left-part m-experts p-t90">
         

              <div className="oe-team-six oe-large-pic">
                <div className="oe-team-media oe-thum-bx">
                  <img src={pic1} alt="Robert Willson" />
                </div>
                <div className="oe-team-info text-center p-lr10 p-tb20 text-white">
                  <h2 className="oe-team-title text-uppercase text-white oe-font-32 font-weight-500">Robert Willson</h2>
                  <p className="oe-font-22">Co-manager associated</p>
                  <ul className="oe-social-icons oe-social-md oe-social-square oe-social-dark oe-white-border oe-has-bg">
                    <li><a href="javascript:void(0);" className="oe-social-link"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="javascript:void(0);" className="oe-social-link"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="javascript:void(0);" className="oe-social-link"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="javascript:void(0);" className="oe-social-link"><i className="fab fa-youtube"></i></a></li>
                    <li><a href="javascript:void(0);" className="oe-social-link"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>

              <div className="oe-hilite-title p-lr20 m-tb20 text-left text-uppercase oe-bdr-gray oe-bdr-left">
                <strong className="oe-text-gray">Experts</strong>
                <span className="text-white">Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurExpertsSection

