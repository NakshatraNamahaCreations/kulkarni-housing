import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Projects from './pages/Projects'
import WelcomeForm from './components/WelcomeForm'
import ScrollToTop from './components/ScrollToTop'
import HeaderTop from './components/HeaderTop'
import HeaderMain from './components/HeaderMain'
import './App.css'

function App() {
  const [showWelcomeForm, setShowWelcomeForm] = useState(false)
  useEffect(() => {
    // Show form when website loads
    setShowWelcomeForm(true)
  }, [])
  // 🔥 GLOBAL scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        document.body.classList.add('header-stuck')
      } else {
        document.body.classList.remove('header-stuck')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Router>

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>

      <WelcomeForm
        isOpen={showWelcomeForm}
        onClose={() => setShowWelcomeForm(false)}
      />
    </div>
  )
}

export default App
