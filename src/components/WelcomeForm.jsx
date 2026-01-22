import { useState } from 'react'
import latest12 from '../assets/latest/latest12.jpeg'
import './WelcomeForm.css'

function WelcomeForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="welcome-form-overlay" onClick={onClose}>
      <div className="welcome-form-container" onClick={(e) => e.stopPropagation()}>
        <div className="welcome-form-card">
          <div className="welcome-form-background">
            <img src={latest12} alt="Form Background" className="welcome-form-bg-image" />
            <div className="welcome-form-bg-overlay"></div>
          </div>
          <div className="welcome-form-content">
            <button className="welcome-form-close" onClick={onClose}>
              ×
            </button>
            <div className="welcome-form-header">
              <h2 className="welcome-form-title">Get Started</h2>
              <p className="welcome-form-subtitle">We'd love to hear from you</p>
            </div>
            <form className="welcome-form" onSubmit={handleSubmit}>
              <div className="welcome-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="welcome-form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="welcome-form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="welcome-form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="welcome-form-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeForm

