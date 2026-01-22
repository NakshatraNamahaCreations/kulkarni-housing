import './HeaderTop.css'

function HeaderTop() {
  return (
  <div className="header-top" id="header-top">

      <div className="header-shape"></div>
      <div className="container">
        <div className="header-top-content">
          <div className="header-text-wrapper">
            <p className="header-text">
              <span className="header-text__bullet"></span>
              Your Trusted Partner in Building Dream Homes
            </p>
          </div>
          <div className="header-social">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
         
    
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop

